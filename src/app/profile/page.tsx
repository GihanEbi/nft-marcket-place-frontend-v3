"use client";

import { useEffect, useState } from "react";
import { createPublicClient, http, formatEther, parseEther } from "viem";
import { sepolia } from "viem/chains";
import { useAccount, useWriteContract } from "wagmi";
import axios from "axios";
import ArtNFTABI from "@/abi/ArtNFT.json";
import MarketplaceABI from "@/abi/Marketplace.json";

import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";
import ProfileNftCard from "@/components/ProfileNftCard/ProfileNftCard";
import { Loader } from "@/components/Loader/Loader";

// --- CONFIGURATION ---
const nftAddress = process.env.NEXT_PUBLIC_NFT_ADDRESS as `0x${string}`;
const marketplaceAddress = process.env
  .NEXT_PUBLIC_MARKETPLACE_ADDRESS as `0x${string}`;
const alchemyRpcUrl = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL;

const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(alchemyRpcUrl),
});

// --- TYPE DEFINITIONS ---
interface UserAsset {
  tokenId: bigint;
  name: string;
  description: string;
  image: string;
  status: "owned" | "listed";
  price?: bigint;
}

// MOCK DATA
const listedNfts = [
  {
    title: "Abstract Art #1",
    price: "0.5",
    imageUrl: "https://i.imgur.com/ch14p0G.png",
  },
  {
    title: "Abstract Art #2",
    price: "0.7",
    imageUrl: "https://i.imgur.com/sS2akG7.png",
  },
  {
    title: "Abstract Art #3",
    price: "0.6",
    imageUrl: "https://i.imgur.com/GksJXEw.png",
  },
  {
    title: "Abstract Art #4",
    price: "0.8",
    imageUrl: "https://i.imgur.com/y80ZCv3.png",
  },
];

const myNfts = [
  { title: "Abstract Art #7", imageUrl: "https://i.imgur.com/N5G8E6h.png" },
  { title: "Abstract Art #8", imageUrl: "https://i.imgur.com/yOFAtp7.png" },
  { title: "Abstract Art #9", imageUrl: "https://i.imgur.com/5lJpD6f.png" },
  { title: "Abstract Art #10", imageUrl: "https://i.imgur.com/PqR1t4S.png" },
];

export default function ProfilePage() {
  const { address: userAddress, isConnected } = useAccount();
  const [userAssets, setUserAssets] = useState<UserAsset[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // A key to force re-renders after an action
  const [nonce, setNonce] = useState(0);

  useEffect(() => {
    const fetchUserAssets = async () => {
      if (!isConnected || !userAddress) {
        setUserAssets([]);
        setIsLoading(false);
        return;
      }
      setIsLoading(true);

      try {
        // Fetch both listed and owned items in parallel
        const [listedItems, ownedItems] = await Promise.all([
          fetchListedItems(userAddress),
          fetchOwnedItems(userAddress),
        ]);

        // Combine and de-duplicate the lists
        const combined = new Map<bigint, UserAsset>();
        listedItems.forEach((item) => combined.set(item.tokenId, item));
        ownedItems.forEach((item) => {
          // Only add if it's not already in the listed map (owned but not listed)
          if (!combined.has(item.tokenId)) {
            combined.set(item.tokenId, item);
          }
        });

        setUserAssets(Array.from(combined.values()));
      } catch (error) {
        console.error("Failed to fetch user's assets:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserAssets();
  }, [isConnected, userAddress, nonce]); // Refetch when nonce changes

  const refetch = () => setNonce((prev) => prev + 1);

  if (!isConnected) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#11101E] to-[#19182A] text-gray-200">
        <p className="text-center text-xl text-gray-400">
          Please connect your wallet to see your assets.
        </p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#11101E] to-[#19182A] text-gray-200">
        <div className="dark:bg-gray-dark/50 fixed inset-0 z-50 flex items-center justify-center bg-white/50">
          <Loader />
        </div>
      </div>
    );
  }
  if (userAssets.length === 0) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#11101E] to-[#19182A] text-gray-200">
        <p className="text-center text-xl text-gray-400">
          You have no NFTs in your collection yet.
        </p>
      </div>
    );
  }
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#11101E] to-[#19182A] text-gray-200">
      {/* <ProfileHeader /> */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
        <ProfileInfo />

        {/* My Listed NFTs Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">My Listed NFTs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {userAssets.map((asset) => (
              <ProfileNftCard
                key={asset.tokenId.toString()}
                asset={asset}
                onActionSuccess={refetch}
              />
            ))}
          </div>
        </div>

        {/* My NFTs Section */}
        {/* <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">My NFTs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {myNfts.map((nft) => (
              <ProfileNftCard
                key={nft.title}
                title={nft.title}
                imageUrl={nft.imageUrl}
                isListed={false}
              />
            ))}
          </div>
        </div> */}
      </main>
    </div>
  );
}

// --- DATA FETCHING HELPERS ---
const fetchMetadata = async (
  tokenId: bigint
): Promise<Omit<UserAsset, "status" | "price">> => {
  const tokenUri = (await publicClient.readContract({
    address: nftAddress,
    abi: ArtNFTABI,
    functionName: "tokenURI",
    args: [tokenId],
  })) as string;
  const metadataUrl = tokenUri.replace(
    "ipfs://",
    "https://gateway.pinata.cloud/ipfs/"
  );
  const metadataResponse = await axios.get(metadataUrl);
  const { name, description, image } = metadataResponse.data;
  const imageUrl = image.replace(
    "ipfs://",
    "https://gateway.pinata.cloud/ipfs/"
  );
  return { tokenId, name, description, image: imageUrl };
};

const fetchListedItems = async (
  userAddress: `0x${string}`
): Promise<UserAsset[]> => {
  const activeListings = (await publicClient.readContract({
    address: marketplaceAddress,
    abi: MarketplaceABI,
    functionName: "getActiveListings",
  })) as { tokenId: bigint; seller: string; price: bigint }[];

  const userListedItems = activeListings.filter(
    (item) => item.seller.toLowerCase() === userAddress.toLowerCase()
  );

  return Promise.all(
    userListedItems.map(async (item) => {
      const metadata = await fetchMetadata(item.tokenId);
      return { ...metadata, status: "listed", price: item.price };
    })
  );
};

const fetchOwnedItems = async (
  userAddress: `0x${string}`
): Promise<UserAsset[]> => {
  const balance = (await publicClient.readContract({
    address: nftAddress,
    abi: ArtNFTABI,
    functionName: "balanceOf",
    args: [userAddress],
  })) as bigint;

  const ownedItems: UserAsset[] = [];
  for (let i = 0; i < balance; i++) {
    const tokenId = (await publicClient.readContract({
      address: nftAddress,
      abi: ArtNFTABI,
      functionName: "tokenOfOwnerByIndex",
      args: [userAddress, BigInt(i)],
    })) as bigint;
    const metadata = await fetchMetadata(tokenId);
    ownedItems.push({ ...metadata, status: "owned" });
  }
  return ownedItems;
};

// --- ACTION CARD COMPONENT ---
function AssetCard({
  asset,
  onActionSuccess,
}: {
  asset: UserAsset;
  onActionSuccess: () => void;
}) {
  const { writeContract: approve, isPending: isApproving } = useWriteContract();
  const { writeContract: list, isPending: isListing } = useWriteContract();
  const { writeContract: cancel, isPending: isCanceling } = useWriteContract();

  const handleList = async () => {
    const priceStr = window.prompt("Enter the price in ETH for your NFT:");
    if (!priceStr || isNaN(parseFloat(priceStr))) {
      alert("Invalid price.");
      return;
    }
    const price = parseEther(priceStr);

    // 1. Approve
    approve(
      {
        address: nftAddress,
        abi: ArtNFTABI,
        functionName: "approve",
        args: [marketplaceAddress, asset.tokenId],
      },
      {
        onSuccess: () => {
          // 2. List after approval is successful
          list(
            {
              address: marketplaceAddress,
              abi: MarketplaceABI,
              functionName: "listNft",
              args: [asset.tokenId, price],
            },
            {
              onSuccess: () => setTimeout(onActionSuccess, 2000),
            }
          );
        },
      }
    );
  };

  const handleCancel = () => {
    cancel(
      {
        address: marketplaceAddress,
        abi: MarketplaceABI,
        functionName: "cancelListing",
        args: [asset.tokenId],
      },
      {
        onSuccess: () => setTimeout(onActionSuccess, 2000),
      }
    );
  };

  const isPending = isApproving || isListing || isCanceling;

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white flex flex-col justify-between">
      <div>
        <img
          src={asset.image}
          alt={asset.name}
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold">{asset.name}</h3>
          {asset.status === "listed" && asset.price && (
            <p className="text-lg font-semibold text-green-400 mt-2">
              Listed for {formatEther(asset.price)} ETH
            </p>
          )}
        </div>
      </div>
      <div className="p-4 bg-gray-700">
        {asset.status === "owned" && (
          <button
            onClick={handleList}
            disabled={isPending}
            className="w-full py-2 bg-green-600 rounded hover:bg-green-700 disabled:bg-gray-500"
          >
            {isApproving
              ? "Approving..."
              : isListing
              ? "Listing..."
              : "List for Sale"}
          </button>
        )}
        {asset.status === "listed" && (
          <button
            onClick={handleCancel}
            disabled={isPending}
            className="w-full py-2 bg-red-600 rounded hover:bg-red-700 disabled:bg-gray-500"
          >
            {isCanceling ? "Canceling..." : "Cancel Listing"}
          </button>
        )}
      </div>
    </div>
  );
}

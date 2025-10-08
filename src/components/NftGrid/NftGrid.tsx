// src/components/MarketplaceGrid.tsx
"use client";
import { useEffect, useState } from "react";
import { createPublicClient, http, parseAbiItem } from "viem";
import { sepolia } from "viem/chains";
import axios from "axios";
import MarketplaceABI from "@/abi/Marketplace.json";
import ArtNFTABI from "@/abi/ArtNFT.json";
import NftCard, { NftData } from "../NftCard/NftCard";

const marketplaceAddress = process.env
  .NEXT_PUBLIC_MARKETPLACE_ADDRESS as `0x${string}`;
const nftAddress = process.env.NEXT_PUBLIC_NFT_ADDRESS as `0x${string}`;
const alchemyRpcUrl = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL;

// Create a public client to read from the blockchain
const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(alchemyRpcUrl),
});

const NftGrid = () => {
  const [nfts, setNfts] = useState<NftData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMarketplaceItems = async () => {
    setIsLoading(true);
    try {
      // 1. Call our new getActiveListings function
      const activeListings = (await publicClient.readContract({
        address: marketplaceAddress,
        abi: MarketplaceABI,
        functionName: "getActiveListings",
      })) as {
        tokenId: bigint;
        seller: string;
        price: bigint;
        active: boolean;
      }[]; // Cast the type

      if (!activeListings || activeListings.length === 0) {
        setNfts([]);
        setIsLoading(false);
        return;
      }

      // 2. Fetch metadata for all active listings
      const nftsData = await Promise.all(
        activeListings.map(async (item) => {
          const tokenUri = (await publicClient.readContract({
            address: nftAddress,
            abi: ArtNFTABI,
            functionName: "tokenURI",
            args: [item.tokenId],
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

          return {
            tokenId: item.tokenId,
            seller: item.seller,
            price: item.price,
            name,
            description,
            image: imageUrl,
          };
        })
      );

      setNfts(nftsData.filter((nft) => nft !== null) as NftData[]);
    } catch (error) {
      console.error("Failed to fetch marketplace items:", error);
      setNfts([]); // Clear NFTs on error
    } finally {
      setIsLoading(false);
    }
  };

  // ... rest of the component remains the same

  useEffect(() => {
    fetchMarketplaceItems();
  }, []);

  if (isLoading) {
    return <p>Loading marketplace items...</p>;
  }

  if (nfts.length === 0) {
    return <p>No items currently listed on the marketplace.</p>;
  }
  return (
    <>
      {/* Filters and Search Bar */}
      <div className="mb-6 space-y-4">
        <div className="relative lg:hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            className="block w-full rounded-lg border-0 bg-[#6A0DAD]/10 py-2.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-transparent placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#6A0DAD] dark:bg-[rgba(26,22,37,0.5)] dark:text-white dark:placeholder:text-gray-400 sm:text-sm sm:leading-6" // Replaced
            placeholder="Search items, collections, and creators"
            type="text"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#6A0DAD] to-[#8A2BE2] px-3 py-1.5 text-sm font-medium text-white transition-all hover:shadow-md hover:shadow-[#6A0DAD]/40">
            {" "}
            {/* Replaced */}
            All
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
          <button className="flex items-center gap-1.5 rounded-lg bg-[rgba(26,22,37,0.5)] px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-[#6A0DAD]/20 dark:hover:bg-[#6A0DAD]/30">
            Art
          </button>{" "}
          {/* Replaced */}
          <button className="flex items-center gap-1.5 rounded-lg bg-[rgba(26,22,37,0.5)] px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-[#6A0DAD]/20 dark:hover:bg-[#6A0DAD]/30">
            Photography
          </button>{" "}
          {/* Replaced */}
          <button className="flex items-center gap-1.5 rounded-lg bg-[rgba(26,22,37,0.5)] px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-[#6A0DAD]/20 dark:hover:bg-[#6A0DAD]/30">
            Music
          </button>{" "}
          {/* Replaced */}
          <div className="ml-auto flex items-center gap-2">
            <button className="rounded-lg bg-gradient-to-r from-[#6A0DAD]/70 to-[#8A2BE2]/70 px-3 py-1.5 text-sm font-medium text-white transition-all hover:shadow-md hover:shadow-[#6A0DAD]/40">
              Price: Low to High
            </button>{" "}
            {/* Replaced */}
            <button className="rounded-lg bg-[rgba(26,22,37,0.5)] px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-[#6A0DAD]/20 dark:hover:bg-[#6A0DAD]/30">
              Recently Listed
            </button>{" "}
            {/* Replaced */}
          </div>
        </div>
      </div>
      {/* NFT Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {nfts.map((nft) => (
          <NftCard
            key={nft.tokenId.toString()}
            nft={nft}
            onBought={fetchMarketplaceItems}
          />
        ))}
      </div>
    </>
  );
};

export default NftGrid;

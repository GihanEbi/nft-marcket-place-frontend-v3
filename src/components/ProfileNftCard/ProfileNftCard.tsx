"use client";

import Image from "next/image";

import { createPublicClient, http, formatEther, parseEther } from "viem";
import { sepolia } from "viem/chains";
import { useWriteContract } from "wagmi";
import ArtNFTABI from "@/abi/ArtNFT.json";
import MarketplaceABI from "@/abi/Marketplace.json";

// --- CONFIGURATION ---
const nftAddress = process.env.NEXT_PUBLIC_NFT_ADDRESS as `0x${string}`;
const marketplaceAddress = process.env
  .NEXT_PUBLIC_MARKETPLACE_ADDRESS as `0x${string}`;
const alchemyRpcUrl = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL;

// --- TYPE DEFINITIONS ---
interface UserAsset {
  tokenId: bigint;
  name: string;
  description: string;
  image: string;
  status: "owned" | "listed";
  price?: bigint;
}

const ProfileNftCard = ({
  asset,
  onActionSuccess,
}: {
  asset: UserAsset;
  onActionSuccess: () => void;
}) => {
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
    <div className="bg-[#1C1A2E] rounded-2xl p-4 flex flex-col gap-4">
      <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden">
        <Image
          src={asset.image}
          alt={asset.name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="font-bold text-white">{asset.name}</h3>
        {asset.status === "listed" && asset.price && (
          <p className="text-sm text-gray-400 mt-1">
            Listed for {formatEther(asset.price)} ETH
          </p>
        )}
      </div>

      {asset.status === "owned" && (
        <button
          onClick={handleList}
          disabled={isPending}
          className="w-full text-center rounded-lg h-11 px-4 bg-[#4A44F2] text-white font-bold hover:bg-[#3933d3] transition-colors"
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
          className="w-full text-center rounded-lg h-11 px-4 bg-[#2A2842] text-white font-bold hover:bg-[#3a375e] transition-colors"
        >
          {isCanceling ? "Canceling..." : "Cancel Listing"}
        </button>
      )}
    </div>
  );
};

export default ProfileNftCard;

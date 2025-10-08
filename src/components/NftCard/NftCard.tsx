"use client";
import { formatEther } from "viem";
import { useWriteContract, useAccount } from "wagmi";
import MarketplaceABI from "@/abi/Marketplace.json";

import Image from "next/image";
import Link from "next/link";

export interface NftData {
  tokenId: bigint;
  seller: string;
  price: bigint;
  name: string;
  description: string;
  image: string;
}

interface NFTCardProps {
  nft: NftData;
  onBought: () => void; // A function to refetch data after a purchase
}

const marketplaceAddress = process.env
  .NEXT_PUBLIC_MARKETPLACE_ADDRESS as `0x${string}`;

const NftCard = ({ nft, onBought }: NFTCardProps) => {
  const { address: userAddress } = useAccount();
  const { writeContract, isPending, error, data: hash } = useWriteContract();

  const handleBuy = () => {
    // Prevent users from buying their own NFT
    if (userAddress?.toLowerCase() === nft.seller.toLowerCase()) {
      alert("You cannot buy your own NFT!");
      return;
    }

    writeContract(
      {
        address: marketplaceAddress,
        abi: MarketplaceABI,
        functionName: "buyNft",
        args: [nft.tokenId],
        value: nft.price, // This is the crucial part for sending ETH
      },
      {
        onSuccess: () => {
          // Wait a moment for blockchain to update then refetch
          setTimeout(onBought, 2000);
        },
      }
    );
  };
  // We'll create a simple slug from the title for the URL
  const slug = nft.name.toLowerCase().replace(/\s+/g, "-");
  return (
    <Link href={`/nft/${slug}`}>
      {" "}
      {/* Wrap the card with a Link */}
      {/* // 1. We add a unique class 'card-container' to act as our 'group' for
      hover effects. */}
      <div className="card-container relative overflow-hidden rounded-xl bg-transparent transition-all duration-300">
        {/* This is the Styled-JSX block. All CSS inside here only applies to this component. */}
        <style jsx>{`
          .gradient-border {
            position: relative;
            background: rgba(26, 22, 37, 0.7); /* card-dark color */
            border-radius: 0.75rem;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }

          /* The ::before pseudo-element creates the gradient border */
          .gradient-border::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            margin: -1px;
            border-radius: inherit;
            /* We hardcode the gradient colors here */
            background: linear-gradient(to right, #6a0dad, #8a2be2);
            opacity: 0;
            transition: opacity 300ms ease-in-out;
          }

          /* When we hover over 'card-container', the border appears */
          .card-container:hover .gradient-border::before {
            opacity: 1;
          }

          /* When we hover over 'card-container', the image scales up */
          .card-container:hover :global(img) {
            transform: scale(1.05);
          }
        `}</style>

        {/* 2. We add our unique 'gradient-border' class here. */}
        <div className="gradient-border">
          <div className="overflow-hidden rounded-t-xl">
            <Image
              alt={nft.name}
              className="aspect-square w-full object-cover transition-transform duration-300"
              src={nft.image}
              width={300}
              height={300}
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-white">{nft.name}</h3>
            <p className="text-sm text-gray-400">{nft.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span
                // 3. We MUST replace the custom color names with Tailwind's "arbitrary values".
                // This is how you use a specific hex code directly in a class name.
                className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6A0DAD] to-[#8A2BE2]"
              >
                {formatEther(nft.price)} ETH
              </span>
              <button
                onClick={handleBuy}
                disabled={
                  isPending ||
                  userAddress?.toLowerCase() === nft.seller.toLowerCase()
                }
                className="rounded-full bg-[#6A0DAD]/20 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#6A0DAD]"
              >
                {isPending ? "Confirming..." : "Buy"}
              </button>
            </div>
            {error && (
              <p className="text-red-500 text-xs mt-2">
                Error: {error.message}
              </p>
            )}
            {hash && (
              <p className="text-green-500 text-xs mt-2">
                Success! Tx pending...
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NftCard;

import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative mb-16 py-16 sm:py-24 text-center">
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
        <Image
          alt="Featured NFT"
          className="w-full h-full object-cover blur-md scale-110 brightness-50"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3inaRrajF_domCf_x3vtoKphH_KxsZcR4IMBmZCIQoDcLQNofAjPjf5n7WvS8XsU_xlTXidtYaT5yglHC4YNa8s8xSl7AhuBIC4pxcVqogUK7LYHPODAxcJ8Os0JeSOhq7boBwOK23MT5T7yTV36mUtnlantUM9MABCrHhZ2I-crsfBjkbYaHO73vxLBjFASSMd83FTA8FgiZOedrnG0vWLzSBp8EcwsgF0N109EqMvirDvpvaCyFCa3kp-eLNNWYCDSKLnvUpX0g"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B14] to-transparent"></div>
      </div>
      <h2 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
        Discover, Collect, and Sell Extraordinary NFTs
      </h2>
      <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
        ArtVerse is the leading digital marketplace for crypto collectibles and
        non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital
        items.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          className="rounded-lg bg-gradient-to-r from-[#6A0DAD] to-[#8A2BE2] px-6 py-3 text-base font-bold text-white transition-all hover:shadow-lg hover:shadow-[#6A0DAD]/50" // Replaced from-primary, to-primary-focus, hover:shadow-primary/50
          href="#"
        >
          Explore Now
        </Link>
        <Link
          className="rounded-lg bg-white/10 px-6 py-3 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
          href="/create"
        >
          Create
        </Link>
      </div>
    </div>
  );
};

export default Hero;

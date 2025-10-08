"use client";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  const shortenAddress = (address: string) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(address.length - 4)}`;
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-gray-200/5 bg-background-light/80 px-4 py-3 backdrop-blur-sm dark:border-gray-800/5 dark:bg-[#0D0B14]/80">
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-900 dark:text-white"
        >
          <svg
            className="h-6 w-6 text-[#6A0DAD]" // Replaced text-primary
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M12 0L24 12L12 24L0 12L12 0ZM10.5 17.8787V6.12132L4.62132 12L10.5 17.8787Z"
              fillRule="evenodd"
            ></path>
          </svg>
          <h1 className="text-xl font-bold">ArtVerse</h1>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            className="text-sm font-medium text-gray-600 hover:text-[#6A0DAD] dark:text-gray-300 dark:hover:text-[#6A0DAD]" // Replaced hover:text-primary
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium text-gray-600 hover:text-[#6A0DAD] dark:text-gray-300 dark:hover:text-[#6A0DAD]"
            href="/explore"
          >
            {" "}
            {/* Replaced text-primary */}
            Explore
          </Link>
          <Link
            className="text-sm font-medium text-gray-600 hover:text-[#6A0DAD] dark:text-gray-300 dark:hover:text-[#6A0DAD]" // Replaced hover:text-primary
            href="/create"
          >
            Create
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden lg:flex">
          <div className="relative">
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
              className="block w-full rounded-lg border-0 bg-[#6A0DAD]/10 py-2 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-transparent placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#6A0DAD] dark:bg-[rgba(26,22,37,0.5)] dark:text-white dark:placeholder:text-gray-400 sm:text-sm sm:leading-6" // Replaced bg-primary/10, focus:ring-primary, dark:bg-card-dark
              placeholder="Search"
              type="text"
            />
          </div>
        </div>
        {!isConnected ? (
          <button
            className="cursor-pointer rounded-lg bg-gradient-to-r from-[#6A0DAD] to-[#8A2BE2] px-4 py-2 text-sm font-bold text-white transition-all hover:shadow-lg hover:shadow-[#6A0DAD]/50"
            onClick={() => connect({ connector: injected() })}
          >
            Connect Wallet
          </button>
        ) : (
          // Use a flex container for better alignment
          <div className="flex items-center gap-4">
            <p className="rounded-lg bg-gray-800/50 px-3 py-2 text-sm font-medium text-white">
              {/* Use the helper function here */}
              {shortenAddress(address ?? "")}
            </p>
            <button
              // New gradient color for the "Disconnect" button
              className="cursor-pointer rounded-lg bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] px-4 py-2 text-sm font-bold text-white transition-all hover:shadow-lg hover:shadow-[#FF416C]/50"
              onClick={() => disconnect()}
            >
              Disconnect
            </button>
          </div>
        )}
        <Link href="/profile">
          <Image
            alt="User profile"
            className="h-10 w-10 rounded-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcPdHYkfoBBIbtk6MROhiNz5Aq1-LZ7hmHk95mh0wwPpsKp7scV_zn-JdHopGyOENYdKPCzAp1HrCRD6NGm9nHM_C-dQQ0t5RWG_QIP6K5xeJCuwUJwwrlxNb5r-b4BwFGyLxdbb1YIkQnm9__GeDfePBV3XlC1qPlSOudKnRg6FflQx3FLJRozWTgIB8R8iFkSrwKeibo5sCZo9GwZvyS4R9voHVwzQ3McCCuwpIimr2To5n5RKL9oSmF0RY_uaH0TrrYp_36hGgf"
            width={40}
            height={40}
          />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

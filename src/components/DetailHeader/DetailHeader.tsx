import Link from "next/link";
import Image from "next/image";

const DetailHeader = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-800 px-10 py-4">
      <div className="flex items-center gap-10">
        <Link
          href="/"
          className="flex items-center gap-3 text-gray-900 dark:text-white"
        >
          <svg
            className="h-8 w-8 text-[#3713ec]"
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_6_330)">
              <path
                clipRule="evenodd"
                d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_6_330">
                <rect fill="white" height="48" width="48"></rect>
              </clipPath>
            </defs>
          </svg>
          <h2 className="text-2xl font-bold">ArtVerse</h2>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#3713ec] dark:hover:text-[#3713ec] transition-colors"
            href="#"
          >
            Explore
          </Link>
          <Link
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#3713ec] dark:hover:text-[#3713ec] transition-colors"
            href="#"
          >
            Create
          </Link>
          <Link
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#3713ec] dark:hover:text-[#3713ec] transition-colors"
            href="#"
          >
            My NFTs
          </Link>
        </nav>
      </div>
      <div className="flex flex-1 items-center justify-end gap-4">
        <div className="relative hidden sm:block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 dark:text-gray-400">
            <svg
              fill="currentColor"
              height="20px"
              viewBox="0 0 256 256"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
          </span>
          <input
            className="form-input w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800/50 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder-text-gray-400 focus:outline-0 focus:ring-2 focus:ring-[#3713ec] border-transparent h-10 pl-10 pr-4 text-sm font-normal leading-normal"
            placeholder="Search"
          />
        </div>
        <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 hover:bg-[#3713ec]/10 hover:text-[#3713ec] dark:hover:bg-[#3713ec]/20 dark:hover:text-[#3713ec] transition-colors">
          <svg
            fill="currentColor"
            height="20px"
            viewBox="0 0 256 256"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
          </svg>
        </button>
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAX4cYP9evIH5TvHkhCcJCSOqwtNajPsLU_IGs6qY7DYnvNZPjXX5D97oXQczd90ahlDy9dYn5SPkJSw-q0Uh5IpAKAyKQ1TOxkpGMJE6s0B7rtlvY3obWPRNQextCackTkYP6daDus3wN1ekiTXgLlBvoEnGkxMlTGCrdefFkobI8mOKnAKcNx67y4JZEakssgSfvk0I6tDDaMoTgvFDmSIE92zgJ6MIeGfbRzN4CusFaZqI990UW5G7xndqYaGhMhe_nFIUwQK3a"
          alt="User profile"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </header>
  );
};

export default DetailHeader;

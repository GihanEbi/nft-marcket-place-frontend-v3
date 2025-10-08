import Link from "next/link";
import Image from "next/image";

const ProfileHeader = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-gray-200/10 dark:border-gray-700/50 px-10 py-4">
      <Link
        href="/"
        className="flex items-center gap-4 text-gray-900 dark:text-white"
      >
        <svg
          className="text-[#4A44F2]"
          fill="currentColor"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z" />
        </svg>
        <h2 className="text-xl font-bold">ArtSea</h2>
      </Link>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Link
          className="text-gray-600 dark:text-gray-300 hover:text-white transition-colors"
          href="#"
        >
          Discover
        </Link>
        <Link
          className="text-gray-600 dark:text-gray-300 hover:text-white transition-colors"
          href="#"
        >
          Stats
        </Link>
        <Link
          className="text-gray-600 dark:text-gray-300 hover:text-white transition-colors"
          href="#"
        >
          Resources
        </Link>
        <Link
          className="text-gray-600 dark:text-gray-300 hover:text-white transition-colors"
          href="/create"
        >
          Create
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input
            className="form-input rounded-lg bg-gray-800/50 text-white placeholder-gray-500 focus:outline-0 focus:ring-2 focus:ring-[#4A44F2] border-transparent h-10 pl-10 pr-4 text-sm"
            placeholder="Search"
          />
        </div>
        <button className="text-gray-400 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </button>
        <Image
          src="https://i.imgur.com/midiN2C.png"
          alt="User profile"
          width={40}
          height={40}
          className="rounded-full border-2 border-transparent hover:border-[#4A44F2]"
        />
      </div>
    </header>
  );
};

export default ProfileHeader;

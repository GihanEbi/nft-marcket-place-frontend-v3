import Link from "next/link";
import Image from "next/image";

const CreatePageHeader = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-gray-200/10 dark:border-gray-700/50 px-10 py-4">
      <Link
        href="/"
        className="flex items-center gap-4 text-gray-900 dark:text-white"
      >
        <svg
          className="text-[#3713ec]"
          fill="currentColor"
          height="24"
          viewBox="0 0 48 48"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
            fillRule="evenodd"
          ></path>
        </svg>
        <h2 className="text-xl font-bold">ArtVerse</h2>
      </Link>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Link
          className="text-gray-600 dark:text-gray-300 hover:text-[#3713ec] dark:hover:text-[#3713ec] transition-colors"
          href="#"
        >
          Discover
        </Link>
        <Link
          className="text-gray-600 dark:text-gray-300 hover:text-[#3713ec] dark:hover:text-[#3713ec] transition-colors"
          href="#"
        >
          Stats
        </Link>
        <Link
          className="text-gray-600 dark:text-gray-300 hover:text-[#3713ec] dark:hover:text-[#3713ec] transition-colors"
          href="#"
        >
          Resources
        </Link>
        <Link
          className="text-gray-600 dark:text-gray-300 hover:text-[#3713ec] dark:hover:text-[#3713ec] transition-colors"
          href="/create"
        >
          Create
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center rounded-lg h-10 px-5 bg-[#3713ec] text-white text-sm font-bold tracking-wide hover:bg-[#3713ec]/90 transition-colors">
          Connect Wallet
        </button>
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLKb6ZiuqkvK-H1Juk4rfT1baJFl2ziGT9YilowpZarIWN11S-p9YfxKUQxuzu9AXPU3XCUL3_JPV5J_xvmYDLFhFSx0uR4164Jhoy0KDsN-x_F2aZrjy7mxgnF0alDh6PfcMqiuOZ58Z0jkfxXhBr9dJTaZZFC-N2ThaneBSQQ343P6AcL8wbKqU5iACYw9NjNDdVRV6hwgj0g5B6MCyiFj9AVblUp6jsJWleqWhrZL8kcxOn7Qj7Xwj0BPHYbeEE6CVIMfgtaCyN"
          alt="User profile"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </header>
  );
};

export default CreatePageHeader;

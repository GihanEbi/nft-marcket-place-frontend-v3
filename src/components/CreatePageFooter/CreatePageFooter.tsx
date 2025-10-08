import Link from "next/link";

const CreatePageFooter = () => {
  return (
    <footer className="bg-[#131022]/50 border-t border-gray-700/50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex justify-center space-x-6">
          <Link className="text-gray-400 hover:text-gray-300" href="#">
            Discover
          </Link>
          <Link className="text-gray-400 hover:text-gray-300" href="#">
            Create
          </Link>
          <Link className="text-gray-400 hover:text-gray-300" href="#">
            Search
          </Link>
          <Link className="text-gray-400 hover:text-gray-300" href="#">
            Connect
          </Link>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          {/* Social Icons can be added here */}
        </div>
        <p className="mt-8 text-center text-xs text-gray-400">
          © 2023 ArtVerse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default CreatePageFooter;

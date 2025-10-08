import React from "react";

const MainContent = () => {
  return (
    <div>
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
                clip-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            className="block w-full rounded-lg border-0 bg-primary/10 py-2.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-transparent placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-card-dark dark:text-white dark:placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Search items, collections, and creators"
            type="text"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-primary-focus px-3 py-1.5 text-sm font-medium text-white transition-all hover:shadow-md hover:shadow-primary/40">
            All
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button className="flex items-center gap-1.5 rounded-lg bg-card-dark px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-primary/20 dark:hover:bg-primary/30">
            Art
          </button>
          <button className="flex items-center gap-1.5 rounded-lg bg-card-dark px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-primary/20 dark:hover:bg-primary/30">
            Photography
          </button>
          <button className="flex items-center gap-1.5 rounded-lg bg-card-dark px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-primary/20 dark:hover:bg-primary/30">
            Music
          </button>
          <div className="ml-auto flex items-center gap-2">
            <button className="rounded-lg bg-gradient-to-r from-primary/70 to-primary-focus/70 px-3 py-1.5 text-sm font-medium text-white transition-all hover:shadow-md hover:shadow-primary/40">
              Price: Low to High
            </button>
            <button className="rounded-lg bg-card-dark px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-primary/20 dark:hover:bg-primary/30">
              Recently Listed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

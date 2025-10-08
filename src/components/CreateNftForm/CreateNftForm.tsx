const CreateNftForm = () => {
  return (
    <div className="w-full max-w-lg space-y-6 rounded-xl bg-[#131022]/50 p-8 shadow-2xl">
      <div className="space-y-2">
        <label
          className="block text-sm font-medium text-gray-300"
          htmlFor="file-upload"
        >
          Image, Video, Audio, or 3D Model
        </label>
        <div className="mt-1 flex justify-center rounded-lg border-2 border-dashed border-gray-600 px-6 pt-5 pb-6">
          <div className="space-y-1 text-center">
            <svg
              aria-hidden="true"
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 48 48"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
            <div className="flex text-sm text-gray-400">
              <label
                className="relative cursor-pointer rounded-md font-medium text-[#3713ec] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#3713ec]/50 focus-within:ring-offset-2 hover:text-[#3713ec]/80"
                htmlFor="file-upload"
              >
                <span>Upload a file</span>
                <input
                  className="sr-only"
                  id="file-upload"
                  name="file-upload"
                  type="file"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>
      <div>
        <label
          className="block text-sm font-medium text-gray-300"
          htmlFor="item-name"
        >
          Item Name
        </label>
        <input
          className="mt-1 block w-full rounded-lg border-gray-600 bg-[#131022]/60 shadow-sm focus:border-[#3713ec] focus:ring-[#3713ec] sm:text-sm text-white placeholder-gray-500"
          id="item-name"
          name="item-name"
          placeholder="e.g. 'CryptoPunk #1'"
          type="text"
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium text-gray-300"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          className="mt-1 block w-full rounded-lg border-gray-600 bg-[#131022]/60 shadow-sm focus:border-[#3713ec] focus:ring-[#3713ec] sm:text-sm text-white placeholder-gray-500"
          id="description"
          name="description"
          placeholder="Provide a detailed description of your item."
          rows={3}
        ></textarea>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            className="block text-sm font-medium text-gray-300"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="mt-1 block w-full rounded-lg border-gray-600 bg-[#131022]/60 shadow-sm focus:border-[#3713ec] focus:ring-[#3713ec] sm:text-sm text-white placeholder-gray-500"
            id="price"
            name="price"
            placeholder="Enter price in ETH"
            type="text"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-300"
            htmlFor="royalties"
          >
            Royalties
          </label>
          <input
            className="mt-1 block w-full rounded-lg border-gray-600 bg-[#131022]/60 shadow-sm focus:border-[#3713ec] focus:ring-[#3713ec] sm:text-sm text-white placeholder-gray-500"
            id="royalties"
            name="royalties"
            placeholder="e.g. 10%"
            type="text"
          />
        </div>
      </div>
      <div>
        <label
          className="block text-sm font-medium text-gray-300"
          htmlFor="collection"
        >
          Collection
        </label>
        <select
          className="mt-1 block w-full rounded-lg border-gray-600 bg-[#131022]/60 shadow-sm focus:border-[#3713ec] focus:ring-[#3713ec] sm:text-sm text-white"
          id="collection"
          name="collection"
        >
          <option className="text-gray-400">Select collection</option>
          <option>CryptoPunks</option>
          <option>Bored Ape Yacht Club</option>
          <option>Art Blocks</option>
        </select>
      </div>
      <div className="flex justify-end pt-4">
        <button
          className="w-full flex items-center justify-center rounded-lg h-12 px-6 bg-[#3713ec] text-white text-base font-bold tracking-wide hover:bg-[#3713ec]/90 transition-colors sm:w-auto"
          type="submit"
        >
          Create Item
        </button>
      </div>
    </div>
  );
};

export default CreateNftForm;

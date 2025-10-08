"use client";
import React, { useState } from "react";
import axios from "axios";
import { useWriteContract, useAccount } from "wagmi";
import { parseEther } from "viem";
import MarketplaceABI from "../../abi/Marketplace.json";
import { Loader } from "../Loader/Loader";
import { AlertDialogDemo } from "../AlertDialog/AlertDialog";
import { useRouter } from "next/navigation";

const marketplaceAddress = process.env
  .NEXT_PUBLIC_MARKETPLACE_ADDRESS as `0x${string}`;

// -------------types-----------------
type variant = "default" | "destructive";
type Alert = {
  open: boolean;
  message: string;
  description: string;
  variant: variant;
};

const CreateNftForm = () => {
  // routing
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const { isConnected } = useAccount();
  // --------- state for loading spinner ---------
  const [loading, setLoading] = useState(false);
  // --------- alert for success and error messages ---------
  const [alert, setAlert] = React.useState<Alert>({
    open: false,
    message: "",
    description: "",
    variant: "default",
  });

  const { writeContract, isPending, error, data: hash } = useWriteContract();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (loading) return; // Prevent multiple submissions

    e.preventDefault();
    if (!file || !name || !description || !price) {
      setStatus("Please fill all fields");
      return;
    }
    if (!isConnected) {
      setStatus("Please connect your wallet first.");
      return;
    }
    setStatus("1/3: Uploading to IPFS...");

    try {
      setLoading(true); // Start loading
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", name);
      formData.append("description", description);

      // const res = await axios.post("http://localhost:3001/upload", formData, {

      const res = await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const { metadataUrl } = res.data;
      setStatus(`2/3: Metadata ready. Preparing transaction...`);

      // THIS IS THE CRITICAL PART
      writeContract({
        address: marketplaceAddress,
        abi: MarketplaceABI,
        functionName: "createAndList", // Our new contract function
        args: [
          metadataUrl, // a string for tokenURI
          parseEther(price), // a uint256 for price, correctly formatted
        ],
      });
      setStatus("3/3: Please confirm transaction in your wallet...");
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      setAlert({
        open: true,
        message: "Error",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // reset form after successful transaction
  if (
    hash &&
    !loading &&
    !isPending &&
    !error &&
    status !== "Minted & Listed!"
  ) {
    setStatus("Minted & Listed!");
    setFile(null);
    setName("");
    setDescription("");
    setPrice("");
    setAlert({
      open: true,
      message: "Success",
      description: "NFT created successfully!",
      variant: "default",
    });
    // navigate to profile page
    router.push("/profile");
  }

  const shortenAddress = (address: string) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(address.length - 4)}`;
  };

  return (
    <div>
      {loading && (
        <div className="dark:bg-gray-dark/50 fixed inset-0 z-50 flex items-center justify-center bg-white/50">
          <Loader />
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg space-y-6 rounded-xl bg-[#131022]/50 p-8 shadow-2xl"
      >
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
                    onChange={handleFileChange}
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
            className="p-3 mt-1 block w-full rounded-lg border-gray-600 bg-[#131022]/60 shadow-sm focus:border-[#3713ec] focus:ring-[#3713ec] sm:text-sm text-white placeholder-gray-500"
            id="item-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            className="p-3 mt-1 block w-full rounded-lg border-gray-600 bg-[#131022]/60 shadow-sm focus:border-[#3713ec] focus:ring-[#3713ec] sm:text-sm text-white placeholder-gray-500"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Provide a detailed description of your item."
            rows={3}
          ></textarea>
        </div>
        <div className="">
          <div>
            <label
              className="block text-sm font-medium text-gray-300"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="p-3 mt-1 block w-full rounded-lg border-gray-600 bg-[#131022]/60 shadow-sm focus:border-[#3713ec] focus:ring-[#3713ec] sm:text-sm text-white placeholder-gray-500"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price in ETH"
              type="text"
            />
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button
            className="cursor-pointer w-full flex items-center justify-center rounded-lg h-12 px-6 bg-[#3713ec] text-white text-base font-bold tracking-wide hover:bg-[#3713ec]/90 transition-colors sm:w-auto"
            type="submit"
            disabled={isPending || !isConnected}
          >
            {isPending ? "Confirming..." : "Mint & List"}
          </button>
        </div>
        {status && <p className="text-sm mt-2">{status}</p>}
        {error && (
          <p className="text-sm mt-2 text-red-500">
            Transaction Error: {error.message}
          </p>
        )}
        {hash && (
          <p className="text-sm mt-2 text-green-500">
            Success! TxHash: {shortenAddress(hash)}
          </p>
        )}
      </form>
      <AlertDialogDemo
        isOpen={alert.open}
        title={alert.message}
        description={alert.description}
        variant={alert.variant}
        handleCancel={() => {
          setAlert({ ...alert, open: false });
        }}
      />
    </div>
  );
};

export default CreateNftForm;

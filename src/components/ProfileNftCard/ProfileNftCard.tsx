import Image from "next/image";

interface ProfileNftCardProps {
  title: string;
  price?: string; // Optional price
  imageUrl: string;
  isListed: boolean;
}

const ProfileNftCard = ({
  title,
  price,
  imageUrl,
  isListed,
}: ProfileNftCardProps) => {
  return (
    <div className="bg-[#1C1A2E] rounded-2xl p-4 flex flex-col gap-4">
      <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div>
        <h3 className="font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-400 mt-1">
          {isListed ? `${price} ETH` : "Not listed"}
        </p>
      </div>
      {isListed ? (
        <button className="w-full text-center rounded-lg h-11 px-4 bg-[#2A2842] text-white font-bold hover:bg-[#3a375e] transition-colors">
          Cancel Listing
        </button>
      ) : (
        <button className="w-full text-center rounded-lg h-11 px-4 bg-[#4A44F2] text-white font-bold hover:bg-[#3933d3] transition-colors">
          List for Sale
        </button>
      )}
    </div>
  );
};

export default ProfileNftCard;

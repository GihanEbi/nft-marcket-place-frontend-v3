import Image from "next/image";

interface RelatedNftCardProps {
  name: string;
  creator: string;
  imageUrl: string;
}

const RelatedNftCard = ({ name, creator, imageUrl }: RelatedNftCardProps) => {
  return (
    <div className="group flex flex-col gap-4 rounded-lg overflow-hidden">
      <div className="relative w-full aspect-square rounded-lg overflow-hidden">
        <Image src={imageUrl} alt={name} fill className="object-cover" />
      </div>
      <div>
        <p className="text-base font-medium text-gray-900 dark:text-white group-hover:text-[#3713ec] dark:group-hover:text-[#3713ec] transition-colors">
          {name}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">By {creator}</p>
      </div>
    </div>
  );
};

export default RelatedNftCard;

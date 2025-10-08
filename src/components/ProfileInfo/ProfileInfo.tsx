import Image from "next/image";

const StatBox = ({ value, label }: { value: number; label: string }) => (
  <div className="bg-[#1C1A2E] rounded-xl p-6 text-center">
    <p className="text-3xl font-bold text-white">{value}</p>
    <p className="text-sm text-gray-400 mt-1">{label}</p>
  </div>
);

const ProfileInfo = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        src="https://i.imgur.com/midiN2C.png"
        alt="Sophia Carter"
        width={128}
        height={128}
        className="rounded-full border-4 border-[#1C1A2E] -mt-24"
      />
      <h1 className="text-4xl font-bold text-white mt-6">Sophia Carter</h1>
      <p className="text-gray-400 mt-2">@sophia.carter</p>
      <p className="text-sm text-gray-500 mt-1">Joined 2021</p>
      <div className="mt-8 grid grid-cols-3 gap-4 w-full max-w-2xl">
        <StatBox value={12} label="Created" />
        <StatBox value={24} label="Collected" />
        <StatBox value={36} label="Sold" />
      </div>
    </div>
  );
};

export default ProfileInfo;

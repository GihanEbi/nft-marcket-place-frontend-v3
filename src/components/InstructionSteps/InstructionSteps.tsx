const InstructionStep = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#3713ec]/20 text-[#3713ec] font-bold">
        {number}
      </div>
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const InstructionSteps = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-4xl font-bold tracking-tighter text-gray-900 dark:text-white sm:text-5xl">
        Create New NFT
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Follow the steps to mint and list your unique digital creation on the
        blockchain.
      </p>
      <div className="mt-12 space-y-4">
        <div className="relative">
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
            <InstructionStep
              number="1"
              title="Upload Your File"
              description="Choose the image, video, audio, or 3D model for your NFT."
            />
          </div>
          <div className="absolute left-5 top-full h-8 w-px bg-gray-700/50"></div>
        </div>
        <div className="relative">
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
            <InstructionStep
              number="2"
              title="Add Details"
              description="Set the name, description, price, and other properties."
            />
          </div>
          <div className="absolute left-5 top-full h-8 w-px bg-gray-700/50"></div>
        </div>
        <div className="relative">
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
            <InstructionStep
              number="3"
              title="Mint & List"
              description="Confirm the transaction to create your NFT and list it for sale."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionSteps;

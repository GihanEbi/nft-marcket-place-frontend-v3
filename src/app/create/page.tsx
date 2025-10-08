import InstructionSteps from "@/components/InstructionSteps/InstructionSteps";
import CreateNftForm from "@/components/CreateNftForm/CreateNftForm";

export default function CreateNftPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-gradient-to-br from-[#131022] to-[#0c0a18] text-gray-800 dark:text-gray-200">
      {/* <CreatePageHeader /> */}
      <main className="flex flex-1 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          <InstructionSteps />
          <CreateNftForm />
        </div>
      </main>
      {/* <CreatePageFooter /> */}
    </div>
  );
}

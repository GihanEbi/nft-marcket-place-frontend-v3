import Hero from '@/components/Hero/Hero';
import NftGrid from '@/components/NftGrid/NftGrid';

export default function Home() {
  return (
    <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Hero />
        <NftGrid />
      </div>
    </main>
  );
}
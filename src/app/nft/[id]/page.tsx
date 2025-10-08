import Image from "next/image";
import Link from "next/link";
import DetailHeader from "@/components/DetailHeader/DetailHeader";
import BidHistory from "@/components/BidHistory/BidHistory";
import RelatedNftCard from "@/components/RelatedNftCard/RelatedNftCard";
import DetailFooter from "@/components/DetailFooter/DetailFooter";

// MOCK DATA - Replace this with a real API call later
const nftData = {
  name: "Neon Dreams",
  description:
    "A vibrant abstract piece capturing the essence of city lights at night.",
  imageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAhKoG_0c31Ed8GCicnCzdk3nCt1EcJPTKA_yEoqn2F8iTSp9Al-Klqx5TGO4mmHLZccU04VYQMEcVB32ocIFI0WTnL2xifU3M8VBuPZloiCqQdDTLIc5YrovAkj4LTQzHIu537PhPEE5Mqw_eWCyWG-T9wtVnml_QXPJDWQnLpznwwKAsbn1bCTDX4AbENydXdhnUiczzn_QaAAIumfCDhSJlNaGi7PV-BA-Q9GUU21MeTJ37eQ3FJ8eqIGaKVsBaMjE8Bj_gLNvt9",
  creator: "Sophia Carter",
  currentPrice: "0.5 ETH",
  highestBid: "0.4 ETH",
  endsIn: "2d 12h",
};

const bidHistoryData = [
  { user: "Liam Harper", bid: "0.4 ETH", time: "2h ago" },
  { user: "Olivia Bennett", bid: "0.3 ETH", time: "4h ago" },
  { user: "Ethan Walker", bid: "0.2 ETH", time: "6h ago" },
];

const relatedNftsData = [
  {
    name: "Geometric Harmony",
    creator: "Ava Thompson",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqsd8T-PHut9ClALV-RXysq2ae3-1LWrsxYuE4CRPEfF_3gP2chRuBnyXcOiVDsVm2O7wOiC7TXVEmOnj_KW8dIUExdXVur2kM_74T1yicvd8sPAnyo9h8KgLn2J_oYiDD-vk_IZ86rFyAGqQqGuLAALrtvh0DIrpI4-ieFerGBwRIIPUDdTquXc8QWcdIpRuY8xgYkm00IY0MWEFPrV0DLTR4Z5WymzbLo0pqw8LVYv2JiFMOXgVDu4_ABz3y755LxWThdkDcbHsA",
  },
  {
    name: "Cyberpunk Cityscape",
    creator: "Noah Evans",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDB1XGYC8jCltqeqOV5m7Y5EREOX5F86rdLReu1r4WICrGcCB4naJy-Jo1Uiklkr93jhbKhjrY7l8Skg3O1nJOnSYWhhEs1VIzgRmTxMwdvxvbmQs6PSXdC7rFuP0CxKWbbM_AKgmhcLVgPHGAGb3-kPJUJJM7oIoDFf1QLLK9WhJg9WpCuUd1Gq6ja_3cyqnft9ncN9ahXJfTp-lSsDc1q3v1gsZeyvLlGiflA08E6waMpfjnvR-LxsPTnks2FjgYhzh-SLpEJYsrI",
  },
  {
    name: "Surreal Dreamscape",
    creator: "Chloe Foster",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2cDw1p0aJWyGWxQcwMKvd6z2kHfxhxU7Ze1X2aGemdyakVwr1azCmMTNPJPFerLjPUBTyv_7L23RJ-N68ywSKEjWxKlF4GR1gntGtYDOBmAzLzDLbRsoUXlrlmJ8XbA9kk4UV9hyKfYJYIcChAHATufR0CV6fTwD9_hqihVC4AZIfeylhGw1JhWLWGK-2xethbGqRgRfmVn7I5BekGTYLvJl_bEgynXfJjLi4dOAcMlDJC0cfVHCGCIqa5V3bASp-Rk_zMZJo2eS6",
  },
  {
    name: "Cosmic Fusion",
    creator: "Leo Rivera",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhKoG_0c31Ed8GCicnCzdk3nCt1EcJPTKA_yEoqn2F8iTSp9Al-Klqx5TGO4mmHLZccU04VYQMEcVB32ocIFI0WTnL2xifU3M8VBuPZloiCqQdDTLIc5YrovAkj4LTQzHIu537PhPEE5Mqw_eWCyWG-T9wtVnml_QXPJDWQnLpznwwKAsbn1bCTDX4AbENydXdhnUiczzn_QaAAIumfCDhSJlNaGi7PV-BA-Q9GUU21MeTJ37eQ3FJ8eqIGaKVsBaMjE8Bj_gLNvt9",
  },
];

export default function NftDetailPage({ params }: { params: { id: string } }) {
  // You can use params.id to fetch specific NFT data in the future
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f6f6f8] dark:bg-[#131022] font-display text-gray-800 dark:text-gray-200">
      {/* <DetailHeader /> */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 xl:px-20 py-12">
        <div className="mx-auto max-w-screen-xl">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <nav aria-label="Breadcrumb" className="flex">
              <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li className="inline-flex items-center">
                  <Link
                    className="inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#3713ec] dark:hover:text-[#3713ec]"
                    href="/"
                  >
                    {" "}
                    Explore{" "}
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400 dark:text-gray-500">
                      /
                    </span>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      Abstract Art
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: NFT Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="aspect-square w-full overflow-hidden rounded-xl border-4 border-[#3713ec] shadow-2xl shadow-[#3713ec]/20">
                  <Image
                    src={nftData.imageUrl}
                    alt={nftData.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Details & Bids */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                {nftData.name}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {nftData.description}
              </p>

              {/* Details Box */}
              <div className="bg-white/5 dark:bg-black/10 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Details
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-800">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Creator
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {nftData.creator}
                    </p>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-800">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Current Price
                    </p>
                    <p className="text-lg font-bold text-[#3713ec]">
                      {nftData.currentPrice}
                    </p>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-800">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Highest Bid
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {nftData.highestBid}
                    </p>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Ends In
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {nftData.endsIn}
                    </p>
                  </div>
                </div>
              </div>

              <BidHistory bids={bidHistoryData} />

              {/* Action Buttons */}
              <div className="mt-auto pt-6 flex gap-4">
                <button className="w-full flex items-center justify-center rounded-xl h-14 px-6 bg-[#3713ec] text-white text-lg font-bold tracking-wide hover:bg-[#3713ec]/90 focus:outline-none focus:ring-4 focus:ring-[#3713ec]/50 transition-all shadow-lg shadow-[#3713ec]/30">
                  {" "}
                  Buy Now{" "}
                </button>
                <button className="w-full flex items-center justify-center rounded-xl h-14 px-6 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-lg font-bold tracking-wide hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300/50 dark:focus:ring-gray-600/50 transition-all">
                  {" "}
                  Place Bid{" "}
                </button>
              </div>
            </div>
          </div>

          {/* Related NFTs Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Related NFTs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedNftsData.map((nft) => (
                <RelatedNftCard
                  key={nft.name}
                  name={nft.name}
                  creator={nft.creator}
                  imageUrl={nft.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <DetailFooter />
    </div>
  );
}

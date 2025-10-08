import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";
import ProfileNftCard from "@/components/ProfileNftCard/ProfileNftCard";

// MOCK DATA
const listedNfts = [
  { title: "Abstract Art #1", price: "0.5", imageUrl: "https://i.imgur.com/ch14p0G.png" },
  { title: "Abstract Art #2", price: "0.7", imageUrl: "https://i.imgur.com/sS2akG7.png" },
  { title: "Abstract Art #3", price: "0.6", imageUrl: "https://i.imgur.com/GksJXEw.png" },
  { title: "Abstract Art #4", price: "0.8", imageUrl: "https://i.imgur.com/y80ZCv3.png" },
];

const myNfts = [
  { title: "Abstract Art #7", imageUrl: "https://i.imgur.com/N5G8E6h.png" },
  { title: "Abstract Art #8", imageUrl: "https://i.imgur.com/yOFAtp7.png" },
  { title: "Abstract Art #9", imageUrl: "https://i.imgur.com/5lJpD6f.png" },
  { title: "Abstract Art #10", imageUrl: "https://i.imgur.com/PqR1t4S.png" },
];


export default function ProfilePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#11101E] to-[#19182A] text-gray-200">
      {/* <ProfileHeader /> */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
        <ProfileInfo />

        {/* My Listed NFTs Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">My Listed NFTs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {listedNfts.map(nft => (
              <ProfileNftCard 
                key={nft.title}
                title={nft.title}
                price={nft.price}
                imageUrl={nft.imageUrl}
                isListed={true}
              />
            ))}
          </div>
        </div>

        {/* My NFTs Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">My NFTs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {myNfts.map(nft => (
              <ProfileNftCard 
                key={nft.title}
                title={nft.title}
                imageUrl={nft.imageUrl}
                isListed={false}
              />
            ))}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      {/* <footer className="border-t border-gray-700/50 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center text-sm">
          <p className="text-gray-500">© 2024 ArtSea. All rights reserved.</p>
          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Support</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
import NftCard from "../NftCard/NftCard";

// This mock data can be replaced with a real API call later
const nfts = [
  { title: "Abstract Expressionism", author: "Anya Petrova", price: "0.25 ETH", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3inaRrajF_domCf_x3vtoKphH_KxsZcR4IMBmZCIQoDcLQNofAjPjf5n7WvS8XsU_xlTXidtYaT5yglHC4YNa8s8xSl7AhuBIC4pxcVqogUK7LYHPODAxcJ8Os0JeSOhq7boBwOK23MT5T7yTV36mUtnlantUM9MABCrHhZ2I-crsfBjkbYaHO73vxLBjFASSMd83FTA8FgiZOedrnG0vWLzSBp8EcwsgF0N109EqMvirDvpvaCyFCa3kp-eLNNWYCDSKLnvUpX0g" },
  { title: "Digital Portrait", author: "Ethan Carter", price: "0.4 ETH", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBinw9jBLcjqtO_2rJPcH9TLBuiYSp3L8wbWVIYAwNzfrIgWOGiVkax_IU2EN0rp5cUct-1gKYszGtgkkD5Cacg12DYmnSovYei3jc6XtKCrns1o-naq5NJSHt1cgf2BryRZkT2okEeoxYMLaXAfdikKvF1Npsd572GeRtermf0DOegQYHjtGcAmUJcx3KzawCRTdL7uWqFIXN4dyU3_WXSmrOA8D0XgVSbTw5keV7sA3TSzFa1Q0jcrb4JgmQk6MSivoddRdkaEuS" },
  { title: "Urban Landscape", author: "Olivia Bennett", price: "0.15 ETH", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAE_L2QJ_3V52pfslP8P-YA1AJro6kX5UfuwJ7Pj29aXHlF13jCWQpJA4FbcusHZ9BiE7YqyHQCX1bFC15xSfngPM84C-ooesuqJxbdlfoWfqf5au9wg94pUaGe6d9ULcpLW8QLL_WITP99a-Zzv4OtD4bPjGXMi23wmQhZ5AExhsjX6tO2hzaRUnd3IuzsII8MCDh9M3bLjAQejJGb_tZZGWleiI1amDiJXBv-DB-FVVdf44RhO8s-Eaua-mwpVKEVd86YAX34O_Uy" },
  { title: "Surrealist Dreamscape", author: "Noah Thompson", price: "0.7 ETH", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCsvnQFwAAhUJ1OrHPR5gDeIRiMbmBtz5qhQLMFiean33t670omWKgAJy5Jr5D0dBeXw5ckMrSgxqq_UJrlDq-APawiup9xKfTMLB9Zem0_-kt7r5DenEOjF_M1Mzw79cZFxWaP2kDf-mh3GPsJLG2lce1-F2MzNfMF3BPcO95cnwdQ3QXBHSuYsHIqKwKTUeabWCMhZW7bBzmwYRBf5XryjMTDZ1AHR9x8lRi18SmBufsKmMi31ARdgFKekr1ScQ8LAMvts5RK8dT" },
  { title: "Minimalist Sculpture", author: "Sophia Clark", price: "1.2 ETH", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOB1jLIB_Yg9ZGFv3VEGrfxc_zc_XXw7p6p5XM6eFCoh1gYGUe5O-lJU_EOhyVd2qMeIaw48HMnKNnUdI8dRBdUJEkJYIDnf0Iwi4Sl3RzhiEcDt_VbRhG8daBXvXG7DhvEBM7aVkmrRIGYEkBTsk07hiUAWG_htQg5ttl6eRnIbRaxJpR8pA1DOIlZxdsO98cXjf7RpLiULnQAYRPQmniNyGuSleKyLzQl38O5FXo0pzQcsdWg4m2cpe87w2DhqU6C79cE_Is0Yyr" },
  { title: "Photorealistic Still Life", author: "Liam Foster", price: "0.5 ETH", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCu9b__Z2OdpkRWb-UToMIOunbIPOeC0rLc5aPLhlPLg0QqtaLVtYKqKkfRb8i0pkxSzMsRipPGnl_YLeI0nXRuKnUIJDm8YoI6ug9_ad12zsDWqO531GkTyKsRo7Y33qWhXTUdjIbo7v68I3b_CeCcPP_U1DElMQ0niebhenNbF5ESJfKU80G6Kyh29uTrRQezYarc1AbzfP1imYp0E8lNBnpfr-zsL0Y-Z3F9Tlg5LWtNNtkQWogiuM1rhSeF5qM1l8AIt9xl5o8" },
  { title: "Conceptual Installation", author: "Isabella Hayes", price: "2.0 ETH", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2JnaSyYvFtlgfoawFJKEzv9KDEpp-pvXagjF7EMHFIaOX0aOzc817U9_uP8gXnIECy46P4-iZAaoaqxFjmK4BdlnqfhC2H7ZQDYnlbvJZ-CedUs_dW7_j6domQ8Dk3KSG2muhGlD8HURiF6tyKCKDfVXvyvKD6AHBSWVmk1Qx1cAFBgMvVjg1tWJVPRsuGACyCXCoHxHX-dhAj8HW1oYNsmNGiO39rm8HluLU_omb9-hu-nZOquShDa2d1GA9McWRO8Nq_c5mjqPy" },
  { title: "Geometric Abstraction", author: "Caleb Mitchell", price: "0.3 ETH", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzJjynIVzrebcoT3eyPF7_YmwN_mtH8c53STvIhecy-ns4nCFcOIknR79DBAvJRNyY5HqZNziXTseJMFujGdV_abgQhGCIaX3etLX1O7xAU6griEFWIy4wtg_vdR_KNE-GPWG0EmVUGl46JH3GPub19D2Swo57HSLMDJWbMO26mU5EOIYEKJqYJTqtWEcqAnG5nPhxtDkF4ppXTPRCfoqco2wJT13JctB6iiNzv8yeM2fgjJ2UPMzWNjPs1b-MAgBwUA6lezc-IE3R" },
  { title: "Pop Art Remix", author: "Ava Reynolds", price: "0.6 ETH", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiaRmlbbjRoZEfon2L10ztTqNjkk_4xwiu4r0sxiou8YY-hMscqn4eeCR4STKdR58wZY94SQ9GtDCeJjiF7V3TZe2yN3phFs2g2grPxIxbg9U6yfr6cQhsxPsS3_cZZanFEPoAM545oSjuo3h_Ztq7Nu3OOMevNEOkxAdmfwFdY0qOXGjDlqiHbTGCuP4RUwTbDgvTablwDvDmLURDaqUWPkItflXt8NIGGZEsjIhYw0W0euzWQuULxAW4WowGV3P8SyL77grC0fmZ" },
  { title: "Avant-Garde Fashion", author: "Jackson Reed", price: "1.5 ETH", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPEU8JiFhtVHlwc7idgVR6ugJUCJN1Dfo8cRhJ57XGOTmwxRqrae0QmxbEgkvDV45ZigZcFZNG1eDTbwi46-tscXCF9kH58vHevJVpwmseyMopzBa4KSCeaDFXvr20C776jznkRUrJ5tXWFnJQx3dBAnKGyExO6KH2N4DFVIr2qrKENRfpefOC_konYqjj09qSyB8DYgmGpdsKm4OAh967JOFR2ci_w88PscRe89Ou7klJj3pPWTSs3j4jyPtl9ATdqJKYEt_72JKz" },
];


const NftGrid = () => {
  return (
    <>
      {/* Filters and Search Bar */}
      <div className="mb-6 space-y-4">
        <div className="relative lg:hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg aria-hidden="true" className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" fillRule="evenodd"></path></svg>
            </div>
            <input
              className="block w-full rounded-lg border-0 bg-[#6A0DAD]/10 py-2.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-transparent placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#6A0DAD] dark:bg-[rgba(26,22,37,0.5)] dark:text-white dark:placeholder:text-gray-400 sm:text-sm sm:leading-6" // Replaced
              placeholder="Search items, collections, and creators"
              type="text"
            />
        </div>
        <div className="flex flex-wrap items-center gap-2">
            <button className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#6A0DAD] to-[#8A2BE2] px-3 py-1.5 text-sm font-medium text-white transition-all hover:shadow-md hover:shadow-[#6A0DAD]/40"> {/* Replaced */}
              All
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" fillRule="evenodd"></path></svg>
            </button>
            <button className="flex items-center gap-1.5 rounded-lg bg-[rgba(26,22,37,0.5)] px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-[#6A0DAD]/20 dark:hover:bg-[#6A0DAD]/30">Art</button> {/* Replaced */}
            <button className="flex items-center gap-1.5 rounded-lg bg-[rgba(26,22,37,0.5)] px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-[#6A0DAD]/20 dark:hover:bg-[#6A0DAD]/30">Photography</button> {/* Replaced */}
            <button className="flex items-center gap-1.5 rounded-lg bg-[rgba(26,22,37,0.5)] px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-[#6A0DAD]/20 dark:hover:bg-[#6A0DAD]/30">Music</button> {/* Replaced */}
            <div className="ml-auto flex items-center gap-2">
              <button className="rounded-lg bg-gradient-to-r from-[#6A0DAD]/70 to-[#8A2BE2]/70 px-3 py-1.5 text-sm font-medium text-white transition-all hover:shadow-md hover:shadow-[#6A0DAD]/40">Price: Low to High</button> {/* Replaced */}
              <button className="rounded-lg bg-[rgba(26,22,37,0.5)] px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-[#6A0DAD]/20 dark:hover:bg-[#6A0DAD]/30">Recently Listed</button> {/* Replaced */}
            </div>
        </div>
      </div>
      {/* NFT Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {nfts.map((nft) => (
          <NftCard
            key={nft.title}
            title={nft.title}
            author={nft.author}
            price={nft.price}
            imageUrl={nft.imageUrl}
          />
        ))}
      </div>
    </>
  );
};

export default NftGrid;
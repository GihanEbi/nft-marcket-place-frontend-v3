# 🎨 ArtVerse - NFT Marketplace

**ArtVerse** is a modern, decentralized NFT marketplace built on blockchain technology where users can discover, collect, create, and trade extraordinary non-fungible tokens (NFTs). This platform provides a seamless experience for artists, collectors, and enthusiasts in the digital art ecosystem.

## 🌟 Features

- **🔍 Discover & Browse**: Explore a vast collection of unique digital art pieces
- **🎯 Create NFTs**: Mint your own NFTs with an intuitive creation interface
- **💰 Buy & Sell**: Trade NFTs with secure blockchain transactions
- **👤 User Profiles**: Manage your NFT collection and track your activity
- **📊 Bid History**: View detailed bidding history for each NFT
- **🔄 Related NFTs**: Discover similar artworks through intelligent recommendations
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🌓 Modern UI**: Beautiful, gradient-rich interface with smooth animations

## 🛠️ Technologies Used

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router and Turbopack
- **[React 19](https://react.dev/)** - Latest version of React with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI components

### Blockchain & Web3
- **[Wagmi](https://wagmi.sh/)** - React hooks for Ethereum
- **[Viem](https://viem.sh/)** - TypeScript interface for Ethereum
- **[Ethers.js](https://ethers.org/)** - Ethereum wallet implementation and utilities

### State Management & Data
- **[TanStack Query](https://tanstack.com/query)** - Data fetching and caching
- **[Axios](https://axios-http.com/)** - HTTP client for API requests

### File Storage & Media
- **[Pinata SDK](https://www.pinata.cloud/)** - IPFS pinning service for NFT metadata and media

### UI/UX
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon pack
- **[Class Variance Authority](https://cva.style/)** - Component variants utility
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind CSS classes
- **[TW Animate CSS](https://www.npmjs.com/package/tw-animate-css)** - Animation utilities

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and quality
- **[PostCSS](https://postcss.org/)** - CSS processing

## 🏗️ Project Architecture

### Smart Contracts
The project includes ABI files for blockchain interaction:
- `ArtNFT.json` - NFT contract for minting and managing digital artworks
- `Marketplace.json` - Marketplace contract for trading operations

### Component Structure
```
src/components/
├── Alert/              # Notification components
├── AlertDialog/        # Modal dialogs
├── BidHistory/         # Bidding history display
├── CreateNftForm/      # NFT creation form
├── CreatePageHeader/   # Create page header
├── CreatePageFooter/   # Create page footer
├── DetailHeader/       # NFT detail page header
├── DetailFooter/       # NFT detail page footer
├── Footer/             # Main site footer
├── Hero/               # Landing page hero section
├── InstructionSteps/   # Step-by-step guides
├── Loader/             # Loading components
├── MainContent/        # Main content wrapper
├── NavBar/             # Navigation bar
├── NftCard/            # Individual NFT display card
├── NftGrid/            # Grid layout for NFTs
├── ProfileHeader/      # User profile header
├── ProfileInfo/        # User profile information
├── ProfileNftCard/     # NFT cards in profile view
├── RelatedNftCard/     # Related NFT suggestions
└── ui/                 # Reusable UI components
```

### Page Structure
- **Home (`/`)** - Landing page with hero section and NFT grid
- **Create (`/create`)** - NFT minting interface
- **NFT Details (`/nft/[id]`)** - Individual NFT viewing and trading
- **Profile (`/profile`)** - User dashboard and collection management

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager
- MetaMask or compatible Web3 wallet
- Access to Ethereum testnet/mainnet

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GihanEbi/nft-marcket-place-frontend-v3.git
   cd nft-marcket-place-frontend-v3
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory and add your configuration:
   ```env
   NEXT_PUBLIC_PINATA_API_KEY=your_pinata_api_key
   NEXT_PUBLIC_PINATA_SECRET_KEY=your_pinata_secret_key
   NEXT_PUBLIC_CONTRACT_ADDRESS=your_nft_contract_address
   NEXT_PUBLIC_MARKETPLACE_ADDRESS=your_marketplace_contract_address
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 How It Works

### For Artists/Creators
1. **Connect Wallet** - Connect your Web3 wallet (MetaMask, etc.)
2. **Create NFT** - Upload your digital artwork and metadata
3. **Mint on Blockchain** - Your NFT is minted on the Ethereum blockchain
4. **List for Sale** - Set your price and list on the marketplace
5. **Earn Royalties** - Receive payments from sales and secondary market trades

### For Collectors/Buyers
1. **Browse Collection** - Explore NFTs in the marketplace
2. **View Details** - Check artwork details, history, and authenticity
3. **Place Bids** - Participate in auctions or buy at fixed prices
4. **Secure Ownership** - Own verified digital assets on the blockchain
5. **Trade/Resell** - List your NFTs for resale in the secondary market

### Technical Flow
1. **Frontend** renders the user interface using Next.js and React
2. **Wagmi/Viem** handles Web3 wallet connections and blockchain interactions
3. **Smart Contracts** manage NFT minting, ownership, and marketplace transactions
4. **IPFS (Pinata)** stores NFT metadata and media files in a decentralized manner
5. **TanStack Query** manages API calls and caches blockchain data for optimal performance

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production with Turbopack
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy with automatic builds on every push

### Other Platforms
The application can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- **Repository**: [GitHub](https://github.com/GihanEbi/nft-marcket-place-frontend-v3)
- **Live Demo**: (https://nft-marcket-place-frontend-v3.vercel.app/)
- **Documentation**: [Next.js Docs](https://nextjs.org/docs)

## 🛡️ Security

- All smart contract interactions are secured through established Web3 libraries
- User funds and NFTs are protected by blockchain technology
- No private keys are stored on the frontend application
- All transactions require user confirmation through their Web3 wallet

---

**Built with ❤️ by [GihanEbi](https://github.com/GihanEbi)**

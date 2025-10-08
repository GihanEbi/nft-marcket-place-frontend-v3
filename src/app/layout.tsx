import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';

// Configure the font
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk', // CSS variable for Tailwind
});

export const metadata: Metadata = {
  title: 'ArtVerse - Discover NFTs',
  description: 'The leading digital marketplace for crypto collectibles and non-fungible tokens (NFTs).',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} bg-background-light dark:bg-gradient-to-br dark:from-[#0D0B14] dark:to-[#1a1625] font-display text-gray-800 dark:text-gray-200`}>
        <div className="flex min-h-screen w-full flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
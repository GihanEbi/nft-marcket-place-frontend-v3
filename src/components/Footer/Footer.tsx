import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1a1625]/50 border-t border-gray-800/20 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              © 2024 ArtVerse. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-6">
            <Link className="text-sm text-gray-400 hover:text-[#6A0DAD] transition-colors" href="#">About Us</Link>
            <Link className="text-sm text-gray-400 hover:text-[#6A0DAD] transition-colors" href="#">Terms of Service</Link>
            <Link className="text-sm text-gray-400 hover:text-[#6A0DAD] transition-colors" href="#">Privacy Policy</Link>
          </nav>
          <div className="flex gap-4">
            <Link className="text-gray-400 hover:text-[#6A0DAD] transition-colors" href="#">
              {/* Twitter SVG */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.48 2.96,10.29 2.38,10V10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16.03 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path></svg>
            </Link>
            <Link className="text-gray-400 hover:text-[#6A0DAD] transition-colors" href="#">
              {/* Facebook SVG */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,2.04C6.5,2.04 2,6.53 2,12.06C2,17.06 5.66,21.21 10.44,21.96V14.96H7.9V12.06H10.44V9.85C10.44,7.32 11.93,5.96 14.22,5.96C15.31,5.96 16.45,6.15 16.45,6.15V8.62H15.19C13.95,8.62 13.56,9.39 13.56,10.18V12.06H16.34L15.89,14.96H13.56V21.96C18.34,21.21 22,17.06 22,12.06C22,6.53 17.5,2.04 12,2.04Z"></path></svg>
            </Link>
            <Link className="text-gray-400 hover:text-[#6A0DAD] transition-colors" href="#">
              {/* Instagram SVG */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.34,5.46C17.34,5.46 17.34,5.46 17.34,5.46C16.5,5.46 15.82,6.14 15.82,6.99C15.82,7.84 16.5,8.52 17.34,8.52C18.19,8.52 18.87,7.84 18.87,6.99C18.87,6.14 18.19,5.46 17.34,5.46M12,9.71C9.62,9.71 7.69,11.64 7.69,14C7.69,16.36 9.62,18.29 12,18.29C14.38,18.29 16.31,16.36 16.31,14C16.31,11.64 14.38,9.71 12,9.71M12,16.45C10.64,16.45 9.53,15.35 9.53,14C9.53,12.65 10.64,11.55 12,11.55C13.36,11.55 14.47,12.65 14.47,14C14.47,15.35 13.36,16.45 12,16.45M22.25,8.19C22.25,6.86 22.1,5.55 21.65,4.3C21.22,3.09 20.4,2.23 19.18,1.8C18.06,1.4 16.79,1.25 15.42,1.25C14.05,1.25 13.68,1.24 12,1.24C10.32,1.24 9.95,1.25 8.58,1.25C7.21,1.25 5.94,1.4 4.82,1.8C3.6,2.23 2.78,3.09 2.35,4.3C1.9,5.55 1.75,6.86 1.75,8.19C1.75,9.55 1.76,9.92 1.76,11.59C1.76,13.26 1.75,13.64 1.75,14.96C1.75,16.29 1.9,17.6 2.35,18.85C2.78,20.06 3.6,20.92 4.82,21.35C5.94,21.75 7.21,21.9 8.58,21.9C9.95,21.9 10.32,21.91 12,21.91C13.68,21.91 14.05,21.9 15.42,21.9C16.79,21.9 18.06,21.75 19.18,21.35C20.4,20.92 21.22,20.06 21.65,18.85C22.1,17.6 22.25,16.29 22.25,14.96C22.25,13.64 22.24,13.26 22.24,11.59C22.24,9.92 22.25,9.55 22.25,8.19Z"></path></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
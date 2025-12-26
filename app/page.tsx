import Footer from '@/app/components/Footer';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <main className="flex-1 flex flex-col md:flex-row items-start md:items-center justify-center px-8 py-8 gap-8 md:gap-0">
        {/* Mobile: Logo appears first, Desktop: Logo on left side */}
        <div className="flex flex-col items-start md:items-center md:mr-8">
          <Image
            src="/NewWebsite022.png"
            alt="New Website 022.png"
            width={382}
            height={122}
            sizes="(max-width: 768px) 350px, 382px"
            priority
            style={{ objectFit: "cover" }}
            className="rounded-lg w-[350px] md:w-[382px] h-auto"
          />
        </div>
        
        {/* Buttons side by side on all screen sizes */}
        <div className="flex flex-row gap-10 md:gap-10 items-center">
          <Link href="/english" passHref>
            <button
              className="w-35 h-35 md:w-40 md:h-40 rounded-full bg-gray-300 md:bg-[#5a5a5a] text-black md:text-white flex flex-col justify-center items-center text-lg md:text-xl font-medium select-none focus:outline-none md:hover:bg-gray-300 md:hover:text-black transition-all duration-700 ease-in-out"
              style={{ 
                whiteSpace: "pre-line",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.75), inset 0 -10px 20px rgba(0, 0, 0, 0.3)"
              }}
            >
              English<br />Website
            </button>
          </Link>
          <Link href="/hindi" passHref>
            <button
              className="w-35 h-35 md:w-40 md:h-40 rounded-full bg-gray-300 md:bg-[#5a5a5a] text-black md:text-white flex flex-col justify-center items-center text-lg md:text-xl font-medium select-none focus:outline-none md:hover:bg-gray-300 md:hover:text-black transition-all duration-700 ease-in-out"
              style={{
                whiteSpace: "pre-line",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.75), inset 0 -10px 20px rgba(0, 0, 0, 0.3)"
              }}
            >
              हिंदी<br />वेबसाइट
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

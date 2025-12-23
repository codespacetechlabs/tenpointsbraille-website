import Footer from '@/app/components/Footer';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center px-4 py-8 gap-8 md:gap-0">
        {/* Mobile: Logo appears first, Desktop: Logo on left side */}
        <div className="flex flex-col items-center md:mr-8">
          <Image
            src="/NewWebsite022.png"
            alt="New Website 022.png"
            width={382}
            height={122}
            sizes="(max-width: 768px) 280px, 382px"
            priority
            style={{ objectFit: "cover" }}
            className="rounded-lg w-[280px] md:w-[382px] h-auto"
          />
        </div>
        
        {/* Mobile: Buttons stacked below logo, Desktop: Buttons side by side on right */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
          <Link href="/english" passHref>
            <button
              className="w-40 h-40 md:w-50 md:h-50 rounded-full bg-[#5a5a5a] text-white flex flex-col justify-center items-center text-xl md:text-2xl font-medium select-none focus:outline-none hover:bg-gray-300 hover:text-black transition-all duration-700 ease-in-out"
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
              className="w-40 h-40 md:w-50 md:h-50 rounded-full bg-[#5a5a5a] text-white flex flex-col justify-center items-center text-xl md:text-2xl font-medium select-none focus:outline-none hover:bg-gray-300 hover:text-black transition-all duration-700 ease-in-out"
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

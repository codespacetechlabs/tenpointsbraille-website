import Footer from '@/app/components/Footer';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <main className="flex-1 flex flex-col-2 items-center justify-center">
        {/* Logo */}
        <div className="mb-12 flex flex-col items-center">
          <Image
            src="/NewWebsite022.png"
            alt="New Website 022.png"
            width={382}
            height={122}
            sizes="382px"
            priority // since fetchpriority="high"
            style={{ objectFit: "cover" }}
            className="rounded-lg mr-15"
    />
        </div>
        {/* Language Selection Circles */}
        <div className="flex gap-12">
          <Link href="/english" passHref>
            <button
              className="w-50 h-50 rounded-full bg-[#5a5a5a] text-white flex flex-col justify-center items-center text-2xl font-medium select-none focus:outline-none hover:bg-gray-300 hover:text-black transition mr-5 ml-5"
            >
              English<br />Website
            </button>
          </Link>
          <Link href="/hindi" passHref>
            <button
              className="w-50 h-50 rounded-full bg-[#5a5a5a] text-white flex flex-col justify-center items-center text-2xl font-medium select-none focus:outline-none hover:bg-gray-300 hover:text-black transition mr-5 ml-5"
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

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS_ENGLISH } from "@/app/lib/constants";

export default function SidebarEnglish() {
  return (
    <div className="flex flex-col items-center bg-white min-h-screen">
      {/* Logo */}
      <Image
        src="/darklogo.png"
        alt="Tenpoints Braille Logo"
        width={320}
        height={100}
        className="mb-6"
        priority
      />

      {/* Buttons grid */}
      <div className="grid grid-cols-2 gap-8 mt-4">
        {NAV_LINKS_ENGLISH.map((link, idx) => (
          <Link href={link.href} key={idx}>
            <button
              className="w-20 h-20 rounded-full bg-black text-white flex flex-col justify-center items-center text-sm shadow-xl select-none transition-all duration-300 ease-in-out hover:bg-gray-300 hover:text-black"
              style={{ 
                whiteSpace: "pre-line",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.75), inset 0 -10px 20px rgba(0, 0, 0, 0.3)"
              }}
            >
              {link.label}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

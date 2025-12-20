import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "ABOUT", href: "/about" },
  { label: "BOOK", href: "/book" },
  { label: "FONTS", href: "/fonts" },
  { label: "HOW\nTO USE", href: "/howtouse" },
  { label: "DOWN\nLOAD", href: "/download" },
  { label: "CONTACT", href: "/contact" },
];

export default function SidebarEnglish() {
  return (
    <div className="flex flex-col items-center pt-8 bg-white min-h-screen mt-25">
      {/* Logo */}
      <Image
        src="/darklogo.png" // Replace with your logo path
        alt="Tenpoints Braille Logo"
        width={320}
        height={100}
        className="mb-6"
        priority
      />

      {/* Buttons grid */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-8 mt-4">
        {navLinks.map((link, idx) => (
          <Link href={link.href} key={idx}>
            <button
              className="w-28 h-28 rounded-full bg-black text-white flex flex-col justify-center items-center text-l shadow-xl select-none transition hover:bg-gray-300 hover:text-black"
              style={{ whiteSpace: "pre-line",boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.75)" }}
            >
              {link.label}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinksData = {
  english: [
    { label: "ABOUT", href: "/about" },
    { label: "BOOK", href: "/book" },
    { label: "FONTS", href: "/fonts" },
    { label: "HOW TO USE", href: "/howtouse" },
    { label: "DOWNLOAD", href: "/download" },
    { label: "CONTACT", href: "/contact" },
  ],
  hindi: [
    { label: "विशेष", href: "/vishesh" },
    { label: "पुस्तक", href: "/pustak" },
    { label: "फोंट्स", href: "/hindifonts" },
    { label: "उपयोग", href: "/upyog" },
    { label: "डाउनलोड", href: "/hindidownload" },
    { label: "संपर्क", href: "/sampark" },
  ],
};

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<"english" | "hindi">("english");
  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const navLinks = navLinksData[language];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-lg lg:hidden"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`block h-0.5 w-full bg-black transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-black transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sliding Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/logo.png" // Update with your logo path
              alt="Logo"
              width={120}
              height={60}
              className="mx-auto"
            />
          </div>

          {/* Language Toggle */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setLanguage("english")}
              className={`flex-1 py-2 px-3 rounded text-sm font-semibold transition-colors ${
                language === "english"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("hindi")}
              className={`flex-1 py-2 px-3 rounded text-sm font-semibold transition-colors ${
                language === "hindi"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              हिंदी
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-2">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={index}
                  href={link.href}
                  onClick={closeSidebar}
                  className={`block py-3 px-4 rounded-lg font-semibold text-center transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}

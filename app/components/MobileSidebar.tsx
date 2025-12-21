"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS_ENGLISH, NAV_LINKS_HINDI } from "@/app/lib/constants";

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<"english" | "hindi">("english");
  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed left-4 top-4 z-50 rounded-md bg-white p-2 shadow-lg lg:hidden"
        aria-label="Toggle menu"
      >
        <div className="flex h-5 w-6 flex-col justify-between">
          <span className={`block h-0.5 w-full bg-black transition-transform duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-full bg-black transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-full bg-black transition-transform duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden" onClick={closeSidebar} />
      )}

      <aside className={`fixed left-0 top-0 z-50 h-full w-64 transform bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-full flex-col p-6">
          <div className="mb-8">
            <Image src="/logo.png" alt="Tenpoints Braille Logo" width={120} height={60} className="mx-auto" />
          </div>

          <div className="mb-6 flex gap-2">
            <button onClick={() => setLanguage("english")} className={`flex-1 rounded px-3 py-2 text-sm font-semibold transition-colors ${language === "english" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}>
              English
            </button>
            <button onClick={() => setLanguage("hindi")} className={`flex-1 rounded px-3 py-2 text-sm font-semibold transition-colors ${language === "hindi" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}>
              हिंदी
            </button>
          </div>

          <nav className="flex-1 space-y-2 overflow-y-auto">
            {language === "english"
              ? NAV_LINKS_ENGLISH.map((link, idx) => (
                  <Link key={idx} href={link.href} onClick={closeSidebar}>
                    <div
                      className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-100 ${
                        pathname === link.href ? "bg-gray-100 text-black" : "text-gray-700"
                      }`}
                    >
                      {link.label}
                    </div>
                  </Link>
                ))
              : NAV_LINKS_HINDI.map((link, idx) => (
                  <Link key={idx} href={link.hiSlug} onClick={closeSidebar}>
                    <div
                      className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-100 ${
                        pathname === link.hiSlug ? "bg-gray-100 text-black" : "text-gray-700"
                      }`}
                    >
                      {link.hi}
                    </div>
                  </Link>
                ))}
          </nav>
        </div>
      </aside>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS_ENGLISH, NAV_LINKS_HINDI } from "@/app/lib/constants";
import type { NavLink, NavLinkHindi } from "@/app/types";

interface MobileNavbarProps {
  language: "english" | "hindi";
}

export default function MobileNavbar({ language }: MobileNavbarProps) {
  const pathname = usePathname();
  const navLinks: (NavLink | NavLinkHindi)[] = language === "english" ? NAV_LINKS_ENGLISH : NAV_LINKS_HINDI;

  return (
    <div className="lg:hidden">
      {/* Logo Section - Not sticky */}
      <div className="bg-white py-6 flex justify-center border-b border-gray-200">
        <Image
          src="/darklogo.png"
          alt="Tenpoints Braille Logo"
          width={200}
          height={65}
          className="w-[200px] h-auto"
          priority
        />
      </div>

      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-md overflow-x-auto">
        <div className="flex gap-2 p-3 min-w-max">
          {language === "english"
            ? (navLinks as NavLink[]).map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={idx} href={link.href}>
                    <button
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                        isActive
                          ? "bg-black text-white shadow-lg"
                          : "bg-gray-100 text-black hover:bg-gray-200"
                      }`}
                      style={
                        isActive
                          ? {
                              boxShadow:
                                "0 4px 6px -1px rgba(0, 0, 0, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.2)",
                            }
                          : {}
                      }
                    >
                      {link.label.replace(/\n/g, " ")}
                    </button>
                  </Link>
                );
              })
            : (navLinks as NavLinkHindi[]).map((link, idx) => {
                const isActive = pathname === link.hiSlug;
                return (
                  <Link key={idx} href={link.hiSlug}>
                    <button
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                        isActive
                          ? "bg-black text-white shadow-lg"
                          : "bg-gray-100 text-black hover:bg-gray-200"
                      }`}
                      style={
                        isActive
                          ? {
                              boxShadow:
                                "0 4px 6px -1px rgba(0, 0, 0, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.2)",
                            }
                          : {}
                      }
                    >
                      {link.hi}
                    </button>
                  </Link>
                );
              })}
        </div>
      </nav>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS_ENGLISH, NAV_LINKS_HINDI } from "@/app/lib/constants";

interface MobileNavbarProps {
  language: "english" | "hindi";
}

export default function MobileNavbar({ language }: MobileNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (href: string) => pathname === href;

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Show scroll to top button and add shadow when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      if (scrollPosition > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Header with Logo and Hamburger */}
      <div className={`lg:hidden bg-white py-4 px-6 flex justify-between items-center border-b border-gray-200 sticky top-0 z-[60] transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}>
        <Link href="/">
          <Image
            src="/tenpointsBraille.png"
            alt="Tenpoints Braille Logo"
            width={150}
            height={48}
            className="w-[150px] h-auto cursor-pointer"
            priority
          />
        </Link>
        
        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none relative z-[70]"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Backdrop Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Menu Sidebar (70-75% width) */}
      <div 
        className={`fixed top-0 right-0 h-full w-[75%] bg-white z-50 shadow-2xl transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="bg-white py-4 px-6 flex justify-end items-center border-b border-gray-200">
          <Link href="/" onClick={toggleMenu}>
            <Image
              src="/tenpointsBraille.png"
              alt="Tenpoints Braille Logo"
              width={120}
              height={38}
              className="w-[120px] h-auto mr-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Menu Content */}
        <div className="overflow-y-auto h-[calc(100vh-80px)] p-6">
          {/* All Navigation Links */}
          <div className="space-y-2">
            {/* English Link */}
            <Link href="/english" onClick={toggleMenu}>
              <div
                className={`px-4 py-1 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActive("/english")
                    ? "bg-black text-white"
                    : "text-black hover:text-gray-600"
                }`}
              >
                English
              </div>
            </Link>
            
            {/* English Navigation Links */}
            {NAV_LINKS_ENGLISH.map((link, idx) => (
              <Link key={idx} href={link.href} onClick={toggleMenu}>
                <div
                  className={`px-4 py-1 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActive(link.href)
                      ? "bg-black text-white"
                      : "text-black hover:text-gray-600"
                  }`}
                >
                  {link.label.replace(/\n/g, " ")}
                </div>
              </Link>
            ))}

            {/* Divider */}
            <div className="my-4 border-t border-gray-200"></div>

            {/* Hindi Link */}
            <Link href="/hindi" onClick={toggleMenu}>
              <div
                className={`px-4 py-1 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActive("/hindi")
                    ? "bg-black text-white"
                    : "text-black hover:text-gray-600"
                }`}
              >
                हिंदी
              </div>
            </Link>
            
            {/* Hindi Navigation Links */}
            {NAV_LINKS_HINDI.map((link, idx) => (
              <Link key={idx} href={link.hiSlug} onClick={toggleMenu}>
                <div
                  className={`px-4 py-1 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActive(link.hiSlug)
                      ? "bg-black text-white"
                      : "text-black hover:text-gray-600"
                  }`}
                >
                  {link.hi}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="lg:hidden fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white border-2 border-black shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-100 active:scale-95"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}

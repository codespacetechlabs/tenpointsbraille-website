import Link from "next/link";
import Image from "next/image";
import React from "react";

interface FontButtonProps {
  char: string;
  language: string;
  href: string;
}

export default function FontButton({ char, language, href }: FontButtonProps) {
  // Derive image filename from href (e.g., /englishFont -> englishFontInitial.png)
  const fontName = href.substring(1); // Remove leading slash
  const imagePath = `/Font/Initials/${fontName}Initial.png`;

  return (
    <Link href={href}>
      <button className="group relative h-32 w-32 overflow-hidden rounded-full shadow-md transition-all duration-200 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] md:h-24 md:w-24 lg:h-28 lg:w-28">
        {/* Image - Hidden on mobile, visible on desktop, hidden on hover */}
        <div className="absolute inset-0 hidden items-center justify-center bg-white transition-opacity duration-200 md:flex md:group-hover:opacity-0">
          <div className="relative h-16 w-16 md:h-12 md:w-12 lg:h-16 lg:w-16">
            <Image
              src={imagePath}
              alt={`${language} font initial`}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Language Label - Always visible on mobile, visible on hover for desktop */}
        <div className="absolute inset-0 flex items-center justify-center rounded-full border-6 border-white bg-black opacity-100 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100">
          <span className="text-center text-sm text-white md:text-base">
            {language === "Bengali/Assamese" ? (
              <>
                Bengali/
                <br />
                Assamese
              </>
            ) : language === "Hindi/Marathi" ? (
              <>
                Hindi/
                <br />
                Marathi
              </>
            ) : (
              language
            )}
          </span>
        </div>
      </button>
    </Link>
  );
}

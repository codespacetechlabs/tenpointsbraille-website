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
      <button className="group relative flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 border-gray-300 bg-white shadow-md transition-all duration-200 hover:border-[8px] hover:border-white hover:bg-black hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] md:h-24 md:w-24 lg:h-28 lg:w-28">
        {/* Image - Hidden on hover */}
        <div className="relative h-16 w-16 group-hover:hidden md:h-12 md:w-12 lg:h-16 lg:w-16">
          <Image
            src={imagePath}
            alt={`${language} font initial`}
            fill
            className="object-contain"
          />
        </div>

        {/* Language Label - Visible only on hover */}
        <span className="hidden text-center text-sm text-white group-hover:block md:text-base">
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
      </button>
    </Link>
  );
}

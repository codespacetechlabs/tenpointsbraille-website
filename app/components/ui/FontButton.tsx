import Link from "next/link";
import React from "react";

interface FontButtonProps {
  char: string;
  language: string;
  href: string;
}

export default function FontButton({ char, language, href }: FontButtonProps) {
  return (
    <Link href={href}>
      <button className="group relative flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 border-gray-300 bg-white shadow-md transition-all duration-200 hover:border-[8px] hover:border-white hover:bg-black hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] md:h-24 md:w-24 lg:h-28 lg:w-28">
        {/* Braille dot - Hidden on hover */}
        <span className="absolute left-1/2 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-gray-400 group-hover:hidden"></span>

        {/* Character - Hidden on hover */}
        <span className="mb-2 text-4xl text-black group-hover:hidden md:text-5xl">
          {char}
        </span>

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

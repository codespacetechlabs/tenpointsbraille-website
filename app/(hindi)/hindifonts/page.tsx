import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "फॉन्ट",
  description: "विभिन्न भाषाओं में ब्रेल फॉन्ट",
};

export default function HindiFonts() {
  return (
    <main className="flex flex-1 flex-col rounded-lg bg-white">
      {/* FONTS Heading */}
      <h1 className="mb-6 text-3xl font-light text-gray-900 md:mb-8 md:text-4xl">फोंट्स</h1>

      {/* Content Paragraphs */}
      <div className="space-y-6 text-sm leading-relaxed text-gray-800 md:text-base">
        <p>
                टेनपॉइंटस ब्रेल फ़ॉन्ट को कई भाषा लिपियों में विकसित किया गया है। इसे Adobe Illustrator, Adobe InDesign और Microsoft Word जैसे सॉफ्टवेयर में आसानी से डाउनलोड और इंस्टॉल किया जा सकता है।
        </p>
      </div>

      {/* Font buttons grid */}
      <div className="mt-12 flex flex-col gap-6 md:mt-16 md:gap-8 lg:mt-20">
            {/* First row */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
              <FontButton char="A" language="अंग्रेज़ी" href = "/englishFont" />
              <FontButton char="अ" language="हिंदी/मराठी" href = "/hindiFont"/>
              <FontButton char="অ" language="बंगाली/असमिया" href = "/bengaliFont"/>
              <FontButton char="અ" language="गुजराती" href = "/gujaratiFont"/>
              <FontButton char="ਅ" language="गुरुमुखी" href = "/gurumukhiFont" />
        </div>

        {/* Second row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
              <FontButton char="ഇ" language="कन्नड़" href = "/kannadaFont" />
              <FontButton char="അ" language="मलयालम" href = "/malayalamFont" />
              <FontButton char="ଅ" language="ओरिया" href = "/oriyaFont"/>
              <FontButton char="அ" language="तमिल" href = "/tamilFont"/>
          <FontButton char="అ" language="तेलुगु" href="/teluguFont" />
        </div>
      </div>
    </main>
  );
}

// Font Button Component
function FontButton({ char, language, href }: { char: string; language: string; href: string }) {
  return (
    <Link href={href}>
      <button className="relative w-32 h-32 rounded-full border-2 border-gray-300 bg-white flex flex-col items-center justify-center transition-all duration-200 hover:bg-black hover:border-white hover:border-[8px] shadow-md hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] group">
        {/* Braille dot - Hidden on hover */}
        <span className="absolute top-6 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gray-400 group-hover:hidden"></span>
        
        {/* Character - Hidden on hover */}
        <span className="text-5xl text-black mb-2 group-hover:hidden">
          {char}
        </span>
        
        {/* Language Label - Visible only on hover */}
        <span className="hidden text-base text-white text-center group-hover:block">
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
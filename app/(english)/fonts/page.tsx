import FontButton from "@/app/components/ui/FontButton";
import { FONTS_DATA } from "@/app/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fonts",
  description:
    "Download Tenpoints Braille fonts in multiple languages including English, Hindi, Bengali, Gujarati, and more. Easy to install in Adobe InDesign, Illustrator, and other software.",
};

export default function Fonts() {
  return (
    <main className="flex flex-1 flex-col rounded-lg bg-white">
      {/* FONTS Heading */}
      <h1 className="mb-6 text-3xl font-light text-gray-900 md:mb-8 md:text-4xl">FONTS</h1>

      {/* Content Paragraphs */}
      <div className="space-y-6 text-sm leading-relaxed text-gray-800 md:text-base">
        <p>
          The Tenpoints Braille Font has been developed in multiple language scripts. It can be
          easily downloaded and installed in software such as Adobe InDesign, Adobe Illustrator
          etc.
        </p>
      </div>

      {/* Font buttons grid */}
      <div className="mt-12 flex flex-col gap-6 md:mt-16 md:gap-8 lg:mt-20">
        {/* First row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          {FONTS_DATA.slice(0, 5).map((font, idx) => (
            <FontButton key={idx} char={font.char} language={font.language} href={font.href} />
          ))}
        </div>

        {/* Second row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          {FONTS_DATA.slice(5).map((font, idx) => (
            <FontButton key={idx} char={font.char} language={font.language} href={font.href} />
          ))}
        </div>
      </div>
    </main>
  );
}

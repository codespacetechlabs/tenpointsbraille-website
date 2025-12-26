import FontButton from "@/app/components/ui/FontButton";
import { FONTS_DATA } from "@/app/lib/constants";
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

      {/* Font buttons grid - 2 columns on mobile, original layout on desktop */}
      <div className="mt-12 grid grid-cols-2 gap-6 md:mt-16 md:flex md:flex-col md:gap-8 lg:mt-20">
        {/* First row - shows on desktop only */}
        <div className="col-span-2 hidden md:flex md:flex-wrap md:justify-center md:gap-4 lg:gap-8">
          {FONTS_DATA.slice(0, 5).map((font, idx) => (
            <FontButton key={idx} char={font.char} language={font.language} href={font.href} />
          ))}
        </div>

        {/* Second row - shows on desktop only */}
        <div className="col-span-2 hidden md:flex md:flex-wrap md:justify-center md:gap-4 lg:gap-8">
          {FONTS_DATA.slice(5).map((font, idx) => (
            <FontButton key={idx} char={font.char} language={font.language} href={font.href} />
          ))}
        </div>

        {/* Mobile view - all buttons in 2 columns */}
        {FONTS_DATA.map((font, idx) => (
          <div key={idx} className="flex justify-center md:hidden">
            <FontButton char={font.char} language={font.language} href={font.href} />
          </div>
        ))}
      </div>
    </main>
  );
}

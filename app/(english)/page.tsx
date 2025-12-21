import VideoSection from "@/app/components/ui/VideoSection";
import BrailleComparison from "@/app/components/ui/BrailleComparison";
import Button from "@/app/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Website",
  description:
    "Tenpoints Braille - Learn and teach Braille in English and multiple other languages.",
};

export default function EnglishHome() {
  return (
    <main className="mt-10 flex flex-1 flex-col items-center justify-center rounded-lg bg-white px-4 md:mt-20 md:px-6 lg:mt-50">
      {/* Video Section */}
      <VideoSection src="/homescreenVideo.mp4" title="Tenpoints Braille Introduction" />

      {/* About Section */}
      <div className="mt-12 flex max-w-3xl flex-col items-center gap-6 md:mt-16 md:flex-row lg:mt-30">
        <p className="text-justify text-base leading-relaxed text-gray-800 md:text-lg">
          Tenpoints Braille is an innovative tool designed to offer the ideal solution for the
          issues confronted in learning and teaching Braille. It's an ingenious tool that makes it
          easy for anyone to read Braille, even if they don't know the language.
        </p>

        <Link href="/about">
          <Button variant="primary" size="lg" className="w-56 shadow-2xl">
            MORE
          </Button>
        </Link>
      </div>

      {/* Braille Comparison */}
      <BrailleComparison
        title="NORMAL BRAILLE"
        description="TENPOINTS BRAILLE IN DIFFERENT LANGUAGES"
      />

      {/* Language Images Section */}
      <div className="w-full max-w-4xl px-4 py-6 md:px-8">
        {/* Row 1 */}
        <div className="mb-6 flex justify-center md:mb-8">
          <Image src="/languages/English.png" alt="English Braille" width={120} height={120} />
        </div>

        {/* Row 2 */}
        <div className="mb-6 flex flex-wrap justify-center gap-8 md:mb-8 md:gap-16">
          <Image src="/languages/Hindi.png" alt="Hindi Braille" width={120} height={100} />
          <Image src="/languages/Kannada.png" alt="Kannada Braille" width={120} height={100} />
          <Image src="/languages/Telugu.png" alt="Telugu Braille" width={120} height={100} />
        </div>

        {/* Row 3 */}
        <div className="mb-6 flex flex-wrap justify-center gap-8 md:mb-8 md:gap-16">
          <Image src="/languages/Bengali.png" alt="Bengali Braille" width={120} height={100} />
          <Image src="/languages/Malayalam.png" alt="Malayalam Braille" width={120} height={100} />
          <Image src="/languages/German.png" alt="German Braille" width={120} height={100} />
        </div>

        {/* Row 4 */}
        <div className="mb-6 flex flex-wrap justify-center gap-8 md:mb-8 md:gap-16">
          <Image src="/languages/Gujarati.png" alt="Gujarati Braille" width={120} height={100} />
          <Image src="/languages/Oriya.png" alt="Oriya Braille" width={120} height={100} />
          <Image src="/languages/French.png" alt="French Braille" width={120} height={100} />
        </div>

        {/* Row 5 */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <Image src="/languages/Gurmukhi.png" alt="Gurmukhi Braille" width={120} height={100} />
          <Image src="/languages/Tamil.png" alt="Tamil Braille" width={120} height={100} />
          <Image src="/languages/Spanish.png" alt="Spanish Braille" width={120} height={100} />
        </div>
      </div>
    </main>
  );
}

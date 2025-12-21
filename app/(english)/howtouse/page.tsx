import VideoSection from "@/app/components/ui/VideoSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Use",
  description:
    "Learn how to use Tenpoints Braille fonts and tools to create Braille content in multiple languages.",
};

export default function HowToUse() {
  return (
    <main className="flex flex-1 flex-col items-center rounded-lg bg-white">
      <div className="w-full max-w-4xl">
        <h1 className="mb-6 text-3xl font-light text-gray-900 md:mb-8 md:text-4xl">
          HOW TO USE
        </h1>

        <div className="space-y-6 text-sm leading-relaxed text-gray-800 md:text-base">
          <p>
            Learn how to use Tenpoints Braille fonts and tools to create accessible Braille
            content in multiple languages.
          </p>
        </div>

        <div className="mt-12 flex justify-center md:mt-16 lg:mt-20">
          <VideoSection src="/howtouse.mp4" title="How to Use Tenpoints Braille" />
        </div>
      </div>
    </main>
  );
}

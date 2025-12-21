import VideoSection from "@/app/components/ui/VideoSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book",
  description:
    "The Tenpoints Braille Book gives you the power to learn Braille in any language of your choice with all letters, numbers, punctuations, and special characters.",
};

export default function Book() {
  return (
    <main className="flex flex-1 flex-col items-center rounded-lg bg-white">
      <div className="w-full max-w-4xl">
        {/* Heading */}
        <h1 className="mb-6 text-3xl font-light text-gray-900 md:mb-8 md:text-4xl">Book</h1>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-sm leading-relaxed text-gray-800 md:text-base">
          <p>
            The Tenpoints Braille Book gives you the power to learn Braille in any language of your
            choice. It contains all the letters of the alphabet, numbers, punctuations, special
            characters and contractions - in multiple languages including Braille. It also includes
            instructions in all languages on how to use the tool. It has been designed in Black &
            White, so that you can get it printed at your home or anywhere else inexpensively. You
            can even choose to print selected pages from the book. Just one page printed from the
            book will go a long way in helping you learn Braille.
          </p>
        </div>

        <div className="mt-12 flex justify-center md:mt-16 lg:mt-20">
          <VideoSection src="/bookVideo.mp4" title="Tenpoints Braille Book" />
        </div>
      </div>
    </main>
  );
}

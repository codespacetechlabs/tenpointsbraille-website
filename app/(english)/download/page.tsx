import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download Tenpoints Braille fonts and resources for learning and teaching Braille in multiple languages.",
};

export default function Download() {
  return (
    <main className="flex flex-1 flex-col items-center rounded-lg bg-white">
      <div className="w-full max-w-4xl">
        {/* Heading */}
        <h1 className="mb-6 text-3xl font-light text-gray-900 md:mb-8 md:text-4xl">DOWNLOAD</h1>

        {/* Content */}
        <div className="space-y-6 text-sm leading-relaxed text-gray-800 md:text-base">
          <p>
            The Tenpoints Braille project is currently in pilot stage. The tool is not yet ready
            for wide-scale roll-out. You will soon be able to download the Book, Fonts and Mobile
            PDF from here. For updates, drop us a mail at tenpointsbraille@gmail.com.
          </p>
        </div>
      </div>
    </main>
  );
}

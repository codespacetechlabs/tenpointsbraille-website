import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Tenpoints Braille, an innovative tool designed to offer the ideal solution for learning and teaching Braille in multiple languages.",
};

export default function About() {
  return (
    <main className="flex flex-1 flex-col items-center rounded-lg bg-white">
      <div className="w-full max-w-4xl">
        {/* Heading */}
        <h1 className="mb-6 text-3xl font-light text-gray-900 md:mb-8 md:text-4xl">
          ABOUT TENPOINTS BRAILLE
        </h1>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-sm leading-relaxed text-gray-800 md:text-base">
          <p>
            Tenpoints Braille is an innovative tool designed to offer the ideal solution for the
            issues confronted in learning and teaching Braille. It's an ingenious tool that makes
            it easy for anyone to read Braille, even if they don't know the language.
          </p>

          <p>
            Tenpoints Braille has been developed in multiple languages – including Indian languages
            such as Hindi, Bengali, Gujarati, Gurmukhi, Kannada, Malayalam, Oriya, Tamil and Telugu
            or international languages such as English, Spanish, German and French.
          </p>

          <p>
            It's called "Tenpoints" Braille because when you choose the font in software such as
            Adobe Illustrator, Photoshop, InDesign or Microsoft Word, then selecting ten points as
            font size prints the letters in Braille's worldwide standard size. If the size of the
            letters differs from the standardized size, then reading the Braille with fingertips
            becomes very difficult.
          </p>

          <p>
            Tenpoints Braille has been developed with the same 6-dot cells of normal Braille. The
            shape of the cells or the method to read it has been unchanged. It's the same Braille
            that has been in use for years across the world.
          </p>
        </div>
      </div>

      <hr className="my-8 mt-12 w-full border-t border-black md:mt-16 lg:mt-20" />

      {/* Founder Section */}
      <div className="w-full max-w-5xl px-4 py-4 md:px-4 md:py-4">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12 md:items-start">
          {/* Profile Image */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <Image
              src="/Rajdeep_001.avif"
              alt="Rajdeepgiri"
              width={250}
              height={250}
              className="rounded-full object-cover"
            />
          </div>

          {/* Profile Content */}
          <div className="flex-1">
            <h2 className="mb-2 text-2xl font-light text-gray-900 md:text-3xl">Rajdeepgiri</h2>
            <h3 className="mb-4 text-lg font-normal text-gray-800 md:mb-6 md:text-xl">Founder</h3>

            <div className="space-y-4 text-sm leading-relaxed text-gray-800 md:text-[14px]">
              <p>
              Hi! I'm Rajdeepgiri, a Graphic Designer from Ahmedabad, India. I have been working
              in the design field for over 16 years, and have done my time in advertising
              agencies such as Ogilvy, Leo Burnett, Publicis and more.
              </p>

              <p>
              I endeavor to use my abilities in Graphic Design to make a difference in the lives
              of others. Tenpoints Braille is my passion project, and has been in the making for
              over 5 years. Once it successfully completes, I have set my sights on yet another
              project – creating fonts in all Indian scripts for people with dyslexia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import SidebarEnglish from "@/app/components/SidebarEnglish";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English",
  description:
    "Explore Tenpoints Braille resources in English - innovative tools for learning and teaching Braille",
};

export default function EnglishLanding() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-[family-name:var(--font-quicksand)]">
      <div className="flex flex-1 gap-16 p-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[150px] mt-25">
        {/* Sidebar */}
        <aside className="flex h-1/4 w-1/3 items-center justify-center">
          <SidebarEnglish />
        </aside>

        {/* Main Content */}
        <main className="flex flex-1 flex-col items-center justify-center rounded-lg bg-white">
          {/* Video Section */}
          <div
            className="relative mb-6 h-[380px] w-[700px] overflow-hidden rounded-lg shadow-lg"
            data-playable-hook="screen-block"
            data-playable-component=""
          >
            <canvas
              className="absolute left-0 top-0 h-full w-full"
              data-playable-hook="background-canvas"
              width="700"
              height="380"
            ></canvas>
            <video
              preload="none"
              playsInline
              controls
              className="h-full w-full rounded-lg object-cover"
              src="homescreenVideo.mp4"
            ></video>
          </div>

          {/* Intro with MORE button */}
          <div className="mt-10 flex max-w-3xl items-center justify-center gap-6">
            <p className="text-justify text-base leading-relaxed text-gray-800">
              Tenpoints Braille is an innovative tool designed to offer the ideal solution for the
              issues confronted in learning and teaching Braille. It&apos;s an ingenious tool that
              makes it easy for anyone to read Braille, even if they don&apos;t know the language.
            </p>

            <button
              className="flex aspect-square w-56 select-none items-center justify-center rounded-full bg-black text-sm font-medium text-white shadow-2xl transition hover:bg-gray-300 hover:text-black"
              style={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.75)",
              }}
            >
              <Link href="/about">MORE</Link>
            </button>
          </div>

          <hr className="my-8 mt-20 w-full border-t border-black" />

          {/* Braille Comparison */}
          <div className="w-full max-w-5xl px-8 py-6">
            <div className="grid grid-cols-2 gap-16">
              <div className="flex flex-col items-center">
                <h3 className="mb-6 text-l text-gray-900">NORMAL BRAILLE</h3>
                <div className="flex w-full items-center justify-center rounded-lg bg-white p-6">
                  <Image
                    src="/normalBraille.png"
                    alt="Normal Braille pattern showing traditional 6-dot system"
                    width={400}
                    height={300}
                    className="w-full"
                    priority
                    style={{ objectFit: "contain", objectPosition: "left", height: "auto" }}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="mb-6 text-l text-gray-900">TENPOINTS BRAILLE</h3>
                <div className="flex w-full items-center justify-center rounded-lg bg-white p-6">
                  <Image
                    src="/darklogo.png"
                    alt="Tenpoints Braille showing innovative visual representation"
                    width={400}
                    height={300}
                    className="w-full"
                    priority
                    style={{ objectFit: "contain", objectPosition: "right", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <h3 className="mb-6 mt-10 text-l text-gray-900">
            TENPOINTS BRAILLE IN DIFFERENT LANGUAGES
          </h3>

          {/* Language Images Section */}
          <div className="w-full max-w-4xl px-8 py-6">
            {/* First Row - English Only */}
            <div className="mb-8 flex">
              <div className="flex flex-col items-left">
                <Image
                  src="/languages/English.png"
                  alt="English Braille"
                  width={120}
                  height={120}
                  className="mb-2"
                />
              </div>
            </div>

            {/* Second Row - 3 Languages */}
            <div className="mb-8 flex gap-16">
              <div className="flex flex-col items-center">
                <Image
                  src="/languages/Hindi.png"
                  alt="Hindi Braille"
                  width={120}
                  height={100}
                  className="mb-2"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/languages/Kannada.png"
                  alt="Bengali Braille"
                  width={120}
                  height={100}
                  className="mb-2"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/languages/Telugu.png"
                  alt="Gujarati Braille"
                  width={120}
                  height={100}
                  className="mb-2"
                />
              </div>
            </div>

            {/* Third Row - 3 Languages */}
            <div className="mb-8 flex gap-16">
              <div className="flex flex-col items-center">
                <Image
                  src="/languages/Bengali.png"
                  alt="Gurmukhi Braille"
                  width={120}
                  height={100}
                  className="mb-2"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/languages/Malayalam.png"
                  alt="Kannada Braille"
                  width={120}
                  height={100}
                  className="mb-2"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/languages/German.png"
                  alt="Malayalam Braille"
                  width={120}
                  height={100}
                  className="mb-2"
                />
              </div>
            </div>

            {/* Fourth Row - 3 Languages */}
            <div className="mb-8 flex gap-16">
              <div className="flex flex-col items-center">
                <Image
                  src="/languages/Gujarati.png"
                  alt="Oriya Braille"
                  width={120}
                  height={100}
                  className="mb-2"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/languages/Oriya.png"
                  alt="Tamil Braille"
                  width={120}
                  height={100}
                  className="mb-2"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/languages/French.png"
                  alt="Telugu Braille"
                  width={120}
                  height={100}
                  className="mb-2"
                />
              </div>
            </div>

            {/* Fifth Row - 3 Languages */}
            <div className="flex gap-16">
              <div className="flex flex-col items-center">
                <Image
                  src="/languages/Gurmukhi.png"
                  alt="German Braille"
                  width={120}
                  height={100}
                  className="mb-2"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/languages/Tamil.png"
                  alt="French Braille"
                  width={120}
                  height={100}
                  className="mb-2"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/languages/Spanish.png"
                  alt="Spanish Braille"
                  width={120}
                  height={100}
                  className="mb-2"
                />
              </div>
            </div>
          </div>

          {/* Container for language links */}
          <div className="w-full max-w-6xl px-8 py-6">
            {/* First Row - 10 Languages */}
            <div className="mb-8 flex justify-center gap-6">
              <Link
                href="/englishFont"
                className="flex flex-col items-center transition hover:opacity-70"
              >
                <span className="text-center text-sm text-gray-800">English</span>
              </Link>
              <Link
                href="/hindiFont"
                className="flex flex-col items-center transition hover:opacity-70"
              >
                <span className="text-center text-sm text-gray-800">Hindi</span>
              </Link>
              <Link
                href="/bengaliFont"
                className="flex flex-col items-center transition hover:opacity-70"
              >
                <span className="text-center text-sm text-gray-800">Bengali</span>
              </Link>
              <Link
                href="/gujaratiFont"
                className="flex flex-col items-center transition hover:opacity-70"
              >
                <span className="text-center text-sm text-gray-800">Gujarati</span>
              </Link>
              <Link
                href="/gurmukhiFont"
                className="flex flex-col items-center transition hover:opacity-70"
              >
                <span className="text-center text-sm text-gray-800">Gurmukhi</span>
              </Link>
              <Link
                href="/kannadaFont"
                className="flex flex-col items-center transition hover:opacity-70"
              >
                <span className="text-center text-sm text-gray-800">Kannada</span>
              </Link>
              <Link
                href="/malayalamFont"
                className="flex flex-col items-center transition hover:opacity-70"
              >
                <span className="text-center text-sm text-gray-800">Malayalam</span>
              </Link>
              <Link
                href="/oriyaFont"
                className="flex flex-col items-center transition hover:opacity-70"
              >
                <span className="text-center text-sm text-gray-800">Oriya</span>
              </Link>
              <Link
                href="/tamilFont"
                className="flex flex-col items-center transition hover:opacity-70"
              >
                <span className="text-center text-sm text-gray-800">Tamil</span>
              </Link>
              <Link
                href="/teluguFont"
                className="flex flex-col items-center transition hover:opacity-70"
              >
                <span className="text-center text-sm text-gray-800">Telugu</span>
              </Link>
            </div>

            {/* Second Row - 3 Languages */}
            <div className="flex justify-start gap-6">
              <div className="flex flex-col items-center transition hover:opacity-70">
                <span className="text-center text-sm text-gray-800">German</span>
              </div>
              <div className="flex flex-col items-center transition hover:opacity-70">
                <span className="text-center text-sm text-gray-800">French</span>
              </div>
              <div className="flex flex-col items-center transition hover:opacity-70">
                <span className="text-center text-sm text-gray-800">Spanish</span>
              </div>
            </div>
          </div>
          <hr className="my-8 mt-20 w-full border-t border-black" />

          {/* Three Main Sections */}
          <div className="mt-8 w-full max-w-6xl px-8 py-8">
            <div className="grid grid-cols-3 gap-8">
              {/* Book Section */}
              <div className="flex flex-col items-start">
                <div className="mb-4">
                  <Image
                    src="/book-heading.png"
                    alt="Book"
                    width={120}
                    height={40}
                    style={{ height: "auto" }}
                  />
                </div>
                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  TENPOINTS BRAILLE BOOK
                </h3>
                <p className="text-xs leading-relaxed text-gray-700">
                  The Tenpoints Braille Book gives you the power to learn Braille in any language
                  of your choice. It contains all the letters of the alphabet......
                </p>
              </div>

              {/* Font Section */}
              <div className="flex flex-col items-start border-l border-r border-gray-300 px-8">
                <div className="mb-4">
                  <Image
                    src="/font-heading.png"
                    alt="Font"
                    width={120}
                    height={40}
                    style={{ height: "auto" }}
                  />
                </div>
                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  TENPOINTS BRAILLE FONTS
                </h3>
                <p className="text-xs leading-relaxed text-gray-700">
                  The Tenpoints Braille Font has been developed in multiple language scripts. It can
                  be easily downloaded and installed in software......
                </p>
              </div>

              {/* Mobile PDF Section */}
              <div className="flex flex-col items-start">
                <div className="mb-4">
                  <Image
                    src="/mobile-pdf-heading.png"
                    alt="Mobile PDF"
                    width={120}
                    height={40}
                    style={{ height: "auto" }}
                  />
                </div>
                <h3 className="mb-2 text-base text-gray-900">
                  TENPOINTS <span className="font-semibold">MOBILE PDF</span>
                </h3>
                <p className="text-xs leading-relaxed text-gray-700">
                  The Tenpoints Braille Book is also available in pdf format. You can download......
                </p>
              </div>
            </div>
          </div>

          <hr className="my-8 mt-20 w-full border-t border-black" />

          {/* Five Feature Sections */}
          <div className="w-full max-w-6xl px-8 py-12">
            <div className="grid grid-cols-5 gap-8">
              {/* Anyone Can Teach */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 h-20 w-20">
                  <Image
                    src="/icons/teach-icon.png"
                    alt="Teaching icon"
                    width={80}
                    height={80}
                    className="h-full w-full"
                  />
                </div>
                <h4 className="text-sm font-medium uppercase text-gray-900">
                  ANYONE CAN
                  <br />
                  TEACH
                </h4>
              </div>

              {/* Anyone Can Afford */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 h-20 w-20">
                  <Image
                    src="/icons/afford-icon.png"
                    alt="Affordability icon"
                    width={80}
                    height={80}
                    className="h-full w-full"
                  />
                </div>
                <h4 className="text-sm font-medium uppercase text-gray-900">
                  ANYONE
                  <br />
                  CAN AFFORD
                </h4>
              </div>

              {/* Save 50% Paper */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 h-20 w-20">
                  <Image
                    src="/icons/paper-icon.png"
                    alt="Paper saving icon"
                    width={80}
                    height={80}
                    className="h-full w-full"
                  />
                </div>
                <h4 className="text-sm font-medium uppercase text-gray-900">
                  SAVE 50%
                  <br />
                  PAPER
                </h4>
              </div>

              {/* No Dependency on Technology */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 h-20 w-20">
                  <Image
                    src="/icons/technology-icon.png"
                    alt="Technology independence icon"
                    width={80}
                    height={80}
                    className="h-full w-full"
                  />
                </div>
                <h4 className="text-sm font-medium uppercase text-gray-900">
                  NO DEPENDENCY
                  <br />
                  ON TECHNOLOGY
                </h4>
              </div>

              {/* In Your Own Language */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 h-20 w-20">
                  <Image
                    src="/icons/letter-icon.png"
                    alt="Technology independence icon"
                    width={80}
                    height={80}
                    className="h-full w-full"
                  />
                </div>
                <h4 className="text-sm font-medium uppercase text-gray-900">
                  IN YOUR
                  <br />
                  OWN LANGUAGE
                </h4>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

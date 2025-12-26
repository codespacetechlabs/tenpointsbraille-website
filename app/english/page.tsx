import SidebarEnglish from "@/app/components/SidebarEnglish";
import Footer from "@/app/components/Footer";
import MobileNavbar from "@/app/components/MobileNavbar";
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
    <div className="min-h-screen bg-white font-[family-name:var(--font-roboto)]">
      {/* Mobile Navbar - Logo + Sticky Nav */}
      <MobileNavbar language="english" />

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:min-h-screen lg:flex-col">
        <div className="flex flex-1 p-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[150px] mt-25">
          {/* Desktop Sidebar */}
          <aside className="flex h-1/4 w-1/3 justify-center">
            <SidebarEnglish />
          </aside>

          {/* Main Content */}
          <main className="flex flex-1 flex-col justify-center rounded-lg bg-white">
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
          <div className="mt-10 flex w-[700px] justify-center gap-6">
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

          <hr className="my-8 mt-20 w-[700px] border-t border-black" />

          {/* Braille Comparison */}
          <div className="w-[700px] max-w-5xl py-6">
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col">
                <h3 className="mb-6 text-lg text-gray-900">NORMAL BRAILLE</h3>
                <div className="flex w-full rounded-lg bg-white py-6">
                  <Image
                    src="/normalBraille.png"
                    alt="Normal Braille pattern showing traditional 6-dot system"
                    width={250}
                    height={81}
                    // className="w-full"
                    priority
                    style={{ objectFit: "contain", objectPosition: "left", height: "auto" }}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="mb-6 text-lg text-gray-900">TENPOINTS BRAILLE</h3>
                <div className="flex w-full rounded-lg bg-white py-6">
                  <Image
                    src="/tenpointsBraille.png"
                    alt="Tenpoints Braille showing innovative visual representation"
                    width={250}
                    height={81}
                    // className="w-full"
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
          <div className="w-[700px] max-w-4xl py-6">
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
          <div className="w-[700px] max-w-6xl py-6">
            {/* First Row - 10 Languages */}
            <div className="mb-4 flex gap-6">
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
          <hr className="my-8 mt-12 w-[700px] border-t border-black" />

          {/* Three Main Sections */}
          <div className="mt-8 w-[700px] max-w-6xl py-8">
            <div className="grid grid-cols-3 gap-8">
              {/* Book Section */}
              <div className="flex flex-col items-start">
                <Link href="/book" className="mb-4">
                  <Image
                    src="/book-heading.png"
                    alt="Book"
                    width={120}
                    height={40}
                    style={{ height: "auto" }}
                  />
                </Link>
                
                {/* <span>TENPOINTS BRAILLE</span>
                <h3 className="mb-2 text-base font-semibold text-gray-900">
                   BOOK
                </h3> */}
                <h3 className="mb-2 text-base text-gray-900">
                  TENPOINTS BRAILLE <br></br><span className="font-semibold">BOOK</span>
                </h3>
                <p className="text-xs leading-relaxed text-gray-700">
                  The Tenpoints Braille Book gives you the power to learn Braille in any language
                  of your choice. It contains all the letters of the alphabet......
                </p>
              </div>

              {/* Font Section */}
              <div className="flex flex-col items-start border-l border-r border-gray-300 px-8">
                <Link href="/fonts" className="mb-4">
                  <Image
                    src="/font-heading.png"
                    alt="Font"
                    width={104}
                    height={35}
                    style={{ height: "auto" }}
                  />
                </Link>
                <h3 className="mb-2 text-base text-gray-900">
                  TENPOINTS BRAILLE <span className="font-semibold">FONTS</span>
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
                    width={155}
                    height={70}
                    style={{ height: "auto" }}
                  />
                </div>
                <h3 className="mb-2 text-base text-gray-900">
                  TENPOINTS BRAILLE <br></br><span className="font-semibold">MOBILE PDF</span>
                </h3>
                <p className="text-xs leading-relaxed text-gray-700">
                  The Tenpoints Braille Book is also available in pdf format. You can download......
                </p>
              </div>
            </div>
          </div>

          <hr className="my-8 mt-12 w-[700px] border-t border-black" />

          {/* Five Feature Sections */}
          <div className="w-[700px] max-w-6xl py-12">
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
                <h4 className="text-sm font-small uppercase text-gray-900">
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
                <h4 className="text-sm font-small uppercase text-gray-900">
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
                <h4 className="text-sm font-small uppercase text-gray-900">
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
                <h4 className="text-sm font-small uppercase text-gray-900">
                  NO DEPENDENCY
                  <br />
                  ON TECHNOLOGY
                </h4>
              </div>

              {/* In Your Own Language */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 h-20 w-20">
                  <Image
                    src="/icons/braille-letter-icon.png"
                    alt="Technology independence icon"
                    width={80}
                    height={80}
                    className="h-full w-full"
                  />
                </div>
                <h4 className="text-sm font-small uppercase text-gray-900">
                  IN YOUR
                  <br />
                  OWN LANGUAGE
                </h4>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Desktop Footer */}
      <Footer />
    </div>

    {/* Mobile Content - Below the sticky navbar */}
    <div className="lg:hidden">
      <div className="px-4 py-6">
        <main className="flex flex-col items-start justify-center">
        {/* Video Section */}
        <div
          className="relative mb-6 w-full max-w-[700px] aspect-video overflow-hidden rounded-lg shadow-lg"
          data-playable-hook="screen-block"
          data-playable-component=""
        >
          <canvas
            className="absolute left-0 top-0 h-full w-full"
            data-playable-hook="background-canvas"
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
        <div className="mt-6 flex flex-col items-center gap-4">
          <p className="text-justify text-sm leading-relaxed text-gray-800">
            Tenpoints Braille is an innovative tool designed to offer the ideal solution for the
            issues confronted in learning and teaching Braille. It&apos;s an ingenious tool that
            makes it easy for anyone to read Braille, even if they don&apos;t know the language.
          </p>
        </div>

        <hr className="my-6 w-full border-t border-black" />

        {/* Braille Comparison */}
        <div className="w-full px-4 py-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start">
              <h3 className="mb-4 text-sm text-gray-900">NORMAL BRAILLE</h3>
              <div className="flex w-full items-start justify-start rounded-lg bg-white py-4">
                <Image
                  src="/normalBraille.png"
                  alt="Normal Braille pattern showing traditional 6-dot system"
                  width={250}
                  height={81}
                  // className="w-full"
                  priority
                  style={{ objectFit: "contain", height: "auto" }}
                />
              </div>
            </div>

            <div className="flex flex-col items-start">
              <h3 className="mb-4 text-sm text-gray-900">TENPOINTS BRAILLE</h3>
              <div className="flex w-full items-start justify-start rounded-lg bg-white py-4">
                <Image
                  src="/tenpointsBraille.png"
                  alt="Tenpoints Braille showing innovative visual representation"
                  width={250}
                  height={81}
                  // className="w-full"
                  priority
                  style={{ objectFit: "contain", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Language Images Section - Mobile optimized grid */}
        <div className="w-full px-4 py-4">
          <h3 className="mb-4 text-md text-gray-900 text-start">
            TENPOINTS BRAILLE IN DIFFERENT LANGUAGES
          </h3>
          <div className="flex flex-col gap-3">
            {/* English */}
            <div className="flex items-start justify-between">
              <Image
                src="/languages/English.png"
                alt="English Braille"
                width={120}
                height={120}
              />
              <Link href="/englishFont" className="text-s text-gray-800 hover:opacity-70">
                English
              </Link>
            </div>
            
            {/* Hindi */}
            <div className="flex items-start justify-between">
              <Image
                src="/languages/Hindi.png"
                alt="Hindi Braille"
                width={120}
                height={120}
              />
              <Link href="/hindiFont" className="text-s text-gray-800 hover:opacity-70">
                Hindi
              </Link>
            </div>
            
            {/* Bengali */}
            <div className="flex items-start justify-between">
              <Image
                src="/languages/Bengali.png"
                alt="Bengali Braille"
                width={120}
                height={120}
              />
              <Link href="/bengaliFont" className="text-s text-gray-800 hover:opacity-70">
                Bengali
              </Link>
            </div>
            
            {/* Gujarati */}
            <div className="flex items-start justify-between">
              <Image
                src="/languages/Gujarati.png"
                alt="Gujarati Braille"
                width={120}
                height={120}
              />
              <Link href="/gujaratiFont" className="text-s text-gray-800 hover:opacity-70">
                Gujarati
              </Link>
            </div>
            
            {/* Gurmukhi */}
            <div className="flex items-start justify-between">
              <Image
                src="/languages/Gurmukhi.png"
                alt="Gurmukhi Braille"
                width={120}
                height={120}
              />
              <Link href="/gurmukhiFont" className="text-s text-gray-800 hover:opacity-70">
                Gurmukhi
              </Link>
            </div>
            
            {/* Kannada */}
            <div className="flex items-start justify-between">
              <Image
                src="/languages/Kannada.png"
                alt="Kannada Braille"
                width={120}
                height={120}
              />
              <Link href="/kannadaFont" className="text-s text-gray-800 hover:opacity-70">
                Kannada
              </Link>
            </div>
            
            {/* Malayalam */}
            <div className="flex items-start justify-between">
              <Image
                src="/languages/Malayalam.png"
                alt="Malayalam Braille"
                width={120}
                height={120}
              />
              <Link href="/malayalamFont" className="text-s text-gray-800 hover:opacity-70">
                Malayalam
              </Link>
            </div>
            
            {/* Oriya */}
            <div className="flex items-start justify-between">
              <Image
                src="/languages/Oriya.png"
                alt="Oriya Braille"
                width={120}
                height={120}
              />
              <Link href="/oriyaFont" className="text-s text-gray-800 hover:opacity-70">
                Oriya
              </Link>
            </div>
            
            {/* Tamil */}
            <div className="flex items-start justify-between">
              <Image
                src="/languages/Tamil.png"
                alt="Tamil Braille"
                width={120}
                height={120}
              />
              <Link href="/tamilFont" className="text-s text-gray-800 hover:opacity-70">
                Tamil
              </Link>
            </div>
            
            {/* Telugu */}
            <div className="flex items-start justify-between">
              <Image
                src="/languages/Telugu.png"
                alt="Telugu Braille"
                width={120}
                height={120}
              />
              <Link href="/teluguFont" className="text-s text-gray-800 hover:opacity-70">
                Telugu
              </Link>
            </div>
            
            {/* German */}
            <div className="flex items-start justify-between">
              <Image
                src="/languages/German.png"
                alt="German Braille"
                width={120}
                height={120}
              />
              <span className="text-s text-gray-800">German</span>
            </div>
            
            {/* French */}
            <div className="flex items-start justify-between">
              <Image
                src="/languages/French.png"
                alt="French Braille"
                width={120}
                height={120}
              />
              <span className="text-s text-gray-800">French</span>
            </div>
            
            {/* Spanish */}
            <div className="flex items-start justify-between">
              <Image
                src="/languages/Spanish.png"
                alt="Spanish Braille"
                width={120}
                height={120}
              />
              <span className="text-s text-gray-800">Spanish</span>
            </div>
          </div>
        </div>

        <hr className="my-6 w-full border-t border-black" />

        {/* Three Main Sections */}
        <div className="w-full px-4 py-6">
          <div className="flex flex-col gap-8">
            {/* Book Section */}
            <div className="flex flex-col items-start">
              <Link href="/book" className="mb-3">
                <Image
                  src="/book-heading.png"
                  alt="Book"
                  width={100}
                  height={33}
                  style={{ height: "auto" }}
                />
              </Link>
              <h3 className="mb-2 text-sm text-gray-900">
                TENPOINTS BRAILLE <span className="font-semibold">BOOK</span>
              </h3>
              <p className="text-xs leading-relaxed text-gray-700">
                The Tenpoints Braille Book gives you the power to learn Braille in any language
                of your choice. It contains all the letters of the alphabet......
              </p>
            </div>

            {/* Font Section */}
            <div className="flex flex-col items-start">
              <Link href="/fonts" className="mb-3">
                <Image
                  src="/font-heading.png"
                  alt="Font"
                  width={100}
                  height={33}
                  style={{ height: "auto" }}
                />
              </Link>
              <h3 className="mb-2 text-sm text-gray-900">
                TENPOINTS BRAILLE <span className="font-semibold">FONTS</span>
              </h3>
              <p className="text-xs leading-relaxed text-gray-700">
                The Tenpoints Braille Font has been developed in multiple language scripts. It can
                be easily downloaded and installed in software......
              </p>
            </div>

            {/* Mobile PDF Section */}
            <div className="flex flex-col items-start">
              <div className="mb-3">
                <Image
                  src="/mobile-pdf-heading.png"
                  alt="Mobile PDF"
                  width={100}
                  height={33}
                  style={{ height: "auto" }}
                />
              </div>
              <h3 className="mb-2 text-sm text-gray-900">
                TENPOINTS BRAILLE <span className="font-semibold">MOBILE PDF</span>
              </h3>
              <p className="text-xs leading-relaxed text-gray-700">
                The Tenpoints Braille Book is also available in pdf format. You can download......
              </p>
            </div>
          </div>
        </div>

        <hr className="my-6 w-full border-t border-black" />

        {/* Five Feature Sections */}
        <div className="w-full px-4 py-6">
          <div className="flex flex-col gap-4">
            {/* Anyone Can Teach */}
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 flex-shrink-0">
                <Image
                  src="/icons/teach-icon.png"
                  alt="Teaching icon"
                  width={64}
                  height={64}
                  className="h-full w-full"
                />
              </div>
              <h4 className="text-xs font-small uppercase text-gray-900">
                ANYONE CAN TEACH
              </h4>
            </div>

            {/* Anyone Can Afford */}
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 flex-shrink-0">
                <Image
                  src="/icons/afford-icon.png"
                  alt="Affordability icon"
                  width={64}
                  height={64}
                  className="h-full w-full"
                />
              </div>
              <h4 className="text-xs font-small uppercase text-gray-900">
                ANYONE CAN AFFORD
              </h4>
            </div>

            {/* Save 50% Paper */}
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 flex-shrink-0">
                <Image
                  src="/icons/paper-icon.png"
                  alt="Paper saving icon"
                  width={64}
                  height={64}
                  className="h-full w-full"
                />
              </div>
              <h4 className="text-xs font-small uppercase text-gray-900">
                SAVE 50% PAPER
              </h4>
            </div>

            {/* No Dependency on Technology */}
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 flex-shrink-0">
                <Image
                  src="/icons/technology-icon.png"
                  alt="Technology independence icon"
                  width={64}
                  height={64}
                  className="h-full w-full"
                />
              </div>
              <h4 className="text-xs font-small uppercase text-gray-900">
                NO DEPENDENCY ON TECHNOLOGY
              </h4>
            </div>

            {/* In Your Own Language */}
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 flex-shrink-0">
                <Image
                  src="/icons/braille-letter-icon.png"
                  alt="Language icon"
                  width={64}
                  height={64}
                  className="h-full w-full"
                />
              </div>
              <h4 className="text-xs font-small uppercase text-gray-900">
                IN YOUR OWN LANGUAGE
              </h4>
            </div>
          </div>
        </div>
        </main>
      </div>
      
      {/* Mobile Footer */}
      <Footer />
    </div>
  </div>
);
}

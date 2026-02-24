import SidebarHindi from "@/app/components/SidebarHindi";
import Footer from "@/app/components/Footer";
import MobileNavbar from "@/app/components/MobileNavbar";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "हिंदी - टेनपॉइंट्स ब्रेल",
  description:
    "हिंदी में टेनपॉइंट्स ब्रेल संसाधनों का अन्वेषण करें - ब्रेल सीखने और सिखाने के लिए नवीन उपकरण",
};

export default function HindiLanding() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-mukta)]">
      {/* Mobile Navbar - Logo + Sticky Nav */}
      <MobileNavbar language="hindi" />

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:min-h-screen lg:flex-col">
        <div className="flex flex-1 p-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[150px] mt-25">
          {/* Desktop Sidebar */}
          <aside className="flex h-1/4 w-1/3 items-center justify-center">
            <SidebarHindi />
          </aside>

          {/* Main Content */}
          <main className="flex flex-1 flex-col items-start justify-center rounded-lg bg-white">
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
              टेनपॉइंटस ब्रेल की रचना किसी भी व्यक्ति को तकनीक या विशेष ज्ञान के बिना ब्रेल सीखने
              और सिखाने के लिए की गई है। यह एक सरल उपकरण है जो किसी के लिए भी ब्रेल पढ़ना आसान
              बनाता है।
            </p>

            <button
              className="flex aspect-square w-36 select-none items-center justify-center rounded-full bg-black text-sm font-medium text-white shadow-2xl transition hover:bg-gray-300 hover:text-black"
              style={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.75)",
              }}
            >
              <Link href="/vishesh">अधिक</Link>
            </button>
          </div>

          <hr className="my-8 mt-20 w-[700px] border-t border-black" />

          {/* Braille Comparison */}
          <div className="w-[700px] max-w-5xl py-6">
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col">
                <h3 className="mb-6 text-xl text-gray-900">सामान्य ब्रेल</h3>
                <div className="flex w-full rounded-lg bg-white py-6">
                  <Image
                    src="/normalBraille.png"
                    alt="Normal Braille pattern showing traditional 6-dot system"
                    width={250}
                    height={81}
                    priority
                    style={{ objectFit: "contain", objectPosition: "left", height: "auto" }}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="mb-6 text-xl text-gray-900">टेनपॉइंटस ब्रेल</h3>
                <div className="flex w-full rounded-lg bg-white py-6">
                  <Image
                    src="/tenpointsBraille.png"
                    alt="Tenpoints Braille showing innovative visual representation"
                    width={250}
                    height={81}
                    priority
                    style={{ objectFit: "contain", objectPosition: "right", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <h3 className="mb-6 mt-10 text-xl text-gray-900">टेनपॉइंटस ब्रेल विभिन्न भाषाओं में</h3>

          {/* Language Images Section */}
          <div className="w-[700px] max-w-4xl py-6">
            {/* Grid layout with 3 columns */}
            <div className="grid grid-cols-3 gap-x-16 gap-y-4">
              {/* English */}
              <div className="flex flex-col items-start">
                <Image
                  src="/languages/English.png"
                  alt="English Braille"
                  width={180}
                  height={30}
                  style={{ height: "30px", width: "auto" }}
                  // className="mb-2"
                />
              </div>

              {/* Empty cells for alignment */}
              <div></div>
              <div></div>

              {/* Hindi */}
              <div className="flex flex-col items-start">
                <Image
                  src="/languages/Hindi.png"
                  alt="Hindi Braille"
                  width={153}
                  height={30}
                  // className="mb-2"
                  style={{ height: "30px", width: "auto" }}
                />
              </div>

              {/* Kannada */}
              <div className="flex flex-col items-start">
                <Image
                  src="/languages/Kannada.png"
                  alt="Kannada Braille"
                  width={126}
                  height={30}
                  // className="mb-2"
                  style={{ height: "30px", width: "auto" }}
                />
              </div>

              {/* Telugu */}
              <div className="flex flex-col items-start">
                <Image
                  src="/languages/Telugu.png"
                  alt="Telugu Braille"
                  width={153}
                  height={30}
                  // className="mb-2"
                  style={{ height: "30px", width: "auto" }}
                />
              </div>

              {/* Bengali */}
              <div className="flex flex-col items-start">
                <Image
                  src="/languages/Bengali.png"
                  alt="Bengali Braille"
                  width={156}
                  height={30}
                  // className="mb-2"
                  style={{ height: "30px", width: "auto" }}
                />
              </div>

              {/* Malayalam */}
              <div className="flex flex-col items-start">
                <Image
                  src="/languages/Malayalam.png"
                  alt="Malayalam Braille"
                  width={158}
                  height={30}
                  // className="mb-2"
                  style={{ height: "30px", width: "auto" }}
                />
              </div>

              {/* German */}
              <div className="flex flex-col items-start">
                <Image
                  src="/languages/German.png"
                  alt="German Braille"
                  width={206}
                  height={30}
                  // className="mb-2"
                  style={{ height: "30px", width: "auto" }}
                />
              </div>

              {/* Gujarati */}
              <div className="flex flex-col items-start">
                <Image
                  src="/languages/Gujarati.png"
                  alt="Gujarati Braille"
                  width={180}
                  height={30}
                  // className="mb-2"
                  style={{ height: "30px", width: "auto" }}
                />
              </div>

              {/* Oriya */}
              <div className="flex flex-col items-start">
                <Image
                  src="/languages/Oriya.png"
                  alt="Oriya Braille"
                  width={126}
                  height={30}
                  // className="mb-2"
                  style={{ height: "30px", width: "auto" }}
                />
              </div>

              {/* French */}
              <div className="flex flex-col items-start">
                <Image
                  src="/languages/French.png"
                  alt="French Braille"
                  width={206}
                  height={30}
                  style={{ height: "30px", width: "auto" }}
                  // className="mb-2"
                />
              </div>

              {/* Gurmukhi */}
              <div className="flex flex-col items-start">
                <Image
                  src="/languages/Gurmukhi.png"
                  alt="Gurmukhi Braille"
                  width={206}
                  height={30}
                  style={{ height: "30px", width: "auto" }}
                />
              </div>

              {/* Tamil */}
              <div className="flex flex-col items-start">
                <Image
                  src="/languages/Tamil.png"
                  alt="Tamil Braille"
                  width={125}
                  height={30}
                  style={{ height: "30px", width: "auto" }}
                  // className="mb-2"
                />
              </div>

              {/* Spanish */}
              <div className="flex flex-col items-start">
                <Image
                  src="/languages/Spanish.png"
                  alt="Spanish Braille"
                  width={176}
                  height={30}
                  style={{ height: "30px", width: "auto" }}
                  // className="mb-2"
                />
              </div>
            </div>
          </div>

          {/* Container for language links */}
          <div className="w-[700px] max-w-6xl py-6">
            {/* First Row - 10 Languages */}
            <div className="mb-4 flex gap-x-9">
              <Link
                href="/englishFont"
                className="flex flex-col items-center transition hover:opacity-70"
              >
                <span className="text-center text-md text-gray-800">अंग्रेजी</span>
              </Link>
              <Link
                href="/hindiFont"
                className="flex flex-col items-center transition hover:opacity-70"
              >
                <span className="text-center text-md text-gray-800">हिंदी</span>
              </Link>
              <Link
                href="/bengaliFont"
                className="flex flex-col items-center transition hover:opacity-70"
              >
                <span className="text-center text-md text-gray-800">बंगाली</span>
              </Link>
              <Link
                href="/gujaratiFont"
                className="flex flex-col items-center transition hover:opacity-70"
              >
                <span className="text-center text-md text-gray-800">गुजराती</span>
              </Link>
              <Link
                href="/gurmukhiFont"
                className="flex flex-col items-center transition hover:opacity-70"
              >
                <span className="text-center text-md text-gray-800">गुरुमुखी</span>
              </Link>
              <Link
                href="/kannadaFont"
                className="flex flex-col items-center transition hover:opacity-70"
              >
                <span className="text-center text-md text-gray-800">कन्नड़</span>
              </Link>
              <Link
                href="/malayalamFont"
                className="flex flex-col items-center transition hover:opacity-70"
              >
                <span className="text-center text-md text-gray-800">मलयालम</span>
              </Link>
              <Link
                href="/oriyaFont"
                className="flex flex-col items-center transition hover:opacity-70"
              >
                <span className="text-center text-md text-gray-800">उड़िया</span>
              </Link>
              <Link
                href="/tamilFont"
                className="flex flex-col items-center transition hover:opacity-70"
              >
                <span className="text-center text-md text-gray-800">तमिल</span>
              </Link>
              <Link
                href="/teluguFont"
                className="flex flex-col items-center transition hover:opacity-70"
              >
                <span className="text-center text-md text-gray-800">तेलुगु</span>
              </Link>
            </div>

            {/* Second Row - 3 Languages */}
            <div className="flex justify-start gap-x-10">
              <div className="flex flex-col items-center transition hover:opacity-70">
                <span className="text-center text-md text-gray-800">जर्मन</span>
              </div>
              <div className="flex flex-col items-center transition hover:opacity-70">
                <span className="text-center text-md text-gray-800">फ़्रेंच</span>
              </div>
              <div className="flex flex-col items-center transition hover:opacity-70">
                <span className="text-center text-md text-gray-800">स्पैनिश</span>
              </div>
            </div>
          </div>
          <hr className="my-8 mt-12 w-[700px] border-t border-black" />

          {/* Three Main Sections */}
          <div className="mt-8 w-[700px] max-w-6xl py-8">
            <div className="grid grid-cols-3 gap-8">
              {/* Book Section */}
              <div className="flex flex-col items-start">
                <Link href="/pustak" className="mb-4">
                  <Image
                    src="/book-heading.png"
                    alt="Book"
                    width={103}
                    height={35}
                    style={{ height: "auto" }}
                  />
                </Link>
                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  टेनपॉइंटस ब्रेल पुस्तक
                </h3>
                <p className="text-xs leading-relaxed text-gray-700">
                  टेनपॉइंटस ब्रेल किताब आपको अपनी पसंद की किसी भी भाषा में ब्रेल सिखने में मदद
                  करती है। इसमें वर्णमाला......
                </p>
              </div>

              {/* Font Section */}
              <div className="flex flex-col items-start border-l border-r border-gray-300 px-8">
                <Link href="/hindifonts" className="mb-4">
                  <Image
                    src="/font-heading.png"
                    alt="Font"
                    width={104}
                    height={35}
                    style={{ height: "auto" }}
                  />
                </Link>
                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  टेनपॉइंटस ब्रेल फोंट्स
                </h3>
                <p className="text-xs leading-relaxed text-gray-700">
                  टेनपॉइंटस ब्रेल फ़ॉन्ट को कई लिपियों में विकसित किया गया है। इसे सॉफ्टवेयर में
                  आसानी से डाउनलोड और इंस्टॉल......
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
                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  टेनपॉइंटस ब्रेल पीडीएफ
                </h3>
                <p className="text-xs leading-relaxed text-gray-700">
                  टेनपॉइंटस ब्रेल किताब पीडीएफ में भी उपलब्ध है। आप पीडीऍफ़ को एक बार डाउनलोड.....
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
                  कोई भी
                  <br />
                  सिखा सकता है
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
                  कोई भी खरीद
                  <br />
                  सकता है
                </h4>
              </div>

              {/* Save 50% Paper */}
              {/* <div className="flex flex-col items-center text-center">
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
                  50% कागज़
                  <br />
                  बचाती है
                </h4>
              </div> */}

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
                  टैकनोलजी पर
                  <br />
                  निर्भरता नहीं
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
                  आपकी अपनी
                  <br />
                  भाषा में
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
            टेनपॉइंटस ब्रेल की रचना किसी भी व्यक्ति को तकनीक या विशेष ज्ञान के बिना ब्रेल सीखने
            और सिखाने के लिए की गई है। यह एक सरल उपकरण है जो किसी के लिए भी ब्रेल पढ़ना आसान
            बनाता है।
          </p>

          {/* <Link href="/vishesh">
            <button
              className="w-28 h-28 select-none flex items-center justify-center rounded-full bg-black text-sm font-medium text-white shadow-2xl transition hover:bg-gray-300 hover:text-black"
              style={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.75)",
              }}
            >
              अधिक
            </button>
          </Link> */}
        </div>

        <hr className="my-6 w-full border-t border-black" />

        {/* Braille Comparison */}
        <div className="w-full px-4 py-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start">
              <h3 className="mb-4 text-sm text-gray-900">सामान्य ब्रेल</h3>
              <div className="flex w-full items-start justify-start rounded-lg bg-white py-4">
                <Image
                  src="/normalBraille.png"
                  alt="Normal Braille pattern showing traditional 6-dot system"
                  width={250}
                  height={81}
                  priority
                  style={{ objectFit: "contain", height: "auto" }}
                />
              </div>
            </div>

            <div className="flex flex-col items-start">
              <h3 className="mb-4 text-sm text-gray-900">टेनपॉइंटस ब्रेल</h3>
              <div className="flex w-full items-start justify-start rounded-lg bg-white py-4">
                <Image
                  src="/tenpointsBraille.png"
                  alt="Tenpoints Braille showing innovative visual representation"
                  width={250}
                  height={81}
                  priority
                  style={{ objectFit: "contain", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>


        {/* Language Images Section - Mobile optimized grid */}
        <div className="w-full px-4 py-4">
          <h3 className="mb-4 text-lg text-gray-900 text-start">टेनपॉइंटस ब्रेल विभिन्न भाषाओं में</h3>
          <div className="flex flex-col gap-4">
            {/* English */}
            <div className="flex items-center gap-4">
              <div className="w-24 flex-shrink-0">
                <Link href="/englishFont" className="text-md font-small uppercase text-gray-800 hover:opacity-70">
                  अंग्रेजी
                </Link>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/languages/English.png"
                  alt="English Braille"
                  width={100}
                  height={24}
                  style={{ height: '24px', width: 'auto' }}
                />
              </div>
            </div>
            
            {/* Hindi */}
            <div className="flex items-center gap-4">
              <div className="w-24 flex-shrink-0">
                <Link href="/hindiFont" className="text-md font-small uppercase text-gray-800 hover:opacity-70">
                  हिंदी
                </Link>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/languages/Hindi.png"
                  alt="Hindi Braille"
                  width={100}
                  height={24}
                  style={{ height: '24px', width: 'auto' }}
                />
              </div>
            </div>
            
            {/* Bengali */}
            <div className="flex items-center gap-4">
              <div className="w-24 flex-shrink-0">
                <Link href="/bengaliFont" className="text-md font-small uppercase text-gray-800 hover:opacity-70">
                  बंगाली
                </Link>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/languages/Bengali.png"
                  alt="Bengali Braille"
                  width={100}
                  height={24}
                  style={{ height: '24px', width: 'auto' }}
                />
              </div>
            </div>
            
            {/* Gujarati */}
            <div className="flex items-center gap-4">
              <div className="w-24 flex-shrink-0">
                <Link href="/gujaratiFont" className="text-md font-small uppercase text-gray-800 hover:opacity-70">
                  गुजराती
                </Link>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/languages/Gujarati.png"
                  alt="Gujarati Braille"
                  width={100}
                  height={24}
                  style={{ height: '24px', width: 'auto' }}
                />
              </div>
            </div>
            
            {/* Gurmukhi */}
            <div className="flex items-center gap-4">
              <div className="w-24 flex-shrink-0">
                <Link href="/gurmukhiFont" className="text-md font-small uppercase text-gray-800 hover:opacity-70">
                  गुरुमुखी
                </Link>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/languages/Gurmukhi.png"
                  alt="Gurmukhi Braille"
                  width={100}
                  height={24}
                  style={{ height: '24px', width: 'auto' }}
                />
              </div>
            </div>
            
            {/* Kannada */}
            <div className="flex items-center gap-4">
              <div className="w-24 flex-shrink-0">
                <Link href="/kannadaFont" className="text-md font-small uppercase text-gray-800 hover:opacity-70">
                  कन्नड़
                </Link>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/languages/Kannada.png"
                  alt="Kannada Braille"
                  width={100}
                  height={24}
                  style={{ height: '24px', width: 'auto' }}
                />
              </div>
            </div>
            
            {/* Malayalam */}
            <div className="flex items-center gap-4">
              <div className="w-24 flex-shrink-0">
                <Link href="/malayalamFont" className="text-md font-small uppercase text-gray-800 hover:opacity-70">
                  मलयालम
                </Link>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/languages/Malayalam.png"
                  alt="Malayalam Braille"
                  width={100}
                  height={24}
                  style={{ height: '24px', width: 'auto' }}
                />
              </div>
            </div>
            
            {/* Oriya */}
            <div className="flex items-center gap-4">
              <div className="w-24 flex-shrink-0">
                <Link href="/oriyaFont" className="text-md font-small uppercase text-gray-800 hover:opacity-70">
                  उड़िया
                </Link>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/languages/Oriya.png"
                  alt="Oriya Braille"
                  width={100}
                  height={24}
                  style={{ height: '24px', width: 'auto' }}
                />
              </div>
            </div>
            
            {/* Tamil */}
            <div className="flex items-center gap-4">
              <div className="w-24 flex-shrink-0">
                <Link href="/tamilFont" className="text-md font-small uppercase text-gray-800 hover:opacity-70">
                  तमिल
                </Link>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/languages/Tamil.png"
                  alt="Tamil Braille"
                  width={100}
                  height={24}
                  style={{ height: '24px', width: 'auto' }}
                />
              </div>
            </div>
            
            {/* Telugu */}
            <div className="flex items-center gap-4">
              <div className="w-24 flex-shrink-0">
                <Link href="/teluguFont" className="text-md font-small uppercase text-gray-800 hover:opacity-70">
                  तेलुगु
                </Link>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/languages/Telugu.png"
                  alt="Telugu Braille"
                  width={100}
                  height={24}
                  style={{ height: '24px', width: 'auto' }}
                />
              </div>
            </div>
            
            {/* German */}
            <div className="flex items-center gap-4">
              <div className="w-24 flex-shrink-0">
                <span className="text-md font-small uppercase text-gray-800">जर्मन</span>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/languages/German.png"
                  alt="German Braille"
                  width={100}
                  height={24}
                  style={{ height: '24px', width: 'auto' }}
                />
              </div>
            </div>
            
            {/* French */}
            <div className="flex items-center gap-4">
              <div className="w-24 flex-shrink-0">
                <span className="text-md font-small uppercase text-gray-800">फ़्रेंच</span>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/languages/French.png"
                  alt="French Braille"
                  width={100}
                  height={24}
                  style={{ height: '24px', width: 'auto' }}
                />
              </div>
            </div>
            
            {/* Spanish */}
            <div className="flex items-center gap-4">
              <div className="w-24 flex-shrink-0">
                <span className="text-md font-small uppercase text-gray-800">स्पैनिश</span>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/languages/Spanish.png"
                  alt="Spanish Braille"
                  width={100}
                  height={24}
                  style={{ height: '24px', width: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 w-full border-t border-black" />

        {/* Three Main Sections */}
        <div className="w-full px-4 py-6">
          <div className="flex flex-col gap-8">
            {/* Book Section */}
            <div className="flex flex-col items-start">
              <Link href="/pustak" className="mb-3">
                <Image
                  src="/book-heading.png"
                  alt="Book"
                  width={100}
                  height={44}
                  // style={{ height: "auto" }}
                  style={{ height: '44px', width: 'auto' }}
                />
              </Link>
              <h3 className="mb-2 text-sm font-semibold text-gray-900">
                टेनपॉइंटस ब्रेल पुस्तक
              </h3>
              <p className="text-xs leading-relaxed text-gray-700">
                टेनपॉइंटस ब्रेल किताब आपको अपनी पसंद की किसी भी भाषा में ब्रेल सिखने में मदद
                करती है। इसमें वर्णमाला......
              </p>
            </div>

            {/* Font Section */}
            <div className="flex flex-col items-start">
              <Link href="/hindifonts" className="mb-3">
                <Image
                  src="/font-heading.png"
                  alt="Font"
                  width={100}
                  height={44}
                  // style={{ height: "auto" }}
                  style={{ height: '44px', width: 'auto' }}
                />
              </Link>
              <h3 className="mb-2 text-sm font-semibold text-gray-900">
                टेनपॉइंटस ब्रेल फोंट्स
              </h3>
              <p className="text-xs leading-relaxed text-gray-700">
                टेनपॉइंटस ब्रेल फ़ॉन्ट को कई लिपियों में विकसित किया गया है। इसे सॉफ्टवेयर में
                आसानी से डाउनलोड और इंस्टॉल......
              </p>
            </div>

            {/* Mobile PDF Section */}
            <div className="flex flex-col items-start">
              <div className="mb-3">
                <Image
                  src="/mobile-pdf-heading.png"
                  alt="Mobile PDF"
                  width={100}
                  height={90}
                  style={{ height: '90px', width: 'auto' }}
                />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-gray-900">
                टेनपॉइंटस ब्रेल पीडीएफ
              </h3>
              <p className="text-xs leading-relaxed text-gray-700">
                टेनपॉइंटस ब्रेल किताब पीडीएफ में भी उपलब्ध है। आप पीडीऍफ़ को एक बार डाउनलोड.....
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
                कोई भी सिखा सकता है
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
                कोई भी खरीद सकता है
              </h4>
            </div>

            {/* Save 50% Paper */}
            {/* <div className="flex items-center gap-4">
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
                50% कागज़ बचाती है
              </h4>
            </div> */}

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
                टैकनोलजी पर निर्भरता नहीं
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
                आपकी अपनी भाषा में
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

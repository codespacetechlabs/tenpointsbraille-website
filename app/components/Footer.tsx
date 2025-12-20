// components/Footer.tsx
import React from "react";
import Link from "next/link";

const links = [
  { en: "ABOUT", hi: "विशेष", hiSlug: "vishesh" },
  { en: "BOOK", hi: "पुस्तक", hiSlug: "pustak" },
  { en: "FONTS", hi: "फोंट्स", hiSlug: "hindifonts" },
  { en: "HOW TO USE", hi: "उपयोग", hiSlug: "upyog" },
  { en: "DOWNLOAD", hi: "डाउनलोड", hiSlug: "hindidownload" },
  { en: "CONTACT", hi: "संपर्क", hiSlug: "sampark" },
];

function toPath(text: string) {
  // Convert to lowercase, remove spaces, URI-encode for safety
  return "/" + encodeURIComponent(text.replace(/\s+/g, "").toLowerCase());
}

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8">
      <div className="flex justify-center gap-12">
        {links.map((link, idx) => (
          <div key={idx} className="text-center">
            <div className="text font-normal mt-4">
                <Link href={toPath(link.en)} passHref>
                    {link.en}
                </Link>

            </div>
            <div className="text font-normal mt-8">
                <Link href={toPath(link.hiSlug)} passHref>
                    {link.hi}
                </Link>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}

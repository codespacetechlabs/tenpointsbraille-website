import React from "react";
import Link from "next/link";
import { FOOTER_LINKS } from "@/app/lib/constants";
import { toPath } from "@/app/lib/utils";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8">
      <div className="flex justify-center gap-12">
        {FOOTER_LINKS.map((link, idx) => (
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

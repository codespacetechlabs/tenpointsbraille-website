import Image from "next/image";
import React from "react";

interface BrailleComparisonProps {
  title: string;
  description?: string;
}

export default function BrailleComparison({ title, description }: BrailleComparisonProps) {
  return (
    <>
      <hr className="my-8 mt-12 w-full border-t border-black font-medium md:mt-16 lg:mt-20" />
      <div className="w-full max-w-5xl px-4 py-6 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          {/* Normal Braille Column */}
          <div className="flex flex-col items-center">
            <h3 className="mb-4 text-sm text-gray-900 md:mb-6 md:text-base lg:text-lg">
              {title === "NORMAL BRAILLE" ? "NORMAL BRAILLE" : "सामान्य ब्रेल"}
            </h3>
            <div className="flex w-full items-center justify-center rounded-lg bg-white p-4 md:p-6">
              <Image
                src="/normalBraille.png"
                alt="Normal Braille pattern showing traditional 6-dot system"
                width={400}
                height={300}
                className="h-auto w-full"
                priority
                style={{ objectFit: "contain", objectPosition: "left" }}
              />
            </div>
          </div>

          {/* Tenpoints Braille Column */}
          <div className="flex flex-col items-center">
            <h3 className="mb-4 text-sm text-gray-900 md:mb-6 md:text-base lg:text-lg">
              {title === "TENPOINTS BRAILLE" ? "TENPOINTS BRAILLE" : "टेनपॉइंटस ब्रेल"}
            </h3>
            <div className="flex w-full items-center justify-center rounded-lg bg-white p-4 md:p-6">
              <Image
                src="/tenpointsBraille.png"
                alt="Tenpoints Braille showing innovative visual representation"
                width={400}
                height={300}
                className="h-auto w-full"
                priority
                style={{ objectFit: "contain", objectPosition: "right" }}
              />
            </div>
          </div>
        </div>
      </div>
      {description && (
        <h3 className="mb-4 mt-6 text-sm text-gray-900 md:mb-6 md:mt-10 md:text-base lg:text-lg">
          {description}
        </h3>
      )}
    </>
  );
}

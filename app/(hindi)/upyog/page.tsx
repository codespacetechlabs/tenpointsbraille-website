import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "उपयोग",
  description: "टेनपॉइंटस ब्रेल का उपयोग कैसे करें",
};

export default function Upyog() {
  return (
    <main className="flex flex-1 flex-col items-center rounded-lg bg-white">
      <div className="w-full max-w-4xl">
        <h1 className="mb-6 text-3xl font-light text-gray-900 md:mb-8 md:text-4xl">
          टेनपॉइंटस पुस्तक का उपयोग
        </h1>

        <div className="space-y-6 text-sm leading-relaxed text-gray-800 md:text-base">
          <p>
                टेनपॉइंटस पुस्तक ब्रेल का उपयोग जानने के लिये नीचे दिया गया वीडियो देखें।
              </p>
            </div>
            <div
            className="relative w-[700px] h-[380px] mb-6 overflow-hidden rounded-lg shadow-lg mt-20"
            data-playable-hook="screen-block"
            data-playable-component=""
          >
            <canvas
              className="absolute top-0 left-0 w-full h-full"
              data-playable-hook="background-canvas"
              width="700"
              height="380"
            ></canvas>
            <video
              preload="none"
              playsInline
              controls
              className="w-full h-full object-cover rounded-lg"
              src="/howtouse.mp4"
            ></video>
          </div>
          <hr className="my-8 mt-20 w-full border-t border-black font-medium" />
          <h1 className="text-4xl font-light mb-8 text-gray-900">
              टेनपॉइंटस फोंट्स का उपयोग
            </h1>
            
            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-800 leading-relaxed">
              <p className="text-sm">
                टेनपॉइंटस ब्रेल फोंट्स का उपयोग जानने के लिये नीचे दिया गया वीडियो देखें।
              </p>
            </div>
            <div
            className="relative w-[700px] h-[380px] mb-6 overflow-hidden rounded-lg shadow-lg mt-20"
            data-playable-hook="screen-block"
            data-playable-component=""
          >
            <canvas
              className="absolute top-0 left-0 w-full h-full"
              data-playable-hook="background-canvas"
              width="700"
              height="380"
            ></canvas>
            <video
              preload="none"
              playsInline
              controls
              className="w-full h-full object-cover rounded-lg"
              src="/howtouse.mp4"
            ></video>
          </div>
      </div>
    </main>
  );
}

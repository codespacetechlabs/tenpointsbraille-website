import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "विशेष",
  description: "टेनपॉइंटस ब्रेल के बारे में जानकारी",
};

export default function Vishesh() {
  return (
    <main className="flex flex-1 flex-col items-center rounded-lg bg-white">
      <div className="w-full max-w-4xl">
        {/* Heading */}
        <h1 className="mb-6 text-3xl font-light text-gray-900 md:mb-8 md:text-4xl">
              टेनपॉइंटस ब्रेल के बारे में
        </h1>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-sm leading-relaxed text-gray-800 md:text-base">
          <p>
            टेनपॉइंटस ब्रेल की रचना किसी भी व्यक्ति को तकनीक या विशेष ज्ञान के बिना ब्रेल सीखने और सिखाने के लिए की गई है। यह एक सरल उपकरण है जो किसी के लिए भी ब्रेल पढ़ना आसान बनाता है।
          </p>

          <p className="text-sm">
            टेनपॉइंटस ब्रेल को कई भाषाओं में विकसित किया गया है - जिसमें अंग्रेजी, हिंदी, बंगाली, गुजराती, गुरुमुखी, कन्नड़, मलयालम, उड़िया, तमिल, तेलुगु और अंतर्राष्ट्रीय भाषाएं जैसे  स्पेनिश, जर्मन और फ्रेंच शामिल हैं।
          </p>

          <p className="text-sm">
            इसे "टेनपॉइंटस" ब्रेल इसलिए कहा जाता है क्योंकि जब आप किसी सॉफ़्टवेयर जैसे Adobe Illustrator, Adobe Photoshop, Adobe InDesign या Microsoft Word में टेनपॉइंटस ब्रेल फ़ॉन्ट चुनकर 10pt फ़ॉन्ट साइज़ लेते है, तो ब्रेल का विश्वव्यापी निर्धारित माप छपता है। यदि अक्षरों का आकार विश्वव्यापी मान्य आकार से भिन्न हो जाये तो ब्रेल को उंगलियों से पढ़ना बहुत मुश्किल हो जाता है।
          </p>

          <p className="text-sm">
            टेनपॉइंटस ब्रेल को सामान्य ब्रेल के 6 बिन्दुओ से विकसित किया गया है। बिंदुओंके आकार या इसे पढ़ने की विधि मैं कोई बदलाव नहीं किया गया है। यह वही ब्रेल है जो दुनिया भर में वर्षों से उपयोग में है।
          </p>
        </div>
      </div>

      <hr className="my-8 mt-12 w-full border-t border-black" />

          {/* Founder Section */}
      <div className="w-full max-w-5xl px-8 py-12">
        <div className="flex gap-12 items-start">
          {/* Profile Image */}
          <div className="flex-shrink-0">
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
            <h2 className="text-3xl font-light mb-2 text-gray-900">राजदीपगिरी</h2>
            <h3 className="text-xl font-normal mb-6 text-gray-800">रचयिता</h3>

            <div className="space-y-4 text-gray-800 leading-relaxed">
              <p className="text-sm">
                नमस्ते! मैं राजदीपगिरी, एक ग्राफिक डिजाइनर हूं भारत के अहमदाबाद शहर से। मैं 16 साल से डिजाइन क्षेत्र में काम कर रहा हूं, और मैंने विज्ञापन एजेंसियों जैसे ओगिल्वी, लियो बर्नेट, पब्लिसिस और बहुत सारी कंपनियों में काम किया है।
              </p>

              <p className="text-sm">
                मैं अपनी डिज़ाइन क्षमताओं से दूसरों के जीवन में बदलाव लाने का प्रयास करता हूं। मुझे टेनपॉइंटस ब्रेल बनाने में 5 साल से ज्यादा समय लगा हैं। जब यह प्रोजेक्ट सफलतापूर्वक पूरा हो जाता है, तब मैं डिस्लेक्सिया वाले लोगों के लिए सभी भारतीय लिपियों में फ़ॉन्टस बनाना चाहता हु।
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "डाउनलोड",
  description: "टेनपॉइंटस ब्रेल डाउनलोड करें",
};

export default function HindiDownload() {
  return (
    <main className="flex flex-1 flex-col items-center rounded-lg bg-white">
      <div className="w-full max-w-4xl">
        {/* Heading */}
        <h1 className="mb-6 text-3xl font-light text-gray-900 md:mb-8 md:text-4xl">डाउनलोड</h1>

        {/* Content */}
        <div className="space-y-6 text-sm leading-relaxed text-gray-800 md:text-base">
          <p>
                टेनपॉइंटस ब्रेल परियोजना फिलहाल प्रायोगिक चरण में है। व्यापक पैमाने पर उपकरण अभी तैयार नहीं है। आप जल्द ही यहां से टेनपॉइंटस पुस्तक, फोंट्स और मोबाइल पीडीएफ डाउनलोड कर पायेंगे। अधिक जानकारी के लिए, हमें tenpointbraille@gmail.com पर एक ईमेल लिखिये।
          </p>
        </div>
      </div>
    </main>
  );
}

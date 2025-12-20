import SidebarHindi from '@/app/components/SidebarHindi'; // Adjust the path if needed
import Footer from '@/app/components/Footer'; // Adjust the path if needed
import Image from 'next/image';

export default function about() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main content area */}
      <div className="flex flex-1 p-8 gap-8">
        {/* Sidebar */}
        <aside className="w-1/3 h-1/4 flex items-center justify-center">
          <SidebarHindi />
        </aside>
        {/* About content */}
        <main className="flex-1 flex flex-col items-center justify-center bg-white rounded-lg mt-30">
          <div className="max-w-4xl">
            {/* Heading */}
            <h1 className="text-4xl font-light mb-8 text-gray-900">
              पुस्तक
            </h1>
            
            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-800 leading-relaxed">
              <p className="text-sm">
                टेनपॉइंटस ब्रेल पुस्तक आपको अपनी पसंद की किसी भी भाषा में ब्रेल सिखने में मदद करती है। इसमें वर्णमाला के सभी अक्षर, संख्या, विराम चिह्न और विशेष वर्ण शामिल हैं। टेनपॉइंटस ब्रेल को इस्तेमाल करने के निर्देश भी इस पुस्तक मैं दिए गए है।इससे काले और सफ़ेद रंग मैं इसलिए बनाया गया है क्यूंकी आप इससे अपने घर मैं या बहार कम से काम दाम में छपवा सकते। कोई भी एक भाषा सिखने के लिए आप को पूरी पुस्तक छपवाने की जरुरत नहीं है। आपको जो भी भाषा सीखनी हो उसका मात्रा एक पन्ना छपवाने से आप उस भाषा को पूरी तरीके से सिख सकते हैं।
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
              src="/bookVideo.mp4"
            ></video>
          </div>
          </div>
        </main>

      </div>
      {/* Footer */}
      <footer >
        <Footer />
      </footer>
    </div>
  );
}

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
        <main className="flex-1 flex flex-col items-center mt-40 bg-white rounded-lg ">
          <div className="max-w-4xl">
            {/* Heading */}
            <h1 className="text-4xl font-light mb-8 text-gray-900">
              डाउनलोड
            </h1>
            
            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-800 leading-relaxed">
              <p className="text-sm">
                टेनपॉइंटस ब्रेल परियोजना फिलहाल प्रायोगिक चरण में है। व्यापक पैमाने पर उपकरण अभी तैयार नहीं है। आप जल्द ही यहां से टेनपॉइंटस पुस्तक, फोंट्स और मोबाइल पीडीएफ डाउनलोड कर पायेंगे। अधिक जानकारी के लिए, हमें tenpointbraille@gmail.com पर एक ईमेल लिखिये।
              </p>
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

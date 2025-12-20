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
        <main className="flex-1 flex flex-col items-center justify-center mt-40 bg-white rounded-lg ">
          <div className="max-w-4xl">
            {/* Heading */}
            <h1 className="text-4xl font-light mb-8 text-gray-900">
              संपर्क
            </h1>
            
            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-800 leading-relaxed">
              <p className="text-sm">
                हम टेनपॉइंटस ब्रेल को पूरे पैमाने पर बाजार में लाने के लिए पर्याप्त धन की प्रतीक्षा कर रहे हैं। यदि आप रुचि रखते हैं, और हमारी यात्रा का हिस्सा बनना चाहते हैं, तो आप किसी भी छोटे से योगदान से हमारी मदद कर सकते हैं।
              </p>
            </div>

            {/* Contact Form */}
            <form className="mt-8 space-y-4">
              {/* Name and Subject Row */}
              <div className="flex gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="नाम *"
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-800 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="विषय *"
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-800 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400"
                />
              </div>

              {/* Email Field */}
              <input
                type="email"
                name="email"
                placeholder="ईमेल *"
                required
                className="w-full px-4 py-3 border border-gray-300 text-gray-800 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400"
              />

              {/* Message Field */}
              <textarea
                name="message"
                placeholder="संदेश *"
                required
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 text-gray-800 placeholder-gray-500 text-sm resize-none focus:outline-none focus:border-gray-400"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-4 text-sm font-medium tracking-wide hover:bg-gray-900 transition-colors"
              >
                भेजें
              </button>
            </form>

            {/* Contact Information */}
            <div className="mt-12 flex justify-between items-center text-sm text-gray-800">
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <span className="text-lg">tenpointsbraille@gmail.com</span>
            </div>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </div>
                <span className="text-lg">+91 99800 06010</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <span className="text-lg">बेंगलुरु, भारत</span>
              </div>
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

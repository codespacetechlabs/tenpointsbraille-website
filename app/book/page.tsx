import SidebarEnglish from '@/app/components/SidebarEnglish'; // Adjust the path if needed
import Footer from '@/app/components/Footer'; // Adjust the path if needed
import Image from 'next/image';

export default function about() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main content area */}
      <div className="flex flex-1 p-8 gap-8">
        {/* Sidebar */}
        <aside className="w-1/3 h-1/4 flex items-center justify-center">
          <SidebarEnglish />
        </aside>
        {/* About content */}
        <main className="flex-1 flex flex-col items-center justify-center bg-white rounded-lg mt-30">
          <div className="max-w-4xl">
            {/* Heading */}
            <h1 className="text-4xl font-light mb-8 text-gray-900">
              Book
            </h1>
            
            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-800 leading-relaxed">
              <p className="text-sm">
                The Tenpoints Braille Book gives you the power to learn Braille in any language of your choice. It contains all the letters of the alphabet, numbers, punctuations, special characters and contractions - in multiple languages including Braille. It also includes instructions in all languages on how to use the tool. It has been designed in Black & White, so that you can get it printed at your home or anywhere else inexpensively. You can even choose to print selected pages from the book. Just one page printed from the book will go a long way in helping you learn Braille.
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

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
        <main className="flex-1 flex flex-col items-center mt-40 bg-white rounded-lg ">
          <div className="max-w-4xl">
            {/* Heading */}
            <h1 className="text-4xl font-light mb-8 text-gray-900">
              DOWNLOAD
            </h1>
            
            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-800 leading-relaxed">
              <p className="text-sm">
                The Tenpoints Braille project is currently in pilot stage. The tool is not yet ready for wide-scale roll-out. You will soon be able to download the Book, Fonts and Mobile PDF from here. For updates, drop us a mail at tenpointsbraille@gmail.com.
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

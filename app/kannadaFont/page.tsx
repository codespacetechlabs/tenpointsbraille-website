import SidebarEnglish from '@/app/components/SidebarEnglish';
import Footer from '@/app/components/Footer';
import Image from 'next/image';

export default function KannadaFont() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main content area */}
      <div className="flex flex-1 p-8 gap-8">
        {/* Sidebar */}
        <aside className="w-1/3 h-1/4 flex items-center justify-center">
          <SidebarEnglish />
        </aside>
        
        {/* Content */}
        <main className="flex-1 flex flex-col items-center mt-40 bg-white rounded-lg">
          {/* Two column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4">
            {/* Left column - Image */}
            <div className="flex items-center justify-center">
              <Image
                src="/Font/kanFont.avif"
                alt="Kannada Braille Font"
                width={400}
                height={600}
                className="rounded-lg object-contain"
              />
            </div>
            
            {/* Right column - Text content */}
            <div className="flex flex-col justify-center space-y-6">
              <Image
                src="/Font/kanInfo.avif"
                alt="Kannada Font Information"
                width={400}
                height={500}
                className="rounded-lg object-contain"
              />
            </div>
          </div>
        </main>
      </div>
      
      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

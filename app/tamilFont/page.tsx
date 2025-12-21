import SidebarEnglish from '@/app/components/SidebarEnglish';
import Footer from '@/app/components/Footer';
import Image from 'next/image';

export default function TamilFont() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-[family-name:var(--font-quicksand)]">
      {/* Main content area */}
      <div className="flex flex-1 gap-16 p-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[150px] mt-25">
        {/* Sidebar */}
        <aside className="flex h-1/4 w-1/3 items-center justify-center">
          <SidebarEnglish />
        </aside>

        {/* Content */}
        <main className="flex flex-1 flex-col items-center rounded-lg bg-white">
          {/* Two column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4">
            {/* Left column - Image */}
            <div className="flex items-center">
              <Image
                src="/Font/tamInfo.avif"
                alt="Tamil Font Information"
                width={400}
                height={500}
                className="rounded-lg object-contain"
              />
            </div>

            {/* Right column - Text content */}
            <div className="flex flex-col space-y-6">
              <Image
                src="/Font/tamFont.avif"
                alt="Tamil Braille Font"
                width={400}
                height={600}
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

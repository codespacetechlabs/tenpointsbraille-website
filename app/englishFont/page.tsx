import SidebarEnglish from '@/app/components/SidebarEnglish';
import Footer from '@/app/components/Footer';
import Image from 'next/image';

export default function EnglishFont() {
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
            {/* Left column - Text content */}
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl font-bold text-black">English Font</h1>

              <p className="text-gray-700 leading-relaxed">
                What does it take for a person with vision to learn Braille? Because only then,
                would he or she be able to teach people who are deprived of vision.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Now, anyone can access Braille in various Indian languages like Hindi (Official
                Language of India), English (Official Language of India), Tamil, Marathi,
                Gujarati, Bengali, Kannada, Gurmukhi (Punjabi), Assamese, Malayalam, Oriya
                and Telugu. And later, in languages like Spanish, German and French.
              </p>

              <p className="text-gray-700 leading-relaxed">
                We called it Tenpoints Braille because it takes 10 points font size to get the exact
                Braille size in softwares like Adobe Illustrator or Adobe InDesign.
              </p>
            </div>

            {/* Right column - Image */}
            <div className="flex items-center">
              <Image
                src="/Font/EnglishFont.avif"
                alt="English Braille Font"
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

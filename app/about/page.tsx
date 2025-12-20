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
              ABOUT TENPOINTS BRAILLE
            </h1>
            
            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-800 leading-relaxed">
              <p className="text-sm">
                Tenpoints Braille is an innovative tool designed to offer the ideal solution for the issues confronted in learning and 
                teaching Braille. It's an ingenious tool that makes it easy for anyone to read Braille, even if they don't know the 
                language.
              </p>
              
              <p className="text-sm">
                Tenpoints Braille has been developed in multiple languages – including Indian languages such as Hindi, Bengali, 
                Gujarati, Gurmukhi, Kannada, Malayalam, Oriya, Tamil and Telugu or international languages such as English, 
                Spanish, German and French.
              </p>
              
              <p className="text-sm">
                It's called "Tenpoints" Braille because when you choose the font in software such as Adobe Illustrator, Photoshop, 
                InDesign or Microsoft Word, then selecting ten points as font size prints the letters in Braille's worldwide standard 
                size. If the size of the letters differs from the standardized size, then reading the Braille with fingertips becomes 
                very difficult.
              </p>
              
              <p className="text-sm">
                Tenpoints Braille has been developed with the same 6-dot cells of normal Braille. The shape of the cells or the 
                method to read it has been unchanged. It's the same Braille that has been in use for years across the world.
              </p>
            </div>
          </div>
          
          <hr className="my-8 mt-20 w-full border-t border-black" />

          {/* Founder Section */}
          <div className="w-full max-w-5xl px-8 py-12">
            <div className="flex gap-12 items-start">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <Image 
                  src="/Rajdeep_001.avif" 
                  alt="Rajdeepgiri" 
                  width={300} 
                  height={300}
                  className="rounded-full object-cover"
                />
              </div>
              
              {/* Profile Content */}
              <div className="flex-1">
                <h2 className="text-3xl font-light mb-2 text-gray-900">Rajdeepgiri</h2>
                <h3 className="text-xl font-normal mb-6 text-gray-800">Founder</h3>
                
                <div className="space-y-4 text-gray-800 leading-relaxed">
                  <p className="text-sm">
                    Hi! I'm Rajdeepgiri, a Graphic Designer from Ahemadabad, India. I have been working in the design field for over 16 years, and have 
                    done my time in advertising agencies such as Ogilvy, Leo Burnett, Publicis and more.
                  </p>
                  
                  <p className="text-sm">
                    I endeavor to use my abilities in Graphic Design to make a difference in the lives of others. Tenpoints Braille is my passion project, and has 
                    been in the making for over 5 years. Once it successfully completes, I have set my sights on yet another project – creating fonts in all 
                    Indian scripts for people with dyslexia.
                  </p>
                </div>
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

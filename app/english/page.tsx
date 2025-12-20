import SidebarEnglish from '@/app/components/SidebarEnglish'; // Adjust the path if needed
import Footer from '@/app/components/Footer'; // Adjust the path if needed
import Image from 'next/image';
import Link from 'next/link';

export default function english() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main content area */}
      <div className="flex flex-1 p-8 gap-16">
        {/* Sidebar */}
        <aside className="w-1/3 h-1/4 flex items-center justify-center">
          <SidebarEnglish />
        </aside>
        {/* About content */}
         <main className="flex-1 flex flex-col items-center justify-center mt-50 bg-white rounded-lg">
          {/* Video Section */}
          <div
            className="relative w-[700px] h-[380px] mb-6 overflow-hidden rounded-lg shadow-lg"
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
              src="homescreenVideo.mp4"
            ></video>
          </div>{/* Place additional about page content here */}
          <div className="flex justify-center items-center gap-6 max-w-3xl mt-30">
            <p className="text-gray-800 text-lg leading-relaxed text-justify">
              Tenpoints Braille is an innovative tool designed to offer the ideal
              solution for the issues confronted in learning and teaching Braille.
              It's an ingenious tool that makes it easy for anyone to read Braille,
              even if they don't know the language.
            </p>

            <button
              className="w-56 aspect-square rounded-full bg-black text-white flex items-center justify-center text-sm font-medium shadow-2xl select-none transition hover:bg-gray-300 hover:text-black"
              style={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.75)",
              }}
            >
              MORE
            </button>
          </div>
          <hr className="my-8 mt-20 w-full border-t border-black font-medium" />
          <div className="w-full max-w-5xl px-8 py-6">
            <div className="grid grid-cols-2 gap-16">
              {/* Normal Braille Column */}
              <div className="flex flex-col items-center">
                <h3 className="text-l mb-6 text-gray-900">NORMAL BRAILLE</h3>
                <div className="bg-white p-6 rounded-lg w-full flex items-center justify-center">
                  <Image
                    src="/normalBraille.png"
                    alt="Normal Braille pattern showing traditional 6-dot system"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                    priority
                    style={{ objectFit: 'contain', objectPosition: 'left' }}
                  />
                </div>
              </div>

              {/* Tenpoints Braille Column */}
              <div className="flex flex-col items-center">
                <h3 className="text-l mb-6 text-gray-900">TENPOINTS BRAILLE</h3>
                <div className="bg-white p-6 rounded-lg w-full flex items-center justify-center">
                  <Image
                    src="/darklogo.png"
                    alt="Tenpoints Braille showing innovative visual representation"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                    priority
                    style={{ objectFit: 'contain', objectPosition: 'right' }}
                  />
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-l mb-6 mt-10 text-gray-900">TENPOINTS BRAILLE IN DIFFERENT LANGUAGES</h3>
          {/* Language Images Section */}
          <div className="w-full max-w-4xl px-8 py-6">
            {/* First Row - English Only */}
            <div className="flex mb-8">
              <div className="flex flex-col items-left">
                <Image src="/languages/English.png" alt="English Braille" width={120} height={120} className="mb-2" />
      
              </div>
            </div>
            
            {/* Second Row - 3 Languages */}
            <div className="flex gap-16 mb-8">
              <div className="flex flex-col items-center">
                <Image src="/languages/Hindi.png" alt="Hindi Braille" width={120} height={100} className="mb-2" />
              
              </div>
              <div className="flex flex-col items-center">
                <Image src="/languages/Kannada.png" alt="Bengali Braille" width={120} height={100} className="mb-2" />
                
              </div>
              <div className="flex flex-col items-center">
                <Image src="/languages/Telugu.png" alt="Gujarati Braille" width={120} height={100} className="mb-2" />

              </div>
            </div>
            
            {/* Third Row - 3 Languages */}
            <div className="flex  gap-16 mb-8">
              <div className="flex flex-col items-center">
                <Image src="/languages/Bengali.png" alt="Gurmukhi Braille" width={120} height={100} className="mb-2" />

              </div>
              <div className="flex flex-col items-center">
                <Image src="/languages/Malayalam.png" alt="Kannada Braille" width={120} height={100} className="mb-2" />

              </div>
              <div className="flex flex-col items-center">
                <Image src="/languages/German.png" alt="Malayalam Braille" width={120} height={100} className="mb-2" />

              </div>
            </div>
            
            {/* Fourth Row - 3 Languages */}
            <div className="flex  gap-16 mb-8">
              <div className="flex flex-col items-center">
                <Image src="/languages/Gujarati.png" alt="Oriya Braille" width={120} height={100} className="mb-2" />

              </div>
              <div className="flex flex-col items-center">
                <Image src="/languages/Oriya.png" alt="Tamil Braille" width={120} height={100} className="mb-2" />
  
              </div>
              <div className="flex flex-col items-center">
                <Image src="/languages/French.png" alt="Telugu Braille" width={120} height={100} className="mb-2" />
              </div>
            </div>
            
            {/* Fifth Row - 3 Languages */}
            <div className="flex  gap-16">
              <div className="flex flex-col items-center">
                <Image src="/languages/Gurmukhi.png" alt="German Braille" width={120} height={100} className="mb-2" />

              </div>
              <div className="flex flex-col items-center">
                <Image src="/languages/Tamil.png" alt="French Braille" width={120} height={100} className="mb-2" />

              </div>
              <div className="flex flex-col items-center">
                <Image src="/languages/Spanish.png" alt="Spanish Braille" width={120} height={100} className="mb-2" />
                {/* <span className="text-sm text-center">Spanish</span> */}
              </div>
            </div>
          </div>

          {/* Container for language links */}
          <div className="w-full max-w-6xl px-8 py-6">
            {/* First Row - 10 Languages */}
            <div className="flex justify-center gap-6 mb-8">
              <Link href="/englishFont" className="flex flex-col items-center hover:opacity-70 transition">
                <span className="text-sm text-center text-gray-800">English</span>
              </Link>
              <Link href="/hindiFont" className="flex flex-col items-center hover:opacity-70 transition">
                <span className="text-sm text-center text-gray-800">Hindi</span>
              </Link>
              <Link href="/bengaliFont" className="flex flex-col items-center hover:opacity-70 transition">
                <span className="text-sm text-center text-gray-800">Bengali</span>
              </Link>
              <Link href="/gujaratiFont" className="flex flex-col items-center hover:opacity-70 transition">
                <span className="text-sm text-center text-gray-800">Gujarati</span>
              </Link>
              <Link href="/gurmukhiFont" className="flex flex-col items-center hover:opacity-70 transition">
                <span className="text-sm text-center text-gray-800">Gurmukhi</span>
              </Link>
              <Link href="/kannadaFont" className="flex flex-col items-center hover:opacity-70 transition">
                <span className="text-sm text-center text-gray-800">Kannada</span>
              </Link>
              <Link href="/malayalamFont" className="flex flex-col items-center hover:opacity-70 transition">
                <span className="text-sm text-center text-gray-800">Malayalam</span>
              </Link>
              <Link href="/oriyaFont" className="flex flex-col items-center hover:opacity-70 transition">
                <span className="text-sm text-center text-gray-800">Oriya</span>
              </Link>
              <Link href="/tamilFont" className="flex flex-col items-center hover:opacity-70 transition">
                <span className="text-sm text-center text-gray-800">Tamil</span>
              </Link>
              <Link href="/teluguFont" className="flex flex-col items-center hover:opacity-70 transition">
                <span className="text-sm text-center text-gray-800">Telugu</span>
              </Link>
            </div>
            
            {/* Second Row - 3 Languages */}
            <div className="flex justify-start gap-6">
              <div className="flex flex-col items-center hover:opacity-70 transition">
                <span className="text-sm text-center text-gray-800">German</span>
              </div>
              <div className="flex flex-col items-center hover:opacity-70 transition">
                <span className="text-sm text-center text-gray-800">French</span>
              </div>
              <div className="flex flex-col items-center hover:opacity-70 transition">
                <span className="text-sm text-center text-gray-800">Spanish</span>
              </div>
            </div>
          </div>
          <hr className="my-8 mt-20 w-full border-t border-black font-medium" />

          {/* Three Main Sections */}
          <div className="w-full max-w-6xl px-8 py-8 mt-8">
            <div className="grid grid-cols-3 gap-8">
              {/* Book Section */}
              <div className="flex flex-col items-start">
                <div className="mb-4">
                  <Image 
                    src="/book-heading.png" 
                    alt="Book" 
                    width={120} 
                    height={40}
                    className="h-auto"
                  />
                </div>
                <h3 className="text-base font-semibold mb-2 text-gray-900">TENPOINTS BRAILLE BOOK</h3>
                <p className="text-gray-700 text-xs leading-relaxed">
                  The Tenpoints Braille Book gives you the power to learn Braille in any language of 
                  your choice. It contains all the letters of the alphabet......
                </p>
              </div>

              {/* Font Section */}
              <div className="flex flex-col items-start border-l border-r border-gray-300 px-8">
                <div className="mb-4">
                  <Image 
                    src="/font-heading.png" 
                    alt="Font" 
                    width={120} 
                    height={40}
                    className="h-auto"
                  />
                </div>
                <h3 className="text-base font-semibold mb-2 text-gray-900">TENPOINTS BRAILLE FONTS</h3>
                <p className="text-gray-700 text-xs leading-relaxed">
                  The Tenpoints Braille Font has been developed in multiple language scripts. 
                  It can be easily downloaded and installed in software......
                </p>
              </div>

              {/* Mobile PDF Section */}
              <div className="flex flex-col items-start">
                <div className="mb-4">
                  <Image 
                    src="/mobile-pdf-heading.png" 
                    alt="Mobile PDF" 
                    width={120} 
                    height={40}
                    className="h-auto"
                  />
                </div>
                <h3 className="text-base mb-2 text-gray-900">
                  TENPOINTS <span className="font-semibold">MOBILE PDF</span>
                </h3>
                <p className="text-gray-700 text-xs leading-relaxed">
                  The Tenpoints Braille Book is also available in pdf format. 
                  You can download......
                </p>
              </div>
            </div>
          </div>



          <hr className="my-8 mt-20 w-full border-t border-black font-medium" />

          {/* Five Feature Sections */}
          <div className="w-full max-w-6xl px-8 py-12">
            <div className="grid grid-cols-5 gap-8">
              {/* Anyone Can Teach */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4">
                  <Image 
                    src="/icons/teach-icon.png" 
                    alt="Teaching icon" 
                    width={80} 
                    height={80}
                    className="w-full h-full"
                  />
                </div>
                <h4 className="text-sm font-medium text-gray-900 uppercase">
                  ANYONE CAN<br />TEACH
                </h4>
              </div>

              {/* Anyone Can Afford */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4">
                  <Image 
                    src="/icons/afford-icon.png" 
                    alt="Affordability icon" 
                    width={80} 
                    height={80}
                    className="w-full h-full"
                  />
                </div>
                <h4 className="text-sm font-medium text-gray-900 uppercase">
                  ANYONE<br />CAN AFFORD
                </h4>
              </div>

              {/* Save 50% Paper */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4">
                  <Image 
                    src="/icons/paper-icon.png" 
                    alt="Paper saving icon" 
                    width={80} 
                    height={80}
                    className="w-full h-full"
                  />
                </div>
                <h4 className="text-sm font-medium text-gray-900 uppercase">
                  SAVE 50%<br />PAPER
                </h4>
              </div>

              {/* No Dependency on Technology */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4">
                  <Image 
                    src="/icons/technology-icon.png" 
                    alt="Technology independence icon" 
                    width={80} 
                    height={80}
                    className="w-full h-full"
                  />
                </div>
                <h4 className="text-sm font-medium text-gray-900 uppercase">
                  NO DEPENDENCY<br />ON TECHNOLOGY
                </h4>
              </div>

              {/* In Your Own Language */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4">
                  <Image 
                    src="/icons/letter-icon.png" 
                    alt="Technology independence icon" 
                    width={80} 
                    height={80}
                    className="w-full h-full"
                  />
                </div>
                <h4 className="text-sm font-medium text-gray-900 uppercase">
                  IN YOUR<br />OWN LANGUAGE
                </h4>
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

import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import SidebarEnglish from "@/app/components/SidebarEnglish";
import MobileNavbar from "@/app/components/MobileNavbar";

export const metadata: Metadata = {
  title: {
    default: "English | Tenpoints Braille",
    template: "%s | Tenpoints Braille",
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-quicksand)]">
      {/* Mobile Navbar - Logo + Sticky Nav */}
      <MobileNavbar language="english" />

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:min-h-screen lg:flex-col">
        <div className="flex flex-1 gap-16 p-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[150px] mt-25">
          {/* Desktop Sidebar */}
          <aside className="flex h-1/4 w-1/3 items-center justify-center">
            <SidebarEnglish />
          </aside>

          {/* Main Content */}
          <div className="flex flex-1 flex-col items-center justify-center rounded-lg bg-white">
            {children}
          </div>
        </div>

        {/* Desktop Footer */}
        <Footer />
      </div>

      {/* Mobile Content - Below the sticky navbar */}
      <div className="lg:hidden">
        <div className="px-4 py-6">
          {children}
        </div>
        
        {/* Mobile Footer */}
        <Footer />
      </div>
    </div>
  );
}

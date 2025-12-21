import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import SidebarHindi from "@/app/components/SidebarHindi";
import MobileSidebar from "@/app/components/MobileSidebar";

export const metadata: Metadata = {
  title: {
    default: "हिंदी | Tenpoints Braille",
    template: "%s | Tenpoints Braille",
  },
};

export default function HindiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Mobile Sidebar - Only visible on mobile */}
      <div className="lg:hidden">
        <MobileSidebar />
      </div>

      <div className="flex min-h-screen flex-col bg-white font-[family-name:var(--font-mukta)]">
        <div className="flex flex-1 gap-16 p-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[250px]">
          {/* Desktop Sidebar - Hidden on mobile */}
          <aside className="hidden w-1/3 items-center justify-center lg:flex">
            <SidebarHindi />
          </aside>

          {/* Main Content */}
          <div className="mt-50 flex-1">{children}</div>
        </div>

        {/* Footer - Hidden on mobile */}
        <footer className="hidden lg:block">
          <Footer />
        </footer>
      </div>
    </>
  );
}

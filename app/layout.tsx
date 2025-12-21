import type { Metadata } from "next";
import "./globals.css";
import SidebarEnglish from "./components/SidebarEnglish";
import SidebarHindi from "./components/SidebarHindi";
import MobileSidebar from "./components/MobileSidebar";
import Footer from "./components/Footer";
import { quicksand, mukta } from "./fonts";

export const metadata: Metadata = {
  title: {
    default: "Tenpoints Braille - Learn and Teach Braille in Multiple Languages",
    template: "%s | Tenpoints Braille",
  },
  description:
    "Tenpoints Braille is an innovative tool designed to offer the ideal solution for learning and teaching Braille in multiple languages including Hindi, English, Bengali, Gujarati, and more.",
  keywords: [
    "Braille",
    "Tenpoints Braille",
    "Learn Braille",
    "Braille fonts",
    "Hindi Braille",
    "English Braille",
    "Indian languages Braille",
    "Accessibility",
  ],
  authors: [{ name: "Rajdeepgiri" }],
  creator: "Rajdeepgiri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tenpointsbraille.com",
    title: "Tenpoints Braille - Learn and Teach Braille in Multiple Languages",
    description:
      "Tenpoints Braille is an innovative tool designed to offer the ideal solution for learning and teaching Braille in multiple languages.",
    siteName: "Tenpoints Braille",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tenpoints Braille - Learn and Teach Braille in Multiple Languages",
    description:
      "Tenpoints Braille is an innovative tool designed to offer the ideal solution for learning and teaching Braille in multiple languages.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${mukta.variable} antialiased`}>
        {/* Mobile Sidebar - Only visible on mobile */}
        <MobileSidebar />

          {/* Desktop Sidebars - Hidden on mobile */}

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Desktop Hindi Sidebar - Hidden on mobile */}
  

        {/* Footer - Only visible on desktop */}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { roboto, mukta } from "./fonts";

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
    url: "https://tenpointsbraille.in",
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
      <body className={`${roboto.variable} ${mukta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

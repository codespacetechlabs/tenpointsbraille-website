import { Roboto, Mukta } from "next/font/google";

// Roboto for English content
export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

// Mukta for Hindi/Devanagari content
export const mukta = Mukta({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin", "devanagari"],
  variable: "--font-mukta",
  display: "swap",
});

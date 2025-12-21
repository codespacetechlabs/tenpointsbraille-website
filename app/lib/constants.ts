import { NavLink, NavLinkHindi, FontData, ContactInfo, FooterLink } from "@/app/types";

// English Navigation Links
export const NAV_LINKS_ENGLISH: NavLink[] = [
  { label: "ABOUT", href: "/about" },
  { label: "BOOK", href: "/book" },
  { label: "FONTS", href: "/fonts" },
  { label: "HOW\nTO USE", href: "/howtouse" },
  { label: "DOWN\nLOAD", href: "/download" },
  { label: "CONTACT", href: "/contact" },
];

// Hindi Navigation Links
export const NAV_LINKS_HINDI: NavLinkHindi[] = [
  { hi: "विशेष", hiSlug: "/vishesh" },
  { hi: "पुस्तक", hiSlug: "/pustak" },
  { hi: "फोंट्स", hiSlug: "/hindifonts" },
  { hi: "उपयोग", hiSlug: "/upyog" },
  { hi: "डाउनलोड", hiSlug: "/hindidownload" },
  { hi: "संपर्क", hiSlug: "/sampark" },
];

// Font Data
export const FONTS_DATA: FontData[] = [
  { char: "A", language: "English", href: "/englishFont" },
  { char: "अ", language: "Hindi/Marathi", href: "/hindiFont" },
  { char: "অ", language: "Bengali/Assamese", href: "/bengaliFont" },
  { char: "અ", language: "Gujarati", href: "/gujaratiFont" },
  { char: "ਅ", language: "Gurmukhi", href: "/gurmukhiFont" },
  { char: "ಅ", language: "Kannada", href: "/kannadaFont" },
  { char: "അ", language: "Malayalam", href: "/malayalamFont" },
  { char: "ଅ", language: "Oriya", href: "/oriyaFont" },
  { char: "அ", language: "Tamil", href: "/tamilFont" },
  { char: "అ", language: "Telugu", href: "/teluguFont" },
];

// Contact Information
export const CONTACT_INFO: ContactInfo = {
  email: "tenpointsbraille@gmail.com",
  phone: "+91 99800 06010",
  location: "Ahmedabad, India",
};

// Footer Links (Combined English/Hindi)
export const FOOTER_LINKS: FooterLink[] = [
  { en: "ABOUT", hi: "विशेष", hiSlug: "vishesh" },
  { en: "BOOK", hi: "पुस्तक", hiSlug: "pustak" },
  { en: "FONTS", hi: "फोंट्स", hiSlug: "hindifonts" },
  { en: "HOW TO USE", hi: "उपयोग", hiSlug: "upyog" },
  { en: "DOWNLOAD", hi: "डाउनलोड", hiSlug: "hindidownload" },
  { en: "CONTACT", hi: "संपर्क", hiSlug: "sampark" },
];

// Site Metadata
export const SITE_NAME = "Tenpoints Braille";
export const SITE_DESCRIPTION =
  "Tenpoints Braille is an innovative tool designed to offer the ideal solution for learning and teaching Braille in multiple languages.";
export const SITE_URL = "https://tenpointsbraille.com";

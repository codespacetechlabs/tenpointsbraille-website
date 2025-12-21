import localFont from "next/font/local";

// Quicksand for English content
export const quicksand = localFont({
  src: [
    {
      path: "../public/fonts/Quicksand/static/Quicksand-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Quicksand/static/Quicksand-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Quicksand/static/Quicksand-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Quicksand/static/Quicksand-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Quicksand/static/Quicksand-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-quicksand",
  display: "swap",
});

// Mukta for Hindi/Devanagari content
export const mukta = localFont({
  src: [
    {
      path: "../public/fonts/Mukta/Mukta-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Mukta/Mukta-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Mukta/Mukta-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Mukta/Mukta-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Mukta/Mukta-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Mukta/Mukta-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Mukta/Mukta-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-mukta",
  display: "swap",
});

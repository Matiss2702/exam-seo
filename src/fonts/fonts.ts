import localFont from "next/font/local";

export const neco = localFont({
  src: [
    {
      path: "./neco/Neco-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./neco/Neco-VariableItalic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-neco",
});

export const pally = localFont({
  src: [
    {
      path: "./pally/Pally-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-pally",
});

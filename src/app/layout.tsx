import type { Metadata } from "next";
import "./globals.css";
import { neco, pally } from "@/fonts/fonts";
import { commonMetadata, jsonLd } from "@/constants/metadata";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = commonMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${neco.className} ${neco.variable} ${pally.variable} flex min-h-screen flex-col font-neco`}
      >
        <Navbar />
        <main className="container mb-12 mt-4 flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

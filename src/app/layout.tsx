import type { Metadata } from "next";
import { Outfit, Pathway_Extreme } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const pathwayExtreme = Pathway_Extreme({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pathway",
});


export const metadata: Metadata = {
  title: "Ctruh Experiences",
  description: "Ctruh Experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${pathwayExtreme.className}`}>
      <body>{children}</body>
    </html>
  );
}

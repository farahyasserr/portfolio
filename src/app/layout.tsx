import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farah Dawoud — Senior Mobile Developer",
  description:
    "Senior React Native developer with 7 years of experience building polished mobile apps across FinTech, Health & Fitness, E-commerce, EdTech, and Social platforms.",
  keywords: ["React Native", "Mobile Developer", "iOS", "Android", "FinTech", "Farah Dawoud"],
  authors: [{ name: "Farah Dawoud" }],
  openGraph: {
    title: "Farah Dawoud — Senior Mobile Developer",
    description: "7 years crafting polished React Native apps across FinTech, Health, E-commerce, and beyond.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="snap-y snap-mandatory scroll-pt-[68px]">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="grid-backdrop" aria-hidden />
        {children}
      </body>
    </html>
  );
}

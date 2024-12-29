import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { METADATA } from "../constants/data";
import Navbar from "@/components/organisms/Navbar";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-main-bg text-off-white`}>
        <div className="max-h-screen w-full">
          <Navbar />
          <NextTopLoader
            color="#D3E97A"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #D3E97A,0 0 5px #D3E97A"
          />
          {children}
        </div>
      </body>
    </html>
  );
}

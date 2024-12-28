import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { METADATA } from "../constants/data";
import Navbar from "@/components/organisms/Navbar";



export const metadata: Metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-main-bg text-off-white`}
      >
        <div className="min-h-screen w-full">
        <Navbar/>
        {children}
        </div>
      </body>
    </html>
  );
}

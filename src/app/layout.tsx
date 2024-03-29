import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });

export const metadata: Metadata = {
  title: "House Hunter",
  description:
    "House Hunter is a largest online hotel booking website in Bangladesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable}`}>
      <body className="text-slate-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

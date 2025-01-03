import type { Metadata } from "next";
import { Italianno, Manrope, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const geistItalianno = Italianno({
  variable: "--font-italianno-sans",
  subsets: ["latin"],
  weight: ["400"]
});

const geistManrope = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
  weight: ["400", "700"]
});

const geistRoboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "Recipe App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${geistItalianno.variable} ${geistManrope.variable} ${geistRoboto.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

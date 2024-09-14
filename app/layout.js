"use client";

import { Montserrat } from "next/font/google";
import "./globals.css";

import Particle from "@/components/particles";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin", "latin-ext"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Particle />
      </body>
    </html>
  );
}

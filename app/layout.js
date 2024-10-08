"use client";

import { Montserrat } from "next/font/google";
import "./globals.css";

import Particle from "@/components/particles";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

const montserrat = Montserrat({ subsets: ["latin", "latin-ext"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hide-scrollbar">
      <head>
        <title>A.Abi Portofolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={montserrat.className}>
        <Analytics />
        <SpeedInsights />
        <Navbar />
        {children}
        <Footer />
        <Particle />
      </body>
    </html>
  );
}

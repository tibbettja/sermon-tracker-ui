import type { Metadata } from "next";
import React from "react";
import { Platypi } from "next/font/google";
import "@/styles/globals.css";

const platypi = Platypi({
  weight: "variable",
  subsets: ["latin"],
  style: ["normal","italic"],
  variable: '--font-platypi',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Sermon Tracker",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${platypi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

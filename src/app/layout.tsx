import type { Metadata } from "next";
import React from "react";
import { Turret_Road } from "next/font/google";
import "@/styles/globals.css";

const turretRoad = Turret_Road({
  variable: "--font-turret",
  weight: ["200","300","400","500","700","800"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Joey Tibbett Portfolio",
  description: "Portfolio of Joey Tibbett",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${turretRoad.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

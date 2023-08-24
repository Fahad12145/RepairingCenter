"use client"
import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { LanguageProvider } from "@/Context/LanguageContext";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

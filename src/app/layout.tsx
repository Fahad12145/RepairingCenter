"use client";
import React from "react";
import "./globals.css";
import { LanguageProvider } from "@/Context/LanguageContext";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Cool Repairing Center</title>
      <meta name="description" content="Cool & Cool Repairing Services " />
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

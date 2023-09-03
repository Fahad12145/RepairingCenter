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
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7535988651402009"
          crossOrigin="anonymous"
        ></script>
      </head>
      <meta name="description" content="Cool & Cool Repairing Services " />
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

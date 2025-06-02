"use client"
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
      <title>Cool Appliances Repairing Center</title>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7535988651402009"
          crossOrigin="anonymous"
        ></script>

        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TCHBX5CW"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
      </head>
      <meta name="description" content="Cool & Cool Repairing Services " />
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

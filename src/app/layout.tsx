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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TCHBX5CW');`,
          }}
        />
      </head>
      <meta name="description" content="Cool & Cool Repairing Services " />
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TCHBX5CW"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { biz_udp } from '@/utils/fonts';
import '@/ui/global.css';
import Header from '@/components/layouts/header/Header';
import React from 'react';
import { GoogleAnalytics } from '@/lib/google_analytics/GoogleAnalytics';

export const metadata: Metadata = {
  title: 'Archive App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || '';

  return (
    <html lang='ja' className={`${biz_udp.variable} font-biz_udp`}>
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

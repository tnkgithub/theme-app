import type { Metadata } from 'next';
import { biz_udp } from '@/utils/fonts';
import '@/ui/global.css';
import Header from '@/components/layouts/header/Header';
import React from 'react';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';

export const metadata: Metadata = {
  title: 'Archive App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja' className={`${biz_udp.variable} font-biz_udp`}>
      <body>
        <Header
          logoText='Archive App'
          buttonText={['画像一覧', 'タイトル一覧', '物体名一覧']}
          buttonHref={['/representation', '/titles', '']}
        />
        <MotionWrapper>{children}</MotionWrapper>
      </body>
    </html>
  );
}

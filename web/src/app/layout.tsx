/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import type { Metadata } from 'next';
import { biz_udp } from '@/utils/fonts';
import '@/ui/global.css';
import Header from '@/components/layouts/header/Header';
import React from 'react';
import { onClickTmp } from './onClickTmp';

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
          onClickHandler={onClickTmp}
        />
        {children}
      </body>
    </html>
  );
}

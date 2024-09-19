import type { Metadata } from 'next';
import { BIZ_UDPGothic } from 'next/font/google';
import '@/ui/global.css';
import Header from '@/components/layouts/header/Header';

const biz = BIZ_UDPGothic({
  display: 'swap',
  weight: '400',
  subsets: ['latin'],
  variable: '--font-biz',
});

export const metadata: Metadata = {
  title: 'Archive App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja' className={`${biz.variable} font-biz`}>
      <body>
        <Header
          logoText='Archive App'
          buttonText={['画像一覧', 'タイトル一覧', '物体名一覧']}
          buttonLink={['/representation', '/titles', '/']}
        />
        {children}
      </body>
    </html>
  );
}

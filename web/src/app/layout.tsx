import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/ui/global.css';
import Header from '@/components/layouts/header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Archive App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        <Header
          logoText='Archive App'
          buttonText={['画像一覧', 'タイトル一覧', '物体名一覧']}
          buttonLink={['/representationPage', '/', '/']}
        />
        {children}
      </body>
    </html>
  );
}

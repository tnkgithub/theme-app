'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { IconButton, LinkButton } from '@/components/elements/button/Button';
import Link from 'next/link';

const Header = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(window.innerWidth > 768);

    const handleResize = () => {
      setIsOpen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className='fixed z-20 w-full border-b border-gray-300 bg-white'>
        <div className='flex flex-col items-center justify-between pb-2 pt-4 lg:flex-row'>
          <div className='flex min-w-fit'>
            <Link
              href='/'
              className='text-xl font-medium text-gray-800 lg:ml-6 lg:justify-start'
            >
              ポスター資料探索支援システム
            </Link>
            {isOpen ? (
              <div className='fixed right-4 block pt-0.5 md:hidden'>
                <IconButton
                  inText=''
                  intent='none'
                  size='menuicon'
                  icon='close'
                  onClick={handleOpen}
                  href={''}
                />
              </div>
            ) : (
              <div className='fixed right-4 block pt-0.5 md:hidden'>
                <IconButton
                  inText=''
                  intent='none'
                  size='menuicon'
                  icon='menu'
                  onClick={handleOpen}
                  href={''}
                />
              </div>
            )}
          </div>
          {isOpen && (
            <div className='container mr-4 flex flex-col items-center justify-center pt-2 md:flex-row lg:justify-end lg:py-0'>
              <div className='flex flex-wrap items-center justify-center py-1 lg:py-0'>
                <LinkButton
                  inText='画像一覧'
                  intent={`${pathname === '/representation' ? 'pressed' : 'primary'}`}
                  size='medium'
                  href='/representation/'
                />
                <LinkButton
                  inText='タイトル一覧'
                  intent={`${pathname === '/titles' ? 'pressed' : 'primary'}`}
                  size='medium'
                  href='/titles/'
                />
                <LinkButton
                  inText='物体名一覧'
                  intent={`${pathname === '/objectData' ? 'pressed' : 'primary'}`}
                  size='medium'
                  href='/objectData/'
                />
                {/* <LinkButton
                  inText='アンケートに回答する'
                  intent='secondary'
                  size='fit'
                  href='https://forms.gle/sevGhTNmjSviy1Lc8'
                  isTarget={true}
                />
                <LinkButton
                  inText='デジタル資料館に戻る'
                  intent='secondary'
                  size='fit'
                  href='https://archives.c.fun.ac.jp'
                /> */}
              </div>
            </div>
          )}
        </div>
      </header>
      <div className='h-16 md:h-28 lg:h-16 '></div>
    </>
  );
};

export default Header;

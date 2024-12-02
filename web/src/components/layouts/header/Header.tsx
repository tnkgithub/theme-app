'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import SearchBox from '@/components/elements/searchBox/SearchBox';
import { LinkButton } from '@/components/elements/button/Button';
import Link from 'next/link';

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <header className='fixed z-20 w-full border-b border-gray-300 bg-white'>
        <div className='flex flex-col items-center justify-between pb-2 pt-4 lg:flex-row'>
          <div className='min-w-fit'>
            <Link
              href='/'
              className='ml-6 flex items-center justify-center font-serif text-xl font-medium text-gray-800 lg:justify-start'
            >
              Archive App
            </Link>
          </div>
          {/* <div className='text-xl font-biz_udp font-bold text-blue-500'>
            代表資料
          </div> */}
          <div className='container mr-6 hidden flex-col items-center justify-center pt-2 md:flex md:flex-row lg:justify-end lg:py-0'>
            <div className='mr-8  flex py-1 lg:py-0'>
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
                intent={`${pathname === '/objects' ? 'pressed' : 'primary'}`}
                size='medium'
                href='/objectData/'
              />
            </div>
            <SearchBox
              placeholder='資料を検索'
              buttonText='検索'
              size='medium'
            />
          </div>
        </div>
      </header>
      <div className='h-16 md:h-32 lg:h-16 '></div>
    </>
  );
};

export default Header;

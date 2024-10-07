'use client';

/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';
import SearchBox from '@/components/elements/searchBox/SearchBox';
import Button from '@/components/elements/button/Button';
import Link from 'next/link';

type HeaderProps = {
  logoText: string;
  buttonText: string[];
  onClickHandler: () => void;
};

const Header = ({ logoText, buttonText, onClickHandler }: HeaderProps) => {
  return (
    <>
      <header className='fixed z-20 w-full border-b border-gray-300 bg-white'>
        <div className='flex flex-col items-center justify-between py-16 lg:flex-row'>
          <div className='min-w-fit'>
            <Link
              href='/'
              className='ml-24 flex items-center justify-center font-serif text-xl font-medium text-gray-800 lg:justify-start'
            >
              {logoText}
            </Link>
          </div>
          {/* <div className='text-xl font-biz_udp font-bold text-blue-500'>
            代表資料
          </div> */}
          <div className='container mr-24 hidden flex-col items-center justify-center pt-8 md:flex md:flex-row lg:justify-end lg:py-0'>
            <div className='mr-8  flex py-4 lg:py-0'>
              {buttonText.map((text, index) => (
                <Button
                  key={index}
                  inText={text}
                  intent='primary'
                  size='medium'
                  onClick={onClickHandler}
                />
              ))}
            </div>
            <SearchBox placeholder='検索' buttonText='検索' size='medium' />
          </div>
        </div>
      </header>
      <div className='md:h-112 h-64 lg:h-64 '></div>
    </>
  );
};

export default Header;

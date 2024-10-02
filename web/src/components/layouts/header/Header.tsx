import React from 'react';
import SearchBox from '@/components/elements/searchBox/SearchBox';
import Button from '@/components/elements/button/Button';
import Link from 'next/link';

type HeaderProps = {
  logoText: string;
  buttonText: string[];
  buttonLink: string[];
};

const Header = ({
  logoText,
  buttonText,
  buttonLink,
}: {
  logoText: string;
  buttonText: string[];
  buttonLink: string[];
}) => {
  return (
    <>
      <header className='fixed z-10 w-full border-b border-gray-300 bg-white'>
        <div className='flex flex-col items-center justify-between py-4 lg:flex-row'>
          <div className='min-w-fit'>
            <Link
              href='/'
              className='ml-6 flex items-center justify-center font-serif text-xl font-medium text-gray-800 lg:justify-start'
            >
              {logoText}
            </Link>
          </div>
          <div className='text-xl font-biz_udp font-bold text-blue-500'>
            代表資料
          </div>
          <div className='container mr-6 hidden flex-col items-center justify-center pt-2 md:flex md:flex-row lg:justify-end lg:py-0'>
            <div className='mr-2  flex py-1 lg:py-0'>
              {buttonText.map((text, index) => (
                <Button
                  inText={text}
                  key={index}
                  pageLink={buttonLink[index]}
                />
              ))}
            </div>
            <SearchBox placeholder='検索' />
          </div>
        </div>
      </header>
      <div className='h-16 md:h-28 lg:h-16 '></div>
    </>
  );
};

export default Header;

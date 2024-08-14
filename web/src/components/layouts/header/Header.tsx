import React from 'react';
import SearchBox from '@/components/elements/searchBox/SearchBox';

type HeaderProps = {
  logoText: string;
};

const Header = ({ logoText }: HeaderProps) => {
  return (
    <header className='border-b border-gray-300 bg-white'>
      <div className='container mx-auto flex items-center justify-between py-1.5'>
        <div className='flex items-center'>
          <a href='#' className='font-sans text-xl font-medium text-gray-800'>
            {logoText}
          </a>
        </div>
        <SearchBox defalutText='検索' />
      </div>
    </header>
  );
};

export default Header;

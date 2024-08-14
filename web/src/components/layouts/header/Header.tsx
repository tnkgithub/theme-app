import React from 'react';
import SearchBer from '@/components/elements/searchBer/SearchBer';

type HeaderProps = {
  logoText: string;
};

const Header = ({ logoText }: HeaderProps) => {
  return (
    <header className='border-b border-gray-300 '>
      <div className='flex items-center justify-between py-1.5 pl-6 pr-4'>
        <div className='flex items-center'>
          <a href='#' className='font-sans text-xl font-medium text-gray-800'>
            {logoText}
          </a>
        </div>
        <SearchBer defalutText='検索' />
      </div>
    </header>
  );
};

export default Header;

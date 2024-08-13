import React from 'react';
import SearchBer from '@/components/elements/searchBer/SearchBer';

interface HeaderProps {
  logoText: string;
}

const Header = ({ logoText }: HeaderProps) => {
  return (
    <header className='border-b border-gray-300'>
      <div className='flex items-center justify-between px-8 py-2'>
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

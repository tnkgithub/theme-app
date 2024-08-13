import React from 'react';
import SearchBer from '@/components/elements/searchBer/SearchBer';

interface HeaderProps {
  logoText: string;
}

const Header = ({ logoText }: HeaderProps) => {
  return (
    <header className='bg-blue-500'>
      <div className='flex items-center justify-between px-8 py-2'>
        <div className='flex items-center'>
          <a href='#' className='text-xl font-medium text-white'>
            {logoText}
          </a>
        </div>
        <SearchBer defalutText='検索' />
      </div>
    </header>
  );
};

export default Header;

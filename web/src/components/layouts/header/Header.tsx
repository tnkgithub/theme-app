import React from 'react';
import SearchBer from '@/components/elements/searchBer/SearchBer';

const Header = () => {
  return (
    <header className='bg-gray-800'>
      <div className='container mx-auto px-4 py-6'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <a href='#' className='text-xl font-medium text-white'>
              Logo
            </a>
          </div>
          <SearchBer defalutText='Search' />
        </div>
      </div>
    </header>
  );
};

export default Header;

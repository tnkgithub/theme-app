import React from 'react';
import Button from '@/components/elements/button/Button';

const SearchBox = ({ placeholder }: { placeholder: string }) => {
  return (
    <form className='w-72'>
      <div className='flex items-center rounded-md bg-gray-300 p-1 text-gray-600'>
        <div className='mx-1 '>
          <svg
            className='size-4'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 20'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
            />
          </svg>
        </div>
        <input
          type='search'
          id='default-search'
          className=' flex-auto bg-inherit py-1 pr-1 ps-2 text-sm font-medium focus:outline-none'
          placeholder={placeholder}
          required
        />
        <button
          type='submit'
          className='ml-auto rounded-md bg-blue-500 px-3 py-1 text-sm text-white duration-300 focus:outline-none'
        >
          検索
        </button>
      </div>
    </form>
  );
};

export default SearchBox;

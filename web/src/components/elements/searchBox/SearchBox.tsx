/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

const SearchBox = ({
  placeholder,
  buttonText,
}: {
  placeholder: string;
  buttonText: string;
}) => {
  return (
    <form className='w-280'>
      <div className='flex items-center rounded-md bg-gray-200 p-4'>
        <div className='mx-4 '>
          <svg
            className='size-16'
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
          className='min-w-50 flex-auto bg-inherit py-4 pr-4 ps-8 text-sm font-medium focus:outline-none'
          placeholder={placeholder}
          required
        />
        <button
          type='submit'
          className='ml-auto min-w-fit rounded-md bg-blue-500 px-12 py-4 text-sm text-white duration-300 focus:outline-none'
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default SearchBox;

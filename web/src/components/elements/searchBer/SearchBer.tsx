import React from 'react';

interface SearchBerProps {
  defalutText: string;
}

const SearchBox = ({ defalutText }: SearchBerProps) => {
  return (
    <form className='w-60'>
      {/* <label
        htmlFor='search'
        className='sr-only mb-2 text-sm font-medium  text-gray-900'
      /> */}
      <div className='flex items-center rounded-lg bg-gray-800 px-2'>
        <div className='px-1'>
          <svg
            className='size-4 text-gray-400'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 20'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
            />
          </svg>
        </div>
        <input
          type='search'
          id='default-search'
          className='w-48 bg-gray-800 py-2 ps-2 text-sm text-gray-400 focus:outline-none'
          placeholder={defalutText}
          required
        />
        {/* <button
          type='submit'
          className='rounded-lg bg-blue-500 px-2 py-0.5 text-sm text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300'
        >
          Search
        </button> */}
      </div>
    </form>
  );
};

export default SearchBox;

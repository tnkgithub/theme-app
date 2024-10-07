/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';
import { cva } from 'class-variance-authority';
import Button from '@/components/elements/button/Button';

type SearchBoxProps = {
  placeholder: string;
  buttonText: string;
  size?: 'small' | 'medium' | 'large';
};

const searchBoxVariants = cva('w-200', {
  variants: {
    size: {
      small: 'w-180',
      medium: 'w-230',
      large: 'w-260',
    },
  },
});

const inputVariants = cva(
  'w-200 bg-inherit py-4 ps-8 text-sm font-medium focus:outline-none',
  {
    variants: {
      size: {
        small: 'w-124 text-xs',
        medium: 'w-152',
        large: 'w-184',
      },
    },
  }
);

const SearchBox = ({
  placeholder,
  buttonText,
  size = 'medium',
}: SearchBoxProps) => {
  const searchBoxClass = searchBoxVariants({ size });
  const inputClass = inputVariants({ size });

  return (
    <form className={searchBoxClass}>
      <div className='flex flex-row items-center rounded-md bg-gray-200 p-4'>
        <svg
          className='ml-4 size-16'
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
        <input
          type='search'
          id='default-search'
          className={inputClass}
          placeholder={placeholder}
          required
        />
        <Button
          inText={buttonText}
          intent='secondary'
          size='small'
          onClick={() => {}}
        />
      </div>
    </form>
  );
};

export default SearchBox;

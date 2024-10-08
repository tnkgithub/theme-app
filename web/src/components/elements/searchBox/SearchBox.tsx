import React from 'react';
import { cva } from 'class-variance-authority';
import Button from '@/components/elements/button/Button';

type SearchBoxProps = {
  placeholder: string;
  buttonText: string;
  size?: 'small' | 'medium' | 'large';
};

const searchBoxVariants = cva('', {
  variants: {
    size: {
      small: 'w-52',
      medium: 'w-60',
      large: 'w-72',
    },
  },
});

const inputVariants = cva(
  'bg-inherit py-1 ps-2 text-sm font-medium focus:outline-none',
  {
    variants: {
      size: {
        small: 'w-28 text-xs',
        medium: 'w-32',
        large: 'w-40',
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
      <div className='flex flex-row items-center justify-between rounded-md bg-gray-200 p-1'>
        <div className='flex flex-row items-center'>
          <svg
            className='ml-1 size-4'
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
        </div>
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

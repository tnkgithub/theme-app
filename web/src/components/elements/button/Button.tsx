import React from 'react';

interface ButtonProps {
  inText: string;
}

const Button = ({ inText }: ButtonProps) => {
  return (
    <button className='w-36 flex-auto rounded-sm border-y border-gray-500 bg-white px-10 py-2 text-gray-800  hover:border-none hover:bg-blue-500 hover:text-white'>
      {inText}
    </button>
  );
};

export default Button;

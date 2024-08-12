import React from 'react';

interface ButtonProps {
  inText: string;
}

const Button = ({ inText }: ButtonProps) => {
  return (
    <button className='px-10 py-2 w-36 flex-auto text-gray-800 bg-white border-t border-b border-gray-500  rounded-sm hover:text-white hover:bg-blue-500 hover:border-none'>
      {inText}
    </button>
  );
};

export default Button;

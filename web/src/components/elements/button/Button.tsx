import React from 'react';

type ButtonProps = {
  inText: string;
};

const Button = ({ inText }: ButtonProps) => {
  return (
    <button className='w-48 rounded-lg bg-white px-10 py-2 text-left text-sm font-semibold text-gray-800 hover:bg-blue-500 hover:text-white focus:bg-blue-600 focus:text-white'>
      {inText}
    </button>
  );
};

export default Button;

import React from 'react';

type ButtonProps = {
  inText: string;
};

const Button = ({ inText }: ButtonProps) => {
  return (
    <button className='w-32 rounded-lg bg-white px-0 py-2 text-sm font-semibold text-gray-800 hover:bg-blue-500 hover:text-white focus:bg-blue-600 focus:text-white'>
      {inText}
    </button>
  );
};

export default Button;

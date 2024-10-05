import React from 'react';
import Link from 'next/link';

const Button = ({ inText, pageLink }: { inText: string; pageLink: string }) => {
  return (
    <Link
      href={pageLink}
      className='mx-2 w-128 rounded-lg bg-white px-0 py-8 text-center text-sm font-bold text-gray-800 duration-300 hover:bg-blue-500 hover:text-white'
    >
      {inText}
    </Link>
  );
};

export default Button;

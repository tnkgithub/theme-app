import React from 'react';
import Link from 'next/link';

const Button = ({ inText, pageLink }: { inText: string; pageLink: string }) => {
  return (
    <Link
      href={pageLink}
      className='mx-0.5 w-32 rounded-lg bg-white px-0 py-2 text-center text-sm text-gray-800 duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white'
    >
      {inText}
    </Link>
  );
};

export default Button;

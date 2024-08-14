import React from 'react';
import Image from 'next/image';

type HomeCardProps = {
  title: string;
  text: string;
  imagePath: string;
};

const HomeCard = ({ title, text, imagePath }: HomeCardProps) => {
  return (
    <div className='max-w-sm rounded-sm shadow-lg'>
      <Image
        src={imagePath}
        alt='image'
        width={500}
        height={500}
        className='h-72 w-full'
      />
      <div className='px-6 py-4'>
        <div className='mb-2 text-xl font-bold'>{title}</div>
        <p className='text-base text-gray-700'>{text}</p>
      </div>
    </div>
  );
};

export default HomeCard;

import React from 'react';
import Image from 'next/image';

type HomeCardProps = {
  title: string;
  description: string;
  imagePath: string;
};

const HomeCard = ({ title, description, imagePath }: HomeCardProps) => {
  return (
    <div className='my-6 max-w-sm rounded-sm border shadow-lg'>
      <Image
        src={imagePath}
        alt='image'
        width={500}
        height={500}
        className='h-72 w-full'
      />
      <div className='px-6 py-4'>
        <div className='mb-2 text-xl font-bold'>{title}</div>
        <p className='text-base text-gray-700'>{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;

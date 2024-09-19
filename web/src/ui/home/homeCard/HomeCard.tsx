import React from 'react';
import Image from 'next/image';

const imagesPathMap = {
  imagesList: '/posters/normalPoster/po000001.jpg',
  titleList: '',
  objectList: '',
};

export default function HomeCard({
  title,
  description,
  type,
}: {
  title: string;
  description: string;
  type: 'imagesList' | 'titleList' | 'objectList';
}) {
  const imagePath = imagesPathMap[type];

  return (
    <>
      <div className='my-6 max-w-sm rounded-sm border shadow-xl duration-300 hover:scale-105'>
        <Image
          src={imagePath}
          alt='image'
          width={500}
          height={500}
          className='h-72 w-full object-cover'
        />
        <div className='px-6 py-4'>
          <div className='mb-2 text-xl font-bold'>{title}</div>
          <p className='text-base text-gray-700'>{description}</p>
        </div>
      </div>
    </>
  );
}

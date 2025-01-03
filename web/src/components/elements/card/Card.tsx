import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const imagesPathMap = {
  imagesList: '/representation.jpg',
  titleList: '/titles2.jpg',
  objectList: '/objectWords.jpg',
};

function Card({
  title,
  //description,
  type,
}: {
  title: string;
  //description: string;
  type: 'imagesList' | 'titleList' | 'objectList';
}) {
  const imagePath = imagesPathMap[type];

  return (
    <>
      <div className='max-w-sm rounded-sm border shadow-md duration-300 hover:shadow-lg hover:shadow-gray-400'>
        <Image
          src={imagePath}
          alt='image'
          width={500}
          height={500}
          className='h-72 w-full object-cover'
        />
        <div className='px-6 py-4'>
          <div className='mb-2 text-xl font-bold text-gray-800'>{title}</div>
          {/* <p className='text-base text-gray-700'>{description}</p> */}
        </div>
      </div>
    </>
  );
}

function PosterCard({
  title,
  posterId,
  link,
  isTarget,
}: {
  title?: string;
  posterId: string;
  link?: string;
  isTarget: boolean;
}) {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className='aspect-1/1.41 w-full shadow-md duration-300 hover:scale-105'>
      {/* もし、linkがhttps://archives.c.fun.ac.jp/postersを含む場合、targetを_blankにする */}
      <Link
        href={link || '#'}
        {...(link?.includes('https://archives.c.fun.ac.jp/posters')
          ? { target: '_blank' }
          : {})}
      >
        {/* 画像が無い場合、表示しない */}
        {posterId === 'ダミー1' || posterId === 'ダミー2' ? null : (
          <Image
            src={`/posters/${posterId}.jpg`}
            alt={title || 'Poster'}
            width={120}
            height={169.2}
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className={`aspect-1/1.41 w-full object-cover ${isTarget ? 'outline outline-4 outline-blue-500' : ''}`}
          />
        )}
        {title ? (
          <div className='line-clamp-3 h-20 border-2 bg-white p-2'>{title}</div>
        ) : null}
      </Link>
    </div>
  );
}

export { Card, PosterCard };

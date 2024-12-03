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
      <div className='my-6 max-w-sm rounded-sm border shadow-xl duration-300 hover:shadow-gray-400'>
        <Image
          src={imagePath}
          alt='image'
          width={500}
          height={500}
          className='h-72 w-full object-cover'
        />
        <div className='px-6 py-4'>
          <div className='mb-2 text-xl font-bold'>{title}</div>
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
    <div className='aspect-1/1.41 w-full'>
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
            className={`aspect-1/1.41 w-full object-cover pb-0.5 shadow-md duration-300 hover:scale-110 ${isTarget ? 'outline outline-4 outline-blue-500' : ''}`}
          />
        )}
        {title ? (
          <div className='line-clamp-3 h-20 bg-white px-2 py-1'>{title}</div>
        ) : null}
      </Link>
    </div>
  );
}

export { Card, PosterCard };

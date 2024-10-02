'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function ImagesListPage() {
  // URLからクエリパラメータを取得
  const searchParams = useSearchParams();
  const imageId = searchParams.get('imageId') ?? '0';
  if (imageId.includes('po')) {
    const posterUrl = `https://archives.c.fun.ac.jp/posters/${imageId}/0001`;
    // 別タブでurlを開く
    window.open(posterUrl, '_blank', 'width=800, height=800');
  }

  // 2028の配列を定義
  const images = Array.from({ length: 2028 }, (_, i) => i + 1);

  return (
    <main>
      <div className='m-2 grid grid-cols-78 gap-1'>
        {images.map((image) => (
          <div
            key={image}
            className='flex justify-center bg-blue-400 duration-300 hover:scale-105 hover:border hover:border-gray-200 hover:shadow-xl'
          >
            <Image
              src={`/posters/trimmedPoster/po00${image}.jpg`}
              alt={`Image ${image}`}
              width={100}
              height={162}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Poster } from '@prisma/client';
// import Image from 'next/image';

// URLからクエリパラメータを取得して、画像を表示する
function OpenPoster() {
  // URLからクエリパラメータを取得
  const searchParams = useSearchParams();
  const imageId = searchParams.get('imageId') ?? '0';
  if (imageId.includes('po')) {
    const posterUrl = `https://archives.c.fun.ac.jp/posters/${imageId}/0001`;
    // 別タブでurlを開く
    window.open(posterUrl, '_blank', 'width=800, height=800');
  } else {
    console.log('imageId is not found');
  }
}

// データを取得
async function getStaticProps() {
  const res = await fetch('http://localhost:8000/api/poster/som');
  const { posters } = await res.json();
  return {
    props: {
      posters,
    },
  };
}

export default function ImagesListPage() {
  // const posters = getStaticProps().props.posters;
  OpenPoster();

  return (
    <main>
      <div className='m-2 grid grid-cols-78 gap-1'>
        {/* postersのjsonを表示
        {posters.map((poster: Poster) => (
          <div key={poster.id} className='flex justify-center bg-blue-400 '>
            <p>
              {poster.id}, {poster.somCoordinate}
            </p>
          </div>
        ))} */}
      </div>
    </main>
  );
}

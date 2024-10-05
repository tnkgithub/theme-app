'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Poster } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { getAroundPosters } from './aroundPoster';

// URLからクエリパラメータを取得
function getImageID() {
  const searchParams = useSearchParams();
  const imageId = searchParams.get('imageId') ?? '0';
  return imageId;
}

export default function ImagesListPage() {
  const imageId = getImageID();

  // ポスターのsom座標のjsonを取得
  const [posters, setPosters] = useState<Poster[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/poster/som')
      .then((res) => res.json())
      .then(({ posters }) => {
        setPosters(posters);
      });
  }, []);

  // imageIdがpoから始まる場合はポスターのurlを開く
  if (imageId.includes('po')) {
    const posterUrl = `https://archives.c.fun.ac.jp/posters/${imageId}/0001`;
    // 別タブでurlを開く
    window.open(posterUrl, '_blank', 'width=800, height=800');
  } else {
    console.log('imageId is not found');
  }

  // som座標の周囲の画像IDを取得
  const aroundPosters = getAroundPosters(imageId, posters);

  return (
    <main>
      <div className='m-8 grid grid-cols-17 gap-2'>
        {/* 画像IDのjsonを表示 */}

        {/* aroundPostersがnullまたはundefinedならエラーメッセージを表示 */}
        {aroundPosters && aroundPosters.length > 0 ? (
          aroundPosters.map((poster: Poster, index) => (
            <div key={index} className='w-150 h-211 bg-gray-500'>
              {/* ポスターが存在しない場合はエラーメッセージを表示 */}
              {poster && poster.id ? (
                <Link href={`/representation/som?imageId=${poster.id}`}>
                  <Image
                    src={`/posters/${poster.id}.jpg`}
                    alt={`${poster.somCoordinate}`}
                    width={150}
                    height={211}
                    className='object-cover duration-300 hover:scale-105 hover:border hover:border-gray-200 hover:shadow-xl'
                  />
                </Link>
              ) : (
                <div className='text-red-500'>
                  Error: Poster data is missing
                </div>
              )}
            </div>
          ))
        ) : (
          <div className='text-red-500'>
            Error: aroundPosters is null or undefined
          </div>
        )}
      </div>
    </main>
  );
}

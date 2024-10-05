'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Poster } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

// URLからクエリパラメータを取得
function getImageID() {
  const searchParams = useSearchParams();
  const imageId = searchParams.get('imageId') ?? '0';
  return imageId;
}

//
function getAroundPosters(imageId: string, posters: Poster[]) {
  const aroundPostersId = []; // 画像IDのリスト
  let targetCoordinate = null;

  // ターゲットの画像IDの座標を取得
  for (const poster of posters) {
    if (poster.id === imageId) {
      targetCoordinate = poster.somCoordinate;
      break;
    }
  }

  const x = 78; // somの横方向の数
  const y = 26; // somの縦方向の数

  if (targetCoordinate !== null) {
    // targetCoordinateの周囲の画像IDを取得
    for (const poster of posters) {
      if (

      )
    }
  }
  return aroundPostersId;
}

export default function ImagesListPage() {
  const imageId = getImageID();

  // imageIdがpoから始まる場合はポスターのurlを開く
  if (imageId.includes('po')) {
    const posterUrl = `https://archives.c.fun.ac.jp/posters/${imageId}/0001`;
    // 別タブでurlを開く
    window.open(posterUrl, '_blank', 'width=800, height=800');
  } else {
    console.log('imageId is not found');
  }

  // ポスターのsom座標のjsonを取得
  const [posters, setPosters] = useState<Poster[]>([]);
  useEffect(() => {
    fetch('http://localhost:8000/api/poster/som')
      .then((res) => res.json())
      .then(({ posters }) => {
        setPosters(posters);
      });
  }, []);

  //

  return (
    <main>
      <div className='m-2 grid grid-cols-78 gap-1'>
        {posters.map((poster: Poster) => (
          <div key={poster.id} className='bg-gray-500'>
            <Link href={`/representation/som?imageId=${poster.id}`}>
              <Image
                src={`/posters/${poster.id}.jpg`}
                alt={`${poster.somCoordinate}`}
                width={150}
                height={243}
                className='duration-300 hover:scale-105 hover:border hover:border-gray-200 hover:shadow-xl'
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

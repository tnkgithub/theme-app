'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Poster } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { start } from 'repl';

// URLからクエリパラメータを取得
function getImageID() {
  const searchParams = useSearchParams();
  const imageId = searchParams.get('imageId') ?? '0';
  return imageId;
}

// [2028] → [26, 78]の座標に変換
function get2dCoordinate(somCoordinate: number) {
  const x = Math.floor(somCoordinate / 78);
  const y = somCoordinate % 78;
  return [x, y];
}

//
function getAroundPosters(imageId: string, posters: Poster[]) {
  const aroundPosters: Poster[] = []; // 画像IDのリスト
  let targetCoordinate: number[] = [0, 0];

  // ターゲットの画像IDの座標を取得
  for (const poster of posters) {
    if (poster.id === imageId) {
      targetCoordinate = get2dCoordinate(poster.somCoordinate);
      break;
    }
  }

  // 画像IDの範囲をトーラス状に取得
  // 例１）targetCoordinateが[5, 8]だったら, aroundPostersIdに[0, 0]から[10, 16]までの画像IDを追加。11行17列の画像が表示される
  // 例２）targetCoordinateが[0, 0]だったら, 最初の17個が[21, 70]~[21, 77]と[21, 0]~[21, 8], 次の17個が[22, 70]~[22, 77]と[22, 0]~[22, 8]となる。これを11回繰り返す
  // 例３）targetCoordinateが[25, 77]だったら, 最初の17個が[20, 69]~[20, 78]と[20, 0]~[0, 8], 次の17個が[21, 69]~[21, 77]と[21, 0]~[21, 8]となる。これを11回繰り返す
  let rangeX = 5; // 縦の範囲
  let rangeY = 8; // 横の範囲
  let startX = targetCoordinate[0] - rangeX;
  let endX = targetCoordinate[0] + rangeX;
  let startY = targetCoordinate[1] - rangeY;
  let endY = targetCoordinate[1] + rangeY;

  // 画像IDをaroundPostersIdに追加
  if (startX < 0 && startY < 0) {
    const tmpStartX = 26 + startX;
    const tmpStartY = 78 + startY;
    for (let x = tmpStartX; x <= 25; x++) {
      for (let y = tmpStartY; y <= 77; y++) {
        aroundPosters.push(posters[x * 78 + y]);
      }
      for (let y = 0; y <= endY; y++) {
        aroundPosters.push(posters[x * 78 + y]);
      }
    }
    for (let x = 0; x <= endX; x++) {
      for (let y = tmpStartY; y <= 77; y++) {
        aroundPosters.push(posters[x * 78 + y]);
      }
      for (let y = 0; y <= endY; y++) {
        aroundPosters.push(posters[x * 78 + y]);
      }
    }
  } else if (startX < 0) {
    const tmpStartX = 26 + startX;
    for (let x = tmpStartX; x <= 25; x++) {
      for (let y = startY; y <= endY; y++) {
        aroundPosters.push(posters[x * 78 + y]);
      }
    }
    for (let x = 0; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        aroundPosters.push(posters[x * 78 + y]);
      }
    }
  } else if (startY < 0) {
    const tmpStartY = 78 + startY;
    for (let x = startX; x <= endX; x++) {
      for (let y = tmpStartY; y <= 77; y++) {
        aroundPosters.push(posters[x * 78 + y]);
      }
      for (let y = 0; y <= endY; y++) {
        aroundPosters.push(posters[x * 78 + y]);
      }
    }
  } else if (endX >= 26 && endY >= 78) {
    const tmpEndX = endX - 26;
    const tmpEndY = endY - 78;
    for (let x = startX; x <= 25; x++) {
      for (let y = startY; y <= 77; y++) {
        aroundPosters.push(posters[x * 78 + y]);
      }
      for (let y = 0; y <= tmpEndY; y++) {
        aroundPosters.push(posters[x * 78 + y]);
      }
    }
    for (let x = 0; x <= tmpEndX; x++) {
      for (let y = startY; y <= 77; y++) {
        aroundPosters.push(posters[x * 78 + y]);
      }
      for (let y = 0; y <= tmpEndY; y++) {
        aroundPosters.push(posters[x * 78 + y]);
      }
    }
  } else if (endX >= 26) {
    const tmpEndX = endX - 26;
    for (let x = startX; x <= 25; x++) {
      for (let y = startY; y <= endY; y++) {
        aroundPosters.push(posters[x * 78 + y]);
      }
    }
    for (let x = 0; x <= tmpEndX; x++) {
      for (let y = startY; y <= endY; y++) {
        aroundPosters.push(posters[x * 78 + y]);
      }
    }
  } else if (endY >= 78) {
    const tmpEndY = endY - 78;
    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= 77; y++) {
        aroundPosters.push(posters[x * 78 + y]);
      }
      for (let y = 0; y <= tmpEndY; y++) {
        aroundPosters.push(posters[x * 78 + y]);
      }
    }
  } else {
    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        aroundPosters.push(posters[x * 78 + y]);
      }
    }
  }
  return aroundPosters;
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
      <div className='m-2 grid grid-cols-17 gap-1'>
        {aroundPosters && aroundPosters.length > 0 ? (
          aroundPosters.map((poster: Poster, index) => (
            <div key={index} className='bg-gray-500'>
              {poster && poster.id ? (
                <Link href={`/representation/som?imageId=${poster.id}`}>
                  <Image
                    src={`/posters/${poster.id}.jpg`}
                    alt={`${poster.somCoordinate}`}
                    width={100}
                    height={100}
                    className='duration-300 hover:scale-105 hover:border hover:border-gray-200 hover:shadow-xl'
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

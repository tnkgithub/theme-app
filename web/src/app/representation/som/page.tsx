'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useFetchPosterData } from '@/hooks/useFetchPosterData';
import { useGetQuery } from '@/hooks/useGetQuery';
import useOpenDescription from '@/hooks/useOpenDescription';
import { getAroundPosters } from './getAroundPoster';
import { Poster } from '@prisma/client';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';
import SideBar from '@/components/layouts/sideBar/SideBar';

export default function ImagesListPage() {
  // URLからクエリパラメータを取得
  const posterId = useGetQuery();

  // ポスターの説明を開く
  useOpenDescription(posterId);

  // ポスターのsom座標のjsonを取得
  const posters = useFetchPosterData('http://localhost:8000/api/poster/som');

  // som座標の周囲の画像IDを取得
  const aroundPosters = getAroundPosters(posterId, posters);

  return (
    <MotionWrapper>
      <div className='flex flex-row'>
        <div className='h-screen w-52 '>
          <SideBar />
        </div>
        <div className='grow px-1'>
          <main className='m-3'>
            <div className='grid-cols-17 m-2 grid gap-1'>
              {/* 画像IDのjsonを表示 */}
              {/* aroundPostersがnullまたはundefinedならエラーメッセージを表示 */}
              {aroundPosters && aroundPosters.length > 0 ? (
                aroundPosters.map((poster: Poster, index) => (
                  <div key={index} className='w-[120px] bg-gray-500'>
                    {poster && poster.id ? (
                      // posterIdとposter.idが一致する場合はリンクを無効にする
                      posterId === poster.id ? (
                        <Image
                          src={`/posters/${poster.id}.jpg`}
                          alt={`${poster.somCoordinate}`}
                          width={120}
                          height={120}
                          className='border-4 border-blue-500 object-cover pb-0.5 duration-300 hover:scale-110 hover:shadow-xl'
                        />
                      ) : (
                        <Link
                          href={`/representation/som?posterId=${poster.id}`}
                        >
                          <Image
                            src={`/posters/${poster.id}.jpg`}
                            alt={'Poster None'}
                            width={120}
                            height={120}
                            className='object-cover duration-300 hover:scale-110 hover:border-4 hover:border-gray-200 hover:shadow-xl'
                          />
                        </Link>
                      )
                    ) : (
                      <div className='animate-pulse bg-gray-500' />
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
        </div>
      </div>
    </MotionWrapper>
  );
}

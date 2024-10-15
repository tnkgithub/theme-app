/* eslint-disable tailwindcss/no-custom-classname */
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useFetchPosterData } from '@/hooks/useFetchPosterData';
import { useGetQuery } from '@/hooks/useGetQuery';
import useOpenDescription from '@/hooks/useOpenDescription';
import { getAroundPosters } from './getAroundPoster';
import { Poster } from '@prisma/client';
import SideBar from '@/components/layouts/sideBar/SideBar';

export default function ImagesListPage() {
  // URLのクエリパラメータからposterIdを取得
  const posterId = useGetQuery();

  // ポスターの詳細情報を別ウィンドウで表示する
  useOpenDescription(posterId);

  // ポスターのデータを取得
  const posters = useFetchPosterData('http://localhost:8000/api/poster/som');
  // ポスターのデータから周辺のポスターを取得
  const aroundPosters = getAroundPosters(posterId, posters);

  // ポスター画
  const renderPoster = (poster: Poster) => {
    if (!poster || !poster.posterId) return null; // posterがundefinedまたはidがない場合は何も表示しない

    return (
      <div key={poster.posterId} className='w-[120px] bg-gray-500'>
        <Link
          href={
            posterId === poster.posterId
              ? '#'
              : `/representation/som?posterId=${poster.posterId}`
          }
        >
          <Image
            src={`/posters/${poster.posterId}.jpg`}
            alt={String(poster.somCoordinate) || 'Poster'}
            width={120}
            height={169.2}
            className={`object-cover duration-300  hover:scale-110 hover:shadow-xl ${posterId === poster.posterId ? 'border-4 border-blue-500' : 'outline outline-2 outline-white '}`}
          />
        </Link>
      </div>
    );
  };

  return (
    <div className='flex'>
      <div className='h-screen w-52'>
        <SideBar
          posterId={posterId}
          isSliderOpen={false}
          onSliderChange={() => {}}
        />
      </div>
      <div className='grow px-1'>
        <main className='m-3'>
          <div className='grid-cols-17 m-2 grid gap-1'>
            {Array.isArray(aroundPosters) && aroundPosters.length > 0 ? (
              aroundPosters.map(renderPoster)
            ) : (
              <div className='text-red-500'>
                Error: aroundPosters is null or undefined
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

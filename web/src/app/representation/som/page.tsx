/* eslint-disable tailwindcss/no-custom-classname */
'use client';

import React from 'react';
import { useFetchPosterData } from '@/hooks/useFetchPosterData';
import { useGetQuery } from '@/hooks/useGetQuery';
import { useOpenDescription } from '@/hooks/useOpenDescription';
import { getAroundPosters } from './getAroundPoster';
import { Poster } from '@prisma/client';
import { PosterCard } from '@/components/elements/card/Card';
import SideBar from '@/components/layouts/sideBar/SideBar';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';
import { LoadingSkelton } from '@/ui/loading/skeleton';

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
        <PosterCard
          posterId={poster.posterId}
          link={
            posterId === poster.posterId
              ? '#'
              : `/representation/som?posterId=${poster.posterId}`
          }
          isTarget={posterId === poster.posterId}
        />
      </div>
    );
  };

  return (
    <div className='flex'>
      <div className='h-screen w-52'>
        <SideBar posterId={posterId} isSliderOpen={false} />
      </div>
      <div className='grow px-1'>
        <MotionWrapper>
          <main className='m-3'>
            <div className='grid-cols-17 m-2 grid gap-1'>
              {
                Array.isArray(aroundPosters) && aroundPosters.length > 0
                  ? aroundPosters.map(renderPoster)
                  : null
                // <LoadingSkelton />
              }
            </div>
          </main>
        </MotionWrapper>
      </div>
    </div>
  );
}

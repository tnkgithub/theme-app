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
  const posterId = useGetQuery();
  useOpenDescription(posterId);

  const posters = useFetchPosterData('http://localhost:8000/api/poster/som');
  const aroundPosters = getAroundPosters(posterId, posters);

  const renderPoster = (poster: Poster) => {
    if (!poster || !poster.id) return null; // posterがundefinedまたはidがない場合は何も表示しない

    return (
      <div key={poster.id} className='w-[120px] bg-gray-500'>
        <Link
          href={
            posterId === poster.id
              ? '#'
              : `/representation/som?posterId=${poster.id}`
          }
        >
          <Image
            src={`/posters/${poster.id}.jpg`}
            alt={String(poster.somCoordinate) || 'Poster'}
            width={120}
            height={169.2}
            className={`object-cover duration-300  hover:scale-110 hover:shadow-xl ${posterId === poster.id ? 'border-4 border-blue-500' : 'hover:border-4 hover:border-gray-200 '}`}
          />
        </Link>
      </div>
    );
  };

  return (
    <div className='flex'>
      <div className='h-screen w-52'>
        <SideBar />
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

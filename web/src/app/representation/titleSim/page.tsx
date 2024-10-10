'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';
import { useFetchTitleSimData } from '@/hooks/useFetchTitleSimData';
import { useGetQuery } from '@/hooks/useGetQuery';
import useOpenDescription from '@/hooks/useOpenDescription';
import SideBar from '@/components/layouts/sideBar/SideBar';
import { TitleSimilarityMatrix } from '@prisma/client';

export default function TitleSimilarityPage() {
  const posterId = useGetQuery();

  useOpenDescription(posterId);

  const titleSimList = useFetchTitleSimData(
    `http://localhost:8000/api/poster/titleSim?posterId=${posterId}`
  );

  return (
    <MotionWrapper>
      <div className='flex flex-row'>
        <div className='h-screen w-52 '>
          <SideBar />
        </div>
        <div className='grow px-1'>
          <main className='m-3'>
            <div className='grid-cols-17 m-2 grid gap-1'>
              <Image
                src={`/posters/${posterId}.jpg`}
                alt={`${posterId}`}
                width={120}
                height={120}
                className='border-4 border-blue-500 object-cover pb-0.5 duration-300 hover:scale-110 hover:shadow-xl'
              />
              {titleSimList && titleSimList.length > 0 ? (
                titleSimList.map((title: TitleSimilarityMatrix) =>
                  title.id === posterId ? null : ( // for文のcontinueみたいに次のループに飛ばす
                    <Link
                      key={title.id}
                      href={`/representation/titleSim?posterId=${title.id}`}
                    >
                      <Image
                        src={`/posters/${title.id}.jpg`}
                        alt={'Poster None'}
                        width={120}
                        height={120}
                        className='object-cover duration-300 hover:scale-110 hover:border-4 hover:border-gray-200 hover:shadow-xl'
                      />
                    </Link>
                  )
                )
              ) : (
                <div>no data</div>
              )}
            </div>
          </main>
        </div>
      </div>
    </MotionWrapper>
  );
}

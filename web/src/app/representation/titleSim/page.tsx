'use client';

import React, { use, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { useFetchTitleSimData } from '@/hooks/useFetchTitleSimData';
import { useGetQuery } from '@/hooks/useGetQuery';
import useOpenDescription from '@/hooks/useOpenDescription';
import SideBar from '@/components/layouts/sideBar/SideBar';
import { TitleSimilarity } from '@prisma/client';

export default function TitleSimilarityPage() {
  const posterId = useGetQuery();

  useOpenDescription(posterId);

  const [titleSimData, setTitleSimData] = useState<TitleSimilarity[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/poster/titleSim?posterId=${posterId}`)
      .then((res) => res.json())
      .then(({ titleSim }) => {
        setTitleSimData(titleSim);
      });
  }, [posterId]);

  return (
    // <MotionWrapper>
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
            {titleSimData && titleSimData.length > 0 ? (
              Array.from({ length: 200 }, (_, i) => {
                const simKey = `sim_${i + 1}`;
                return (
                  <Link
                    key={i}
                    href={`/representation/titleSim?posterId=${titleSimData[0][simKey as keyof (typeof titleSimData)[0]]}`}
                  >
                    <Image
                      src={`/posters/${titleSimData[0][simKey as keyof TitleSimilarity]}.jpg`}
                      alt={`${titleSimData[0][simKey as keyof TitleSimilarity]}`}
                      width={120}
                      height={120}
                      className='object-cover duration-300 hover:scale-110 hover:border-4 hover:border-gray-200 hover:shadow-xl'
                    />
                  </Link>
                );
              })
            ) : (
              <div>no data</div>
            )}
          </div>
        </main>
      </div>
    </div>
    // </MotionWrapper>
  );
}

'use client';

import { useFetchObjectData } from '@/hooks/useFetchObjectData';
import { useGetQuery } from '@/hooks/useGetQuery';
import { useOpenDescription } from '@/hooks/useOpenDescription';
import SideBar from '@/components/layouts/sideBar/SideBar';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function ObjectPage() {
  const posterId = useGetQuery();

  const objectData = useFetchObjectData(
    `http://localhost:8000/api/poster/objectWord?posterId=${posterId}`
  );

  useOpenDescription(posterId);

  const mainContent = objectData ? (
    <>
      {objectData.posterIdsIncludingWords.map((item) => (
        <div key={item.id} className='pb-5'>
          <p className='m-3 text-xl'>物体名: {item.word}</p>
          <div className='grid grid-cols-2 gap-2 pl-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10'>
            {item.posters.map((poster) => (
              <div
                key={poster.posterId}
                className='bg-white shadow-md duration-300 hover:scale-110'
              >
                <Link
                  href={`/representation/objects?posterId=${poster.posterId}`}
                >
                  <Image
                    src={`/posters/${poster.posterId}.jpg`}
                    alt='poster'
                    width={120}
                    height={169.2}
                    className='w-full object-cover pb-0.5'
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  ) : (
    <div>Loading...</div>
  );

  return (
    <div className='flex flex-row'>
      <aside className='h-screen w-52'>
        <SideBar posterId={posterId} isSliderOpen={false} />
      </aside>
      <section className='grow px-5'>{mainContent}</section>
    </div>
  );
}

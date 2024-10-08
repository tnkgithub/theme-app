/* eslint-disable tailwindcss/no-custom-classname */
import { Poster } from '@prisma/client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';

async function getStaticProps() {
  const res = await fetch('http://localhost:8000/api/poster/representation');
  const { posters } = await res.json();
  return {
    props: {
      posters,
    },
  };
}

export default async function RepresentationPage() {
  const posters = (await getStaticProps()).props.posters;

  return (
    <MotionWrapper>
      <main className='mt-3'>
        {/* postersのjsonを表示 */}
        <div className='grid-cols-26  m-1 grid gap-1'>
          {posters.map((poster: Poster) => (
            <div key={poster.id} className='h-141 w-100 bg-gray-500'>
              <Link href={`/representation/som?imageId=${poster.id}`}>
                <Image
                  src={`/posters/${poster.id}.jpg`}
                  alt={`${poster.representationsCoordinate}`}
                  width={100}
                  height={141}
                  className='object-cover duration-300 hover:scale-105 hover:border hover:border-gray-200 hover:shadow-xl'
                />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </MotionWrapper>
  );
}

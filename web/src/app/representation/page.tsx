/* eslint-disable tailwindcss/no-custom-classname */
import { Poster } from '@prisma/client';
import React from 'react';
import { PosterCard } from '@/components/elements/card/Card';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';
import Link from 'next/link';
import Image from 'next/image';

async function getStaticProps() {
  const res = await fetch('http://localhost:8000/api/poster/representation');

  // レスポンスのJSONデータを取得
  const data = await res.json();

  // postersがオブジェクトの中にあるため、正しく取り出す
  const posters: Poster[] = data.posters;
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
            // <PosterCard
            //   key={poster.id}
            //   posterId={poster.posterId}
            //   link={`/representation/som?posterId=${poster.posterId}`}
            //   isTarget={false}
            // />
            // 何故か、poster.posterIdがundefinedになり、poster.idがnumberのはずなのに、stringになる
            <div key={poster.id} className='h-141 w-100 bg-gray-500'>
              <Link href={`/representation/som?posterId=${poster.id}`}>
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

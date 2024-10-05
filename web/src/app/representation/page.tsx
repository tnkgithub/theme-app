import { Poster } from '@prisma/client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    <main className='mt-12'>
      {/* postersのjsonを表示 */}
      <div className='m-2 grid grid-cols-26 gap-1'>
        {posters.map((poster: Poster) => (
          <div key={poster.id} className='w-100 h-141 bg-gray-500'>
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
  );
}

import { Poster } from '@prisma/client';
import { PosterCard } from '@/components/elements/card/Card';
import React, { Suspense } from 'react';
// import { PosterCard } from '@/components/elements/card/Card';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';

async function fetchData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/poster/representation`);

  // レスポンスのJSONデータを取得
  const data = await res.json();

  // postersがオブジェクトの中にあるため、正しく取り出す
  const posters: Poster[] = data.posters;

  console.log(posters);
  return {
    props: {
      posters,
    },
  };
}

export default async function RepresentationPage() {
  const posters = (await fetchData()).props.posters;

  return (
    <MotionWrapper>
      <main className='mt-3'>
        {/* postersのjsonを表示 */}
        <div className='grid-cols-26  m-1 grid gap-1'>
          {posters
            ? posters.map((poster: Poster) => (
                <PosterCard
                  key={poster.posterId}
                  posterId={poster.posterId}
                  link={`/representation/som?posterId=${poster.posterId}`}
                  isTarget={false}
                />
              ))
            : null}
        </div>
      </main>
    </MotionWrapper>
  );
}

'use client';

import { useFetchObjectData } from '@/hooks/useFetchObjectData';
import { useGetQuery } from '@/hooks/useGetQuery';
import { useOpenDescription } from '@/hooks/useOpenDescription';
import { PosterCard } from '@/components/elements/card/Card';
import Link from 'next/link';
import SideBar from '@/components/layouts/sideBar/SideBar';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';

type ObjectData = {
  posterIdsIncludingWords: {
    id: number;
    word: string;
    posters: { posterId: string }[];
  }[];
};

function mainContent({
  objectData,
  posterId,
}: {
  objectData: ObjectData;
  posterId: string;
}) {
  if (
    !objectData ||
    !Array.isArray(objectData.posterIdsIncludingWords) ||
    objectData.posterIdsIncludingWords.length === 0
  ) {
    return (
      <div>
        <p className='mt-5 p-2 text-2xl'>物体なし</p>
        <div className='mt-2 grid grid-cols-2 gap-2 pl-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10'>
          <PosterCard posterId={posterId} link='#' isTarget={true} />
        </div>
      </div>
    );
  } else {
    return (
      <>
        {objectData.posterIdsIncludingWords.map((item) => (
          <div key={item.id} className='mt-8 pb-5'>
            <Link
              className='mx-6 text-3xl duration-300 hover:text-blue-500'
              href={``}
            >
              {item.word}
            </Link>
            <div className='mt-5 grid grid-cols-2 gap-2 pl-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12'>
              <PosterCard posterId={posterId} link='#' isTarget={true} />
              {item.posters
                .slice(0, 23)
                .map(
                  (poster) =>
                    poster.posterId !== posterId && (
                      <PosterCard
                        key={poster.posterId}
                        posterId={poster.posterId}
                        link={`/representation/objects?posterId=${poster.posterId}`}
                        isTarget={false}
                      />
                    )
                )}
              {item.posters.length > 20 && (
                <Link
                  href={`/representation/objects/objectWord?posterId=${posterId}&word=${item.word}`}
                >
                  <div className='flex size-full items-center justify-center px-1 text-sm text-blue-500 outline outline-2 outline-blue-500'>
                    すべての資料
                    <br />
                    を表示
                  </div>
                </Link>
              )}
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default function ObjectsPage() {
  const posterId = useGetQuery();

  const objectData = useFetchObjectData(
    `http://localhost:8000/api/poster/representation/inPosterObjects?posterId=${posterId}`
  );

  useOpenDescription(posterId);

  if (!objectData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-row'>
      <aside className='h-screen w-52'>
        <SideBar posterId={posterId} isSliderOpen={false} />
      </aside>
      <section className='grow px-5'>
        <MotionWrapper>{mainContent({ objectData, posterId })}</MotionWrapper>
      </section>
    </div>
  );
}

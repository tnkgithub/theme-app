'use client';

import { useFetchObjectData } from '@/hooks/useFetchObjectData';
import { useGetQuery } from '@/hooks/useGetQuery';
import { useOpenDescription } from '@/hooks/useOpenDescription';
import { PosterCard } from '@/components/elements/card/Card';
import SideBar from '@/components/layouts/sideBar/SideBar';
import { LoadingSkelton } from '@/ui/loading/skeleton';

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
            <PosterCard posterId={posterId} link='#' isTarget={true} />
            {item.posters.map(
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
          </div>
        </div>
      ))}
    </>
  ) : (
    null
    // <LoadingSkelton />
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

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useFetchTitleSimData } from '@/hooks/useFetchTitleSimData';
import { useGetQuery } from '@/hooks/useGetQuery';
import useOpenDescription from '@/hooks/useOpenDescription';
import SideBar from '@/components/layouts/sideBar/SideBar';
import { Poster, TitleSimilarityMatrixPart1 } from '@prisma/client';

export default function TitleSimilarityPage() {
  const posterId = useGetQuery();
  useOpenDescription(posterId);

  const apiPath = `http://localhost:8000/api/poster/titleSim?posterId=${posterId}`;
  const { titleSimData, titleData } = useFetchTitleSimData(apiPath);

  const renderTargetPosterImage = (id: string, title: string) => (
    <div className='border-4 border-blue-500 bg-white shadow-md duration-300 hover:scale-110'>
      <Image
        src={`/posters/${id}.jpg`}
        alt={title}
        width={120}
        height={169.2}
        className='w-full pb-0.5'
      />
      <div className='line-clamp-3 px-2 py-1'>{title}</div>
    </div>
  );

  const renderPosterImage = (title: TitleSimilarityMatrixPart1) => {
    const matchedPoster = titleData?.find(
      (data: Poster) => data.id === title.id
    );
    return matchedPoster && title.id !== posterId ? (
      <div
        key={title.id}
        className='bg-white shadow-md duration-300 hover:scale-110'
      >
        <Link href={`/representation/titleSim?posterId=${title.id}`}>
          <Image
            src={`/posters/${title.id}.jpg`}
            alt={matchedPoster.title}
            width={120}
            height={169.2}
            className='w-full object-cover pb-0.5'
          />
        </Link>
        <div className='line-clamp-3 p-1 px-2'>{matchedPoster.title}</div>
      </div>
    ) : null;
  };

  const mainContent = titleSimData?.length ? (
    <div className='m-2 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12'>
      {renderTargetPosterImage(
        posterId,
        titleData?.find((data: Poster) => data.id === posterId)?.title || ''
      )}
      {titleSimData.map(renderPosterImage)}
    </div>
  ) : (
    <div>Loading...</div>
  );

  return (
    <div className='flex flex-row'>
      <aside className='h-screen w-52'>
        <SideBar />
      </aside>
      <section className='grow px-1'>
        <main className='m-3'>{mainContent}</main>
      </section>
    </div>
  );
}

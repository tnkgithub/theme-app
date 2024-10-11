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

  const renderPosterImage = (id: string, title: string) => (
    <div className='border- h-[260px] border-4 border-blue-500 bg-white shadow-xl duration-300 hover:scale-110'>
      <Image
        src={`/posters/${id}.jpg`}
        alt={title}
        layout='responsive'
        width={120}
        height={169.2}
        className=' object-cover pb-0.5'
      />
      <div className='line-clamp-3 px-1'>{title}</div>
    </div>
  );

  const renderTargetPosterImage = (title: TitleSimilarityMatrixPart1) => {
    const matchedPoster = titleData?.find(
      (data: Poster) => data.id === title.id
    );
    return matchedPoster && title.id !== posterId ? (
      <div
        key={title.id}
        className='h-[260px] bg-white shadow-xl duration-300 hover:scale-110'
      >
        <Link href={`/representation/titleSim?posterId=${title.id}`}>
          <Image
            src={`/posters/${title.id}.jpg`}
            alt={matchedPoster.title}
            layout='responsive'
            width={120}
            height={169.2}
            className='object-cover pb-0.5'
          />
        </Link>
        <div className='line-clamp-3 px-1'>{matchedPoster.title}</div>
      </div>
    ) : null;
  };

  const mainContent = titleSimData?.length ? (
    <div className='grid-cols-17 m-2 grid gap-2'>
      {renderPosterImage(
        posterId,
        titleData?.find((data: Poster) => data.id === posterId)?.title || ''
      )}
      {titleSimData.map(renderTargetPosterImage)}
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

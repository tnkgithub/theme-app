'use client';

import { openArchiveEvent } from '@/lib/google_analytics/gtag';
import Image from 'next/image';
import { LinkButton } from '@/components/elements/button/Button';

type TitleClusterProps = {
  id: number;
  repWord1?: string;
  repWord2?: string;
  repWord3?: string;
  repWord4?: string;
  repWord5?: string;
  posters: { posterId: string; title: string; description?: string }[];
};

export function PosterList({ cluster }: { cluster: TitleClusterProps }) {
  return (
    <div className='grid grid-cols-1 gap-6 xl:grid-cols-2'>
      {cluster.posters.map((poster) => (
        // <a
        //   key={poster.posterId}
        //   className='flex size-full items-center rounded-md bg-blue-50 p-2 shadow-md duration-300 hover:shadow-gray-400'
        //   href={`https://archives.c.fun.ac.jp/posters/${poster.posterId}/0001`}
        //   target='_blank'
        //   rel='noopener noreferrer'
        // >
        <div
          key={poster.posterId}
          className='flex size-full items-center rounded-md bg-blue-50 p-2 shadow-md duration-300 hover:shadow-gray-400'
        >
          <Image
            src={`/posters/${poster.posterId}.jpg`}
            alt={`${cluster.repWord1}`}
            width={100}
            height={141}
            className='m-2 mr-3 h-[141px] bg-blue-100 object-contain'
          />
          <div className=' m-1 flex h-full w-4/5 flex-col p-1'>
            <div className='flex-1 flex-col'>
              <p className='mb-2 text-lg font-bold'>{poster.title}</p>
              <p className='line-clamp-2 w-full break-all text-base text-gray-800'>
                {poster.description}
              </p>
            </div>
            <div className='mt-auto flex flex-row justify-end gap-2'>
              <LinkButton
                inText='詳細説明'
                intent='third'
                size='medium'
                href={`https://archives.c.fun.ac.jp/posters/${poster.posterId}/0001`}
                isTarget
                onClick={() =>
                  openArchiveEvent('title_to_archive', poster.posterId)
                }
              />
              <LinkButton
                inText='類似画像'
                intent='third'
                size='medium'
                href={`/representation/som?posterId=${poster.posterId}`}
              />
              <LinkButton
                inText='画像内物体'
                intent='third'
                size='medium'
                href={`/representation/inPosterObjects?posterId=${poster.posterId}`}
              />
            </div>
          </div>
          {/* </a> */}
        </div>
      ))}
    </div>
  );
}

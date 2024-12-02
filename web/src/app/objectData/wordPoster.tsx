'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/elements/button/Button';
import { LinkButton } from '@/components/elements/button/Button';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';

type ObjectDataProps = {
  word: string;
  posters: { posterId: string; title: string; description: string | null }[];
};

export default function WordPoster({
  objectData,
  handlerObject,
  checkIncludeWord,
}: {
  objectData: ObjectDataProps[];
  checkIncludeWord: (object: ObjectDataProps) => boolean;
  handlerObject: (object: ObjectDataProps) => void;
}) {
  const [commonPosters, setCommonPosters] = useState<
    { posterId: string; title: string; description: string | null }[]
  >([]);

  useEffect(() => {
    const posterMap = new Map<
      string,
      { title: string; description: string | null }[]
    >();

    objectData.forEach((object) => {
      object.posters.forEach((poster) => {
        if (!posterMap.has(poster.posterId)) {
          posterMap.set(poster.posterId, []);
        }
        posterMap.get(poster.posterId)?.push({
          title: poster.title,
          description: poster.description,
        });
      });
    });

    const common = Array.from(posterMap.entries())
      .filter(([, posters]) => posters.length === objectData.length)
      .map(([posterId, posters]) => ({
        posterId,
        title: posters[0].title,
        description: posters[0].description,
      }));

    setCommonPosters(common);
  }, [objectData]);

  return (
    <div className='mt-8 flex flex-col'>
      <div className='mb-6 flex flex-wrap items-center justify-center gap-1'>
        {objectData.map((object) => (
          <MotionWrapper key={object.word}>
            <Button
              inText={`${object.word} ×`}
              intent={checkIncludeWord(object) ? 'pressed' : 'third'}
              size='fit'
              onClick={() => handlerObject(object)}
            />
          </MotionWrapper>
        ))}
      </div>
      <div className='mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2'>
        {commonPosters.map(({ posterId, title, description }) => (
          <MotionWrapper key={posterId}>
            <div className='flex size-full items-center rounded-md bg-blue-50 p-2 shadow-md duration-300 hover:shadow-gray-400'>
              <Image
                src={`/posters/${posterId}.jpg`}
                alt={`${posterId}`}
                width={100}
                height={141}
                className='m-2 mr-3 h-[141px] object-contain'
              />
              <div className='m-1 flex h-full w-4/5 flex-col p-1'>
                <div className='flex-1 flex-col'>
                  <p className='mb-2 text-lg font-bold'>{title}</p>
                  <p className='line-clamp-2 w-full break-all text-base text-gray-800'>
                    {description}
                  </p>
                </div>
                <div className='mt-auto flex flex-row justify-end gap-1'>
                  <LinkButton
                    inText='詳細説明'
                    intent='third'
                    size='medium'
                    href={`https://archives.c.fun.ac.jp/posters/${posterId}/0001`}
                    isTarget
                  />
                  <LinkButton
                    inText='類似画像'
                    intent='third'
                    size='medium'
                    href={`/representation/som?posterId=${posterId}`}
                  />
                  <LinkButton
                    inText='類似タイトル'
                    intent='third'
                    size='medium'
                    href={`/representation/titleSim?posterId=${posterId}`}
                  />
                  <LinkButton
                    inText='画像内物体'
                    intent='third'
                    size='medium'
                    href={`/representation/inPosterObjects?posterId=${posterId}`}
                  />
                </div>
              </div>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </div>
  );
}
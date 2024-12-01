'use client';

import Image from 'next/image';
import { Button } from '@/components/elements/button/Button';
import Link from 'next/link';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';

type ObjectDataProps = {
  word: string;
  posters: { posterId: string }[];
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
      <div className='grid grid-cols-8 gap-2'>
        {objectData.map((object) =>
          object.posters.map((poster) => (
            <MotionWrapper key={poster.posterId}>
              <Link
                href={`/representation/inPosterObjects?posterId=${poster.posterId}`}
              >
                <Image
                  src={`/posters/${poster.posterId}.jpg`}
                  alt={`${poster.posterId}`}
                  width={200}
                  height={282}
                  className='m-2 mr-3 h-[282px] bg-blue-50 object-contain duration-300 hover:shadow-lg hover:shadow-gray-500'
                />
              </Link>
            </MotionWrapper>
          ))
        )}
      </div>
    </div>
  );
}

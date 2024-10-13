import Image from 'next/image';
import Link from 'next/link';
import { TitleSimilarityMatrixPart1 } from '@prisma/client';
import { Poster } from '@prisma/client';

export const renderTargetPosterImage = (posterId: string, title: string) => (
  <div className='border-4 border-blue-500 bg-white shadow-md duration-300 hover:scale-110'>
    <Image
      src={`/posters/${posterId}.jpg`}
      alt={title}
      width={120}
      height={169.2}
      className='w-full pb-0.5'
    />
    <div className='line-clamp-3 px-2 py-1'>{title}</div>
  </div>
);

export const renderPosterImage = (
  title: TitleSimilarityMatrixPart1,
  titleData: Poster[],
  posterId: string
) => {
  const matchedPoster = titleData?.find((data: Poster) => data.id === title.id);
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

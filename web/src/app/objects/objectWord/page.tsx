import { PosterCard } from '@/components/elements/card/Card';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  searchParams: {
    posterId?: string;
    [key: string]: string | undefined;
  };
};

type ObjectProps = {
  id: string;
  word: string;
  posters: { posterId: string }[];
};

async function fetchData(posterId: string, word: string) {
  const res = await fetch(
    `http://localhost:8000/api/poster/representation/inPosterObjects/objectWord?posterId=${posterId}&word=${word}`
  );
  const data = await res.json();

  const ObjectData: ObjectProps = data.responseData;

  return ObjectData;
}

function MainContent({
  objectData,
  posterId,
}: {
  objectData: ObjectProps;
  posterId: string;
}) {
  return (
    <div className='flex flex-col'>
      <div className='ml-6 flex flex-row items-center'>
        <Link
          href={`http://localhost:8000/objects`}
          className='h-9 pb-3 text-3xl font-bold text-gray-300 duration-300 hover:text-blue-400'
        >
          〈
        </Link>
        <div className='ml-2 text-3xl'>{objectData.word}</div>
      </div>

      <div className='mt-5 grid grid-cols-2 gap-2 pl-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8'>
        {objectData.posters.map((poster) => (
          // <PosterCard
          //   key={poster.posterId}
          //   posterId={poster.posterId}
          //   link={`https://archives.c.fun.ac.jp/posters/${poster.posterId}/0001`}
          //   isTarget={false}
          // />
          <Link
            key={poster.posterId}
            href={`https://archives.c.fun.ac.jp/posters/${poster.posterId}/0001`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src={`/posters/${poster.posterId}.jpg`}
              alt={`${poster.posterId}`}
              width={200}
              height={282}
              className='m-2 mr-3 h-[282px] object-contain'
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default async function ObjectWordPage({ searchParams }: Props) {
  const posterId = searchParams.posterId || '';
  const word = searchParams.word || '';
  const objectData = await fetchData(posterId, word);

  return (
    <main className='container mx-auto mt-8 flex justify-center'>
      <MainContent objectData={objectData} posterId={posterId} />
    </main>
  );
}

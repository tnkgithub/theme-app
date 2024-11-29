import { PosterCard } from '@/components/elements/card/Card';
import SideBar from '@/components/layouts/sideBar/SideBar';
import Link from 'next/link';

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
    <>
      <div className='ml-6 mt-8 flex flex-row items-center'>
        <Link
          href={`http://localhost:8000/representation/inPosterObjects?posterId=${posterId}`}
          className='h-9 pb-3 text-3xl font-bold text-gray-300 duration-300 hover:text-blue-400'
        >
          〈
        </Link>
        <div className='ml-2 text-3xl'>{objectData.word}</div>
      </div>

      <div className='mt-5 grid grid-cols-2 gap-2 pl-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12'>
        <PosterCard
          posterId={posterId}
          link={`https://archives.c.fun.ac.jp/posters/${posterId}/0001`}
          isTarget={true}
        />
        {objectData.posters.map(
          (poster) =>
            poster.posterId !== posterId && (
              <PosterCard
                key={poster.posterId}
                posterId={poster.posterId}
                link={`https://archives.c.fun.ac.jp/posters/${poster.posterId}/0001`}
                isTarget={false}
              />
            )
        )}
      </div>
    </>
  );
}

export default async function ObjectWordPage({ searchParams }: Props) {
  const posterId = searchParams.posterId || '';
  const word = searchParams.word || '';
  const objectData = await fetchData(posterId, word);

  return (
    <main className='flex flex-row'>
      <aside className='h-screen w-52'>
        <SideBar posterId={posterId} isSliderOpen={false} />
      </aside>
      <section className='grow px-5'>
        <MainContent objectData={objectData} posterId={posterId} />
      </section>
    </main>
  );
}

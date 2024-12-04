import { PosterCard } from '@/components/elements/card/Card';
import Link from 'next/link';
import SideBar from '@/components/layouts/sideBar/SideBar';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';

type ObjectDataProps = {
  word: string;
  posters: { posterId: string }[];
};

function MainContent({
  objectData,
  posterId,
}: {
  objectData: ObjectDataProps[];
  posterId: string;
}) {
  if (!objectData || objectData.length === 0) {
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
        {objectData.map((item) => (
          <div key={item.word} className='mt-8 pb-5'>
            <Link
              className='mx-6 text-3xl duration-300 hover:text-blue-500'
              href={`/representation/inPosterObjects/objectWord?posterId=${posterId}&word=${item.word}`}
            >
              {item.word}
            </Link>
            <div className='mt-3 grid grid-cols-2 gap-2 pl-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12'>
              <PosterCard posterId={posterId} link='#' isTarget={true} />
              {item.posters
                .slice(0, 22)
                .map((poster) =>
                  poster.posterId !== posterId ? (
                    <PosterCard
                      key={poster.posterId}
                      posterId={poster.posterId}
                      link={`/representation/inPosterObjects?posterId=${poster.posterId}`}
                      isTarget={false}
                    />
                  ) : null
                )}
              {item.posters.length > 22 && (
                <Link
                  href={`/representation/inPosterObjects/objectWord?posterId=${posterId}&word=${item.word}`}
                >
                  <p className='flex size-full items-center justify-center px-1 text-base font-semibold text-blue-500 hover:text-blue-700'>
                    すべての資料
                    <br />
                    を表示 →
                  </p>
                </Link>
              )}
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default async function ObjectsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const posterId = searchParams.posterId || '';

  const fetchObjects = async () => {
    const response = await fetch(
      `http://localhost:8000/api/poster/representation/inPosterObjects?posterId=${posterId}`
    );
    return response.json();
  };

  const objectData: ObjectDataProps[] = (await fetchObjects()).objectData;

  return (
    <div className='flex flex-row'>
      <aside className='h-screen w-52'>
        <SideBar posterId={posterId} isSliderOpen={false} />
      </aside>
      <section className='grow px-5'>
        <MotionWrapper>
          <MainContent objectData={objectData} posterId={posterId} />
        </MotionWrapper>
      </section>
    </div>
  );
}

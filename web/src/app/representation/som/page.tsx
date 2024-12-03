import { getAroundPosters } from './getAroundPoster';
import { PosterCard } from '@/components/elements/card/Card';
import SideBar from '@/components/layouts/sideBar/SideBar';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';
import { Poster } from '@prisma/client';

const renderPoster = (poster: Poster, posterId: string) => {
  if (!poster || !poster.posterId) return null;

  return (
    <div key={poster.posterId} className='bg-blue-100'>
      <PosterCard
        posterId={poster.posterId}
        link={
          posterId === poster.posterId
            ? '#'
            : `/representation/som?posterId=${poster.posterId}`
        }
        isTarget={posterId === poster.posterId}
      />
    </div>
  );
};

export default async function ImagesListPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const posterId = searchParams.posterId || '';

  // ポスターのデータを取得
  const fetchPosters = async () => {
    const response = await fetch(
      'http://localhost:8000/api/poster/representation/som'
    );
    return response.json();
  };

  const posters: Poster[] = (await fetchPosters()).posters;

  // ポスターのデータから周辺のポスターを取得
  const aroundPosters = getAroundPosters(posterId, posters, 3, 5);

  // ポスター画

  return (
    <div className='flex'>
      <div className='h-screen w-52'>
        <SideBar posterId={posterId} isSliderOpen={false} />
      </div>
      <div className='grow px-1'>
        <MotionWrapper>
          <main className='m-3'>
            <div className='m-2 grid grid-cols-11 gap-2'>
              {Array.isArray(aroundPosters) && aroundPosters.length > 0
                ? aroundPosters.map((poster) => renderPoster(poster, posterId))
                : null}
            </div>
          </main>
        </MotionWrapper>
      </div>
    </div>
  );
}

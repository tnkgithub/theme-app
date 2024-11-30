import { useFetchTitleData } from '@/hooks/useFetchTitleData';
import { useOpenDescription } from '@/hooks/useOpenDescription';
import SideBar from '@/components/layouts/sideBar/SideBar';
import { PosterCard } from '@/components/elements/card/Card';
import { Poster } from '@prisma/client';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';

export default async function TitleSimilarityPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const posterId = searchParams.posterId || '';

  const fetchTitles = async () => {
    const response = await fetch(
      `http://localhost:8000/api/poster/representation/titleSim?posterId=${posterId}`
    );
    return response.json();
  };

  // ポスターの詳細情報を別ウィンドウで表示する
  // useOpenDescription(posterId);

  // タイトルデータを取得
  const titleData: Poster[] = (await fetchTitles()).titleData;

  return (
    <div className='flex flex-row'>
      <aside className='h-screen w-52'>
        <SideBar posterId={posterId} isSliderOpen={true} />
      </aside>
      <section className='grow px-1'>
        <main className='m-3'>
          <MotionWrapper>
            {titleData ? (
              <div className='m-2 grid grid-cols-2 gap-2 pl-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10'>
                <PosterCard
                  title={
                    titleData.find(
                      (poster: Poster) => poster.posterId === posterId
                    )?.title || ''
                  }
                  posterId={posterId}
                  link='#'
                  isTarget={true}
                />
                {titleData.map(
                  (poster: Poster) =>
                    poster.posterId !== posterId && (
                      <PosterCard
                        key={poster.posterId}
                        title={poster.title}
                        posterId={poster.posterId}
                        link={`/representation/titleSim?posterId=${poster.posterId}`}
                        isTarget={false}
                      />
                    )
                )}
              </div>
            ) : (
              <div>データがありません。</div>
            )}
          </MotionWrapper>
        </main>
      </section>
    </div>
  );
}

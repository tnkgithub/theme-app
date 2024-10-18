'use client';

import { useFetchTitleSimData } from '@/hooks/useFetchTitleSimData';
import { useGetQuery } from '@/hooks/useGetQuery';
import { useState } from 'react';
import { usePushQuery } from '@/hooks/usePushQuery';
import { useOpenDescription } from '@/hooks/useOpenDescription';
import SideBar from '@/components/layouts/sideBar/SideBar';
import { PosterCard } from '@/components/elements/card/Card';
import { Poster, TitleSimilarityMatrixPart1 } from '@prisma/client';

const renderPosterImage = (
  title: TitleSimilarityMatrixPart1,
  titleData: Poster[],
  posterId: string
) => {
  const matchedPoster = titleData?.find(
    (poster: Poster) => poster.posterId === title.posterId
  );
  return matchedPoster && title.posterId !== posterId ? (
    <PosterCard
      posterId={title.posterId}
      title={matchedPoster.title}
      link={`/representation/titleSim?posterId=${title.posterId}`}
      isTarget={false}
    />
  ) : null;
};

export default function TitleSimilarityPage() {
  const [sliderValue, setSliderValue] = useState(0.7);

  // URLのクエリパラメータからposterIdを取得
  const posterId = useGetQuery();

  // クエリパラメータの値を変更する
  usePushQuery(posterId, sliderValue.toString());

  // ポスターの詳細情報を別ウィンドウで表示する
  useOpenDescription(posterId);

  // 類似度行列のデータとポスターのタイトルデータを取得
  const { titleSimData, titleData } = useFetchTitleSimData(
    `http://localhost:8000/api/poster/titleSim?posterId=${posterId}&threshold=${sliderValue.toString()}`
  );

  const mainContent = titleSimData?.length ? (
    <>
      <p className='m-3 text-xl'>類似度 ≧ {sliderValue}</p>
      <div className='m-2 grid grid-cols-2 gap-2 pl-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10'>
        <PosterCard
          title={
            titleData?.find((poster: Poster) => poster.posterId === posterId)
              ?.title || ''
          }
          posterId={posterId}
          link='#'
          isTarget={true}
        />
        {/*  類似度行列のデータを元にポスター画像を描画 */}
        {titleSimData.map((title: TitleSimilarityMatrixPart1) =>
          titleData ? renderPosterImage(title, titleData, posterId) : null
        )}
      </div>
    </>
  ) : (
    <div>Loading...</div>
  );

  return (
    <div className='flex flex-row'>
      <aside className='h-screen w-52'>
        <SideBar
          posterId={posterId}
          isSliderOpen={true}
          onSliderChange={(value: number) => {
            setSliderValue(value);
          }}
        />
      </aside>
      <section className='grow px-1'>
        <main className='m-3'>{mainContent}</main>
      </section>
    </div>
  );
}

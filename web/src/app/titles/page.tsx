import React from 'react';
import MotionRapper from '@/lib/framerMotion/MotionWrapper';
import RenderCluster from './renderClusters';

type TitleClusterProps = {
  id: number;
  repWord1?: string;
  repWord2?: string;
  repWord3?: string;
  repWord4?: string;
  repWord5?: string;
  posters: { posterId: string; title: string }[];
};

async function fetchData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/poster/titleData`);

  // レスポンスのJSONデータを取得
  const data = await res.json();

  // clustersがオブジェクトの中にあるため、正しく取り出す
  const clusters: TitleClusterProps[] = data.clusters;

  // postersのlengthで降順ソート
  // clusters.sort((a, b) => b.posters.length - a.posters.length);

  return {
    props: {
      clusters,
    },
  };
}

export default async function TitleClusterPage() {
  const clusters = (await fetchData()).props.clusters;
  return (
    <MotionRapper>
      <main className='mx-10 mt-8 flex justify-center'>
        <div className='grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2'>
          {clusters
            ? clusters.map((cluster: TitleClusterProps) => (
                <RenderCluster key={cluster.id} cluster={cluster} />
              ))
            : null}
        </div>
      </main>
    </MotionRapper>
  );
}

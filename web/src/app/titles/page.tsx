import React from 'react';
import Link from 'next/link';
import MotionRapper from '@/lib/framerMotion/MotionWrapper';
import Image from 'next/image';

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
  const res = await fetch('http://localhost:8000/api/poster/titleCluster');

  // レスポンスのJSONデータを取得
  const data = await res.json();

  // clustersがオブジェクトの中にあるため、正しく取り出す
  const clusters: TitleClusterProps[] = data.clusterData;

  // postersのlengthで降順ソート
  clusters.sort((a, b) => b.posters.length - a.posters.length);

  return {
    props: {
      clusters,
    },
  };
}

function RenderPosters({ cluster }: { cluster: TitleClusterProps }) {
  return (
    <div className='mx-3 grid grid-cols-2 gap-3'>
      {cluster.posters.slice(0, 6).map((poster) => (
        <div
          key={poster.posterId}
          className='flex items-center rounded-md bg-blue-50'
        >
          <Image
            src={`/posters/${poster.posterId}.jpg`}
            alt={`${cluster.repWord1}`}
            width={50}
            height={70.5}
            className='m-2 h-[70.5px] min-w-16 object-contain'
          />
          <div className='flex  h-16 w-fit items-center pr-2'>
            <p className='line-clamp-2 text-lg'>{poster.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function TitleClusterPage() {
  const clusters = (await fetchData()).props.clusters;
  return (
    <MotionRapper>
      <main className='container mx-auto mt-4 flex justify-center'>
        <div className='grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-2'>
          {clusters
            ? clusters.map((cluster: TitleClusterProps) => (
                <Link
                  key={cluster.id}
                  className='m-2 rounded-md  border-2 border-gray-200 pb-3  shadow-md'
                  href={`/titles/titleCluster?clusterId=${cluster.id}`}
                >
                  <div className='flex flex-row items-center justify-between'>
                    <p className='inline-block -translate-y-3 translate-x-4 truncate whitespace-nowrap rounded-md bg-blue-500 px-3 py-1 text-lg  text-white  lg:max-w-[250px] xl:max-w-[480px]'>
                      代表語： {cluster.repWord1} {cluster.repWord2}{' '}
                      {cluster.repWord3} {cluster.repWord4} {cluster.repWord5}
                    </p>
                    <p className='mx-1 inline-block min-w-fit p-2 text-sm text-gray-500'>
                      資料数： {cluster.posters.length}件
                    </p>
                  </div>
                  <RenderPosters cluster={cluster} />
                </Link>
              ))
            : null}
        </div>
      </main>
    </MotionRapper>
  );
}

import React from 'react';
import Link from 'next/link';
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

async function getStaticProps() {
  const res = await fetch('http://localhost:8000/api/poster/titleCluster');

  // レスポンスのJSONデータを取得
  const data = await res.json();

  // clustersがオブジェクトの中にあるため、正しく取り出す
  const clusters: TitleClusterProps[] = data.clusterData;

  // postersのlengthで降順ソート
  clusters.sort((a, b) => b.posters.length - a.posters.length);

  console.log(clusters);
  return {
    props: {
      clusters,
    },
  };
}

export default async function TitleClusterPage() {
  const clusters = (await getStaticProps()).props.clusters;
  return (
    <main className='mt-4 flex justify-center'>
      <div className='grid w-5/6 grid-cols-3 gap-x-4 gap-y-8'>
        {clusters
          ? clusters.map((cluster: TitleClusterProps) => (
              <div key={cluster.id}>
                <div className='m-2 rounded-md  border-2 border-gray-200 pb-3  shadow-md'>
                  <div className='flex flex-row items-center justify-between'>
                    <p className='inline-block max-w-[350px] -translate-y-3 translate-x-4 truncate whitespace-nowrap rounded-md bg-blue-400 px-3 py-1  text-lg text-white'>
                      代表語： {cluster.repWord1} {cluster.repWord2}{' '}
                      {cluster.repWord3} {cluster.repWord4} {cluster.repWord5}
                    </p>
                    <p className='mx-1 inline-block p-2 text-sm text-gray-500'>
                      資料数： {cluster.posters.length}件
                    </p>
                  </div>
                  <div className='mx-2 grid grid-cols-2 gap-2'>
                    {cluster.posters.slice(0, 6).map((poster) => (
                      <div
                        key={poster.posterId}
                        className='flex items-center rounded-md bg-blue-50'
                      >
                        <Link
                          className='m-2'
                          href={`/representation/titleCluster?clusterId=${cluster.id}`}
                        >
                          <Image
                            src={`/posters/${poster.posterId}.jpg`}
                            alt={`${cluster.repWord1}`}
                            width={50}
                            height={70.5}
                            className='object-cover duration-300 hover:scale-105 hover:border hover:border-gray-200 hover:shadow-xl'
                          />
                        </Link>
                        <div className='flex  h-16 w-44 items-center '>
                          <p className='line-clamp-2 text-lg'>{poster.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </main>
  );
}

import React from 'react';
import Link from 'next/link';
import MotionRapper from '@/lib/framerMotion/MotionWrapper';
import Image from 'next/image';
import { LinkButton, Button } from '@/components/elements/button/Button';

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
  const res = await fetch('http://localhost:8000/api/poster/titleData');

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

function RenderInCluster({ cluster }: { cluster: TitleClusterProps }) {
  return (
    <div className='mx-3 grid grid-cols-2 gap-3'>
      {cluster.posters.slice(0, 6).map((poster) => (
        <div
          key={poster.posterId}
          className='flex items-center rounded-md bg-blue-50 shadow-sm shadow-gray-300'
        >
          <Image
            src={`/posters/${poster.posterId}.jpg`}
            alt={`${cluster.repWord1}`}
            width={50}
            height={70.5}
            className='m-2 h-[70.5px] min-w-16 object-contain'
          />
          <div className='flex h-16 w-fit items-center pr-3'>
            <p className='line-clamp-2 break-all text-lg'>{poster.title}</p>
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
      <main className='container mx-auto mt-8 flex justify-center'>
        <div className='grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2'>
          {clusters
            ? clusters.map((cluster: TitleClusterProps) => (
                <Link
                  key={cluster.id}
                  className='m-2 h-fit rounded-xl border-2 border-gray-200 pb-3  shadow-md duration-300 hover:shadow-gray-400'
                  href={`/titles/titleCluster?clusterId=${cluster.id}`}
                >
                  <div className='flex flex-row items-center justify-between '>
                    <div className='my-2 ml-0.5 flex flex-row gap-1 px-2'>
                      {Array.from({ length: 5 }, (_, i) => {
                        const repWord =
                          cluster[`repWord${i + 1}` as keyof TitleClusterProps];

                        if (!repWord) return null;
                        return (
                          <Button
                            key={i}
                            inText={typeof repWord === 'string' ? repWord : ''}
                            intent='none'
                            size='fit'
                          />
                        );
                      })}
                    </div>
                    <p className='mx-1 inline-block min-w-fit p-2 text-sm text-gray-500'>
                      資料数： {cluster.posters.length}件
                    </p>
                  </div>
                  <RenderInCluster cluster={cluster} />
                </Link>
              ))
            : null}
        </div>
      </main>
    </MotionRapper>
  );
}

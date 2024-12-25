import Link from 'next/link';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';
import { PosterList } from './posterList';

type Props = {
  searchParams: {
    clusterId?: string; // `clusterId`がstring型またはundefinedであることを明示
    [key: string]: string | undefined; // 他のプロパティを許容
  };
};

type TitleClusterProps = {
  id: number;
  repWord1?: string;
  repWord2?: string;
  repWord3?: string;
  repWord4?: string;
  repWord5?: string;
  posters: { posterId: string; title: string; description?: string }[];
};

async function fetchData(searchParams: Props['searchParams']) {
  const clusterId = searchParams.clusterId || '';
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  // 外部APIやデータベースへのリクエスト例
  const res = await fetch(
    `${apiUrl}/poster/titleData/titleCluster?clusterId=${clusterId}`
  );

  const data = await res.json();

  const cluster: TitleClusterProps = data.cluster;

  return cluster;
}

export default async function TitleClusterPage({ searchParams }: Props) {
  const cluster = await fetchData(searchParams);

  return (
    <MotionWrapper>
      <main className='m-8'>
        <div className='container mx-auto items-center justify-between'>
          <div className='flex flex-row items-baseline justify-between px-2 pb-4'>
            <div className='flex flex-row items-center'>
              <Link
                href='/titles/'
                className='h-9 pb-3 text-4xl font-bold text-gray-300 duration-300 hover:text-blue-400'
              >
                〈
              </Link>
              <div className='flex flex-wrap gap-2 px-5 py-2'>
                {Array.from({ length: 5 }, (_, i) => {
                  const repWord =
                    cluster[`repWord${i + 1}` as keyof TitleClusterProps];

                  if (!repWord) return null;
                  return (
                    <a
                      key={i}
                      className='m-0.5 w-fit rounded-lg bg-gray-100 px-3 py-2 text-center text-lg font-semibold text-gray-700 transition-colors duration-300'
                    >
                      {typeof repWord === 'string' ? repWord : ''}
                    </a>
                  );
                })}
              </div>
            </div>
            <p className='text-lg text-gray-600'>
              資料数： {cluster.posters.length}件
            </p>
          </div>
          <PosterList cluster={cluster} />
        </div>
      </main>
    </MotionWrapper>
  );
}

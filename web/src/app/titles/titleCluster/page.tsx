import Image from 'next/image';
import Link from 'next/link';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';
import { LinkButton } from '@/components/elements/button/Button';

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

  // 外部APIやデータベースへのリクエスト例
  const res = await fetch(
    `http://localhost:8000/api/poster/titleCluster/inCluster?clusterId=${clusterId}`
  );

  const data = await res.json();

  const cluster: TitleClusterProps = data.cluster;

  return cluster;
}

function PosterList({ cluster }: { cluster: TitleClusterProps }) {
  return (
    <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
      {cluster.posters.map((poster) => (
        <a
          key={poster.posterId}
          className='flex size-full items-center rounded-md bg-blue-50 p-2 shadow-md shadow-blue-100 duration-300 hover:scale-105'
          href={`https://archives.c.fun.ac.jp/posters/${poster.posterId}/0001`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src={`/posters/${poster.posterId}.jpg`}
            alt={`${cluster.repWord1}`}
            width={100}
            height={141}
            className='m-2 mr-3 h-[141px] object-contain'
          />
          <div className=' m-1 flex h-full w-4/5 flex-col p-1'>
            <div className='flex-1 flex-col'>
              <p className='mb-2 text-lg font-bold'>{poster.title}</p>
              <p className='line-clamp-2 w-full break-all text-base text-gray-800'>
                {poster.description}
              </p>
            </div>
            <div className='mt-auto flex flex-row justify-end gap-5'>
              <LinkButton
                inText='類似画像'
                intent='third'
                size='medium'
                href={`/representation/som?posterId=${poster.posterId}`}
              />
              <LinkButton
                inText='画像内物体'
                intent='third'
                size='medium'
                href={`/representation/objects?posterId=${poster.posterId}`}
              />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
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
              <div className='flex flex-row gap-2 px-5 py-2'>
                {Array.from({ length: 5 }, (_, i) => {
                  const repWord =
                    cluster[`repWord${i + 1}` as keyof TitleClusterProps];

                  if (!repWord) return null;
                  return (
                    <LinkButton
                      key={i}
                      inText={typeof repWord === 'string' ? repWord : ''}
                      intent='fourth'
                      size='xlarge'
                      href='#'
                    />
                  );
                })}
              </div>
            </div>
            <p className='text-lg text-gray-500'>
              資料数： {cluster.posters.length}件
            </p>
          </div>
          <PosterList cluster={cluster} />
        </div>
      </main>
    </MotionWrapper>
  );
}

import Image from 'next/image';
import Link from 'next/link';

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

export default async function TitleClusterPage({ searchParams }: Props) {
  const cluster = await fetchData(searchParams);

  return (
    <main className='m-8'>
      <div className='container mx-auto items-center justify-between'>
        <div className='flex flex-row items-baseline justify-between px-2 pb-4'>
          {/* <div className='flex flex-row items-center'>
            <Link
              href='/titles/'
              className='m-1 h-10 pb-3 pr-2 text-4xl font-bold text-gray-300'
            >
              {'<'}
            </Link> */}
          <p className=' text-3xl font-bold'>
            代表語： {cluster.repWord1} {cluster.repWord2} {cluster.repWord3}{' '}
            {cluster.repWord4} {cluster.repWord5}
          </p>
          {/* </div> */}
          <p className='text-lg text-gray-500'>
            資料数： {cluster.posters.length}件
          </p>
        </div>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
          {cluster.posters.map((poster) => (
            <Link
              key={poster.posterId}
              className='flex w-full items-start rounded-md bg-blue-50'
              href={`https://archives.c.fun.ac.jp/posters/${poster.posterId}/0001`}
              target='_blank'
            >
              <Image
                src={`/posters/${poster.posterId}.jpg`}
                alt={`${cluster.repWord1}`}
                width={100}
                height={141}
                className='m-4 object-cover'
              />
              <div className='m-2 flex w-fit flex-col pr-4'>
                <p className='pb-1 pt-3 text-lg font-bold'>{poster.title}</p>
                <p className='my-0.5 line-clamp-4 text-sm text-gray-800'>
                  {poster.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

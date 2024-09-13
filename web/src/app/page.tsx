import HomeCard from '@/ui/home/homeCard/HomeCard';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className='container mx-auto flex h-full flex-wrap items-center justify-center p-10 lg:justify-between'>
        <Link href='/representation'>
          <HomeCard
            title='画像一覧'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet odit facere quia modi laborum enim velit assumenda aspernatur aliquam est perferendis cupiditate, eius vel officia eligendi ex nisi esse.'
            type='imagesList'
          />
        </Link>
        <HomeCard
          title='タイトル一覧'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet odit facere quia modi laborum enim velit assumenda aspernatur aliquam est perferendis cupiditate, eius vel officia eligendi ex nisi esse.'
          type='titleList'
        />
        <HomeCard
          title='物体名一覧'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet odit facere quia modi laborum enim velit assumenda aspernatur aliquam est perferendis cupiditate, eius vel officia eligendi ex nisi esse.'
          type='objectList'
        />
      </div>
    </main>
  );
}

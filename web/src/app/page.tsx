import { Card } from '@/components/elements/card/Card';
import Link from 'next/link';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';

export default function Home() {
  return (
    <MotionWrapper>
      <main>
        <div className='container mx-auto flex h-full flex-wrap items-center justify-center gap-x-14 p-2'>
          <Link href='/representation'>
            <Card
              title='画像一覧'
              // description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet odit facere quia modi laborum enim velit assumenda aspernatur aliquam est perferendis cupiditate, eius vel officia eligendi ex nisi esse.'
              type='imagesList'
            />
          </Link>
          <Link href='/titles'>
            <Card
              title='タイトル一覧'
              // description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet odit facere quia modi laborum enim velit assumenda aspernatur aliquam est perferendis cupiditate, eius vel officia eligendi ex nisi esse.'
              type='titleList'
            />
          </Link>
          <Link href='/objectData'>
            <Card
              title='物体名一覧'
              // description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet odit facere quia modi laborum enim velit assumenda aspernatur aliquam est perferendis cupiditate, eius vel officia eligendi ex nisi esse.'
              type='objectList'
            />
          </Link>
        </div>
      </main>
    </MotionWrapper>
  );
}

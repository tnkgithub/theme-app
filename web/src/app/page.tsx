import { Card } from '@/components/elements/card/Card';
import Link from 'next/link';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';
import { Suspense } from 'react';

export default function Home() {
  return (
    <MotionWrapper>
      <main>
        <div className='container mx-auto my-3 flex size-fit items-center justify-center'>
          <div className='flex size-fit flex-col rounded-lg bg-red-100 px-8 py-2'>
            <h1 className='py-1 text-xl text-red-500'>
              ※本システムの利用に関する注意事項
            </h1>
            <p className='w-full py-1 text-base text-gray-700'>
              本システムでは、資料の類似性の算出や物体名などのキーワード抽出にAI技術を使用しています。
              そのため、結果が必ずしも正確であるとは限りません。この点をご理解の上、ご利用ください。
            </p>
            <p className='mt-1 w-full text-base text-gray-700'>
              また、本システムに関するアンケートにご協力いただける方は、システムの利用後に以下のリンクまたは画面右上のリンクからご回答をお願いいたします。
            </p>
            <Link
              href='https://forms.gle/sevGhTNmjSviy1Lc8'
              target='_blank'
              className='w-full pb-1 pt-0.5 text-base text-blue-500 underline hover:text-blue-700'
            >
              アンケートに回答する
            </Link>
          </div>
        </div>
        <div className='container mx-auto flex h-full flex-wrap items-center justify-center gap-x-14 gap-y-4 p-2'>
          <Link href='/representation'>
            <Card
              title='画像一覧から探す'
              // description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet odit facere quia modi laborum enim velit assumenda aspernatur aliquam est perferendis cupiditate, eius vel officia eligendi ex nisi esse.'
              type='imagesList'
            />
          </Link>
          <Link href='/titles'>
            <Card
              title='タイトル一覧から探す'
              // description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet odit facere quia modi laborum enim velit assumenda aspernatur aliquam est perferendis cupiditate, eius vel officia eligendi ex nisi esse.'
              type='titleList'
            />
          </Link>
          <Link href='/objectData'>
            <Card
              title='物体名一覧から探す'
              // description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet odit facere quia modi laborum enim velit assumenda aspernatur aliquam est perferendis cupiditate, eius vel officia eligendi ex nisi esse.'
              type='objectList'
            />
          </Link>
        </div>
      </main>
    </MotionWrapper>
  );
}

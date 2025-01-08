import { Suspense } from 'react';
import WordList from './wordList';

type ObjectDataProps = {
  word: string;
  posters: { posterId: string; title: string; description: string | null }[];
};

async function fetchData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/poster/objectData`);

  // レスポンスのJSONデータを取得
  const data = await res.json();

  // clustersがオブジェクトの中にあるため、正しく取り出す
  const objects: ObjectDataProps[] = data.objectData;
  objects.sort((a, b) => b.posters.length - a.posters.length);

  return {
    props: {
      objects,
    },
  };
}

export default async function ObjectPage() {
  const objects = (await fetchData()).props.objects;
  return (
    <main className='m-8 px-8'>
      <div className='container mx-auto flex items-center justify-center px-10'>
        <div className='flex flex-col'>
          <p className='mb-6 text-center text-lg font-semibold'>物体名一覧</p>
          {objects ? (
            <Suspense fallback={<div>Loading...</div>}>
              <WordList objects={objects} />
            </Suspense>
          ) : (
            <div>データがありません</div>
          )}
        </div>
      </div>
    </main>
  );
}

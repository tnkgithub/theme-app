import WordList from './wordList';

type ObjectDataProps = {
  word: string;
  posters: { posterId: string; title: string; description: string | null }[];
};

async function fetchData() {
  // 開発環境用のURL
  // const apiUrl = 'http://localhost:8101/api/poster/objectData';

  // 本番環境用のURL
  // const apiUrl = 'http://180.43.174.138:8101/api/poster/objectData';
  const apiUrl = 'http://okunolab.c.fun.ac.jp:8101/api/poster/objectData';
  const res = await fetch(`${apiUrl}`);

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
    <main className='m-8 flex justify-center'>
      <div className='flex flex-col'>
        <p className='mb-6 text-center text-lg font-semibold'>物体名一覧</p>
        {objects ? (
          <WordList objects={objects} />
        ) : (
          <div>データがありません</div>
        )}
      </div>
    </main>
  );
}

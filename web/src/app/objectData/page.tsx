'use client';

import { useState, useEffect, useRef } from 'react';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';
import WordPoster from './wordPoster';
import { Button } from '@/components/elements/button/Button';

type ObjectDataProps = {
  word: string;
  posters: { posterId: string }[];
};

export default function ObjectPage() {
  const [objects, setObjects] = useState<ObjectDataProps[]>([]);
  const [selectedObject, setSelectedObject] = useState<ObjectDataProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const wordPosterRef = useRef<HTMLDivElement>(null);

  const handlerObject = (object: ObjectDataProps) => {
    // selectedObjectにobjectが含まれているかどうかを確認
    if (checkIncludeWord(object)) {
      // 含まれている場合、selectedObjectからobjectを削除
      setSelectedObject(selectedObject.filter((o) => o !== object));
    } else {
      // 含まれていない場合、selectedObjectにobjectを追加
      setSelectedObject([...selectedObject, object]);
      // 子コンポーネントがある場所までスクロール
      setTimeout(() => {
        wordPosterRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100); // 状態が更新されるタイミングを考慮して遅延を追加
    }
  };

  const checkIncludeWord = (object: ObjectDataProps) => {
    // object.wordがselectedObjectに含まれているかどうかを確認
    return selectedObject.includes(object);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true); // ローディング開始
        const res = await fetch('http://localhost:8000/api/poster/objectData');
        const data = await res.json();
        const objects: ObjectDataProps[] = data.objectData;
        setObjects(objects);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false); // ローディング終了
      }
    }

    fetchData();
  }, []);

  return (
    <main className='container mx-auto mt-8 flex justify-center'>
      <div className='flex flex-col'>
        <p className='mb-6 text-center text-lg font-semibold'>物体名一覧</p>
        {isLoading ? ( // ローディングサークルを表示
          <div className='flex h-32 items-center justify-center'>
            <div className='size-8 animate-spin rounded-full border-4 border-gray-500 border-t-transparent'></div>
          </div>
        ) : (
          <>
            <div className='flex flex-wrap  gap-1'>
              {objects.map((object) => (
                <MotionWrapper key={object.word}>
                  <Button
                    inText={object.word}
                    intent={checkIncludeWord(object) ? 'pressed' : 'third'}
                    size='fit'
                    onClick={() => handlerObject(object)}
                  />
                </MotionWrapper>
              ))}
            </div>
            {selectedObject && (
              <div ref={wordPosterRef}>
                <WordPoster
                  objectData={selectedObject}
                  handlerObject={handlerObject}
                  checkIncludeWord={checkIncludeWord}
                />
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}

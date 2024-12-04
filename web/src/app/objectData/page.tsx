'use client';

import { useState, useEffect, useRef } from 'react';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';
import WordPoster from './wordPoster';
import { Button } from '@/components/elements/button/Button';

type ObjectDataProps = {
  word: string;
  posters: { posterId: string; title: string; description: string | null }[];
};

export default function ObjectPage() {
  const [objects, setObjects] = useState<ObjectDataProps[]>([]);
  const [words, setWors] = useState<string[]>([]);
  const [selectedObject, setSelectedObject] = useState<ObjectDataProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isShowMore, setIsShowMore] = useState(false);

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

  // 開発環境用のURL
  // const url = 'http://localhost:8101/api/poster/objectData';

  // 本番環境用のURL
  const url = 'http://okunolab.c.fun.ac.jp:8101/api/poster/objectData';

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true); // ローディング開始
        const res = await fetch(url);
        const data = await res.json();
        const objects: ObjectDataProps[] = data.objectData;
        objects.sort((a, b) => b.posters.length - a.posters.length);
        setObjects(objects);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false); // ローディング終了
      }
    }

    fetchData();
  }, [url]);

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
            <div className='flex flex-wrap justify-center gap-1'>
              {objects.slice(0, 115).map((object) => (
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
            {objects.length > 115 && (
              <div className='my-3'>
                <div className='container flex justify-end'>
                  <Button
                    inText={isShowMore ? '✕ 物体名を隠す' : '他の物体名を表示'}
                    intent='noBorder'
                    size='fit'
                    onClick={() => setIsShowMore(!isShowMore)}
                  />
                </div>
                {isShowMore && (
                  <div className='mt-2 flex flex-wrap justify-center gap-1'>
                    {objects.slice(115).map((object) => (
                      <MotionWrapper key={object.word}>
                        <Button
                          inText={object.word}
                          intent={
                            checkIncludeWord(object) ? 'pressed' : 'third'
                          }
                          size='fit'
                          onClick={() => handlerObject(object)}
                        />
                      </MotionWrapper>
                    ))}
                  </div>
                )}
              </div>
            )}

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

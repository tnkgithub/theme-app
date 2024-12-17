'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';
import WordPoster from './wordPoster';
import { Button } from '@/components/elements/button/Button';
import { clieckWordEvent } from '@/lib/google_analytics/gtag';

type ObjectDataProps = {
  word: string;
  posters: { posterId: string; title: string; description: string | null }[];
};

export default function ObjectPage() {
  const [objects, setObjects] = useState<ObjectDataProps[]>([]);
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
  // const apiUrl = 'http://localhost:8101/api/poster/objectData';

  // 本番環境用のURL
  // const apiUrl = 'http://180.43.174.138:8101/api/poster/objectData';
  const apiUrl = 'http://okunolab.c.fun.ac.jp:8101/api/poster/objectData';

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true); // ローディング開始
        const res = await fetch(apiUrl);
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
  }, [apiUrl]);

  return (
    <main className='m-8 flex justify-center'>
      <div className='flex flex-col'>
        <p className='mb-6 text-center text-lg font-semibold'>物体名一覧</p>
        {isLoading ? ( // ローディングサークルを表示
          <div className='flex h-32 items-center justify-center'>
            <div className='size-8 animate-spin rounded-full border-4 border-gray-500 border-t-transparent'></div>
          </div>
        ) : (
          <>
            {/* データが取得できた場合、物体名一覧を表示 */}
            {objects.length > 0 ? (
              <>
                <div className='mx-auto flex w-5/6 flex-wrap justify-center gap-1'>
                  {objects.slice(0, 115).map((object) => (
                    <MotionWrapper key={object.word}>
                      <Button
                        inText={object.word}
                        intent={checkIncludeWord(object) ? 'pressed' : 'third'}
                        size='fit'
                        onClick={() => {
                          handlerObject(object);
                          clieckWordEvent(object.word);
                        }}
                      />
                    </MotionWrapper>
                  ))}
                </div>

                {objects.length > 115 && (
                  <div className='my-3'>
                    <div className='container flex justify-end'>
                      <Button
                        inText={
                          isShowMore ? '✕ 物体名を隠す' : '他の物体名を表示'
                        }
                        intent='noBorder'
                        size='fit'
                        onClick={() => setIsShowMore(!isShowMore)}
                      />
                    </div>
                    {isShowMore && (
                      <div className='mt-2 flex flex-wrap justify-center gap-1'>
                        {objects.slice(114).map((object) => (
                          <MotionWrapper key={object.word}>
                            <Button
                              inText={object.word}
                              intent={
                                checkIncludeWord(object) ? 'pressed' : 'third'
                              }
                              size='fit'
                              onClick={() => {
                                handlerObject(object);
                                clieckWordEvent(object.word);
                              }}
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
            ) : (
              <div className='flex items-center justify-center font-semibold'>
                <p>データの取得に失敗しました</p>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}

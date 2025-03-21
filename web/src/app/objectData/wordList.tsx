'use client';

import { useState, useRef } from 'react';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';
import WordPoster from './wordPoster';
import { Button } from '@/components/elements/button/Button';
import { clieckWordEvent } from '@/lib/google_analytics/gtag';

type ObjectDataProps = {
  word: string;
  posters: { posterId: string; title: string; description: string | null }[];
};

export default function WordList({ objects }: { objects: ObjectDataProps[] }) {
  const [selectedObject, setSelectedObject] = useState<ObjectDataProps[]>([]);
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
      // 物体名をクリックした際に、物体名のポスターまでスクロールする
      setTimeout(() => {
        if (wordPosterRef.current) {
          const headerOffset = 80; // 固定ヘッダーの高さ（px）
          const rect = wordPosterRef.current.getBoundingClientRect();
          console.log('rect:', rect);
          const offsetPosition = rect.top + window.scrollY - headerOffset;

          // スクロール位置を再計算して適用
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100); // 状態の反映タイミングを考慮
    }
  };

  const checkIncludeWord = (object: ObjectDataProps) => {
    // object.wordがselectedObjectに含まれているかどうかを確認
    return selectedObject.includes(object);
  };

  return (
    <>
      {/* データが取得できた場合、物体名一覧を表示 */}
      {objects.length > 0 ? (
        <>
          <div className='flex flex-wrap justify-center gap-1'>
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
                  inText={isShowMore ? '✕ 物体名を隠す' : '他の物体名を表示'}
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
              )}
            </div>
          )}

          {selectedObject && (
            <div
              ref={wordPosterRef}
              className='container mx-auto items-center justify-between'
            >
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
  );
}

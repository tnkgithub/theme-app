'use client';

import { usePathname } from 'next/navigation';
import SearchBox from '@/components/elements/searchBox/SearchBox';
import { LinkButton, IconButton } from '@/components/elements/button/Button';
import Slider from '@/components/elements/slider/Slider';
import { openArchiveEvent } from '@/lib/google_analytics/gtag';

interface SideBarProps {
  posterId: string;
  isSliderOpen: boolean;
  onSliderChange?: (value: number) => void;
}

// スライダーの値をpropsで親コンポーネントに渡す
const SideBar = ({ posterId, isSliderOpen, onSliderChange }: SideBarProps) => {
  const pathname = usePathname();

  return (
    <div>
      <div className='fixed top-16 z-10 h-screen w-56 border-r border-gray-300 bg-white'>
        <div className='flex flex-col items-center gap-1'>
          <div className='my-2 flex w-52 flex-col items-center border-b py-2'>
            <p className='w-full pb-1 ps-2 text-left text-lg font-bold'>
              類似資料で絞り込む
            </p>
            <IconButton
              inText='画像が類似する資料'
              intent={`${pathname === '/representation/som' ? 'pressed' : 'primary'}`}
              size='icon'
              href={`/representation/som?posterId=${posterId}`}
              icon='som'
            />
            <IconButton
              inText='タイトルが類似する資料'
              intent={`${pathname === '/representation/titleSim' ? 'pressed' : 'primary'}`}
              size='icon'
              href={`/representation/titleSim?posterId=${posterId}`}
              icon='title'
            />
            <IconButton
              inText='同名の物体を含む資料'
              intent={`${pathname === '/representation/inPosterObjects' ? 'pressed' : 'primary'}`}
              size='icon'
              href={`/representation/inPosterObjects?posterId=${posterId}`}
              icon='object'
            />
          </div>
          <LinkButton
            inText='詳細情報を表示'
            intent='fourth'
            size='large'
            href={`https://archives.c.fun.ac.jp/posters/${posterId}/0001`}
            isTarget={true}
            onClick={() => openArchiveEvent('sidebar_to_archive', posterId)}
          />
          {/* {isSliderOpen && (
            <div className='my-1 flex w-52 flex-col items-center border-b pb-4 pt-1'>
              <p className='w-full pb-2 ps-2 text-left text-lg font-bold'>
                類似度を変更
              </p>
              <Slider
                onChange={(value: number) => {
                  onSliderChange?.(value);
                }}
              />
            </div>
          )} */}
          {/* <div className='my-1 w-52 border-b pb-6 pt-2'>
            <p className='pb-4 ps-2 text-left text-lg font-bold'>
              キーワードで絞り込む
            </p>
            <SearchBox
              placeholder='キーワードを入力'
              buttonText='検索'
              size='small'
            />
          </div> */}
          {/* <LinkButton
            inText='代表資料に戻る'
            intent='secondary'
            size='large'
            href='/representation'
          /> */}
        </div>
      </div>
      <div className='h-screen w-56' />
    </div>
  );
};

export default SideBar;

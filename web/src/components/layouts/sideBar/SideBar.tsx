'use client';

import { usePathname } from 'next/navigation';
import { LinkButton, IconButton } from '@/components/elements/button/Button';
import { openArchiveEvent } from '@/lib/google_analytics/gtag';
import { Suspense, useState } from 'react';

interface SideBarProps {
  posterId: string;
  isSliderOpen: boolean;
  onSliderChange?: (value: number) => void;
}

const FullSideBar = ({
  posterId,
  handleSidebar,
}: {
  posterId: string;
  handleSidebar: () => void;
}) => {
  const pathname = usePathname();

  return (
    <>
      <div className='fixed top-11 z-10 h-screen w-56 border-r border-gray-300 bg-white md:top-28 lg:top-16'>
        <div className='flex flex-col items-center gap-1'>
          <div className='my-2 flex w-52 flex-col items-center border-b py-2'>
            <div className='flex w-full justify-between'>
              <p className='w-full pb-1 ps-2 text-left text-lg font-bold'>
                類似資料で絞り込む
              </p>
              <div className='md:hidden'>
                <IconButton
                  inText=''
                  intent='none'
                  size='menuicon'
                  icon='close'
                  onClick={handleSidebar}
                  href={''}
                />
              </div>
            </div>
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
        </div>
      </div>
      <div className='h-screen w-8 md:w-56' />
    </>
  );
};

const SmallSideBar = ({ handleSidebar }: { handleSidebar: () => void }) => {
  return (
    <>
      <div className='fixed top-11 z-10 h-screen w-12 border-r border-gray-300 bg-white md:top-28 lg:top-16'>
        <div className='mt-4 flex flex-col items-center justify-center gap-1 md:mt-6 lg:mt-4'>
          <IconButton
            inText=''
            intent='none'
            size='menuicon'
            icon='menu'
            onClick={handleSidebar}
            href={''}
          />
        </div>
      </div>
      <div className='h-screen w-8' />
    </>
  );
};

// スライダーの値をpropsで親コンポーネントに渡す
const SideBar = ({ posterId }: SideBarProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isSidebarOpen ? (
        <FullSideBar posterId={posterId} handleSidebar={handleSidebar} />
      ) : (
        <SmallSideBar handleSidebar={handleSidebar} />
      )}
    </Suspense>
  );
};

export default SideBar;

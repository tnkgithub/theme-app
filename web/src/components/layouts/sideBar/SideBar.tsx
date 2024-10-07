'use client';

/* eslint-disable tailwindcss/no-custom-classname */
import SearchBox from '@/components/elements/searchBox/SearchBox';
import React from 'react';
import Button from '@/components/elements/button/Button';

const SideBar = () => {
  return (
    <>
      <aside className='w-220 md:top-115 top-50 lg:top-65 fixed z-10 h-screen border-r border-gray-300 bg-white'>
        <div className='flex flex-col items-center'>
          <div className='my-12 flex flex-col border-b py-8'>
            <p className='pb-4 text-center text-lg font-bold'>
              類似資料の絞り込み
            </p>
            <Button
              inText='画像が類似する資料'
              intent='primary'
              size='large'
              onClick={() => {}}
            />
            <Button
              inText='タイトルが類似する資料'
              intent='primary'
              size='large'
              onClick={() => {}}
            />
            <Button
              inText='同じ物体を含む資料'
              intent='primary'
              size='large'
              onClick={() => {}}
            />
          </div>
          {/* <div className='w-180 container mx-auto my-4 flex flex-col items-center border-b py-8'>
          <div className='w-full py-8 text-xl font-bold'>
            <p>絞り込み</p>
          </div>

          <div className='w-150 text-md py-8 '>
            <ul className='grid gap-12'>
              <li>画像が類似する資料</li>
              <li>タイトルが類似する資料</li>
              <li>同じ物体を含む資料</li>
            </ul>
          </div>
        </div> */}
          <div className='my-4 py-8'>
            <p className='pb-12 text-center text-lg font-bold'>
              キーワードで絞り込む
            </p>
            <SearchBox
              placeholder='キーワードを入力'
              buttonText='検索'
              size='small'
            />
          </div>
        </div>
      </aside>
      <div className='w-220 h-screen'></div>
    </>
  );
};

export default SideBar;

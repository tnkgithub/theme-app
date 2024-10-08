'use client';

/* eslint-disable tailwindcss/no-custom-classname */
import SearchBox from '@/components/elements/searchBox/SearchBox';
import React from 'react';
import Button from '@/components/elements/button/Button';

const SideBar = () => {
  return (
    <>
      <aside className='fixed top-12 z-10 h-screen w-56 border-r border-gray-300 bg-white md:top-32 lg:top-14'>
        <div className='flex flex-col items-center'>
          <div className='my-3 flex flex-col border-b py-2'>
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
          <div className='my-1 py-2'>
            <p className='pb-3 text-center text-lg font-bold'>
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
      <div className='h-screen w-52'></div>
    </>
  );
};

export default SideBar;

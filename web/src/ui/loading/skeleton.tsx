import React from 'react';

export default function Skeleton({ number }: { number: number }) {
  return (
    <>
      {Array(number)
        .fill(0)
        .map((el, index) => (
          <div key={index}>
            <div className='flex w-80 flex-row items-center gap-2 rounded border-r-4 bg-white p-2 shadow-lg'>
              <div className='size-[4.5rem] animate-pulse rounded-full bg-gray-300'></div>
              <div className='flex w-9/12 flex-col gap-2'>
                <span className='h-2 w-11/12 animate-pulse rounded-full bg-gray-300'></span>
                <span className='h-2 w-9/12 animate-pulse rounded-full bg-gray-300'></span>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

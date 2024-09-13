'use client';

import React, { use, useEffect, useLayoutEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Element, scroller } from 'react-scroll';

export default function ImagesListPage() {
  // URLからクエリパラメータを取得
  const searchParams = useSearchParams();

  useLayoutEffect(() => {
    const imageId = searchParams.get('imageId');
    console.log('imageId:', imageId);

    const monitorHeightHalf = window.innerHeight / 2;

    if (imageId) {
      scroller.scrollTo(imageId, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuint',
        offset: -monitorHeightHalf,
        horizontal: false,
      });
    }
  }, [searchParams]);

  useEffect(() => {
    const imageId = searchParams.get('imageId');
    console.log('imageId:', imageId);

    const monitorWidthHalf = window.innerWidth / 2;

    if (imageId) {
      scroller.scrollTo(imageId, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuint',
        offset: -monitorWidthHalf,
        horizontal: true,
      });
    }

    // // 画像IDが指定されている場合は、その画像までスクロール
    // if (imageId) {
    //   scroller.scrollTo(imageId, {
    //     duration: 800,
    //     delay: 0,
    //     smooth: 'easeInOutQuint',
    //     offset: -monitor_height_harf,
    //     horizontal: false,
    //   });
    // }
    // if (imageId) {
    //   scroller.scrollTo(imageId, {
    //     duration: 800,
    //     delay: 0,
    //     smooth: 'easeInOutQuint',
    //     offset: -monitor_width_harf,
    //     horizontal: true,
    //   });
    // }
    // 画像IDが指定されている場合は、その画像までスクロール
    // 画像IDが指定されている場合は、その画像までスクロール
  }, [searchParams]);

  // 2028の配列を定義
  const images = Array.from({ length: 2028 }, (_, i) => i + 1);

  return (
    <main>
      <div className='grid grid-cols-78 gap-1'>
        {images.map((image) => (
          <Element key={image} name={String(image)}>
            <div className='flex justify-center bg-blue-400'>
              <Image
                src={`/posters/trimmedPoster/po00${image}.jpg`}
                alt={`Image ${image}`}
                width={100}
                height={162}
              />
            </div>
          </Element>
        ))}
      </div>
    </main>
  );
}

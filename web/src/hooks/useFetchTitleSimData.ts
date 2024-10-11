'use client';

import { useEffect, useState } from 'react';
import { Poster, TitleSimilarityMatrixPart1 } from '@prisma/client';
import { transform } from 'next/dist/build/swc';

export const useFetchTitleSimData = (url: string) => {
  const [titleSimData, setTitleSimData] = useState<
    TitleSimilarityMatrixPart1[]
  >([]);
  const [titleData, setTitleData] = useState<Poster[]>();


  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1回目のfetch
        const res1 = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const { titleSimilarityMatrix } = await res1.json();
        setTitleSimData(titleSimilarityMatrix);

        const transformedData = {
          titleSimilarityMatrix: titleSimilarityMatrix,
        };

        // 2回目のfetch
        const res2 = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(transformedData),
        });
        const res2Json = await res2.json();
        console.log('Response from second fetch:', res2Json); // レスポンスをログに出力
        const { titleData } = res2Json;
        setTitleData(titleData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  return { titleSimData, titleData };
};

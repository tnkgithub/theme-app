'use client';

import { useState, useEffect } from 'react';
import { Poster, TitleSimilarityMatrixPart1 } from '@prisma/client';

export const useFetchTitleData = (
  url: string,
  data: TitleSimilarityMatrixPart1[]
) => {
  const [titleData, setTitleData] = useState<Poster[]>();

  useEffect(() => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(({ titleData }) => {
        setTitleData(titleData);
      });
  }, [url, data]);

  return titleData;
};

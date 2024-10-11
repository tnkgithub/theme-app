'use client';

import { useEffect, useState } from 'react';
import { TitleSimilarityMatrixPart1 } from '@prisma/client';

export const useFetchTitleSimData = (url: string) => {
  const [titleSimData, setTitleSimData] = useState<
    TitleSimilarityMatrixPart1[]
  >([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(({ titleSimilarityMatrix }) => {
        setTitleSimData(titleSimilarityMatrix);
      });
  }, [url]);

  return titleSimData;
};

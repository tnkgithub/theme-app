import { useEffect, useState } from 'react';
import { TitleSimilarity } from '@prisma/client';

export const useFetchTitleSimData = (url: string) => {
  const [titleSimData, setTitleSimData] = useState<TitleSimilarity[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(({ titleSimilarityMatrix }) => {
        setTitleSimData(titleSimilarityMatrix);
      });
  }, [url]);

  return titleSimData;
};

import { useEffect, useState } from 'react';
import { TitleSimilarityMatrix } from '@prisma/client';

export const useFetchTitleSimData = (url: string) => {
  const [titleSimData, setTitleSimData] = useState<TitleSimilarityMatrix[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(({ titleSimilarityMatrix }) => {
        setTitleSimData(titleSimilarityMatrix);
      });
  }, [url]);

  return titleSimData;
};

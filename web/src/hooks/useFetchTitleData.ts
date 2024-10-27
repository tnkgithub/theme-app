import { useState, useEffect } from 'react';
import { Poster } from '@prisma/client';

export const useFetchTitleData = (url: string) => {
  const [titleData, setTitleData] = useState<Poster[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(({ titleData }) => {
        setTitleData(titleData);
      });
  }, [url]);

  return titleData;
};

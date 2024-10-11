'use client';

import { useEffect, useState } from 'react';
import { Poster } from '@prisma/client';

export const useFetchPosterData = (url: string) => {
  // ポスターのsom座標のjsonを取得
  const [posters, setPosters] = useState<Poster[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(({ posters }) => {
        setPosters(posters);
      });
  }, [url]);

  return posters;
};

import { useEffect, useState } from 'react';

type ObjectDataProps = {
  word: string;
  posters: { posterId: string }[];
};

export const useFetchObjectData = (url: string) => {
  const [objectData, setObjectData] = useState<[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setObjectData(data.objectData);
      });
  }, [url]);

  return objectData;
};

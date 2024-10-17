import { useEffect, useState } from 'react';

type PosterIdsIncludingWords = {
  id: number;
  word: string;
  posters: { posterId: string }[];
};

type objectDataProps = {
  posterIdsIncludingWords: PosterIdsIncludingWords[];
};

export const useFetchObjectData = (url: string) => {
  const [objectData, setObjectData] = useState<objectDataProps>();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setObjectData(data);
      });
  }, [url]);

  return objectData;
};
// type Poster = {
//   posterId: number;
// };

// type PosterIdsIncludingWords = {
//   id: number;
//   word: string;
//   posters: Poster[];
// };

// // type ObjectDataProps = {
// //   objectData: PosterIdsIncludingWords[];
// // };

// export const useFetchObjectData = (url: string) => {
//   const [objectData, setObjectData] = useState<PosterIdsIncludingWords[]>([]);
//   // const [objectData, setObjectData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(url);
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         const data = await res.json();
//         if (!data.objectData) {
//           throw new Error('Invalid response format');
//         }
//         setObjectData(data.objectData);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData;
//   }, [url]);

//   return { objectData, isLoading, error };
// };

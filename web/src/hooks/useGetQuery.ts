'use client';

// urlからクエリパラメータを取得する
import { useSearchParams } from 'next/navigation';

export const useGetQuery = () => {
  const searchParams = useSearchParams();
  const posterId = searchParams.get('posterId');

  return posterId;
};

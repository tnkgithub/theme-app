'use client';

import { useSearchParams } from 'next/navigation';

// URLからクエリパラメータを取得
export function useGetQuery() {
  const searchParams = useSearchParams();
  const posterId = searchParams.get('posterId') ?? '0';
  return posterId;
}

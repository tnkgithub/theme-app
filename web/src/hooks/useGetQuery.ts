'use client';

import { useSearchParams } from 'next/navigation';

// URLからクエリパラメータを取得
export function useGetQuery() {
  const searchParams = useSearchParams();
  const imageId = searchParams.get('posterId') ?? '0';
  return imageId;
}

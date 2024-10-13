import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const usePushQuery = (posterId: string, threshold: string) => {
  const router = useRouter();
  useEffect(() => {
    if (!posterId || !threshold) return;
    // sliderValueをstring型に変換
    // スライダーの値が変更された場合、URLのクエリパラメータを更新
    router.push(
      `http://localhost:8000/representation/titleSim?posterId=${posterId}&threshold=${threshold}`
    );
  }, [posterId, threshold, router]);
};

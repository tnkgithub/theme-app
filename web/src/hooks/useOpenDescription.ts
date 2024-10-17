'use client';

import { useEffect } from 'react';

export const useOpenDescription = (posterId: string) => {
  useEffect(() => {
    if (!posterId) return;
    const posterUrl = `https://archives.c.fun.ac.jp/posters/${posterId}/0001`;
    window.open(posterUrl, '_blank', 'width=800, height=800');
  }, [posterId]);
  return;
};

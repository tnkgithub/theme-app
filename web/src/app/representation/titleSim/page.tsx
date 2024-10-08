import React from 'react';
import { Poster } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import MotionWrapper from '@/lib/framerMotion/MotionWrapper';
import { useFetchPosterData } from '@/hooks/useFetchPosterData';
import { useGetQuery } from '@/hooks/useGetQuery';
import useOpenDescription from '@/hooks/useOpenDescription';

export default function TitleSimilarityPage() {
  const imageId = useGetQuery();

  useOpenDescription(imageId);
}

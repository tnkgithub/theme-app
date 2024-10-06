export default function useOpenDescription(imageId: string) {
  // imageIdがpoから始まる場合はポスターのurlを開く
  if (imageId.includes('po')) {
    const posterUrl = `https://archives.c.fun.ac.jp/posters/${imageId}/0001`;
    // 別タブでurlを開く
    window.open(posterUrl, '_blank', 'width=800, height=800');
  } else {
    console.log('imageId is not found');
  }

  return;
}

export default function useOpenDescription(posterId: string) {
  if (posterId.includes('po')) {
    const posterUrl = `https://archives.c.fun.ac.jp/posters/${posterId}/0001`;
    // 別タブでurlを開く
    window.open(posterUrl, '_blank', 'width=800, height=800');
  } else {
    console.log('imageId is not found');
  }

  return;
}

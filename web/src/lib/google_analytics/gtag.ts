export const gaId = process.env.NEXT_PUBLIC_GA_ID || '';

export const Is_GA_ID = gaId !== '';

export const pageview = (url: string) => {
  window.gtag('config', gaId, {
    page_path: url,
  });
};

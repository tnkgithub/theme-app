export const gaId = process.env.NEXT_PUBLIC_GA_ID || '';

export const Is_GA_ID = gaId !== '';

export const pageview = (url: string) => {
  window.gtag('config', gaId, {
    page_path: url,
  });
};

interface GtagEvent {
  action: string;
  category: string;
  label: string;
  value: number;
}

export const event = ({ action, category, label, value }: GtagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

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

const event = ({ action, category, label, value }: GtagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const openArchiveEvent = (action_name: string, label_name: string) => {
  event({
    action: action_name,
    category: 'button',
    label: label_name,
    value: 1,
  });
};

export const clieckWordEvent = (label_name: string) => {
  event({
    action: 'object_word_click',
    category: 'button',
    label: label_name,
    value: 1,
  });
};

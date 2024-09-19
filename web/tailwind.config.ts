import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        biz: ['var(--font-biz)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        '26': 'repeat(26, minmax(100px, 1fr))',
        '78': 'repeat(78, minmax(100px, 1fr))',
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        biz_udp: ['var(--font-biz-udp)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(120px, 1fr))',
        '15': 'repeat(15, minmax(120px, 1fr))',
        '17': 'repeat(17, minmax(120px, 1fr))',
        '26': 'repeat(26, minmax(100px, 1fr))',
        '78': 'repeat(78, minmax(100px, 1fr))',
      },
      aspectRatio: {
        '1/1.41': '1 / 1.41',
      },
    },
    plugins: [],
  },
};
export default config;

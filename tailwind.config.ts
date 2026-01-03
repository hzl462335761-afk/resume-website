import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: 'var(--color-primary)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
      },
    },
  },
  plugins: [],
};

export default config;




/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        accent: '#4F8EF7',
        bg: '#0a0a0f',
      },
      boxShadow: {
        glow: '0 0 20px rgba(79, 142, 247, 0.35)',
        'glow-sm': '0 0 12px rgba(79, 142, 247, 0.25)',
        'glow-lg': '0 0 40px rgba(79, 142, 247, 0.45)',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        ink: '#23262B',
        paper: '#FAF9F7',
        senal: '#6B4E8E',
        via: '#E4DCEF',
        anden: '#9FC9C4',
        linea: '#E7E4DE',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.75)' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 1.8s ease-in-out infinite',
      },
    },
  },
};

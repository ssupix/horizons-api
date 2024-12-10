/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      desktop: { 'min': '1080px' },
      tablet: { 'min': '425px', 'max': '1080px' },
      mobile: { 'max': '425px' },
  },
    extend: {
      fontFamily: {
        'lexend': ['Lexend Deca', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      }
    },
    animation: {
      fade: 'fade 1s ease-in forwards',
      rotation: 'rotation 8s linear infinite forwards',
    },
    keyframes: {
      fade: {
        '0%': { transform: 'translateY( 100px )', opacity: '0' },
        '100%': { transform: 'translateY( 0 )', opacity: '100%' },
      },
      rotation: {
        '0%': { transform: 'rotate( 0deg )' },
        '100%': { transform: 'rotate( 360deg )' },
      }
    },
    colors: {
      white: '#ffffff',
      black: '#141414',
      darkGrey: '#1E1E1E',
      grey: '#D9D9D9',
      blue: '#000CEA',
      overlay: 'rgba(0, 0, 0, 0.75)',
      transparent: 'transparent',
    },
  },
  plugins: [],
}


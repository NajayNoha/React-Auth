/** @type {import('tailwindcss').Config} */
export default {  
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: { 
    screens: {
      sm: '410px',
      md: '650px',
      lg: '800px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        edu: ['Roboto', 'sans-serif'],
      }},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'base-purple': '#660066',
      'light-purple': '#d896ff',
      'lighter-purple': '#efbbff',
      'lighter-lilac': '#e6d7ff' ,
      'title-purple': "#be29ec",
    },
   },
  plugins: [],
  darkMode: 'class',
}


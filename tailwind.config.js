/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    colors: {
      main: '#4E2096',
      primary: '#26203B',
      secondary: '#4D4E4E',
      stroke: '#DFE4E8',
      placeholder: '#B2B2B2',
      danger: '#E03131',
      success: '#08D58B'
    },
    extend: {},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */

import appColors from './utils/Colors';

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './error.vue',
  ],
  theme: {
    colors: appColors,
    extend: {
      backgroundImage: {
        'hero-pattern': "url('~/assets/image/background.png')",
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite.{js,ts}"

  ],
  theme: {
    extend: {
      colors: {
        purpleLogin: '#3F4280',
        lightPurpleLogin: '#5357aa',
        space:'#32345A',
        darkSpace:'#1b1c30',
        purpleToolTip: '#9B70F0',
        golden: '#C99856',
        blueProgressBar: '#45A0B4',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


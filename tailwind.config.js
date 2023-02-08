/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './composables/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './App.{js,ts,vue}',
    './app.{js,ts,vue}'
  ],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: []
}

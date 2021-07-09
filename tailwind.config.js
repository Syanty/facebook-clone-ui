module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        500: "500px",
        90: "90vh"
      },

      rotate: {
        '-70': '-70deg'
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled', 'hover']
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    fontFamily: {
      copperplate: ["copperplate", "sans-serif"],
      engraved: ["engraved", "sans-serif"],
      slab: ["slab", "sans-serif"],
    },
    screens: {
      'tb': '600px',
      'dk': '1200px'
    },
    colors: {
      transparent: 'transparent',
      white: 'white',
      black: 'black',
      'primary': '#8EFFBB',
      'secondary': '#DDD868',
      'accent': '#DFDBB2',
      'tertiary': '#BCA945',
      'background': '#0F120C',
    },
    extend: {
      // keyframes: {
      //   'ani': {
      //     'from': {mask-position: 0 0 -webkit-mask-position: 0 0},
    },
  },
  plugins: [],
}


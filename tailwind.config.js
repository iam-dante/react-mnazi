module.exports = { 
  mode: 'html',
  purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "gold": "#EDC285"
      },
      fontFamily:{
        sans : ['"Inter"', '"san-serif"']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'orange-accent': '#FD8628',
        'dark-mode': '#18191B'
      },
    },
    fontFamily: {
      'press-start': ['"Press Start 2P"']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
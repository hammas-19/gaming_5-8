module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    colors: {
      Bluish: '#2D6FBC',
      BalticSea: '#262626',
      snowDrift: '#F7F9FA',
      blackCow: '#4A4A4A',
      gossip: '#abf5a8',
      bananaYellow: '#FFDC34',
      lightGrey: '#DADADA',
      warningRed: '#d90429',
      transparent: 'transparent',
      white: '#fff'
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {}
  },
  plugins: []
}

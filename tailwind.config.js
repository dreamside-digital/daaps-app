module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
     '96': '24rem',
    },
    colors: {
      transparent: 'transparent',
      yellow: '#F1E297',
      pink: '#FCEEF4',
      green: '#004B55',
      purple: '#7860f7',
      black: '#000',
      white: '#fff',
      gray: '#C4C4C4',
    },
    fontFamily: {
      'sans': ['Jost', 'ui-sans-serif', 'system-ui'],
      'serif': ['Plastic', 'ui-serif', 'Georgia'],
      'sans-bold': ['Jost Bold', 'ui-sans-serif', 'system-ui'],
    },
    boxShadow: {
      tabs: 'inset 1px -2px 4px 0 rgb(0, 0, 0, 0.1)',
      none: 'none',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

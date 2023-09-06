/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,js}'],
  theme: {
    extend: {
      container: {
        screens: {
          lg: '984px',
          xl: '1024px',
          '2xl': '1024px',
        },
        center: true,
        padding: '1rem'
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'playfair-display': ['Playfair Display', 'serif']
      },
        keyframes: {
          expand: {
            '0%': { transform: 'scaleY(0)' } ,
            '100%': { transform: 'scaleY(1)' }
          }
      },
      animation: {
        'expand-menu': 'expand .5s ease forwards'
      },
    },
  },
  plugins: [],
}


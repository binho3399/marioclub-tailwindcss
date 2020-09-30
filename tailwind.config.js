module.exports = {
  important: true,
  variants: {
    // ...
    borderStyle: ['responsive', 'hover', 'focus'],
  },
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#f63232',

        secondary: {
          100: '#FEB614',
          200: '#71d300',
        },
        grai: {
          100: '#f4f4f4',
          200: '#4b4b4b',
        },
      },
      borderRadius: {
        50: '50px',
      },

      inset: {
         '1/3': '30%',
         '-16': '-4rem',
         '109': '109px',
      },

      margin: {
        30: '30%',
        '5%': '5%',
      },

      spacing: {
        1200: '1200px',
        105: '105px',
        30: '30%',
        25: '25%',
      },

      width: {
        '40%': '40%',
      }
    },
  },
  variants: {},
  plugins: [],
}

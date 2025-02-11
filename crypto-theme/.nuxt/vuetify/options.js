import colors from 'vuetify/lib/util/colors'

let darkMode = 'false'
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('luxiDarkMode') || 'false'
}

/** !IMPORTANT
** If you change the palette bellow,
** don't forget to update /crypto-theme/components/GradientDeco/GradientDeco.vue on const palette as well.
** Make sure the const palette has same value as this const palette bellow
**/

const palette = {
  money: {
    primary: colors.green.base, // primary main
    primarylight: colors.green.lighten4, // primary light
    primarydark: colors.green.darken3, // primary dark
    secondary: colors.amber.darken2, // secondary main
    secondarylight: colors.amber.lighten4, // secondary light
    secondarydark: colors.amber.darken4, // secondary dark
    anchor: colors.green.base // link
  }
}

export const theme = {
  ...palette.money
}

export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true
    }
  }
}

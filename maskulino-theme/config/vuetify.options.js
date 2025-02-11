import colors from 'vuetify/lib/util/colors'

let darkMode = 'true'
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('luxiDarkMode') || 'true'
}

const palette = {
  maskulino: {
    primary: colors.grey.darken4, // primary main
    primarylight: colors.grey.lighten3, // primary light
    primarydark: colors.grey.darken3, // primary dark
    secondary: colors.blue.accent4, // secondary main
    secondarylight: colors.blue.lighten4, // secondary light
    secondarydark: colors.blue.darken4, // secondary dark
    anchor: colors.amber.base // link
  }
}

export const theme = {
  ...palette.maskulino
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

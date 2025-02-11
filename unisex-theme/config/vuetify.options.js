import colors from 'vuetify/lib/util/colors'

let darkMode = 'true'
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('luxiDarkMode') || 'true'
}

const palette = {
  uni: {
    primary: colors.deepPurple.accent3, // primary main
    primarylight: colors.deepPurple.lighten3, // primary light
    primarydark: colors.deepPurple.darken4, // primary dark
    secondary: colors.purple.base, // secondary main
    secondarylight: colors.purple.lighten4, // secondary light
    secondarydark: colors.purple.darken4, // secondary dark
    anchor: colors.purple.base // link
  }
}

export const theme = {
  ...palette.uni
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

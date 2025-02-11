<template>
  <div class="root">
    <div class="deco-wrap">
      <div class="deco-inner" :class="{ hide: hide }">
        <div class="illustration" id="net_art" />
      </div>
    </div>
    <hidden point="smDown">
      <div class="inner-parallax">
        <div class="cloud-wrap">
          <figure class="cloud-parallax">
            <div class="cloud-deco" />
          </figure>
        </div>
      </div>
    </hidden>
    <v-container class="max-md">
      <div class="banner-wrap">
        <div class="text">
          <h4 class="use-text-title2">
            {{ $t('hostingLanding.banner_title') }}
          </h4>
          <p class="use-text-subtitle2">
            {{ $t('hostingLanding.banner_subtitle') }}
          </p>
          <v-card class="search-domain">
            <v-text-field
              :label="$t('hostingLanding.banner_label')"
              class="search"
              hide-details
              filled
            />
            <div class="action">
              <hidden point="smDown">
                <div class="form-control">
                  <v-select
                    v-model="val"
                    :items="items"
                    name="domain"
                    filled
                    hide-details
                    class="select-domain"
                  ></v-select>
                </div>
              </hidden>
              <v-btn class="button" color="primary">
                <v-icon class="icon">mdi-magnify</v-icon>
                <span v-if="isDesktop">
                  {{ $t('hostingLanding.banner_button') }}
                </span>
              </v-btn>
            </div>
          </v-card>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './banner-style.scss';
</style>

<script>
import colors from 'vuetify/lib/util/colors'
import Hidden from '../Hidden'

const palette = {
  cloud: {
    primary: colors.lightBlue.base, // primary main
    primarylight: colors.lightBlue.lighten4, // primary light
    primarydark: colors.lightBlue.darken4, // primary dark
    secondary: colors.orange.base, // secondary main
    secondarylight: colors.orange.lighten4, // secondary light
    secondarydark: colors.orange.darken4, // secondary dark
    anchor: colors.lightBlue.base // link
  }
}

const theme = {
  ...palette.cloud
}

export default {
  components: {
    Hidden
  },
  data() {
    return {
      hide: false,
      name: '',
      domain: 'com',
      items: ['.com', '.net', '.org', '.co', '.biz', '.gov', '.id', '.abc', '.xyz', '.news', '.cc', '.me'], // eslint-disable-line
      val: '.com'
    }
  },
  mounted() {
    this.$vuetify.theme.themes = {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    }
    setTimeout(() => {
      window.VANTA.NET({
        el: '#net_art',
        color: this.$vuetify.theme.themes.light.primary,
        backgroundColor: this.$vuetify.theme.themes.light.primarylight,
        backgroundAlpha: 0,
        points: 4,
        maxDistance: 18,
        spacing: 12
      })
    }, 1000)
  },
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    }
  },
  methods: {}
}
</script>

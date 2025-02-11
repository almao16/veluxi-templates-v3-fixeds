<template>
  <fragment>
    <v-navigation-drawer
      v-if="isMobile"
      v-model="openDrawer"
      fixed
      temporary
      class="mobile-nav"
    >
      <mobile-menu :open="openDrawer" />
    </v-navigation-drawer>
    <v-app-bar
      v-scroll="handleScroll"
      id="header"
      :class="{ fixed: fixed, 'open-drawer': openDrawer }"
      class="header"
      fixed
      app
    >
      <div class="header-top">
        <v-container :class="{ 'fixed-width': isDesktop }">
          <div class="logo">
            <v-btn
              v-if="isMobile"
              :class="{ 'is-active': openDrawer }"
              class="hamburger hamburger--spin mobile-menu"
              text
              icon
              @click.stop="handleToggleOpen"
            >
              <span class="hamburger-box">
                <span class="bar hamburger-inner" />
              </span>
            </v-btn>
            <nuxt-link
              v-if="invert"
              :to="routerLink.hosting.home"
            >
              <img :src="logo" alt="logo">
              {{ brand.hosting.name }}
            </nuxt-link>
            <scrollactive
              v-if="!invert && loaded"
              tag="span"
            >
              <a href="#home" class="anchor-link scrollactive-item">
                <img :src="logo" alt="logo">
                {{ brand.hosting.name }}
              </a>
            </scrollactive>
          </div>
          <div class="user-menu">
            <hidden point="smDown">
              <v-icon>mdi-phone</v-icon>
              +12 345 678 90
              <v-divider class="divider" />
              <v-btn :href="routerLink.hosting.login" class="text-btn" text>
                {{ $t('hostingLanding.header_login') }}
              </v-btn>
            <v-btn
              :href="routerLink.hosting.register"
              color="secondary"
              class="button"
            >
              {{ $t('hostingLanding.header_register') }}
            </v-btn>
            </hidden>
            <setting-menu :invert="invert" />
          </div>
        </v-container>
      </div>
      <hidden point="smDown">
        <div class="navigation">
          <v-container class="fixed-width">
            <nav class="nav-menu">
              <v-btn
                v-if="invert"
                :href="routerLink.hosting.home"
                class="icon"
                icon
              >
                <v-icon>mdi-home</v-icon>
              </v-btn>
              <v-btn
                v-if="!invert"
                href="#home"
                class="icon"
                icon
              >
                <v-icon>mdi-home</v-icon>
              </v-btn>
              <scrollactive
                v-if="loaded"
                :offset="navOffset"
                active-class="active"
                tag="ul"
              >
                <li
                  v-for="(item, index) in menuList"
                  :key="index"
                >
                  <v-btn
                    v-if="!invert"
                    :href="item.url"
                    class="anchor-link scrollactive-item"
                    text
                    @click="setOffset(item.offset)"
                  >
                    {{ $t('hostingLanding.header_'+item.name) }}
                  </v-btn>
                  <v-btn
                    v-if="invert"
                    :href="'/' + item.url"
                    text
                  >
                    {{ $t('hostingLanding.header_'+item.name) }}
                  </v-btn>
                </li>
                <li>
                  <v-btn
                    :href="routerLink.hosting.contact"
                    text
                  >
                    {{ $t('hostingLanding.header_contact') }}
                  </v-btn>
                </li>
              </scrollactive>
            </nav>
          </v-container>
        </div>
      </hidden>
    </v-app-bar>
  </fragment>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import logo from '~/static/images/hosting-logo.svg'
import link from '~/static/text/link'
import brand from '~/static/text/brand'
import Hidden from '../Hidden'
import navMenu from './menu'
import Settings from './Settings'
import MobileMenu from './MobileMenu'

let counter = 0
function createData(name, url, offset) {
  counter += 1
  return {
    id: counter,
    name,
    url,
    offset
  }
}

export default {
  components: {
    'setting-menu': Settings,
    Hidden,
    MobileMenu
  },
  props: {
    invert: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      logo: logo,
      routerLink: link,
      loaded: false,
      brand: brand,
      section: 0,
      fixed: false,
      openDrawer: null,
      navOffset: 20,
      menuList: [
        createData(navMenu[0], '#' + navMenu[0]),
        createData(navMenu[1], '#' + navMenu[1]),
        createData(navMenu[2], '#' + navMenu[2]),
        createData(navMenu[3], '#' + navMenu[3], -40),
        createData(navMenu[4], '#' + navMenu[4], -40)
      ]
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleScroll: function() {
      if (window.scrollY > 80) {
        return (this.fixed = true)
      }
      return (this.fixed = false)
    },
    setOffset: function(offset) {
      this.navOffset = offset
    },
    handleToggleOpen: function() {
      this.openDrawer = !this.openDrawer
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    }
  }
}
</script>

<template>
  <div>
    <v-app-bar
      v-scroll="handleScroll"
      id="header"
      :class="{ fixed: invert || fixed || isMobile, 'open-drawer': openDrawer }"
      class="header"
      fixed
      app
      elevation="0"
    >
      <v-container :class="{ 'fixed-width': isDesktop }">
        <div class="header-content">
          <nav
            :class="{ invert: invert }"
            class="nav-logo nav-menu"
          >
            <v-btn
              :class="{ 'is-active': openDrawer }"
              class="hamburger hamburger--spin mobile-menu"
              @click.stop="handleToggleOpen"
              text
              icon
            >
              <span class="hamburger-box">
                <span class="bar hamburger-inner" />
              </span>
            </v-btn>
            <div class="logo">
              <nuxt-link v-if="invert" :to="link.profile.home">
                <img :src="logo" alt="logo">
              </nuxt-link>
              <scrollactive
                v-if="!invert && loaded"
                tag="span"
              >
                <a href="#home" class="anchor-link scrollactive-item">
                  <img :src="logo" alt="logo">
                </a>
              </scrollactive>
            </div>
            <setting-menu :invert="invert" />
          </nav>
        </div>
      </v-container>
    </v-app-bar>
    <transition name="fade">
      <div v-if="openDrawer" class="paper-nav">
        <div class="mobile-nav">
          <scrollactive
            v-if="loaded"
            :offset="navOffset"
            active-class="active"
          >
            <ul class="menu">
              <li
                v-for="(item, index) in menuList"
                :key="index"
                :style="{ 'animation-duration': index * 0.15 + 's' }"
              >
                <v-btn text :href="item.url" @click="setOffset(item.offset)">
                  {{ $t('profileLanding.header_'+item.name) }}
                </v-btn>
              </li>
            </ul>
          </scrollactive>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import logo from '~/static/images/profile-logo.svg'
import routeLink from '~/static/text/link'
import Settings from '../Settings'
import navMenu from '../SideNavigation/menu'

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
    'setting-menu': Settings
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
      link: routeLink,
      loaded: false,
      show: false,
      fixed: false,
      openDrawer: false,
      navOffset: 20,
      menuList: [
        createData(navMenu[0], '#' + navMenu[0]),
        createData(navMenu[1], '#' + navMenu[1], -100),
        createData(navMenu[2], '#' + navMenu[2]),
        createData(navMenu[3], '#' + navMenu[3], -40),
        createData(navMenu[4], '#' + navMenu[4], -40),
        createData(navMenu[5], '#' + navMenu[5], -40),
        createData(navMenu[6], '#' + navMenu[6])
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
      this.openDrawer = false
    },
    handleToggleOpen: function() {
      this.openDrawer = !this.openDrawer
    }
  },
  computed: {
    isMobile() {
      const mdDown = this.$store.state.breakpoints.mdDown
      return mdDown.indexOf(this.$mq) > -1
    },
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    }
  }
}
</script>

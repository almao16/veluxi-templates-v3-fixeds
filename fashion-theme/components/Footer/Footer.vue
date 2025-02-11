<template>
  <footer class="root">
    <v-container class="max-lg">
      <div class="logo">
        <img :src="logo" alt="logo" />
      </div>
      <div class="subscribe">
        <h5 class="use-text-subtitle">
          {{ $t('fashionLanding.subscribe_title') }}
        </h5>
        <div class="form">
          <form>
            <v-text-field
              :placeholder="$t('fashionLanding.subscribe_email')"
              class="field"
              full-width
            />
            <v-btn text class="button">
              {{ $t('fashionLanding.subscribe_button') }} 
            </v-btn>
          </form>
        </div>
      </div>
      <nav>
        <ul>
          <li
            v-for="(item, index) in menu"
            :key="index"
          >
            <a :href="'#' + item">
              {{ $t('fashionLanding.header_' + item) }}
            </a>
          </li>
        </ul>
      </nav>
      <div class="socmed">
        <v-btn icon class="icon">
          <i class="ion-logo-twitter " />
        </v-btn>
        <v-btn icon class="icon">
          <i class="ion-logo-facebook" />
        </v-btn>
        <v-btn icon class="icon">
          <i class="ion-logo-instagram" />
        </v-btn>
      </div>
    </v-container>
    <div class="copyright">
      <p class="body-2 text-center">
        &copy;
        {{ brand.fashion.footerText }}
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import './footer-style';
</style>

<script>
import logo from '~/static/images/fashion-logo.svg'
import brand from '~/static/text/brand'
import menu from '../Header/menu'

export default {
  data: () => ({
    logo: logo,
    brand: brand,
    menu: menu
  })
}
</script>

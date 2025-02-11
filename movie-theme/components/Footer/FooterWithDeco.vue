<template>
  <div class="footer-deco">
    <div class="decoration">
      <svg class="left-deco">
        <use xlink:href="/images/movie/deco-bg-left.svg#main" />
      </svg>
      <div class="line-deco">
        <svg class="right-deco-before">
          <use xlink:href="/images/movie/deco-bg-right.svg#main" />
        </svg>
        <svg class="right-deco">
          <use xlink:href="/images/movie/deco-bg-right.svg#main" />
        </svg>
      </div>
    </div>
    <div class="action">
      <h4 class="use-text-title2">
        {{ $t('movieLanding.footer_waiting') }}
      </h4>
      <v-btn color="secondary" large>
        {{ $t('movieLanding.getstarted') }}
      </v-btn>
    </div>
    <footer-main />
  </div>
</template>

<style lang="scss" scoped>
@import './footer-style.scss';
</style>

<script>
import Footer from './Footer'

export default {
  components: {
    'footer-main': Footer
  }
}
</script>

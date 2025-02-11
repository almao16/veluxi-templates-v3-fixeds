<template>
  <div class="root">
    <hidden point="xsDown">
      <div class="grid-25">
        <img :src="imgAPI.movie[6]" alt="trending" />
        <v-btn text class="overlay">
          <h5>
            {{ $t('movieLanding.trending_rent') }}
          </h5>
        </v-btn>
      </div>
      <div class="grid-50">
        <img :src="imgAPI.movie[7]" alt="trending" />
        <v-btn text class="overlay">
          <h3>
            <i class="ion-coffee" /> FREE
            <span>Movies</span>
          </h3>
        </v-btn>
      </div>
      <div class="grid-25">
        <img :src="imgAPI.movie[8]" alt="trending" />
        <v-btn text class="overlay">
          <h5>
            {{ $t('movieLanding.trending_episodes') }}
          </h5>
        </v-btn>
      </div>
    </hidden>
    <hidden v-if="loaded" point="smUp">
      <slick
        ref="slick"
        :options="slickOptions"
      >
        <div>
          <div class="grid-25">
            <img :src="imgAPI.movie[6]" alt="trending" />
            <v-btn text class="overlay">
              <h5>
                {{ $t('movieLanding.trending_rent') }}
              </h5>
            </v-btn>
          </div>
        </div>
        <div>
          <div class="grid-50">
            <img :src="imgAPI.movie[7]" alt="trending" />
            <v-btn text class="overlay">
              <h3>
                <i class="ion-coffee" /> FREE
                <span>Movies</span>
              </h3>
            </v-btn>
          </div>
        </div>
        <div>
          <div class="grid-25">
            <img :src="imgAPI.movie[8]" alt="trending" />
            <v-btn text class="overlay">
              <h5>
                {{ $t('movieLanding.trending_episodes') }}
              </h5>
            </v-btn>
          </div>
        </div>
      </slick>
    </hidden>
  </div>
</template>

<style lang="scss" scoped>
@import './trending-stye.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import Hidden from '../Hidden'

export default {
  components: {
    Hidden,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      imgAPI: imgAPI,
      slickOptions: {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000
      }
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>

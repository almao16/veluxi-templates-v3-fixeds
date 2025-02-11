<template>
  <v-card class="movie-thumb">
    <v-btn
      :href="link.movie.detail"
      class="btn-wrap"
      text
    >
      <span class="figure">
        <i class="ion-ios-play play" />
        <img :src="img" alt="text" />
        <span class="figcaption">
          {{ $t('movieLanding.featured_caption') }}
        </span>
      </span>
      <span class="text">
        {{ text }}
      </span>
    </v-btn>
  </v-card>
</template>

<style lang="scss" scoped>
@import './card-style';
</style>

<script>
import link from '~/static/text/link'

export default {
  data() {
    return {
      link: link
    }
  },
  props: {
    img: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

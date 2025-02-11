<template>
  <v-btn
    :href="link.movie.detail"
    text
    class="simple-thumb"
  >
    <span class="wrap">
      <span class="figure">
        <span>
          <i :class="icon" />
        </span>
      </span>
      <span class="text">{{ title }}</span>
    </span>
  </v-btn>
</template>

<style lang="scss" scoped>
@import './card-style.scss';
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
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

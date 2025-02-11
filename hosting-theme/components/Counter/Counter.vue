<template>
  <div class="counter-wrap">
    <v-container class="max-md">
      <h3 class="use-text-title">
        <span
          v-if="loaded"
          v-countUp:onWindowScroll.once="{
            watchedElId: 'watched_counter',
            startValue: 0,
            endValue: 2,
            options: { duration: 1 }
          }"
        />
        <span
          v-if="loaded"
          v-countUp:onWindowScroll.once="{
            watchedElId: 'watched_counter',
            startValue: 0,
            endValue: 234,
            options: { duration: 1 }
          }"
        />
        <span
          v-if="loaded"
          v-countUp:onWindowScroll.once="{
            watchedElId: 'watched_counter',
            startValue: 0,
            endValue: 567,
            options: { duration: 1 }
          }"
        />
      </h3>
      <p class="use-text-subtitle2">
        {{ $t('hostingLanding.footer_counter') }}
      </p>
      <div id="watched_counter" />
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'counter-style.scss';
</style>

<script>
export default {
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>

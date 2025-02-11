<template>
  <div class="root">
    <v-container class="max-sm">
      <p class="use-text-paragraph">
        {{ $t('hostingLanding.footer_subscribe') }}
      </p>
      <div class="form">
        <form>
          <v-text-field
            :placeholder="$t('hostingLanding.footer_mail')"
            solo
            dark
            class="field"
            full-width
          />
          <v-btn
            :text="!isDesktop"
            :color="isDesktop ? 'primary' : 'white'"
            class="button"
          >
            <span v-if="isDesktop">{{ $t('hostingLanding.subscribe') }}</span>
            <v-icon v-if="isMobile">mdi-send</v-icon>
          </v-btn>
        </form>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './subscribe-style.scss';
</style>

<script>
export default {
  computed: {
    isDesktop() {
      const smUp = this.$store.state.breakpoints.smUp
      return smUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>

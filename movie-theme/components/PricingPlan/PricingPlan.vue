<template>
  <div class="root">
    <div class="decoration">
      <svg fill="#cccccc">
        <use xlink:href="/images/movie/deco-med-bg.svg#main" />
      </svg>
    </div>
    <v-container :class="{ fixed: isDesktop }">
      <div class="text-center">
        <title-main align="center" primary="Flexible" secondary="Pricing and Plan" />
      </div>
      <div class="pricing-wrap" v-if="loaded">
        <u-animate-container>
          <u-animate
            :offset="-10"
            name="fadeInUpShort"
            delay="0.2s"
            duration="0.4s"
            class="item"
          >
            <div>
              <pricing-card
                :price="0"
                :feature-list="feature.basic"
                title="Basic"
                desc="Interdum et malesuada fames ac ante ipsum primis in faucibus. "
                type="basic"
              />
            </div>
          </u-animate>
          <u-animate
            :offset="-10"
            name="fadeInUpShort"
            delay="0.4s"
            duration="0.4s"
            class="item"
          >
            <div>
              <pricing-card
                :price="24"
                :feature-list="feature.best"
                title="Best Value"
                desc="Interdum et malesuada fames ac ante ipsum primis in faucibus. "
                type="value"
              />
            </div>
          </u-animate>
          <u-animate
            :offset="-10"
            name="fadeInUpShort"
            delay="0.6s"
            duration="0.4s"
            class="item"
          >
            <div>
              <pricing-card
                :price="54"
                :feature-list="feature.pro"
                title="Pro"
                desc="Interdum et malesuada fames ac ante ipsum primis in faucibus. "
              />
            </div>
          </u-animate>
          <u-animate
            :offset="-10"
            name="fadeInUpShort"
            delay="0.8s"
            duration="0.4s"
            class="item"
          >
            <div>
              <pricing-card
                :price="99"
                :feature-list="feature.enterprise"
                title="Enterprise"
                desc=" Interdum et malesuada fames ac ante ipsum primis in faucibus. "
              />
            </div>
          </u-animate>
        </u-animate-container>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './pricing-plan-style.scss';
</style>

<script>
import Title from '../Title'
import PricingCard from '../Cards/Pricing'

const featureList = {
  basic: [
    'Nam sollicitudin dignissim',
    'Cras convallis lacus',
    'Quisque ut metus'
  ],
  best: [
    'Nam sollicitudin dignissim',
    'Cras convallis lacus',
    'Quisque ut metus',
    'Vivamus sit amet',
    'Cras convallis lacus orci'
  ],
  pro: [
    'Nam sollicitudin dignissim',
    'Cras convallis lacus',
    'Nulla lobortis nunc',
    'Vitae scelerisque',
    'Duis sed augue'
  ],
  enterprise: [
    'Nam sollicitudin dignissim',
    'Pellentesque ac bibendum ',
    'Vestibulum consequat',
    'Donec commodo',
    'Duis tristique metus'
  ]
}

export default {
  components: {
    'title-main': Title,
    PricingCard
  },
  data() {
    return {
      feature: featureList,
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>

<template>
  <div class="parallax-wrap dots-wrap">
    <div v-if="loaded" class="inner-parallax large">
      <div class="cloud-wrap">
        <parallax
          :speed-factor="0.3"
          :section-height="600"
          direction="down"
        >
          <div class="figure left big">
            <div>
              <svg class="cloud">
                <use xlink:href="/images/hosting/cloud_parallax.svg#main" />
              </svg>
            </div>
          </div>
        </parallax>
        <parallax
          :speed-factor="0.2"
          :section-height="600"
          direction="down"
        >
          <div class="figure left small">
            <div>
              <svg class="cloud">
                <use xlink:href="/images/hosting/cloud_parallax.svg#main" />
              </svg>
            </div>
          </div>
        </parallax>
      </div>
      <div class="cloud-wrap">
        <parallax
          :speed-factor="0.3"
          :section-height="600"
          direction="down"
        >
          <div class="figure right big">
            <div>
              <svg class="cloud">
                <use xlink:href="/images/hosting/cloud_parallax.svg#main" />
              </svg>
            </div>
          </div>
        </parallax>
        <parallax
          :speed-factor="0.2"
          :section-height="600"
          direction="down"
        >
          <div class="figure right small">
            <div>
              <svg class="cloud">
                <use xlink:href="/images/hosting/cloud_parallax.svg#main" />
              </svg>
            </div>
          </div>
        </parallax>
      </div>
      <div class="cloud-wrap">
        <parallax
          :speed-factor="0.3"
          :section-height="600"
          direction="down"
        >
          <div class="figure left big">
            <div>
              <svg class="cloud">
                <use xlink:href="/images/hosting/cloud_parallax.svg#main" />
              </svg>
            </div>
          </div>
        </parallax>
        <parallax
          :speed-factor="0.2"
          :section-height="600"
          direction="down"
        >
          <div class="figure left small">
            <div>
              <svg class="cloud">
                <use xlink:href="/images/hosting/cloud_parallax.svg#main" />
              </svg>
            </div>
          </div>
        </parallax>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './parallax-style.scss';
</style>

<script>
import Parallax from 'vue-parallaxy'

export default {
  components: {
    Parallax
  },
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

<template>
  <div class="more-feature">
    <div class="chart-deco" />
    <v-container :class="{ fixed: isDesktop }">
      <div class="item">
        <u-animate-container>
          <v-row
            :class="[isMobile ? 'column-reverse' : 'row']"
            class="spacing6"
          >
            <v-col md="6" cols="12" class="pa-6">
              <figure class="illustration">
                <img src="/images/hosting/illustration1.png" alt="feature" />
              </figure>
            </v-col>
            <v-col md="6" cols="12" class="pa-6">
              <div class="text">
                <u-animate
                  name="fadeInLeftShort"
                  delay="0.4s"
                  duration="0.3s"
                >
                  <div>
                    <main-title
                      :caption="$t('hostingLanding.morefeature_headtitle1')"
                      :text="$t('hostingLanding.morefeature_title1')"
                      :align="isMobile ? 'center' : 'left'"
                    />
                    <div :class="{ 'text-center': isMobile }">
                      <p class="use-text-subtitle2" :class="isMobile ? 'text-center' : 'text-left'">
                        {{ $t('hostingLanding.morefeature_desc1') }}
                      </p>
                      <v-btn color="primary">
                        {{ $t('hostingLanding.learnmore') }}
                      </v-btn>
                    </div>
                  </div>
                </u-animate>
              </div>
            </v-col>
          </v-row>
        </u-animate-container>
      </div>
      <v-divider class="divider" />
      <div class="item">
        <u-animate-container>
          <v-row class="spacing6">
            <v-col md="6" cols="12">
              <div class="text text-right">
                <u-animate
                  name="fadeInLeftShort"
                  delay="0.4s"
                  duration="0.3s"
                >
                  <div>
                    <main-title
                      :caption="$t('hostingLanding.morefeature_headtitle2')"
                      :text="$t('hostingLanding.morefeature_title2')"
                      :align="isMobile ? 'center' : 'right'"
                    />
                    <div :class="{ 'text-center': isMobile }">
                      <p
                         :class="isMobile ? 'text-center' : 'text-right'"
                         class="use-text-subtitle2"
                      >
                        {{ $t('hostingLanding.morefeature_desc2') }}
                      </p>
                      <v-btn color="primary">
                        {{ $t('hostingLanding.learnmore') }}
                      </v-btn>
                    </div>
                  </div>
                </u-animate>
              </div>
            </v-col>
            <v-col md="6" cols="12">
              <figure class="illustration">
                <img src="/images/hosting/illustration2.png" alt="feature" />
              </figure>
            </v-col>
          </v-row>
        </u-animate-container>
      </div>
      <v-divider class="divider" />
      <div class="item last">
        <v-row>
          <v-col cols="12">
            <div class="text text-center">
              <main-title
                :caption="$t('hostingLanding.morefeature_headtitle3')"
                :text="$t('hostingLanding.morefeature_title3')"
                align="center"
              />
              <p class="use-text-subtitle2">
                {{ $t('hostingLanding.morefeature_desc3') }}
              </p>
              <v-btn color="primary">
                {{ $t('hostingLanding.learnmore') }}
              </v-btn>
            </div>
            <figure class="illustration">
              <img src="/images/hosting/illustration3.png" alt="feature" />
            </figure>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './feature-style.scss';
</style>

<script>
import Title from '../Title'

export default {
  components: {
    'main-title': Title
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>

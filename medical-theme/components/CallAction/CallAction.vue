<template>
  <fragment>
      <v-container :class="{ 'fixed-width': mdUp }">
        <div class="root">
          <v-card class="paper">
            <v-row align="center" no-gutters>
              <v-col cols="12" md="8">
                <h4 class="display-1 pb-2">
                  {{ $t('medicalLanding.cta_title') }}
                </h4>
                <p>
                  {{ $t('medicalLanding.cta_subtitle') }}
                </p>
              </v-col>
              <v-col cols="12" md="4">
                <v-row justify="end">
                  <v-btn
                    :href="link.contact"
                    color="primary"
                    class="button"
                  >
                    {{ $t('medicalLanding.cta_btn') }}
                  </v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-container>
    </fragment>
</template>

<style lang="scss" scoped>
@import './action-style.scss';
</style>

<script>
import link from '~/static/text/link'

export default {
  data() {
    return {
      link: link
    }
  },
  computed: {
    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl'
    }
  }
}
</script>

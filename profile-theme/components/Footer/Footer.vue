<template>
  <div class="root">
    <v-container class="max-lg" tag="footer">
      <v-row :class="{ 'column-reverse': isMobile }">
        <v-col cols="12" md="5">
          <div class="logo">
            <img :src="logo" alt="logo" />
            <h3 class="use-text-title">
              {{ brand.profile.name }}
            </h3>
            <h4 class="use-text-subtitle">
              {{ brand.profile.title }}
            </h4>
          </div>
          <div class="socmed">
            <v-btn icon small class="margin">
              <i class="ion-logo-facebook" />
            </v-btn>
            <v-btn icon small class="margin">
              <i class="ion-logo-linkedin" />
            </v-btn>
            <v-btn icon small class="margin">
               <i class="ion-logo-twitter " />
            </v-btn>
            <v-btn icon small class="margin">
              <i class="ion-logo-instagram" />
            </v-btn>
          </div>
          <div class="contact">
            <p class="use-text-paragraph">
              {{ $t('profileLanding.footer_contact') }}
              <br />
              +12 345 678 90
            </p>
            <v-divider class="divider" />
            <p class="use-text-paragraph">
              {{ $t('profileLanding.footer_hello') }}
              <br />
              jenadoe.skype
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="7">
          <ContactForm />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import './footer-style';
</style>

<script>
import logo from '~/static/images/profile-logo.svg'
import brand from '~/static/text/brand'
import ContactForm from '../Contact/Form'

export default {
  components: {
    ContactForm
  },
  data: () => ({
    logo: logo,
    brand: brand
  }),
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>

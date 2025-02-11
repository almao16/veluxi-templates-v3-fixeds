<template>
  <div class="root">
    <div class="parallax-bottom">
      <parallax-oval />
    </div>
    <v-container class="fixed-width">
      <v-row class="spacing6">
        <v-col cols="12" lg="1" class="pa-6" v-if="isDesktop" />
        <v-col cols="12" lg="5" md="6" class="pa-6">
          <h4 class="title-primary mt-10">
            {{ $t('medicalLanding.clinic_title') }}
          </h4>
          <div class="block">
            <u-animate-container>
              <div v-for="(item, index) in clinicData" :key="index">
                <u-animate
                  :offset="-50"
                  :delay="(index * 0.3) + 's'"
                  name="fadeInLeftShort"
                  duration="0.3s"
                >
                  <AddressCard
                    :name="item.name"
                    :phone="item.phone"
                    :email="item.email"
                    :address="item.address"
                  />
                </u-animate>
              </div>
            </u-animate-container>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="pa-6">
          <v-card class="map">
            <GMap
              ref="gMap"
              :cluster="{options: {styles: clusterStyle}}"
              :center="{lat: locations[1].lat, lng: locations[1].lng}"
              :options="{fullscreenControl: false}"
              :zoom="6"
            >
              <GMapMarker
                v-for="location in locations"
                :key="location.id"
                :position="{lat: location.lat, lng: location.lng}"
              />
            </GMap>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './clinics-style.scss';
@import '../Title/title-style.scss';
</style>

<script>
import ParallaxOval from '../Parallax/Oval'
import AddressCard from '../Cards/Address'

export default {
  components: {
    ParallaxOval,
    AddressCard
  },
  data() {
    return {
      clinicData: [
        {
          name: 'Central Clinic',
          phone: '+123 456 78 91',
          email: 'hello@luxi.com',
          address: 'Lorem ipsum street no.14 Block A'
        },
        {
          name: 'Dental Clinic',
          phone: '+123 456 78 91',
          email: 'hello@luxi.com',
          address: 'Lorem ipsum street Block C - Vestibullum Building'
        },
        {
          name: 'Mother and Baby Care',
          phone: '+123 456 78 91',
          email: 'hello@luxi.com',
          address: 'Lorem ipsum street no.14 Block A'
        },
        {
          name: 'Orthopedic Clinic',
          phone: '+123 456 78 91',
          email: 'hello@luxi.com',
          address: 'Lorem ipsum street Block C - Vestibullum Building'
        }
      ],
      currentLocation: {},
      locations: [
        {
          lat: 44.933076,
          lng: 15.629058
        },
        {
          lat: 47.815,
          lng: 15.9819
        },
        {
          lat: 40.953076,
          lng: 16.21
        },
        {
          lat: 44.22,
          lng: 16.98
        }
      ],
      clusterStyle: [
        {
          url:
            'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png',
          width: 56,
          height: 56,
          textColor: '#fff'
        }
      ]
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>

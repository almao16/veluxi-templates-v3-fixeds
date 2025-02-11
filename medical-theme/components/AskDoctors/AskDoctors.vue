<template>
  <fragment>
    <div class="root">
      <div class="deco"></div>
      <v-container :class="{ 'fixed-width': mdUp }">
        <u-animate-container>
          <v-row class="spacing6" justify="center">
            <v-col cols="12" sm="9" md="2" class="pa-0">
              <u-animate
                :offset="-100"
                name="fadeInLeftShort"
                delay="0.2s"
                duration="0.3s"
              >
                <div class="side-filter">
                  <h4 class="title-primary">
                    {{ $t('medicalLanding.ask_doctors') }}
                  </h4>
                  <v-list class="nav">
                    <v-list-item-group v-model="item" color="primary">
                      <v-list-item
                        v-for="(item, index) in categories"          
                        :key="index"
                        class="filter"
                      >
                        <v-list-item-title>
                          {{ item }}
                        </v-list-item-title>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </div>
              </u-animate>
            </v-col>
            <v-col cols="12" lg="8" md="10" class="pa-6 py-0">
              <div class="massonry">
                <v-row>
                  <v-col
                    v-for="(item, index) in doctorsData"
                    :key="index"
                    cols="12"
                    sm="6"
                    class="px-lg-8 px-3 py-3"
                  >
                    <u-animate
                      :delay="(0.2 * index) + 's'"
                      duration="0.4s"
                      name="fadeInUpShort"
                    >
                      <div>
                        <profile-card
                          :avatar="item.avatar"
                          :name="item.name"
                          :title="item.title"
                          :rating="item.rating"
                          :exp="item.exp"
                        />
                      </div>
                    </u-animate>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </u-animate-container>
      </v-container>
    </div>
  </fragment>
</template>

<style lang="scss" scoped>
@import './ask-doctors-style.scss';
@import '../Title/title-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import ProfileCard from '../Cards/Profile'

export default {
  components: {
    ProfileCard
  },
  data() {
    return {
      visible: false,
      index: 0,
      loaded: false,
      item: 0,
      categories: [
        'all',
        'Orthopedic',
        'Nutritionist',
        'Pediatric',
        'Anaesthestic'
      ],
      doctorsData: [
        {
          avatar: imgAPI.medical[7],
          name: 'Jena Doe',
          title: 'Pediatric Surgeon',
          rating: 95,
          exp: 4
        },
        {
          avatar: imgAPI.medical[12],
          name: 'John Doe',
          title: 'Pediatric Surgeon',
          rating: 95,
          exp: 4
        },
        {
          avatar: imgAPI.medical[8],
          name: 'Jihan Doe',
          title: 'Pediatric Surgeon',
          rating: 95,
          exp: 4
        },
        {
          avatar: imgAPI.medical[10],
          name: 'James Doe',
          title: 'Pediatric Surgeon',
          rating: 95,
          exp: 4
        },
        {
          avatar: imgAPI.medical[11],
          name: 'Jim Doe',
          title: 'Pediatric Surgeon',
          rating: 95,
          exp: 4
        },
        {
          avatar: imgAPI.medical[9],
          name: 'Jessy Doe',
          title: 'Pediatric Surgeon',
          rating: 95,
          exp: 4
        }
      ]
    }
  },
  mounted() {
    this.loaded = true
  },
  computed: {
    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl'
    }
  }
}
</script>

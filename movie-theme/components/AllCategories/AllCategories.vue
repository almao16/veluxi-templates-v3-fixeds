<template>
  <div class="root">
    <v-container>
      <title-main align="center" primary="All" secondary="Categories" />
      <div class="carousel-wrap">
        <v-btn class="nav prev" @click="slickPrev">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-btn class="nav next" @click="slickNext">
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
        <div v-if="loaded">
          <slick
            ref="slider"
            :options="slickOptions"
          >
            <div
              v-for="(item, index) in dataCategories"
              :key="index"
              class="item"
            >
              <simple-thumb-card
                :title="item.title"
                :icon="item.icon"
              />
            </div>
          </slick>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './all-categories-style.scss';
</style>

<script>
import Title from '../Title'
import SimpleThumbCard from '../Cards/SimpleThumb'

const dataCategories = [
  {
    icon: 'ion-ios-heart',
    title: 'Romantic'
  },
  {
    icon: 'ion-ios-planet',
    title: 'sci-fi'
  },
  {
    icon: 'ion-md-contacts',
    title: 'commedy'
  },
  {
    icon: 'ion-ios-star',
    title: 'super heroes'
  },
  {
    icon: 'ion-ios-flash',
    title: 'actions'
  },
  {
    icon: 'ion-ios-videocam',
    title: 'hollywood'
  },
  {
    icon: 'ion-ios-heart',
    title: 'Romantic'
  },
  {
    icon: 'ion-ios-planet',
    title: 'sci-fi'
  },
  {
    icon: 'ion-md-contacts',
    title: 'commedy'
  },
  {
    icon: 'ion-ios-star',
    title: 'super heroes'
  },
  {
    icon: 'ion-ios-flash',
    title: 'actions'
  },
  {
    icon: 'ion-ios-videocam',
    title: 'hollywood'
  }
]

export default {
  components: {
    'title-main': Title,
    SimpleThumbCard,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      dataCategories: dataCategories,
      slickOptions: {
        dots: false,
        speed: 500,
        slidesToShow: 6,
        arrows: false,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 7000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    slickNext() {
      this.$refs.slider.next()
    },
    slickPrev() {
      this.$refs.slider.prev()
    }
  }
}
</script>

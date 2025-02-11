<template>
  <div class="root">
    <v-container>
      <title-main>
        {{ $t('profileLanding.gallery_title') }}
        <strong>
          {{ $t('profileLanding.gallery_titleBold') }}
        </strong>
      </title-main>
      <div class="filter">
        <v-btn
          @click="filterChildren('all')"
          :class="{ selected: filter === 'all' }"
        >
          All
        </v-btn>
        <v-btn
          @click="filterChildren('cat1')"
          :class="{ selected: filter === 'cat1' }"
        >
          Category 1
        </v-btn>
        <v-btn
          @click="filterChildren('cat2')"
          :class="{ selected: filter === 'cat2' }"
        >
          Category 2
        </v-btn>
        <v-btn
          @click="filterChildren('cat3')"
          :class="{ selected: filter === 'cat3' }"
        >
          Category 3
        </v-btn>
        <v-btn
          @click="filterChildren('cat4')"
          :class="{ selected: filter === 'cat4' }"
        >
          Category 4
        </v-btn>
        <v-btn
          @click="filterChildren('cat5')"
          :class="{ selected: filter === 'cat5' }"
        >
          Category 5
        </v-btn>
      </div>
      <hidden point="xsDown">
        <div class="massonry">
          <div
            v-for="(item, index) in data"
            :key="index"
            :class="{ loaded: isLoaded }"
            :style="{ 'transition-duration': index / 4 + 's' }"
            class="item"
          >
            <image-thumb-card
              :img="item.img"
              :title="item.title"
              :link="item.link"
              :size="item.size"
            />
          </div>
        </div>
        <p
          v-if="data.length < 1"
          class="overline text-center"
        >
          {{ $t('profileLanding.gallery_nodata') }}
        </p>
      </hidden>
      <hidden v-if="loaded" point="smUp">
        <slick ref="slick" :options="slickOptions">
          <div
            v-for="(item, index) in data"
            :key="index"
            class="item-carousel"
          >
            <image-thumb-card
              :img="item.img"
              :title="item.title"
              :link="item.link"
              :size="item.size"
            />
          </div>
        </slick>
      </hidden>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './gallery-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import ImageThumbCard from '../Cards/ImageThumb'
import Title from '../Title'
import Hidden from '../Hidden'

const portfolio = [
  {
    img: imgAPI.profile[4],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat1'
  },
  {
    img: imgAPI.profile[3],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'long',
    category: 'cat2'
  },
  {
    img: imgAPI.profile[5],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat3'
  },
  {
    img: imgAPI.profile[6],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'long',
    category: 'cat1'
  },
  {
    img: imgAPI.profile[8],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat2'
  },
  {
    img: imgAPI.profile[7],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat3'
  },
  {
    img: imgAPI.profile[3],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat1'
  },
  {
    img: imgAPI.profile[5],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat2'
  },
  {
    img: imgAPI.profile[4],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'long',
    category: 'cat2'
  }
]

export default {
  components: {
    ImageThumbCard,
    'title-main': Title,
    Hidden,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      data: [],
      isLoaded: true,
      loaded: false,
      filter: 'all',
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        slidesToShow: 1,
        arrows: false
      }
    }
  },
  mounted() {
    this.data = portfolio
    this.loaded = true
  },
  methods: {
    filterChildren(name) {
      if (name !== 'all') {
        const filteredData = portfolio.filter(item => item.category === name)
        this.data = filteredData
        this.filter = name
      } else {
        this.data = portfolio
        this.filter = 'all'
      }

      this.isLoaded = false
      setTimeout(() => {
        this.isLoaded = true
      }, 700)

      // re-init slick carousel for mobile
      if (this.isMobile) {
        this.$nextTick(() => {
          this.$refs.slick.reSlick()
        })
      }
    }
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>

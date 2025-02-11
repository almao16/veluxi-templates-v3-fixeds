<template>
  <div class="root">
    <div class="slider-wrap">
      <transition-group
        :name="transition"
        tag="div"
      >
        <div
          v-for="number in [currentImg]"
          :key="number"
          class="slide slider-content"
        >
          <div class="inner item">
            <div class="inner-bg">
              <div class="background">
                <figure>
                  <img :src="content[Math.abs(currentImg) % content.length].image" alt="promotion">
                </figure>
              </div>
              <v-row>
                <v-col sm="7" cols="12" class="pa-0">
                  <div class="text">
                    <h4>
                      <span class="use-text-subtitle2">
                        {{ content[Math.abs(currentImg) % content.length].subtitle }}
                      </span>
                      {{ content[Math.abs(currentImg) % content.length].title }}
                    </h4>
                    <div class="property">
                      <div class="star">
                        <v-icon
                          v-for="index in content[Math.abs(currentImg) % content.length].rating"
                          :key="index"
                          class="star-icon"
                        >
                          mdi-star
                        </v-icon>
                      </div>
                      5.0
                      <div class="divider" />
                      {{ content[Math.abs(currentImg) % content.length].duration }}
                    </div>
                    <article class="desc">
                      <h6 class="use-text-paragraph">
                        {{ content[Math.abs(currentImg) % content.length].desc }}
                      </h6>
                    </article>
                    <div class="btn-area">
                      <v-btn text color="secondary">
                        {{ $t('movieLanding.promo_btn1') }}
                      </v-btn>
                      <v-btn color="primary">
                        {{ $t('movieLanding.promo_btn2') }}
                      </v-btn>
                    </div>
                    <span
                      class="swipper"
                      v-touch:swipe.left="swipeLeft"
                      v-touch:swipe.right="swipeRight"
                    />
                  </div>
                </v-col>
                <v-col sm="5" cols="12" class="pa-0">
                  <hidden point="xsDown">
                    <div class="image">
                      <figure>
                        <img :src="content[Math.abs(currentImg) % content.length].image" alt="promotion">
                      </figure>
                    </div>
                  </hidden>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>  
      </transition-group>
    </div>
    <a
      href="javascript:void(0)"
      class="prev"
      @click="prev"
    >
      <i class="ion-ios-arrow-round-back-outline arrow-icon" />
    </a>
    <a
      href="javascript:void(0)"
      class="next"
      @click="next"
    >
      <i class="ion-ios-arrow-round-forward-outline arrow-icon" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
@import './promotion-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import Hidden from '../Hidden'

const sliderData = [
  {
    image: imgAPI.movie[1],
    subtitle: 'Vivamus sit amet',
    title: 'The Lorem Ipsum Dolor Sit',
    rating: 5,
    duration: '2h 15m',
    desc:
      'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci.'
  },
  {
    image: imgAPI.movie[2],
    subtitle: 'Vivamus sit amet',
    title: 'The Lorem Ipsum Dolor Sit',
    rating: 5,
    duration: '2h 15m',
    desc:
      'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci.'
  },
  {
    image: imgAPI.movie[3],
    subtitle: 'Vivamus sit amet',
    title: 'The Lorem Ipsum Dolor Sit',
    rating: 5,
    duration: '2h 15m',
    desc:
      'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci.'
  },
  {
    image: imgAPI.movie[5],
    subtitle: 'Vivamus sit amet',
    title: 'The Lorem Ipsum Dolor Sit',
    rating: 5,
    duration: '2h 15m',
    desc:
      'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci.'
  }
]

export default {
  components: {
    Hidden
  },
  data() {
    return {
      content: sliderData,
      transition: '',
      autoplay: null,
      currentImg: 0
    }
  },
  mounted() {
    this.playSlider()
  },
  beforeDestroy() {
    clearInterval(this.autoplay)
  },
  methods: {
    playSlider() {
      this.autoplay = setInterval(() => {
        this.currentImg = this.currentImg + 1
        this.transition = 'slide-right'
      }, 100000)
    },
    manualPlay() {
      clearInterval(this.autoplay)
      setTimeout(() => {
        this.playSlider()
      }, 1)
    },
    next() {
      this.manualPlay()
      this.currentImg += 1
      this.transition = 'slide-right'
    },
    prev() {
      this.manualPlay()
      this.currentImg -= 1
      this.transition = 'slide-left'
    },
    swipeLeft() {
      this.next()
    },
    swipeRight() {
      this.prev()
    }
  }
}
</script>

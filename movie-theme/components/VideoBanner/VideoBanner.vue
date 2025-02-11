<template>
  <div class="root">
    <div class="video">
      <div class="overlay" />
      <img v-if="!play || isMobile" :src="imgAPI.movie[0]" alt="cover" />
      <div v-if="yt.use">
        <youtube
          v-if="isDesktop"
          :video-id="videoId"
          :player-vars="playerVars"
          fit-parent
          ref="youtube"
          @playing="playing"
          @ended="ended"
        />
      </div>
      <div class="caption-banner">
        <v-container>
          <hidden point="mdDown">
            <v-btn
              v-if="play"
              icon
              class="btn-play"
              @click="togglePause()"
            >
              <span :class="{ hidden: playCtrl }">watch</span>
              <span :class="{ hidden: playCtrl }">trailer</span>
              <i v-if="playCtrl" class="ion-ios-pause-outline" />
              <i v-else class="ion-ios-play" />
            </v-btn>
          </hidden>
          <v-row>
            <v-col md="5" cols="12">
              <p class="use-text-paragraph">Vivamus sit amet interdum elit</p>
              <h2 class="use-text-title">Mancing Mania The Movie</h2>
              <p class="use-text-subtitle">
                {{ $t('movieLanding.banner_on_the') }} 
                01 . 11 . 20
              </p>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './banner-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import youtube from '~/youtube'
import Hidden from '../Hidden'

export default {
  components: {
    Hidden
  },
  data() {
    return {
      imgAPI: imgAPI,
      loaded: false,
      videoId: 'CK1ndZEkBcE',
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        mute: 1,
        origin: 'http://localhost:8010'
      },
      yt: youtube,
      play: false,
      playCtrl: true,
      cover: imgAPI.movie[0]
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    playing() {
      this.play = true
      this.playCtrl = true
    },
    ended() {
      this.player.playVideo()
    },
    togglePause() {
      this.playCtrl = !this.playCtrl
      if (this.playCtrl) {
        this.player.playVideo()
      } else {
        this.player.pauseVideo()
      }
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const mdDown = this.$store.state.breakpoints.mdDown
      return mdDown.indexOf(this.$mq) > -1
    }
  }
}
</script>

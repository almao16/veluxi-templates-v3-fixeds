<template>
  <div class="main-wrap" id='detail-movie'>
    <header-main invert />
    <div class="bg-movie">
      <img :src="imgAPI.movie[15]" alt="poster">
    </div>
    <div class="container-general">
      <v-row justify="center" :class="[isMobile ? 'column-reverse' : 'row']">
        <v-col lg="6" sm="7" cols="12" class="pa-6 px-10">
          <div class="text">
            <h4 class="use-text-title2">
              <span class="use-text-subtitle2">Vivamus sit amet</span>
              The Lorem Ipsum Dolor Sit Amet
            </h4>
            <div class="property">
              <div class="star">
                <v-icon
                  v-for="index in 5"
                  :key="index"
                  class="star-icon"
                >
                  mdi-star
                </v-icon>
              </div>
              5.0<span class="divider"></span>2h 13m
            </div>
            <article class="mb-10 description">
              <h6 class="use-text-paragraph">Drama, Action and Adventure</h6>
            </article>
            <div class="btn-area">
              <v-btn href="#" text class="text-btn" >
                {{ $t('movieLanding.promo_btn1') }}
              </v-btn>
              <v-btn href="#" class="button primary">
                {{ $t('movieLanding.promo_btn2') }}
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col lg="3" sm="5" cols="12" class="pa-6">
          <div class="image" v-ripple>
            <a>
              <i class="ion-ios-play play"></i>
              <figure class="figure">
                <img :src="imgAPI.movie[15]" alt="product" />
              </figure>
            </a>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col lg="10" md="12" class="pa-6">
          <v-card  class="about">
            <v-row>
              <v-col class="px-4" md="7" cols="12">
                <h4 class="use-text-title2 mb-3">
                  {{ $t('movieLanding.detail_storyline') }}
                </h4>
                <p>Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <div class="btn-area">
                  <v-btn href="#" class="text-btn" text>
                    <i class="ion-md-share" />
                    {{ $t('movieLanding.detail_share') }}
                  </v-btn>
                  <v-btn href="#" class="text-btn" text>
                    <i class="ion-ios-film" />
                    {{ $t('movieLanding.detail_trivia') }}
                  </v-btn>
                  <v-btn href="#" class="text-btn" text>
                    <i class="ion-ios-star" />
                    {{ $t('movieLanding.detail_rate') }}
                  </v-btn>
                </div>
              </v-col>
              <v-col class="px-4" md="5" cols="12">
                <div class="person">
                  <h6 class="title-person">
                    {{ $t('movieLanding.detail_director') }}
                  </h6>
                  <p>John Doe</p>
                  <h6 class="title-person">
                    {{ $t('movieLanding.detail_writers') }}
                  </h6>
                  <p>John Doe, Jim Doe, Jane Doe</p>
                  <h6 class="title-person">
                    {{ $t('movieLanding.detail_stars') }}
                  </h6>
                  <p>Jena Doe, James Doe, Jack Doe, Jimmy Doe</p>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div id="footer">
      <footer-main invert />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles';

.container-wrap {
  margin-top: -40px;

  > section {
    position: relative;
  }
}

h4 {
  line-height: 110%;
  margin: 1.52rem 0 0.912rem 0;
}

.container-general {
  position: relative;
  margin-top: 120px;
  padding-top: 32px;
  padding-bottom: 32px;

  @include breakpoints-up(md) {
    padding-left: 32px;
    padding-right: 32px;
  }
}

#detail-movie {
  .container-wrap {
    padding: spacing(15, 0);
    @inlcude breakpoints-down(sm) {
      margin: spacing(10, 0);
    }
  }

  .description {
    max-height: 130px;
    padding: spacing(1, 0);
    margin-bottom: $spacing5;
    h6 {
      font-weight: $font-medium;
    }
  }

  .text {
    @include text-align(left);
    height: 450px;
    h4 {
      font-weight: $font-bold;
      margin-bottom: $spacing2;
      width: 100%;
      span {
        display: block;
        font-weight: $font-medium;
      }
    }
  }

  .property {
    width: 100%;
    display: flex;
    margin-bottom: $spacing2;
    .star {
      color: #ff9500;
      @include margin-right($spacing2);

      i {
        color: #ff9500;
      }
    }
    .divider {
      background: none;
      border-left: 1px solid;
      @include use-theme(border-color, $light-text-primary, $dark-text-primary);
      height: 12px;
      margin: 6px $spacing2;
      display: inline-block;
    }
  }

  .btn-area {
    z-index: 10;
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    @include breakpoints-down(xs) {
      display: block;
      text-align: center;
      & > * {
        margin: spacing(0, 0, 2);
      }
    }
    .text-btn {
      padding-left: 8px;
      padding-right: 8px;
      @include use-theme(
        color,
        $palette-secondary-main,
        $palette-secondary-light
      );
      i {
        font-size: 1.3rem;
        @include margin-right(4px);
      }
    }
    & > * {
      @include margin-right($spacing1);
    }
  }

  .image {
    text-align: center;
    line-height: 360px;
    vertical-align: middle;
    position: relative !important;
    width: 250px;
    height: 360px;
    margin: 0 auto;
    i {
      position: absolute;
      font-size: 52px;
      top: calc(50% - 30px);
      left: calc(50% - 30px);
      border: 5px solid $palette-common-white;
      z-index: 10;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      line-height: 50px;
      padding-left: 4px;
      color: $palette-common-white;
      background: rgba(0, 0, 0, 0.4);
    }
    figure {
      @include shadow3;
      width: 250px;
      height: 360px;
      overflow: hidden;
      border-radius: $rounded-big;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
  }

  .bg-movie {
    direction: ltr;
    width: 200%;
    height: 720px;
    margin-left: -50%;
    border-radius: 0 0 50% 50%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    img {
      width: 50%;
      top: -50%;
      position: relative;
      margin: 0 auto;
      opacity: 0.2;
      filter: blur(20px);
      .v-application--is-rtl & {
        left: -25%;
      }
      .v-application--is-ltr & {
        left: 25%;
      }
    }
  }

  .about {
    margin-top: $spacing12 * -1;
    padding: spacing(7, 10);
    @include breakpoints-down(xs) {
      padding: $spacing2;
    }
    h4 {
      margin: 0;
    }
    .btn-area {
      margin-top: $spacing6;
    }
    .person {
      @include breakpoints-down(sm) {
        margin-top: $spacing5;
      }
      h6 {
        font-size: 14px;
        text-transform: uppercase;
        font-weight: $font-bold;
      }
      p {
        margin-bottom: $spacing4;
      }
    }
  }
}
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import brand from '~/static/text/brand'
import Header from '~/components/Header'
import Footer from '~/components/Footer/Footer'

export default {
  components: {
    'header-main': Header,
    'footer-main': Footer
  },
  data: () => ({
    imgAPI: imgAPI
  }),
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  },
  head() {
    return {
      title: brand.movie.name + ' - Detail Movie'
    }
  }
}
</script>

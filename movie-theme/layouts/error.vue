<template>
  <v-app>
    <div>
      <main-header invert />
      <Error
        :error-code="this.error.statusCode"
        :text="$t('common.404')"
      />
      <section id="footer">
        <footer-main invert />
      </section>
    </div>
  </v-app>
</template>

<script>
import brand from '~/static/text/brand'
import Header from '~/components/Header'
import Footer from '~/components/Footer/Footer'
import Error from '../components/Error'

export default {
  components: {
    'main-header': Header,
    Error,
    'footer-main': Footer
  },
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404
        ? brand.movie.name + ' - ' + this.pageNotFound
        : brand.movie.name + ' - ' + this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: 'Not Found',
      otherError: 'An error occurred'
    }
  }
}
</script>

<template>
  <div class="illustration" id="vanta_art" />
</template>

<style lang="scss" scoped>
@import './hero-style.scss';
</style>

<script>
export default {
  mounted() {
    setTimeout(() => {
      window.VANTA.WAVES({
        el: '#vanta_art',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        color: '#212121'
      })
    }, 1000)
  }
}
</script>

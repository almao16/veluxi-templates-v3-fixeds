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
      window.VANTA.HALO({
        el: '#vanta_art',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 400,
        minWidth: 400,
        size: 3
      })
    }, 1000)
  }
}
</script>

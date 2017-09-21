<template>
  <section>
      <home-slider></home-slider>
      <home-sponsors></home-sponsors>
  </section>
</template>
<script>
    import Slider from './home/Slider.vue'
    import Sponsors from './home/Sponsors.vue'
  export default {
    components: {
      homeSlider: Slider,
      homeSponsors: Sponsors
    }
  }
</script>

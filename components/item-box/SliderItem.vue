<template>
  <nuxt-link to="/best-sellers">
    <img :src="sliderItem.image" alt="Slider" class="img-fluid">
  </nuxt-link>
</template>

<script>

export default {
  name: "SliderItem",
  props: ['sliderItem', 'index'],
}
</script>
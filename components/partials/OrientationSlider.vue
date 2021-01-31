<template>
  <section class="andbaazar-main-slider slider-area p-0">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 p-0">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
              <a href="#">
                <img :src="require('@/assets/images/slider-img/main-slider.jpg')" alt="Slider" class="img-fluid">
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="#">
                <img :src="require('@/assets/images/slider-img/main-slider.jpg')" alt="Slider" class="img-fluid">
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="#">
                <img :src="require('@/assets/images/slider-img/main-slider.jpg')" alt="Slider" class="img-fluid">
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="#">
                <img :src="require('@/assets/images/slider-img/main-slider.jpg')" alt="Slider" class="img-fluid">
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="#">
                <img :src="require('@/assets/images/slider-img/main-slider.jpg')" alt="Slider" class="img-fluid">
              </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        effect: 'fade',
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          outoplay: true
        }
      },
    }
  },
  
}
</script>

<style>

</style>
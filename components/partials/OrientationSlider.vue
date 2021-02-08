<template>
  <section class="andbaazar-main-slider slider-area p-0">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 p-0">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
              <nuxt-link to="/fashion">
                <img :src="require('@/assets/images/fashion/slider/1.jpg')" alt="Slider" class="img-fluid">
              </nuxt-link>
            </swiper-slide>
            <swiper-slide>
              <nuxt-link to="/electronics">
                <img :src="require('@/assets/images/electronics/slider/1.jpg')" alt="Slider" class="img-fluid">
              </nuxt-link>
            </swiper-slide>
            <swiper-slide>
              <nuxt-link to="/furniture">
                <img :src="require('@/assets/images/furniture/slider/1.jpg')" alt="Slider" class="img-fluid">
              </nuxt-link>
            </swiper-slide>
            <swiper-slide>
              <nuxt-link to="/groceries">
                <img :src="require('@/assets/images/groceries/slider/1.jpg')" alt="Slider" class="img-fluid">
              </nuxt-link>
            </swiper-slide>
            <swiper-slide>
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
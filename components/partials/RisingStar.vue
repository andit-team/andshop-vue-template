<template>
  <!-- Client Logo Area Start -->
  <section class="client-logo-area bg-different section-t-space">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title-wrap d-flex justify-content-between align-items-center mb-30">
            <div class="section-title">
              <h4>Rising Star</h4>
            </div>
            <nuxt-link to="/shops" class="color-red font-bold">View all <span class="ml-2"><i class="fas fa-angle-right"></i></span></nuxt-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="client-logo-slider-wrap d-flex justify-content-between">

            <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="(risingStarItem, index) in risingStarItems" :key="index">
                  <RisingStarItem :risingStarItem='risingStarItem' />
                </swiper-slide>
            </swiper>

          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Client Logo Area End -->
</template>

<script>
import RisingStarItem from '../item-box/RisingStarItem'
export default {
  name: 'RisingStar',
  components: {
    RisingStarItem
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 7,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        breakpoints: {
          1400: {
            slidesPerView: 7,
            spaceBetween: 20
          },
          1366: {
            slidesPerView: 6
          },
          1199: {
            slidesPerView: 5
          },
          992: {
            slidesPerView: 4
          },
          991: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 3
          },
          767: {
            slidesPerView: 3
          },
          766: {
            slidesPerView: 3
          },
          575: {
            slidesPerView: 2
          },
          400: {
            slidesPerView: 2
          },
          0: {
            slidesPerView: 1
          }
        },
      },
      risingStarItems: [
        {
          "id": 1,
          "image": require('@/assets/images/client-logo/1.png'),
          "title": 'Teergroup'
        },
        {
          "id": 2,
          "image": require('@/assets/images/client-logo/2.png'),
          "title": 'As'
        },
        {
          "id": 3,
          "image": require('@/assets/images/client-logo/3.png'),
          "title": 'SSSS'
        },
        {
          "id": 4,
          "image": require('@/assets/images/client-logo/4.png')
        },
        {
          "id": 5,
          "image": require('@/assets/images/client-logo/5.png')
        },
        {
          "id": 6,
          "image": require('@/assets/images/client-logo/6.png')
        },
        {
          "id": 7,
          "image": require('@/assets/images/client-logo/7.png')
        },
        {
          "id": 8,
          "image": require('@/assets/images/client-logo/8.png')
        },
      ]
    }
  },

}
</script>
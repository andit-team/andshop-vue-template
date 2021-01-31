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
            <nuxt-link to="/rising-star" class="color-red">View all <span class="ml-2"><i class="fas fa-angle-right"></i></span></nuxt-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="client-logo-slider-wrap d-flex justify-content-between">

            <swiper class="swiper" :options="swiperOption">
                <swiper-slide>
                  <div class="logo-item">
                    <nuxt-link to="/shops/1">
                      <img :src="require('@/assets/images/client-logo/1.png')" alt="Shop Name">
                    </nuxt-link>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="logo-item">
                    <nuxt-link to="/shops/1">
                      <img :src="require('@/assets/images/client-logo/2.png')" alt="Shop Name">
                    </nuxt-link>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="logo-item">
                    <nuxt-link to="/shops/1">
                      <img :src="require('@/assets/images/client-logo/3.png')" alt="Shop Name">
                    </nuxt-link>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="logo-item">
                    <nuxt-link to="/shops/1">
                      <img :src="require('@/assets/images/client-logo/4.png')" alt="Shop Name">
                    </nuxt-link>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="logo-item">
                    <nuxt-link to="/shops/1">
                      <img :src="require('@/assets/images/client-logo/5.png')" alt="Shop Name">
                    </nuxt-link>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="logo-item">
                    <nuxt-link to="/shops/1">
                      <img :src="require('@/assets/images/client-logo/6.png')" alt="Shop Name">
                    </nuxt-link>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="logo-item">
                    <nuxt-link to="/shops/1">
                      <img :src="require('@/assets/images/client-logo/7.png')" alt="Shop Name">
                    </nuxt-link>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="logo-item">
                    <nuxt-link to="/shops/1">
                      <img :src="require('@/assets/images/client-logo/8.png')" alt="Shop Name">
                    </nuxt-link>
                  </div>
                </swiper-slide>
              <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
              <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            </swiper>

          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Client Logo Area End -->
</template>

<script>

export default {
  name: 'RisingStar',
  data() {
    return {
      swiperOption: {
        slidesPerView: 7,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
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
    }
  },


}
</script>

<style scoped>

</style>

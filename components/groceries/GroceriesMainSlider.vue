<template>
  <section class="andshop-main-slider slider-area p-0">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 p-0">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(sliderItem, index) in sliderItems" :key="index">
              <SliderItem :sliderItem ='sliderItem' />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SliderItem from '../item-box/SliderItem'
  export default {
    name: 'GroceriesMainSlider',
    components: {
      SliderItem
    },
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
        sliderItems: [
          {
            "id": 1,
            "image": require('@/assets/images/groceries/slider/1.jpg'),
          },
          {
            "id": 2,
            "image": require('@/assets/images/groceries/slider/2.jpg'),
          },
          {
            "id": 3,
            "image": require('@/assets/images/groceries/slider/3.jpg'),
          },
          {
            "id": 4,
            "image": require('@/assets/images/groceries/slider/4.jpg'),
          },
          {
            "id": 5,
            "image": require('@/assets/images/groceries/slider/2.jpg'),
          }
      ]
      }
    },

}
</script>
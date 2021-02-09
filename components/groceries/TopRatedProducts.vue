<template>
  <!-- Top Rated Products / New Arrivals / Best Seller Area Start -->
  <section class="top-rated-products new-arrivals-area best-seller-area bg-different section-t-space">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title-wrap d-flex justify-content-between align-items-center mb-30">
            <div class="section-title">
              <h4>Top Rated</h4>
              <p class="mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <nuxt-link to="/top-rated-products" class="color-red">View all <span class="ml-2"><i class="fas fa-angle-right"></i></span></nuxt-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="best-seller-slider-wrap d-flex flex-wrap justify-content-between">

            <swiper class="swiper" :options="swiperOption">
                
              <!-- Best Seller item start-->
              <swiper-slide v-for="(productItem, index) in productItems" :key="index">
                <ProductItem :productItem ='productItem' />
              </swiper-slide>
              <!-- Best Seller item end-->

            </swiper>

          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Top Rated Products / New Arrivals Area End -->
</template>

<script>

import ProductItem from '../item-box/ProductItem'

export default {
  name: 'GroceriesTopRatedProducts',
  components: {
    ProductItem,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: false,
        breakpoints: {
          1400: {
            slidesPerView: 5
          },
          1366: {
            slidesPerView: 5
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
          399: {
            slidesPerView: 1
          },
          0: {
            slidesPerView: 1
          }
        }
      },
      productItems: [
        {
          "id": 1,
          "title": "Fashion Sunglass",
          "tags": "bath & body, football, tennis",
          "image": require('@/assets/images/groceries/9.jpg'),
          "price": "150.00",
          "discount": "10",
          "offerSeal": "Sale"
        },
        {
          "id": 2,
          "title": "Black Cap",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/groceries/10.jpg'),
          "price": "110.00",
          "discount": "7",
          "offerSeal": "New"
        },
        {
          "id": 3,
          "title": "Jeans coat",
          "tags": "bath & body, football, tennis",
          "image": require('@/assets/images/groceries/11.jpg'),
          "price": "100.00",
          "discount": "10",
          "offerSeal": "Sale"
        },
        {
          "id": 4,
          "title": "T-Shirt",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/groceries/12.jpg'),
          "price": "80.00",
          "discount": "10",
          "offerSeal": "Hot"
        },
        {
          "id": 5,
          "title": "Coat",
          "tags": "bath & body, football, tennis",
          "image": require('@/assets/images/groceries/2.jpg'),
          "price": "150.00",
          "discount": "10",
          "offerSeal": "Sale"
        },
        {
          "id": 6,
          "title": "Long Coat",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/groceries/3.jpg'),
          "price": "150.00",
          "discount": "10",
          "offerSeal": "New"
        },
        {
          "id": 6,
          "title": "Tops",
          "tags": "bath & body, football, tennis",
          "image": require('@/assets/images/groceries/4.jpg'),
          "price": "150.00",
          "discount": "10",
          "offerSeal": "Sale"
        }
      ]
    }
  },
}
</script>
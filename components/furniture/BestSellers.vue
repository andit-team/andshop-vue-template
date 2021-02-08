<template>
  <!-- Best Seller Area Start -->
  <section class="best-seller-area section-t-space bg-different">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title-wrap d-flex justify-content-between align-items-center mb-30">
            <div class="section-title">
              <h4>Best Sellers</h4>
              <p class="mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <nuxt-link to="/best-sellers" class="color-red">View all <span class="ml-2"><i class="fas fa-angle-right"></i></span></nuxt-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="best-seller-slider-wrap d-flex flex-wrap justify-content-between">
            <client-only>
              <swiper class="swiper" :options="swiperOption">
                <!-- Best Seller item start-->
                <swiper-slide v-for="(bestSellerItem, index) in bestSellerItems" :key="index">
                  <ProductItem :productItem ='bestSellerItem' />
                </swiper-slide>
                <!-- Best Seller item end-->
              </swiper>
            </client-only>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Best Seller Area End -->
</template>

<script>
import ProductItem from '../product-box/ProductItem'
export default {
  name : 'FurnitureBestSellers',
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
      bestSellerItems: [
        {
          "id": 1,
          "title": "Sunglass",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/furniture/4.jpg'),
          "price": "150.00",
          "discount": "10",
          "offerSeal": "Sale"
        },
        {
          "id": 2,
          "title": "Fashion Sunglass",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/furniture/1.jpg'),
          "price": "110.00",
          "discount": "7",
          "offerSeal": "New"
        },
        {
          "id": 3,
          "title": "Winter coat",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/furniture/2.jpg'),
          "price": "100.00",
          "discount": "10",
          "offerSeal": "Sale"
        },
        {
          "id": 4,
          "title": "Tops",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/furniture/3.jpg'),
          "price": "80.00",
          "discount": "10",
          "offerSeal": "Hot"
        },
        {
          "id": 5,
          "title": "T-Shirt",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/furniture/4.jpg'),
          "price": "150.00",
          "discount": "10",
          "offerSeal": "Sale"
        },
        {
          "id": 6,
          "title": "Long Coat",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/furniture/3.jpg'),
          "price": "150.00",
          "discount": "10",
          "offerSeal": "New"
        },
        {
          "id": 6,
          "title": "Tops",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/furniture/2.jpg'),
          "price": "150.00",
          "discount": "10",
          "offerSeal": "Sale"
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>
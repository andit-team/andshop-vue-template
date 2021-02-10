<template>
  <!-- Upcoming Products Area Start -->
  <section class="featured-products-area section-t-space section-b-40-space bg-different">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title-wrap d-flex justify-content-between align-items-center mb-30">
            <div class="section-title">
              <h4>Upcoming Products</h4>
              <p class="mt-1">Add hot products to weekly line up</p>
            </div>
            <nuxt-link to="/upcoming-products" class="color-red">View all <span class="ml-2"><i class="fas fa-angle-right"></i></span></nuxt-link>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- Featured item start-->
        <div v-for="(productItem, index) in productItems" :key="index" class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
          <UpcomingProductItem :productItem ='productItem' />
        </div>
        <!-- Featured item End-->
      </div>
    </div>
  </section>
  <!-- Upcoming Products Area End -->
</template>

<script>
import UpcomingProductItem from '../item-box/UpcomingProductItem'

export default {
  name: "FurnitureUpcomingProducts",
  components: {
    UpcomingProductItem
  },
  data(){
    return {
      productItems: [
        {
          "id": 1,
          "productCategory": "Fashion, Electronics",
          "shopName": "Pasta Shop",
          "image": require('@/assets/images/furniture/upcoming/1.jpg'),
          "priceRange": "$50 - $40"
        },
        {
          "id": 2,
          "productCategory": "Fashion, Electronics",
          "shopName": "Pasta Shop",
          "image": require('@/assets/images/furniture/upcoming/2.jpg'),
          "priceRange": "$50 - $40"
        },
        {
          "id": 3,
          "productCategory": "Fashion, Electronics",
          "shopName": "Pasta Shop",
          "image": require('@/assets/images/furniture/upcoming/3.jpg'),
          "priceRange": "$50 - $40"
        },
        {
          "id": 4,
          "productCategory": "Fashion, Electronics",
          "shopName": "Pasta Shop",
          "image": require('@/assets/images/furniture/upcoming/4.jpg'),
          "priceRange": "$50 - $40"
        },
        {
          "id": 5,
          "productCategory": "Fashion, Electronics",
          "shopName": "Pasta Shop",
          "image": require('@/assets/images/furniture/upcoming/5.jpg'),
          "priceRange": "$50 - $40"
        },
        {
          "id": 6,
          "productCategory": "Fashion, Electronics",
          "shopName": "Pasta Shop",
          "image": require('@/assets/images/furniture/upcoming/6.jpg'),
          "priceRange": "$50 - $40"
        },
        {
          "id": 7,
          "productCategory": "Fashion, Electronics",
          "shopName": "Pasta Shop",
          "image": require('@/assets/images/furniture/upcoming/7.jpg'),
          "priceRange": "$50 - $40"
        },
        {
          "id": 8,
          "productCategory": "Fashion, Electronics",
          "shopName": "Pasta Shop",
          "image": require('@/assets/images/furniture/upcoming/8.jpg'),
          "priceRange": "$50 - $40"
        }
      ]
    }
  },

}
</script>
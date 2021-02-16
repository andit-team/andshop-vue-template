<template>
  <div>
    <FurnitureMainSlider />

    <RisingStar class="bg-white" />

    <FurnitureFlashDeals />

    <FurnitureBestSellers />

    <FurniturePopularCategories />

    <FurnitureNewArrivals />

    <!-- Home promotion 1 Area Start -->
    <section class="home-promotion-area-1 bg-different section-t-space">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3">
            <div class="promotion-img-wrap">
              <nuxt-link to="/search-results/right-sidebar"><img :src="require('@/assets/images/promo/1.jpg')" alt="promotion" class="img-fluid"></nuxt-link>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="promotion-img-wrap">
              <nuxt-link to="/product-details/left-thumb"><img :src="require('@/assets/images/promo/2.jpg')" alt="promotion" class="img-fluid"></nuxt-link>
            </div>
          </div>
          <div class="col-12 col-md-3">
            <div class="promotion-img-wrap">
              <nuxt-link to="/new-arrivals"><img :src="require('@/assets/images/promo/3.jpg')" alt="promotion" class="img-fluid"></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Home promotion 1 Area End -->

    <FurnitureUpcomingProducts />

    <!-- Home promotion 2 Area Start -->
    <section class="home-promotion-area-2 bg-different section-t-space pb-0">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="promotion-img-wrap">
              <nuxt-link to="/product-details/left-thumb"><img :src="require('@/assets/images/promo/4.jpg')" alt="promotion" class="img-fluid"></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Home promotion 2 Area End -->

    <FurnitureTopRatedProducts />

    <PaymentMethods />
  </div>
</template>

<script>

import FurnitureMainSlider from '../components/furniture/FurnitureMainSlider'
import RisingStar from '../components/partials/RisingStar'
import FurnitureFlashDeals from '../components/furniture/FurnitureFlashDeals'
import FurniturePopularCategories from '../components/furniture/FurniturePopularCategories'
import FurnitureBestSellers from '../components/furniture/FurnitureBestSellers'
import FurnitureNewArrivals from '../components/furniture/FurnitureNewArrivals'
import FurnitureUpcomingProducts from '../components/furniture/FurnitureUpcomingProducts'
import FurnitureTopRatedProducts from '../components/furniture/FurnitureTopRatedProducts'
import PaymentMethods from '../components/partials/PaymentMethods'

export default {
  name: 'Furniture',
  components: {
    FurnitureMainSlider,
    RisingStar,
    FurnitureFlashDeals,
    FurniturePopularCategories,
    FurnitureBestSellers,
    FurnitureNewArrivals,
    FurnitureUpcomingProducts,
    FurnitureTopRatedProducts,
    PaymentMethods
  },
  head() {
    return {
      title: 'Furniture - Andshop'
    }
  },
}
</script>
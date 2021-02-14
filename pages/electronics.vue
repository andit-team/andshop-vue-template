<template>
  <div>
    <ElectronicsMainSlider />

    <ElectronicsPopularCategories />
    
    <ElectronicsBestSellers />

    <ElectronicsFlashDeals />

    <ElectronicsNewArrivals />

    <!-- Home promotion 1 Area Start -->
    <section class="home-promotion-area-1 section-t-space">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3">
            <div class="promotion-img-wrap">
              <nuxt-link to="/new-arrivals"><img :src="require('@/assets/images/promo/1.jpg')" alt="promotion" class="img-fluid"></nuxt-link>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="promotion-img-wrap">
              <nuxt-link to="/new-arrivals"><img :src="require('@/assets/images/promo/2.jpg')" alt="promotion" class="img-fluid"></nuxt-link>
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

    <ElectronicsUpcomingProducts/>

    <!-- Home promotion 2 Area Start -->
    <section class="home-promotion-area-2 bg-different p-0">
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

    <ElectronicsTopRatedProducts />

    <RisingStar />

    <PaymentMethods/>
  </div>
</template>

<script>

import ElectronicsMainSlider from '../components/electronics/ElectronicsMainSlider'
import RisingStar from '../components/partials/RisingStar'
import ElectronicsFlashDeals from '../components/electronics/ElectronicsFlashDeals'
import ElectronicsPopularCategories from '../components/electronics/ElectronicsPopularCategories'
import ElectronicsBestSellers from '../components/electronics/ElectronicsBestSellers'
import ElectronicsNewArrivals from '../components/electronics/ElectronicsNewArrivals'
import ElectronicsUpcomingProducts from '../components/electronics/ElectronicsUpcomingProducts'
import ElectronicsTopRatedProducts from '../components/electronics/ElectronicsTopRatedProducts'
import PaymentMethods from '../components/partials/PaymentMethods'

export default {
  name: 'Electronics',
  components: {
    ElectronicsMainSlider,
    RisingStar,
    ElectronicsFlashDeals,
    ElectronicsPopularCategories,
    ElectronicsBestSellers,
    ElectronicsNewArrivals,
    ElectronicsUpcomingProducts,
    ElectronicsTopRatedProducts,
    PaymentMethods
  },
  head() {
    return {
      title: 'Electronics - Andshop'
    }
  },
}
</script>
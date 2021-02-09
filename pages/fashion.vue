<template>
  <div>

    <FashionMainSlider />

    <RisingStar />

    <FashionFlashDeals />

    <FashionBestSellers />

    <FashionPopularCategories />

    <FashionNewArrivals />

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
            <div class="promotion-img-wrap my-md-0 my-lg-0 my-3">
              <nuxt-link to="/shops"><img :src="require('@/assets/images/promo/2.jpg')" alt="promotion" class="img-fluid"></nuxt-link>
            </div>
          </div>
          <div class="col-12 col-md-3">
            <div class="promotion-img-wrap">
              <nuxt-link to="/product-details"><img :src="require('@/assets/images/promo/3.jpg')" alt="promotion" class="img-fluid"></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Home promotion 1 Area End -->

    <FashionUpcomingProducts/>

    <!-- Home promotion 2 Area Start -->
    <section class="home-promotion-area-2 bg-different p-0">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="promotion-img-wrap">
              <nuxt-link to="/right-thumb"><img src="~/assets/images/promo/4.jpg" alt="promotion" class="img-fluid"></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Home promotion 2 Area End -->

    <FashionTopRatedProducts />

    <PaymentMethods/>
  </div>
</template>

<script>

import FashionMainSlider from '../components/fashion/MainSlider'
import RisingStar from '../components/partials/RisingStar'
import FashionFlashDeals from '../components/fashion/FlashDeals'
import FashionPopularCategories from '../components/fashion/PopularCategories'
import FashionBestSellers from '../components/fashion/BestSellers'
import FashionNewArrivals from '../components/fashion/NewArrivals'
import FashionUpcomingProducts from '../components/fashion/UpcomingProducts'
import FashionTopRatedProducts from '../components/fashion/TopRatedProducts'
import PaymentMethods from '../components/partials/PaymentMethods'

export default {
  name: 'Fashion',
  components: {
    FashionMainSlider,
    RisingStar,
    FashionFlashDeals,
    FashionPopularCategories,
    FashionBestSellers,
    FashionNewArrivals,
    FashionUpcomingProducts,
    FashionTopRatedProducts,
    PaymentMethods
  },
  head() {
    return {
      title: 'Fashion - Andshop'
    }
  },
}
</script>
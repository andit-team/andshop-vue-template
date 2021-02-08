<template>
  <div>

    <GroceriesMainSlider />

    <RisingStar />

    <GroceriesFlashDeals />

    <GroceriesBestSellers />

    <GroceriesPopularCategories />

    <GroceriesNewArrivals />

    <!-- Home promotion 1 Area Start -->
    <section class="home-promotion-area-1 section-t-space">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3">
            <div class="promotion-img-wrap">
              <a href="#"><img src="~/assets/images/promo/1.jpg" alt="promotion" class="img-fluid"></a>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="promotion-img-wrap my-md-0 my-lg-0 my-3">
              <a href="#"><img src="~/assets/images/promo/2.jpg" alt="promotion" class="img-fluid"></a>
            </div>
          </div>
          <div class="col-12 col-md-3">
            <div class="promotion-img-wrap">
              <a href="#"><img src="~/assets/images/promo/3.jpg" alt="promotion" class="img-fluid"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Home promotion 1 Area End -->

    <GroceriesUpcomingProducts/>

    <!-- Home promotion 2 Area Start -->
    <section class="home-promotion-area-2 bg-different p-0">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="promotion-img-wrap">
              <a href="#"><img src="~/assets/images/promo/4.jpg" alt="promotion" class="img-fluid"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Home promotion 2 Area End -->

    <GroceriesTopRatedProducts />

    <PaymentMethods/>
  </div>
</template>

<script>

import GroceriesMainSlider from '../components/groceries/MainSlider'
import RisingStar from '../components/partials/RisingStar'
import GroceriesFlashDeals from '../components/groceries/FlashDeals'
import GroceriesPopularCategories from '../components/groceries/PopularCategories'
import GroceriesBestSellers from '../components/groceries/BestSellers'
import GroceriesNewArrivals from '../components/groceries/NewArrivals'
import GroceriesUpcomingProducts from '../components/groceries/UpcomingProducts'
import GroceriesTopRatedProducts from '../components/groceries/TopRatedProducts'
import PaymentMethods from '../components/partials/PaymentMethods'

export default {
  name: 'Groceries',
  components: {
    GroceriesMainSlider,
    RisingStar,
    GroceriesFlashDeals,
    GroceriesPopularCategories,
    GroceriesBestSellers,
    GroceriesNewArrivals,
    GroceriesUpcomingProducts,
    GroceriesTopRatedProducts,
    PaymentMethods
  },
  head() {
    return {
      title: 'Groceries - Andshop'
    }
  },
}
</script>
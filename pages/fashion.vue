<template>
  <div>

    <FashionMainSlider />

    <RisingStar />

    <FashionFlashDeals />

    <FashionBestSellers />

    <PopularCategories />

    <FashionNewArrivals />

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

    <UpcomingProducts/>

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

    <FashionTopRatedProducts />

    <PaymentMethods/>
  </div>
</template>

<script>

import FashionMainSlider from '../components/fashion/FashionMainSlider'
import FashionFlashDeals from '../components/fashion/FashionFlashDeals'
import FashionBestSellers from '../components/fashion/FashionBestSellers'
import FashionNewArrivals from '../components/fashion/FashionNewArrivals'
import FashionTopRatedProducts from '../components/fashion/FashionTopRatedProducts'

export default {
  name: 'Fashion',
  components: {
    FashionMainSlider,
    FashionFlashDeals,
    FashionBestSellers,
    FashionNewArrivals,
    FashionTopRatedProducts
  },
  head() {
    return {
      title: 'Fashion - Andshop'
    }
  },
}
</script>
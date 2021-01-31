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
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
          <nuxt-link to="/upcoming-products" class="featured-product-item rounded d-flex align-items-center bg-white" style="min-height: 160px">
            <div class="img-wrap mr-2" style="width: 135px">
              <img :src="require('@/assets/images/featured-products/1.jpg')" alt="products" class="rounded-left">
            </div>
            <div class="product-content">
              <p class="product-tags text-uppercase font-12">Fashion, Electronics</p>
              <p class="product-title font-bold">Pasta Shop</p>
              <div class="rating_wrap mb-1">
                <div class="rating">
                  <div class="product_rate" style="width:87%"></div>
                </div>
              </div>
              <p>
                <span class="price mr-1 text-muted">50$ - 40$</span>
              </p>

              <UpcomingCountdown date="February 17, 2027" class="rounded"></UpcomingCountdown>
            </div>
          </nuxt-link>
        </div>
        <!-- Featured item End-->

        <!-- Featured item start-->
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
          <nuxt-link to="/upcoming-products" class="featured-product-item rounded d-flex align-items-center bg-white" style="min-height: 160px">
            <div class="img-wrap mr-2" style="width: 135px">
              <img :src="require('@/assets/images/featured-products/2.jpg')" alt="products" class="rounded-left">
            </div>
            <div class="product-content">
              <p class="product-tags text-uppercase font-12">Fashion, Electronics</p>
              <p class="product-title font-bold">Pasta Shop</p>
              <div class="rating_wrap mb-1">
                <div class="rating">
                  <div class="product_rate" style="width:87%"></div>
                </div>
              </div>
              <p>
                <span class="price mr-1 text-muted">50$ - 40$</span>
              </p>

              <UpcomingCountdown date="October 15, 2027" class="rounded"></UpcomingCountdown>
            </div>
          </nuxt-link>
        </div>
        <!-- Featured item End-->

        <!-- Featured item start-->
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
          <nuxt-link to="/upcoming-products" class="featured-product-item rounded d-flex align-items-center bg-white" style="min-height: 160px">
            <div class="img-wrap mr-2" style="width: 135px">
              <img :src="require('@/assets/images/featured-products/3.jpg')" alt="products" class="rounded-left">
            </div>
            <div class="product-content">
              <p class="product-tags text-uppercase font-12">Fashion, Electronics</p>
              <p class="product-title font-bold">Pasta Shop</p>
              <div class="rating_wrap mb-1">
                <div class="rating">
                  <div class="product_rate" style="width:87%"></div>
                </div>
              </div>
              <p>
                <span class="price mr-1 text-muted">50$ - 40$</span>
              </p>

              <UpcomingCountdown date="August 17, 2027" class="rounded"></UpcomingCountdown>
            </div>
          </nuxt-link>
        </div>
        <!-- Featured item End-->

        <!-- Featured item start-->
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
          <nuxt-link to="/upcoming-products" class="featured-product-item rounded d-flex align-items-center bg-white" style="min-height: 160px">
            <div class="img-wrap mr-2" style="width: 135px">
              <img :src="require('@/assets/images/featured-products/4.jpg')" alt="products" class="rounded-left">
            </div>
            <div class="product-content">
              <p class="product-tags text-uppercase font-12">Fashion, Electronics</p>
              <p class="product-title font-bold">Pasta Shop</p>
              <div class="rating_wrap mb-1">
                <div class="rating">
                  <div class="product_rate" style="width:87%"></div>
                </div>
              </div>
              <p>
                <span class="price mr-1 text-muted">50$ - 40$</span>
              </p>

              <UpcomingCountdown date="February 17, 2027" class="rounded"></UpcomingCountdown>
            </div>
          </nuxt-link>
        </div>
        <!-- Featured item End-->
      
        <!-- Featured item start-->
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
          <nuxt-link to="/upcoming-products" class="featured-product-item rounded d-flex align-items-center bg-white" style="min-height: 160px">
            <div class="img-wrap mr-2" style="width: 135px">
              <img :src="require('@/assets/images/featured-products/5.jpg')" alt="products" class="rounded-left">
            </div>
            <div class="product-content">
              <p class="product-tags text-uppercase font-12">Fashion, Electronics</p>
              <p class="product-title font-bold">Pasta Shop</p>
              <div class="rating_wrap mb-1">
                <div class="rating">
                  <div class="product_rate" style="width:87%"></div>
                </div>
              </div>
              <p>
                <span class="price mr-1 text-muted">50$ - 40$</span>
              </p>

              <UpcomingCountdown date="February 17, 2027" class="rounded"></UpcomingCountdown>
            </div>
          </nuxt-link>
        </div>
        <!-- Featured item End-->

        <!-- Featured item start-->
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
          <nuxt-link to="/upcoming-products" class="featured-product-item rounded d-flex align-items-center bg-white" style="min-height: 160px">
            <div class="img-wrap mr-2" style="width: 135px">
              <img :src="require('@/assets/images/featured-products/6.jpg')" alt="products" class="rounded-left">
            </div>
            <div class="product-content">
              <p class="product-tags text-uppercase font-12">Fashion, Electronics</p>
              <p class="product-title font-bold">Pasta Shop</p>
              <div class="rating_wrap mb-1">
                <div class="rating">
                  <div class="product_rate" style="width:87%"></div>
                </div>
              </div>
              <p>
                <span class="price mr-1 text-muted">50$ - 40$</span>
              </p>

              <UpcomingCountdown date="October 15, 2027" class="rounded"></UpcomingCountdown>
            </div>
          </nuxt-link>
        </div>
        <!-- Featured item End-->

        <!-- Featured item start-->
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
          <nuxt-link to="/upcoming-products" class="featured-product-item rounded d-flex align-items-center bg-white" style="min-height: 160px">
            <div class="img-wrap mr-2" style="width: 135px">
              <img :src="require('@/assets/images/featured-products/7.jpg')" alt="products" class="rounded-left">
            </div>
            <div class="product-content">
              <p class="product-tags text-uppercase font-12">Fashion, Electronics</p>
              <p class="product-title font-bold">Pasta Shop</p>
              <div class="rating_wrap mb-1">
                <div class="rating">
                  <div class="product_rate" style="width:87%"></div>
                </div>
              </div>
              <p>
                <span class="price mr-1 text-muted">50$ - 40$</span>
              </p>

              <UpcomingCountdown date="August 17, 2027" class="rounded"></UpcomingCountdown>
            </div>
          </nuxt-link>
        </div>
        <!-- Featured item End-->

        <!-- Featured item start-->
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
          <nuxt-link to="/upcoming-products" class="featured-product-item rounded d-flex align-items-center bg-white" style="min-height: 160px">
            <div class="img-wrap mr-2" style="width: 135px">
              <img :src="require('@/assets/images/featured-products/8.jpg')" alt="products" class="rounded-left">
            </div>
            <div class="product-content">
              <p class="product-tags text-uppercase font-12">Fashion, Electronics</p>
              <p class="product-title font-bold">Pasta Shop</p>
              <div class="rating_wrap mb-1">
                <div class="rating">
                  <div class="product_rate" style="width:87%"></div>
                </div>
              </div>
              <p>
                <span class="price mr-1 text-muted">50$ - 40$</span>
              </p>

              <UpcomingCountdown date="February 17, 2027" class="rounded"></UpcomingCountdown>
            </div>
          </nuxt-link>
        </div>
        <!-- Featured item End-->
      </div>
    </div>
  </section>
  <!-- Upcoming Products Area End -->
</template>

<script>

export default {
  name: "UpcomingProducts",
  data(){
    return {
    }
  },

}
</script>

<style scoped>

</style>
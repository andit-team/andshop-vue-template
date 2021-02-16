<template>
  <div>
    <!-- Breadcrumb Area Start -->
    <div class="breadcrumb-area bg-white">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent m-0 section-t-40-space section-b-40-space">
                <li class="breadcrumb-item"><nuxt-link to="/fashion">Home</nuxt-link></li>
                <li class="breadcrumb-item active" aria-current="page">Shops</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Area End -->

    <!-- Shop Page Area -->
    <section class="shop-page section-t-space section-b-40-space">
      <div class="container">

        <div class="row">
          <!-- Product Search Page Left Side-->
          <div class="col-12 col-md-3 col-lg-3">
            <ProductPageSidebar />
          </div>
          <!-- Product Search Page Left Side-->

          <!-- Shop Page Right /Product Search Page Right Side-->
          <div class="col-12 col-md-9">

            <div class="shop-search-bar mb-4 d-flex align-items-center justify-content-between">
              <h4>Shops</h4>
              <div class="search-bar-right-wrap d-flex align-items-center">
                <form>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search...">
                    <div class="input-group-append">
                      <button class="theme-button rounded-right" type="button"><i class="fa fa-search"></i></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div>

              <div class="all-shops-wrap best-seller-items-wrap d-flex flex-wrap product-row">

                <div v-for="(shopItem, index) in shopItems" :key="index" class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                  <ShopItem :shopItem='shopItem' />
                </div>

                <!-- Load more button-->
                <div class="col-12 d-block mt-4 text-center"><button class="theme-button rounded load-more-button">Load more</button></div>

              </div>
              
            </div>

          </div>
          <!-- Shop Page Right /Product Search Page Right Side-->
        </div>

      </div>
    </section>
    <!-- Shop Page Area -->

  </div>
</template>

<script>
import ShopItem from '../../components/item-box/ShopItem'
import ProductPageSidebar from '../../components/partials/ProductPageSidebar'

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
  name: "ShopsPage",
  components: {
    ShopItem,
    ProductPageSidebar,
    VueSlider
  },
  head() {
    return {
      title: 'Shops'
    }
  },
  data() {
    return {
      range: [0,5000],
      shopItems: [
        {
          "id": 1,
          "image": require('@/assets/images/shops/1.png'),
          "title": 'Cheer Shop'
        },
        {
          "id": 2,
          "image": require('@/assets/images/shops/2.png'),
          "title": 'Magic Shop'
        },
        {
          "id": 3,
          "image": require('@/assets/images/shops/3.png'),
          "title": 'Aka Shop'
        },
        {
          "id": 4,
          "image": require('@/assets/images/shops/4.png'),
          "title": 'Magic Shop'
        },
        {
          "id": 5,
          "image": require('@/assets/images/shops/5.png'),
          "title": 'Cheer Shop'
        },
        {
          "id": 6,
          "image": require('@/assets/images/shops/6.png'),
          "title": 'AKa Shop'
        },
        {
          "id": 7,
          "image": require('@/assets/images/shops/7.png'),
          "title": 'KFG Shop'
        },
        {
          "id": 8,
          "image": require('@/assets/images/shops/8.png'),
          "title": 'Magic Shop'
        },
        {
          "id": 9,
          "image": require('@/assets/images/shops/9.png'),
          "title": 'Cheer Shop'
        },
        {
          "id": 10,
          "image": require('@/assets/images/shops/10.png'),
          "title": 'Magic Shop'
        },
        {
          "id": 11,
          "image": require('@/assets/images/shops/1.png'),
          "title": 'Aka Shop'
        },
        {
          "id": 12,
          "image": require('@/assets/images/shops/2.png'),
          "title": 'Magic Shop'
        },
        {
          "id": 13,
          "image": require('@/assets/images/shops/3.png'),
          "title": 'Cheer Shop'
        },
        {
          "id": 14,
          "image": require('@/assets/images/shops/4.png'),
          "title": 'AKa Shop'
        },
        {
          "id": 15,
          "image": require('@/assets/images/shops/5.png'),
          "title": 'KFG Shop'
        },
        {
          "id": 16,
          "image": require('@/assets/images/shops/6.png'),
          "title": 'Magic Shop'
        },
      ]
    }
  }
}
</script>
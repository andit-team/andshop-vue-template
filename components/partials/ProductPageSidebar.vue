<template>
  <div class="product-search-left-side">
    <!-- Left side bar box start-->
    <div class="search-left-sidebar-box mb-4">
      <b-navbar-toggle target="product_categories_collapse" class="left-sidebar-title text-uppercase w-100 mb-4 d-flex">
        <template #default="{ expanded }">
          <h6>Product categories</h6>
          <span v-if="expanded"><i class="fas fa-angle-up"></i></span>
          <span v-else ><i class="fas fa-angle-down"></i></span>
        </template>

      </b-navbar-toggle>

      <b-collapse id="product_categories_collapse" visible class="left-sidebar-content">
        <ul>
          <li><nuxt-link to="/search-results">Fashion</nuxt-link></li>
          <li><nuxt-link to="/search-results">Furniture</nuxt-link></li>
          <li><nuxt-link to="/search-results">Hair care</nuxt-link></li>
          <li><nuxt-link to="/search-results">Make Up</nuxt-link></li>
          <li><nuxt-link to="/search-results">Men's</nuxt-link></li>
          <li><nuxt-link to="/search-results">Women's</nuxt-link></li>
          <li><nuxt-link to="/search-results">Baby</nuxt-link></li>
          <li><nuxt-link to="/search-results">Watch</nuxt-link></li>
          <li><nuxt-link to="/search-results">Make Up</nuxt-link></li>
          <li><nuxt-link to="/search-results">Bags</nuxt-link></li>
          <li><nuxt-link to="/search-results">Electronics</nuxt-link></li>
        </ul>
      </b-collapse>
    </div>
    <!-- Left side bar box end-->

    <!-- Left side bar box start-->
    <div class="search-left-sidebar-box mb-4">
      <b-navbar-toggle target="filter_by_price_collapse" class="left-sidebar-title text-uppercase w-100 mb-4 d-flex">
        <template #default="{ expanded }">
          <h6>Filter by price</h6>
          <span v-if="expanded"><i class="fas fa-angle-up"></i></span>
          <span v-else ><i class="fas fa-angle-down"></i></span>
        </template>
      </b-navbar-toggle>
      <b-collapse id="filter_by_price_collapse" visible class="left-sidebar-content range-slider-box">
        <vue-slider  
          :min="0" 
          :max="5000"
          v-model="range"
          :enable-cross="false"
        ></vue-slider>
      </b-collapse>
    </div>
    <!-- Left side bar box end-->

    <!-- Left side bar box start-->
    <div class="search-left-sidebar-box mb-4">
      <b-navbar-toggle target="product_tags_collapse" class="left-sidebar-title text-uppercase w-100 mb-4 d-flex">
        <template #default="{ expanded }">
          <h6>Product tags</h6>
          <span v-if="expanded"><i class="fas fa-angle-up"></i></span>
          <span v-else ><i class="fas fa-angle-down"></i></span>
        </template>
      </b-navbar-toggle>

      <b-collapse id="product_tags_collapse" visible class="left-sidebar-content">
        <div class="tags">
          <span class="active">Fitness</span>
          <span>Football</span>
          <span>Hair care</span>
          <span>Make Up</span>
          <span>Men's</span>
          <span>Hair care</span>
          <span>Football</span>
          <span>Hair care</span>
          <span>Make Up</span>
          <span>Men's</span>
          <span>Hair care</span>
        </div>
      </b-collapse>
    </div>
    <!-- Left side bar box end-->
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
export default {
  name: 'ProductPageSidebar',
  components: {
    VueSlider
  },
    data() {
    return {
      range: [0,5000],
    }
  }
}
</script>
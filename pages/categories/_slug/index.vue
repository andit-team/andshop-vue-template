<template>
  <div>
    <!-- Breadcrumb Area Start -->
    <div class="breadcrumb-area bg-white">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent m-0 section-t-40-space section-b-40-space">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item" :class="{ active : (category.slug === category_slug)}"
                  v-for="(category,index) in parentCatgories"
                  :key="index">
                  <nuxt-link :to="'/categories/'+category.slug"> {{category.name}}</nuxt-link>
                </li>
                <!-- <li class="breadcrumb-item active" aria-current="page">Categories Name</li> -->
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Area End -->

    <!-- Product Search Page Area Start -->
    <section class="product-search-page best-seller-area section-t-space bg-white" >
      <div class="container">
        <div class="row">
          <!-- Product Search Page Left Side-->
          <div class="col-12 col-md-3 col-lg-3">
            <div class="product-search-left-side">
              <!-- Left side bar box start-->
              <div class="search-left-sidebar-box mb-5" v-if="subCatgories.length > 0">
                <div class="left-sidebar-title text-uppercase mb-4"><h5>Product categories</h5></div>
                <div class="left-sidebar-content">
                  <ul class="parent_category_list">
                    <b-dropdown-item v-for="(productCategory, index) in subCatgories" :key="index" :to="`/categories/`+productCategory.slug">
                      <span><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">{{ productCategory.name }} <span class="badge text-info">{{productCategory.product}}</span></span>
                      <i class="fas fa-angle-right float-right"></i>
                    </b-dropdown-item>
                  </ul>
                </div>
              </div>
              <!-- Left side bar box end-->

              <!-- Left side bar box start-->
              <div class="search-left-sidebar-box mb-5">
                <div class="left-sidebar-title text-uppercase mb-4"><h5>Filter by price</h5></div>
                <div class="left-sidebar-content range-slider-box">
                  <vue-slider  
                    :min="0" 
                    :max="2000"
                    v-model="range"
                    :enable-cross="false"
                    @drag-end="sliderRange()"
                  ></vue-slider>
                  <p class="mt-3">Price: <span>$ {{range[0]}} - $ {{range[1]}}</span></p>
                </div>
              </div>
              <!-- Left side bar box end-->

              <!-- Left side bar box start-->
              <div class="search-left-sidebar-box mb-5">
                <div class="left-sidebar-title text-uppercase mb-4"><h5>Product tags</h5></div>
                <div class="left-sidebar-content">
                  <div class="tags">
                    <span v-for="(tag,index) in productTags" :key="index" :class="selectedTags.includes(tag) ? 'active':''" @click="selectTag(tag)">{{tag}}</span>
                  </div>
                </div>
              </div>
              <!-- Left side bar box end-->
            </div>
          </div>
          <!-- Product Search Page Left Side-->

          <!-- Product Search Page Right Side-->
          <div class="col-12 col-md-9">

            <!-- Sort Bar Start-->
            <div class="search-page-sort-bar mb-4 py-2 px-4 d-flex justify-content-between align-items-center bg-different">
              <p>Showing result {{products.length}} of {{totalRow}}</p>
              <form class="form-inline">
                <div class="form-group">
                  <select class="form-control" id="sort_bar" @change="sort_by()" v-model="sortBy">
                    <!-- <option disabled selected>Sort By</option> -->
                    <option value="popular" >Most Popular</option>
                    <option value="newest" selected>Newest</option>
                    <option value="price-lowest">Price lowest</option>
                    <option value="price-highest">Price Highest</option>
                  </select>
                </div>
              </form>
            </div>
            <!-- Sort Bar End-->

            <div class="best-seller-items-wrap d-flex flex-wrap product-row" v-if="products.length > 0">
              <!-- Best Seller item start-->
              <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 product-item-col" v-for="(product, index) in products" :key="index">
                <product-box v-bind:product="product"/>
              </div>
              <!-- Best Seller item end-->
              <!-- Load more button-->
              <div class=" col-12 d-block mt-4 text-center"><button class="theme-button rounded load-more-button" @click="loadMore" v-if="nextLink">Load more</button></div>
            </div>
            <div class="best-seller-items-wrap d-flex flex-wrap product-row" v-else>
              <img class="img-fluid" src="~/assets/images/no-product.png" alt="">
            </div>
          <!-- Product Search Page Right Side-->
        </div>
        </div>
      </div>
    </section>
    <!-- Product Search Page Area End -->

    <PaymentMethods/>

  </div>
</template>

<script>
import {category_wise_products,sub_categories,parent_categories} from "~/api/urls";
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
  name: "categoryWiseProduct",
    components: {
    VueSlider
  },

  data() {
    return {
      limit: this.$route.query.limit,
      category_slug: this.$route.params.slug,
      totalRow: 0,
      perPage: 20,
      currentCategory: [],
      selectedTags: [],
      nextLink: null,
      sortBy: 'newest',
      searchParams: '', 
      range: [0,2000],
      api_base_url : this.$config.API_BASE_URL
    }
  },
  methods:{
    sliderRange(){
      this.searchOptions;
      this.getCategoryWiseProduct()
    },
    sort_by(){
     this.searchOptions;
     this.getCategoryWiseProduct()
    },

    selectTag(tag){
      if(this.selectedTags.includes(tag)){
        const index = this.selectedTags.indexOf(tag);
        if (index > -1) {
          this.selectedTags.splice(index, 1);
        }
        this.searchOptions;
        this.getCategoryWiseProduct()
      }else{
        this.selectedTags.push(tag);
        this.searchOptions;
        this.getCategoryWiseProduct()
      }
    },


    loadMore(){
      console.log(this.nextLink);
      let self = this;
      let config = {
        headers: {'Content-Type': 'application/json'}
      };
      this.$axios.$get(this.nextLink, config).then((res) => {
        if (res.error === false) {
          self.$store.commit('product/loadMoreCategoryWiseProducts',res.data);
          self.nextLink = res.links.next
        }
        else {
          console.log(res.msg)
        }
      }).catch((error) => {
        console.log(error);
      });
    },
    getCategoryWiseProduct(){
      let self = this;
      let config = {
        headers: {'Content-Type': 'application/json'}
      };
      this.$axios.$get(this.api_base_url+category_wise_products+this.category_slug+this.searchOptions, config).then((res) => {
        if (res.error === false) {
          self.$store.commit('product/updateCategoryWiseProducts',res.data);
          self.nextLink = res.links.next
          self.totalRow = res.meta.total
        }
        else {
          console.log(res.msg)
        }
      }).catch((error) => {
        console.log(error);
      });
    },
    getSubCategories(){
      let self = this;
      let config = {
        headers: {'Content-Type': 'application/json'}
      };
      this.$axios.$get(this.api_base_url+sub_categories+this.category_slug, config).then((res) => {
        if (res.error === false) {
          self.$store.commit('category/updateSubCategories',res.data);
        }
        else {
          console.log(res.msg)
        }
      }).catch((error) => {
        console.log(error);
      });
    },
    getParentCatgories(){
      let self = this;
      let config = {
        headers: {'Content-Type': 'application/json'}
      };
      this.$axios.$get(this.api_base_url+parent_categories+this.category_slug, config).then((res) => {
        if (res.error === false) {
          self.currentCategory = res.data[res.data.length - 1];
          self.$store.commit('category/updateParentCategories',res.data);
        }
        else {
          console.log(res.msg)
        }
      }).catch((error) => {
        console.log(error);
      });
    }
  },
  created(){
    if(this.limit){
      this.perPage = this.limit;
    }
  },
  computed:{
    products(){
      return this.$store.state.product.categoryWiseProducts;
    },
    subCatgories(){
      return this.$store.state.category.subCategories;
    },
    parentCatgories(){
      return this.$store.state.category.parentCategories;
    },
    productTags(){
      // return this.$store.state.category.parentCategories;
      return [
        'Rice',
        'Mutton',
        'Dry Food',
        'Organic',
        'Fresh',
        'Snacks',
        'Hair care',
        'Make Up'
      ]
    },
    searchOptions(){
      var params = `?limit=${this.perPage}&sortBy=${this.sortBy}&min=${this.range[0]}&max=${this.range[1]}`
      if(this.selectedTags.length > 0){
        params = params+'&tags='+this.selectedTags.toString()
      }
      return params
    },
  },

  mounted() {
      this.getCategoryWiseProduct();
      this.getSubCategories();
      this.getParentCatgories();
  },

  // watch: {
  //   products: function (val) {
  //     this.range[0]=Math.min.apply(Math, this.products.map(function(min) { return min.price; }));
  //     this.range[1]=Math.max.apply(Math, this.products.map(function(max) { return max.price; }))
  //   }
  // }

  // watch: {
  //   'searchOptions'(newVal, oldVal) {
  //     console.log(newVal);
  //     console.log(oldVal);
  //   }
  // }
}
</script>

<style scoped>

</style>

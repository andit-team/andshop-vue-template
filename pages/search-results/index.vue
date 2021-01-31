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
                <li class="breadcrumb-item"><a href="#">Product</a></li>
                <li class="breadcrumb-item active" aria-current="page">Product Search</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Area End -->

    <!-- Product Search Page Area Start -->
    <section class="product-search-page best-seller-area section-t-space bg-white">
      <div class="container">
        <div class="row">
          <!-- Product Search Page Left Side-->
          <div class="col-12 col-md-3 col-lg-3">
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
                    <li><a href="#">Product categories</a></li>
                    <li><a href="#">Fitness</a></li>
                    <li><a href="#">Football</a></li>
                    <li><a href="#">Hair care</a></li>
                    <li><a href="#">Make Up</a></li>
                    <li><a href="#">Men's</a></li>
                    <li><a href="#">Hair care</a></li>
                    <li><a href="#">Football</a></li>
                    <li><a href="#">Hair care</a></li>
                    <li><a href="#">Make Up</a></li>
                    <li><a href="#">Men's</a></li>
                    <li><a href="#">Hair care</a></li>
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
                  <p class="mt-3">Price: <span>$0 - $5000</span></p>
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
                    <span class="active">Product categories</span>
                    <span>Fitness</span>
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
          </div>
          <!-- Product Search Page Left Side-->

          <!-- Product Search Page Right Side-->
          <div class="col-12 col-md-9">

            <!-- Sort Bar Start-->
            <div class="search-page-sort-bar mb-4 py-2 px-4 d-flex justify-content-between align-items-center bg-different">
              <p>Showing result 1 of 5</p>
              <form class="form-inline">
                <div class="form-group">
                  <label for="sort_bar">Sort By:</label>
                  <select class="form-control" id="sort_bar">
                    <option>Default sort</option>
                    <option>Default sort</option>
                    <option>Default sort</option>
                    <option>Default sort</option>
                    <option>Default sort</option>
                  </select>
                </div>
              </form>
            </div>
            <!-- Sort Bar End-->

            <div>

              <div class="best-seller-items-wrap d-flex flex-wrap product-row">

                <!-- Best Seller item start-->
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 product-item-col">
                  <div class="product-item rounded bg-white">
                    <nuxt-link to="/products/potato">
                      <div class="img-wrap mb-2">
                        <img src="~/assets/images/best-sellers/1.jpg" alt="products" class="rounded-top">
                      </div>
                      <div class="product-content">
                        <p class="product-tags text-uppercase">bath & body, football, tennis</p>
                        <p class="product-title font-bold">Cornboat Holders</p>
                        <div class="rating_wrap mb-1">
                          <div class="rating">
                            <div class="product_rate" style="width:87%"></div>
                          </div>
                        </div>
                        <p>
                          <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span>
                          <span class="discounted-price mr-1 color-red">$2.00</span>
                          <span class="special-tag badge bg-red white-color">Sale</span>
                        </p>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
                <!-- Best Seller item end-->

                <!-- Best Seller item start-->
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 product-item-col">
                  <div class="product-item rounded bg-white">
                    <nuxt-link to="/products/potato">
                      <div class="img-wrap mb-2">
                        <img src="~/assets/images/best-sellers/1.jpg" alt="products" class="rounded-top">
                      </div>
                      <div class="product-content">
                        <p class="product-tags text-uppercase">bath & body, football, tennis</p>
                        <p class="product-title font-bold">Cornboat Holders</p>
                        <div class="rating_wrap mb-1">
                          <div class="rating">
                            <div class="product_rate" style="width:87%"></div>
                          </div>
                        </div>
                        <p>
                          <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span>
                          <span class="discounted-price mr-1 color-red">$2.00</span>
                          <span class="special-tag badge bg-red white-color">Sale</span>
                        </p>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
                <!-- Best Seller item end-->

                <!-- Best Seller item start-->
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 product-item-col">
                  <div class="product-item rounded bg-white">
                    <nuxt-link to="/products/potato">
                      <div class="img-wrap mb-2">
                        <img src="~/assets/images/best-sellers/1.jpg" alt="products" class="rounded-top">
                      </div>
                      <div class="product-content">
                        <p class="product-tags text-uppercase">bath & body, football, tennis</p>
                        <p class="product-title font-bold">Cornboat Holders</p>
                        <div class="rating_wrap mb-1">
                          <div class="rating">
                            <div class="product_rate" style="width:87%"></div>
                          </div>
                        </div>
                        <p>
                          <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span>
                          <span class="discounted-price mr-1 color-red">$2.00</span>
                          <span class="special-tag badge bg-red white-color">Sale</span>
                        </p>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
                <!-- Best Seller item end-->

                <!-- Best Seller item start-->
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 product-item-col">
                  <div class="product-item rounded bg-white">
                    <nuxt-link to="/products/potato">
                      <div class="img-wrap mb-2">
                        <img src="~/assets/images/best-sellers/1.jpg" alt="products" class="rounded-top">
                      </div>
                      <div class="product-content">
                        <p class="product-tags text-uppercase">bath & body, football, tennis</p>
                        <p class="product-title font-bold">Cornboat Holders</p>
                        <div class="rating_wrap mb-1">
                          <div class="rating">
                            <div class="product_rate" style="width:87%"></div>
                          </div>
                        </div>
                        <p>
                          <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span>
                          <span class="discounted-price mr-1 color-red">$2.00</span>
                          <span class="special-tag badge bg-red white-color">Sale</span>
                        </p>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
                <!-- Best Seller item end-->

                <!-- Best Seller item start-->
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 product-item-col">
                  <div class="product-item rounded bg-white">
                    <nuxt-link to="/products/potato">
                      <div class="img-wrap mb-2">
                        <img src="~/assets/images/best-sellers/1.jpg" alt="products" class="rounded-top">
                      </div>
                      <div class="product-content">
                        <p class="product-tags text-uppercase">bath & body, football, tennis</p>
                        <p class="product-title font-bold">Cornboat Holders</p>
                        <div class="rating_wrap mb-1">
                          <div class="rating">
                            <div class="product_rate" style="width:87%"></div>
                          </div>
                        </div>
                        <p>
                          <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span>
                          <span class="discounted-price mr-1 color-red">$2.00</span>
                          <span class="special-tag badge bg-red white-color">Sale</span>
                        </p>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
                <!-- Best Seller item end-->

                <!-- Best Seller item start-->
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 product-item-col">
                  <div class="product-item rounded bg-white">
                    <nuxt-link to="/products/potato">
                      <div class="img-wrap mb-2">
                        <img src="~/assets/images/best-sellers/1.jpg" alt="products" class="rounded-top">
                      </div>
                      <div class="product-content">
                        <p class="product-tags text-uppercase">bath & body, football, tennis</p>
                        <p class="product-title font-bold">Cornboat Holders</p>
                        <div class="rating_wrap mb-1">
                          <div class="rating">
                            <div class="product_rate" style="width:87%"></div>
                          </div>
                        </div>
                        <p>
                          <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span>
                          <span class="discounted-price mr-1 color-red">$2.00</span>
                          <span class="special-tag badge bg-red white-color">Sale</span>
                        </p>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
                <!-- Best Seller item end-->

                <!-- Best Seller item start-->
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 product-item-col">
                  <div class="product-item rounded bg-white">
                    <nuxt-link to="/products/potato">
                      <div class="img-wrap mb-2">
                        <img src="~/assets/images/best-sellers/1.jpg" alt="products" class="rounded-top">
                      </div>
                      <div class="product-content">
                        <p class="product-tags text-uppercase">bath & body, football, tennis</p>
                        <p class="product-title font-bold">Cornboat Holders</p>
                        <div class="rating_wrap mb-1">
                          <div class="rating">
                            <div class="product_rate" style="width:87%"></div>
                          </div>
                        </div>
                        <p>
                          <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span>
                          <span class="discounted-price mr-1 color-red">$2.00</span>
                          <span class="special-tag badge bg-red white-color">Sale</span>
                        </p>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
                <!-- Best Seller item end-->

                <!-- Best Seller item start-->
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 product-item-col">
                  <div class="product-item rounded bg-white">
                    <nuxt-link to="/products/potato">
                      <div class="img-wrap mb-2">
                        <img src="~/assets/images/best-sellers/1.jpg" alt="products" class="rounded-top">
                      </div>
                      <div class="product-content">
                        <p class="product-tags text-uppercase">bath & body, football, tennis</p>
                        <p class="product-title font-bold">Cornboat Holders</p>
                        <div class="rating_wrap mb-1">
                          <div class="rating">
                            <div class="product_rate" style="width:87%"></div>
                          </div>
                        </div>
                        <p>
                          <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span>
                          <span class="discounted-price mr-1 color-red">$2.00</span>
                          <span class="special-tag badge bg-red white-color">Sale</span>
                        </p>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
                <!-- Best Seller item end-->

                <!-- Load more button-->
                <div class="col-12 d-block mt-4 text-center"><Loading /></div>
                <div class="col-12 d-block mt-4 text-center"><button class="theme-button rounded load-more-button">Load more</button></div>

              </div>
              
            </div>

          </div>
          <!-- Product Search Page Right Side-->
        </div>
      </div>
    </section>
    <!-- Product Search Page Area End -->

    <PaymentMethods/>
    
  </div>
</template>

<script>

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
  name: "searchResults",

  components: {
    VueSlider
  },

  data() {
    return {
      searchCategory: this.$route.query.category,
      searchQuery: this.$route.query.query,
      range: [0,5000],
    }
  }
}
</script>

<style scoped>

</style>

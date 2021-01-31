<template>
  <div>
    <div class="shop-profile-banner">
      <img src="~/assets/images/banners/shop-profile.jpg" alt="banner" class="img-fluid">
    </div>

    <div class="shop-profile-details-container">
      <div class="container">
        <div class="row shop-profile-details-wrap align-items-center">
          <!-- <div class="shop-profile-details-wrap d-flex"> -->
            <div class="col-12 col-sm-12 col-md-3 p-md-0">
              <div class="shop-profile-side-box mb-sm-2 text-center">
                <img :src="require('@/assets/images/shops/1.png')" alt="shop">
                <h4 class="mt-2">Fashion Store</h4>
                <div class="shop-rating mt-2">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p class="font-12">710 Followers <span>40 Review</span></p>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 p-md-0">
              <div class="shop-profile-des">
                <p class="font-14">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At omnis iste neque quasi quaerat blanditiis exercitationem, magnam expedita quae fugit.</p>
                <p class="font-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa soluta et, suscipit architecto ab voluptates. Lorem ipsum, dolor sit amet consectetur adipisicing elit. At omnis iste neque quasi quaerat blanditiis exercitationem, magnam expedita quae fugit.</p>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-3 p-md-0">
              <div class="shop-profile-side-box text-center mt-sm-2">
                <button class="theme-button rounded d-block font-12">Follow</button>
                <button class="theme-button rounded d-block font-12">Chat</button>
              </div>
            </div>
          <!-- </div> -->
        </div>
      </div>
    </div>

    <!-- Product Search Page Area Start -->
    <section class="shop-page-product-area section-t-space bg-white">
      <div class="container">

        <div class="row">
          <div class="col-12">
            <div class="shop-search-bar mb-4 d-flex align-items-center justify-content-between">
              <h4>Products</h4>
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
          </div>
        </div>

        <div class="row product-row">
          <!-- Product Search Page Right Side-->

          <!-- Best Seller item start-->
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 product-item-col">
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
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 product-item-col">
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
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 product-item-col">
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
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 product-item-col">
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
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 product-item-col">
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
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 product-item-col">
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
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 product-item-col">
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
          <div class=" col-12 d-block mt-4 text-center"><button class="theme-button rounded load-more-button">Load more</button></div>
          <!-- Product Search Page Right Side-->
        </div>
      </div>
    </section>
    <!-- Product Search Page Area End -->

  </div>
</template>

<script>
export default {
  name: "RisingStarDetails"
}
</script>

<style scoped>

</style>

<template>
  <!-- Top Rated Products / New Arrivals / Best Seller Area Start -->
  <section class="top-rated-products new-arrivals-area best-seller-area bg-different section-t-space">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title-wrap d-flex justify-content-between align-items-center mb-30">
            <div class="section-title">
              <h4>Top Rated</h4>
              <p class="mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <nuxt-link to="/top-rated-products" class="color-red">View all <span class="ml-2"><i class="fas fa-angle-right"></i></span></nuxt-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="best-seller-slider-wrap d-flex flex-wrap justify-content-between">

            <swiper class="swiper" :options="swiperOption">

              <!-- Top Rated item start-->
              <swiper-slide>
                <div class="product-item rounded bg-white">
                  <nuxt-link to="/product-details/">
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
              </swiper-slide>
              <!-- Top Rated item end-->

              <!-- Top Rated item start-->
              <swiper-slide>
                <div class="product-item rounded bg-white">
                  <nuxt-link to="/product-details/">
                    <div class="img-wrap mb-2">
                      <img src="~/assets/images/best-sellers/2.jpg" alt="products" class="rounded-top">
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
              </swiper-slide>
              <!-- Top Rated item end-->

              <!-- Top Rated item start-->
              <swiper-slide>
                <div class="product-item rounded bg-white">
                  <nuxt-link to="/product-details/">
                    <div class="img-wrap mb-2">
                      <img src="~/assets/images/best-sellers/3.jpg" alt="products" class="rounded-top">
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
              </swiper-slide>
              <!-- Top Rated item end-->

              <!-- Top Rated item start-->
              <swiper-slide>
                <div class="product-item rounded bg-white">
                  <nuxt-link to="/product-details/">
                    <div class="img-wrap mb-2">
                      <img src="~/assets/images/best-sellers/4.jpg" alt="products" class="rounded-top">
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
              </swiper-slide>
              <!-- Top Rated item end-->

              <!-- Top Rated item start-->
              <swiper-slide>
                <div class="product-item rounded bg-white">
                  <nuxt-link to="/product-details/">
                    <div class="img-wrap mb-2">
                      <img src="~/assets/images/best-sellers/5.jpg" alt="products" class="rounded-top">
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
              </swiper-slide>
              <!-- Top Rated item end-->

              <!-- Top Rated item start-->
              <swiper-slide>
                <div class="product-item rounded bg-white">
                  <nuxt-link to="/product-details/">
                    <div class="img-wrap mb-2">
                      <img src="~/assets/images/best-sellers/5.jpg" alt="products" class="rounded-top">
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
              </swiper-slide>
              <!-- Top Rated item end-->

              <!-- Top Rated item start-->
              <swiper-slide>
                <div class="product-item rounded bg-white">
                  <nuxt-link to="/product-details/">
                    <div class="img-wrap mb-2">
                      <img src="~/assets/images/best-sellers/3.jpg" alt="products" class="rounded-top">
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
              </swiper-slide>
              <!-- Top Rated item end-->

              <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
              <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            </swiper>

          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Top Rated Products / New Arrivals Area End -->
</template>

<script>

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 4,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1400: {
            slidesPerView: 6
          },
          1366: {
            slidesPerView: 5
          },
          1199: {
            slidesPerView: 5
          },
          992: {
            slidesPerView: 4
          },
          991: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 3
          },
          767: {
            slidesPerView: 3
          },
          766: {
            slidesPerView: 3
          },
          575: {
            slidesPerView: 2
          },
          400: {
            slidesPerView: 2
          },
          0: {
            slidesPerView: 1
          }
        }
      },
    }
  },
}
</script>

<style scoped>

</style>
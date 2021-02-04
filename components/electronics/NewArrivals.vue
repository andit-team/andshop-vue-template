<template>
  <!-- New Arrivals / Best Seller Area Start -->
  <section class="new-arrivals-area best-seller-area section-t-space bg-different">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title-wrap d-flex justify-content-between align-items-center mb-30">
            <div class="section-title">
              <h4>New Arrivals</h4>
              <p class="mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <nuxt-link class="color-red" to="/new-arrivals">View all <span class="ml-2"><i class="fas fa-angle-right"></i></span></nuxt-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="best-seller-slider-wrap d-flex flex-wrap justify-content-between">

            <swiper class="swiper" :options="swiperOption">

              <!-- Best Seller item start-->
              <swiper-slide >
                <div class="product-item rounded bg-white">
                  <nuxt-link to="/product-details">
                    <div class="img-wrap mb-2">
                      <img :src="require('@/assets/images/fashion/7.jpg')" alt="products" class="rounded-top">
                    </div>
                    <div class="product-content">
                      <p class="product-tags text-uppercase font-12">bath & body, football, tennis</p>
                      <p class="product-title font-bold">Fashion Sunglass</p>
                      <div class="rating_wrap mb-1">
                        <div class="rating">
                          <div class="product_rate" style="width:87%"></div>
                        </div>
                      </div>
                      <p>
                        <span class="price mr-1 text-muted">50$ - 40$</span>
                        <span class="special-tag badge bg-red white-color">Sale</span>
                      </p>
                    </div>
                  </nuxt-link>
                </div>
              </swiper-slide>
              <!-- Best Seller item end-->

              <!-- Best Seller item start-->
              <swiper-slide >
                <div class="product-item rounded bg-white">
                  <nuxt-link to="/product-details">
                    <div class="img-wrap mb-2">
                      <img :src="require('@/assets/images/fashion/8.jpg')" alt="products" class="rounded-top">
                    </div>
                    <div class="product-content">
                      <p class="product-tags text-uppercase font-12">bath & body, football, tennis</p>
                      <p class="product-title font-bold">Black Cap</p>
                      <div class="rating_wrap mb-1">
                        <div class="rating">
                          <div class="product_rate" style="width:87%"></div>
                        </div>
                      </div>
                      <p>
                        <span class="price mr-1 text-muted">50$ - 40$</span>
                        <span class="special-tag badge bg-red white-color">Sale</span>
                      </p>
                    </div>
                  </nuxt-link>
                </div>
              </swiper-slide>
              <!-- Best Seller item end-->

              <!-- Best Seller item start-->
              <swiper-slide >
                <div class="product-item rounded bg-white">
                  <nuxt-link to="/product-details">
                    <div class="img-wrap mb-2">
                      <img :src="require('@/assets/images/fashion/9.jpg')" alt="products" class="rounded-top">
                    </div>
                    <div class="product-content">
                      <p class="product-tags text-uppercase font-12">bath & body, football, tennis</p>
                      <p class="product-title font-bold">Jeans coat</p>
                      <div class="rating_wrap mb-1">
                        <div class="rating">
                          <div class="product_rate" style="width:87%"></div>
                        </div>
                      </div>
                      <p>
                        <span class="price mr-1 text-muted">50$ - 40$</span>
                        <span class="special-tag badge bg-red white-color">Sale</span>
                      </p>
                    </div>
                  </nuxt-link>
                </div>
              </swiper-slide>
              <!-- Best Seller item end-->

              <!-- Best Seller item start-->
              <swiper-slide >
                <div class="product-item rounded bg-white">
                  <nuxt-link to="/product-details">
                    <div class="img-wrap mb-2">
                      <img :src="require('@/assets/images/fashion/10.jpg')" alt="products" class="rounded-top">
                    </div>
                    <div class="product-content">
                      <p class="product-tags text-uppercase font-12">bath & body, football, tennis</p>
                      <p class="product-title font-bold">T-Shirt</p>
                      <div class="rating_wrap mb-1">
                        <div class="rating">
                          <div class="product_rate" style="width:87%"></div>
                        </div>
                      </div>
                      <p>
                        <span class="price mr-1 text-muted">50$ - 40$</span>
                        <span class="special-tag badge bg-red white-color">Sale</span>
                      </p>
                    </div>
                  </nuxt-link>
                </div>
              </swiper-slide>
              <!-- Best Seller item end-->

              <!-- Best Seller item start-->
              <swiper-slide >
                <div class="product-item rounded bg-white">
                  <nuxt-link to="/product-details">
                    <div class="img-wrap mb-2">
                      <img :src="require('@/assets/images/fashion/11.jpg')" alt="products" class="rounded-top">
                    </div>
                    <div class="product-content">
                      <p class="product-tags text-uppercase font-12">bath & body, football, tennis</p>
                      <p class="product-title font-bold">Coat</p>
                      <div class="rating_wrap mb-1">
                        <div class="rating">
                          <div class="product_rate" style="width:87%"></div>
                        </div>
                      </div>
                      <p>
                        <span class="price mr-1 text-muted">50$ - 40$</span>
                        <span class="special-tag badge bg-red white-color">Sale</span>
                      </p>
                    </div>
                  </nuxt-link>
                </div>
              </swiper-slide>
              <!-- Best Seller item end-->

              <!-- Best Seller item start-->
              <swiper-slide >
                <div class="product-item rounded bg-white">
                  <nuxt-link to="/product-details">
                    <div class="img-wrap mb-2">
                      <img :src="require('@/assets/images/fashion/12.jpg')" alt="products" class="rounded-top">
                    </div>
                    <div class="product-content">
                      <p class="product-tags text-uppercase font-12">bath & body, football, tennis</p>
                      <p class="product-title font-bold">Sunglass</p>
                      <div class="rating_wrap mb-1">
                        <div class="rating">
                          <div class="product_rate" style="width:87%"></div>
                        </div>
                      </div>
                      <p>
                        <span class="price mr-1 text-muted">50$ - 40$</span>
                        <span class="special-tag badge bg-red white-color">Sale</span>
                      </p>
                    </div>
                  </nuxt-link>
                </div>
              </swiper-slide>
              <!-- Best Seller item end-->

              <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
              <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            </swiper>

          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- New Arrivals Area End -->
</template>

<script>

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 30,
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
            slidesPerView: 5
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
        },
      },
    }
  },
}
</script>

<style scoped>
</style>
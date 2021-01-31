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
                  <nuxt-link to="/new-arrivals">
                    <div class="img-wrap mb-2">
                      <img :src="require('@/assets/images/best-sellers/1.jpg')" alt="products" class="rounded-top">
                    </div>
                    <div class="product-content">
                      <p class="product-tags text-uppercase font-12">bath & body, football, tennis</p>
                      <p class="product-title font-bold">Product Title</p>
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
                  <nuxt-link to="/new-arrivals">
                    <div class="img-wrap mb-2">
                      <img :src="require('@/assets/images/best-sellers/2.jpg')" alt="products" class="rounded-top">
                    </div>
                    <div class="product-content">
                      <p class="product-tags text-uppercase font-12">bath & body, football, tennis</p>
                      <p class="product-title font-bold">Product Title</p>
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
                  <nuxt-link to="/new-arrivals">
                    <div class="img-wrap mb-2">
                      <img :src="require('@/assets/images/best-sellers/3.jpg')" alt="products" class="rounded-top">
                    </div>
                    <div class="product-content">
                      <p class="product-tags text-uppercase font-12">bath & body, football, tennis</p>
                      <p class="product-title font-bold">Product Title</p>
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
                  <nuxt-link to="/new-arrivals">
                    <div class="img-wrap mb-2">
                      <img :src="require('@/assets/images/best-sellers/4.jpg')" alt="products" class="rounded-top">
                    </div>
                    <div class="product-content">
                      <p class="product-tags text-uppercase font-12">bath & body, football, tennis</p>
                      <p class="product-title font-bold">Product Title</p>
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
                  <nuxt-link to="/new-arrivals">
                    <div class="img-wrap mb-2">
                      <img :src="require('@/assets/images/best-sellers/5.jpg')" alt="products" class="rounded-top">
                    </div>
                    <div class="product-content">
                      <p class="product-tags text-uppercase font-12">bath & body, football, tennis</p>
                      <p class="product-title font-bold">Product Title</p>
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
                  <nuxt-link to="/new-arrivals">
                    <div class="img-wrap mb-2">
                      <img :src="require('@/assets/images/best-sellers/3.jpg')" alt="products" class="rounded-top">
                    </div>
                    <div class="product-content">
                      <p class="product-tags text-uppercase font-12">bath & body, football, tennis</p>
                      <p class="product-title font-bold">Product Title</p>
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
import {get_new_arrival_products} from "@/api/urls";

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
        },
      },
      api_base_url : this.$config.API_BASE_URL
    }
  },
  methods:{
    getNewArrivalProducts(){
      let self = this;
      let config = {
        headers: {'Content-Type': 'application/json'}
      };
      this.$axios.$get(this.api_base_url+get_new_arrival_products, config).then((res) => {
        if (res.error === false) {
          self.$store.commit('siteinfo/updateNewArrivalProducts',res.data);
        }
        else {
          console.log(res.msg)
        }
      }).catch((error) => {
        console.log(error);
      });
    }
  },
  computed:{
    newArrivalProducts(){
      return this.$store.state.siteinfo.newArrivalProducts;
    }
  },
  mounted() {
    if (this.newArrivalProducts.length<=0){
      this.getNewArrivalProducts();
    }
  }
}
</script>

<style scoped>

</style>

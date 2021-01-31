<template>
  <!-- Popular Categories Area Start -->
  <section class="popular-categories-area section-t-space section-b-40-space">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title-wrap d-flex justify-content-between align-items-center mb-30">
            <div class="section-title">
              <h4>Popular Categories</h4>
              <p class="mt-1">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">

        <!-- Popular category item start-->
        <div class="col-12 col-sm-12 col-md-6 col-lg-4">
          <div class="popular-categories-item rounded" :style="{ 'background-image': 'url(' + require('@/assets/images/categories/1.jpg') + ')' }">
            <nuxt-link to="/categories/_slug/" class="product-content">
              <p class="product-title font-bold heading-color">Product Title</p>
              <p class="product-quantity">35 products</p>
              <button class="text-capitalize d-flex align-items-center color-red font-bold font-14">Shop Now<i class="fas fa-angle-right ml-1 font-13"></i></button>
            </nuxt-link>
          </div>
        </div>
        <!-- Popular category item end-->

        <!-- Popular category item start-->
        <div class="col-12 col-sm-12 col-md-6 col-lg-4">
          <div class="popular-categories-item rounded" :style="{ 'background-image': 'url(' + require('@/assets/images/categories/2.jpg') + ')' }">
            <nuxt-link to="/categories/_slug/" class="product-content">
              <p class="product-title font-bold heading-color">Product Title</p>
              <p class="product-quantity">35 products</p>
              <button class="text-capitalize d-flex align-items-center color-red font-bold font-14">Shop Now<i class="fas fa-angle-right ml-1 font-13"></i></button>
            </nuxt-link>
          </div>
        </div>
        <!-- Popular category item end-->

        <!-- Popular category item start-->
        <div class="col-12 col-sm-12 col-md-6 col-lg-4">
          <div class="popular-categories-item rounded" :style="{ 'background-image': 'url(' + require('@/assets/images/categories/3.jpg') + ')' }">
            <nuxt-link to="/categories/_slug/" class="product-content">
              <p class="product-title font-bold heading-color">Product Title</p>
              <p class="product-quantity">35 products</p>
              <button class="text-capitalize d-flex align-items-center color-red font-bold font-14">Shop Now<i class="fas fa-angle-right ml-1 font-13"></i></button>
            </nuxt-link>
          </div>
        </div>
        <!-- Popular category item end-->

        <!-- Popular category item start-->
        <div class="col-12 col-sm-12 col-md-6 col-lg-4">
          <div class="popular-categories-item rounded" :style="{ 'background-image': 'url(' + require('@/assets/images/categories/4.jpg') + ')' }">
            <nuxt-link to="/categories/_slug/" class="product-content">
              <p class="product-title font-bold heading-color">Product Title</p>
              <p class="product-quantity">35 products</p>
              <button class="text-capitalize d-flex align-items-center color-red font-bold font-14">Shop Now<i class="fas fa-angle-right ml-1 font-13"></i></button>
            </nuxt-link>
          </div>
        </div>
        <!-- Popular category item end-->

        <!-- Popular category item start-->
        <div class="col-12 col-sm-12 col-md-6 col-lg-4">
          <div class="popular-categories-item rounded" :style="{ 'background-image': 'url(' + require('@/assets/images/categories/5.jpg') + ')' }">
            <nuxt-link to="/categories/_slug/" class="product-content">
              <p class="product-title font-bold heading-color">Product Title</p>
              <p class="product-quantity">35 products</p>
              <button class="text-capitalize d-flex align-items-center color-red font-bold font-14">Shop Now<i class="fas fa-angle-right ml-1 font-13"></i></button>
            </nuxt-link>
          </div>
        </div>
        <!-- Popular category item end-->

        <!-- Popular category item start-->
        <div class="col-12 col-sm-12 col-md-6 col-lg-4">
          <div class="popular-categories-item rounded" :style="{ 'background-image': 'url(' + require('@/assets/images/categories/6.jpg') + ')' }">
            <nuxt-link to="/categories/_slug/" class="product-content">
              <p class="product-title font-bold heading-color">Product Title</p>
              <p class="product-quantity">35 products</p>
              <button class="text-capitalize d-flex align-items-center color-red font-bold font-14">Shop Now<i class="fas fa-angle-right ml-1 font-13"></i></button>
            </nuxt-link>
          </div>
        </div>
        <!-- Popular category item end-->

      </div>
    </div>
  </section>
  <!-- Popular Categories Area End -->
</template>

<script>

export default {
  name: "PopularCategories",
  data(){
    return{
    }
  },

}
</script>

<style scoped>

</style>
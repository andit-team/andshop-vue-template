<template>
  <nuxt-link to="/search-results/right-sidebar" class="featured-product-item rounded d-flex align-items-center bg-white" style="min-height: 160px">
    <div class="img-wrap mr-2" style="width: 135px">
      <img :src="productItem.image" alt="products" class="rounded-left">
    </div>
    <div class="product-content">
      <p class="product-tags text-uppercase font-12">{{productItem.productCategory}}</p>
      <p class="product-title font-bold">{{productItem.shopName}}</p>
      <p>
        <span class="price mr-1 text-muted">{{productItem.priceRange}}</span>
      </p>

      <UpcomingCountdown date="February 17, 2027" class="rounded"></UpcomingCountdown>
    </div>
  </nuxt-link>
</template>

<script>

export default {
  name: "UpcomingProductItem",
  props: ['productItem', 'index'],
}
</script>
<template>
  <div class="flash-sale-item my-3">
    <nuxt-link to="/product-details">
      <div class="img-wrap mb-2">
        <img :src="flashItem.image" alt="products" class="rounded-top">
      </div>
      <div class="product-content">
        <h6>
          <span class="discounted-price mr-1 color-green">${{discountedPrice(flashItem)}}</span>
          <span class="price mr-1 text-muted" style="text-decoration: line-through">${{flashItem.price}}</span>
          <span class="discount mr-1 color-red">{{flashItem.discount}}% Off</span>
        </h6>
        <p class="product-title font-bold">{{flashItem.title}}</p>
        <div class="rating_wrap mb-1 d-flex align-items-center">
          <div class="given-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <span class="rating_num">(25)</span>
        </div>
        <div class="sold-quantity mb-1">
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p class="mt-1 font-bold">Sold: 0/40</p>
        </div>

      </div>
    </nuxt-link>
  </div>
</template>

<script>

export default {
  name: "FlashDealsItem",
  props: ['flashItem', 'index'],
  methods: {
    discountedPrice(flashItem) {
      const price = flashItem.price - (flashItem.price * flashItem.discount / 100)
      return price
    }
  }
}
</script>
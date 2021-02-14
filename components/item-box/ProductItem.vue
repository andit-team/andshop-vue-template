<template>
  <div class="product-item rounded bg-white">
    <div class="img-wrap mb-2">
      <img :src="productItem.image" alt="products" class="rounded-top">
      <div class="product_action_box w-100">
        <ul class="list_none pr_action_btn d-flex justify-content-center">
          <li class="add-to-cart"><nuxt-link to="/cart"><b-icon icon="cart-plus-fill"></b-icon></nuxt-link></li>
          <li><nuxt-link to="/my-account/wishlist"><b-icon icon="heart"></b-icon></nuxt-link></li>
          <li><nuxt-link to="/compare"><b-icon icon="arrow-repeat"></b-icon></nuxt-link></li>
          <li><nuxt-link to="/product-details"><b-icon icon="eye-fill"></b-icon></nuxt-link></li>
        </ul>
      </div>
    </div>
    <div class="product-content">
      <p class="product-tags text-uppercase font-12">{{productItem.tags}}</p>
      <p class="product-title font-bold mt-1"><nuxt-link to="/product-details">{{productItem.title}}</nuxt-link></p>
      <div class="rating_wrap">
        <div class="given-rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
      </div>
      <div class="product-price-box d-flex align-items-center">
        <span class="price mr-1 text-muted" style="text-decoration: line-through">${{productItem.price}}</span>
        <span class="discounted-price mr-1 color-red">${{discountedPrice(productItem)}}</span>
        <span class="special-tag bg-red white-color rounded font-12 px-2">{{productItem.offerSeal}}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProductItem",
  props: ['productItem', 'index'],
  methods: {
    discountedPrice(productItem) {
      const price = productItem.price - (productItem.price * productItem.discount / 100)
      return price
    }
  }
}
</script>
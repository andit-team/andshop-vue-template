<template>
  <div class="shop-box rounded">
    <nuxt-link to="/shops/shop-details">
      <div class="shop-img-wrap">
        <img :src="shopItem.image" alt="Shop Name">
      </div>
      <p class="shop-name">{{shopItem.title}}</p>
    </nuxt-link>
  </div>

</template>

<script>

export default {
  name: "ShopItem",
  props: ['shopItem', 'index'],
}
</script>
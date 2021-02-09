<template>
  <div class="logo-item">
    <nuxt-link to="/shops/1">
      <img :src="risingStarItem.image" alt="Shop Name">
    </nuxt-link>
  </div>
</template>

<script>

export default {
  name: "RisingStarItem",
  props: ['risingStarItem', 'index'],
}
</script>
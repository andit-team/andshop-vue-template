<template>
  <div class="popular-categories-item rounded" :style="{ 'background-image': 'url(' + categoryItem.image + ')' }">
    <nuxt-link to="/categories/furniture" class="product-content">
      <p class="product-title font-bold heading-color">{{categoryItem.title}}</p>
      <p class="product-quantity">{{categoryItem.quantity}} products</p>
      <button class="text-capitalize d-flex align-items-center color-red font-bold font-14">Shop Now<i class="fas fa-angle-right ml-1 font-13"></i></button>
    </nuxt-link>
  </div>
</template>

<script>

export default {
  name: "CategoryItem",
  props: ['categoryItem', 'index'],
}
</script>
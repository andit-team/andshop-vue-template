<template>

  <div>
    <!-- Breadcrumb Area Start -->
    <div class="breadcrumb-area bg-white">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent m-0 section-t-40-space section-b-40-space">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item active" aria-current="page">Flash Deals</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Area End -->

    <!-- Flash Deals Page Start -->
    <section class="flash-deals-page section-t-40-space section-b-40-space">
      <div class="container">
        <div class="row flash-deals-page-wrap">

          <!-- Flash sale item start-->
          <div v-for="(flashItem, index) in flashItems" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <FlashDealsItem :flashItem = 'flashItem' />
          </div>
          <!-- Flash sale item end-->

        </div>
      </div>
    </section>
    <!-- Flash Deals Page End -->
  </div>

</template>

<script>
import FlashDealsItem from '../../components/item-box/FlashDealsItem'
export default {
  name: "FlashDealsProducts",
  components: { 
    FlashDealsItem,
  },
  data() {
    return {
      flashDealExist : false,
      flashItems: [
        {
          "id": 1,
          "title": "Sunglass",
          "shop": "Sun Farm",
          "image": require('@/assets/images/fashion/1.jpg'),
          "price": "150.00",
          "discount": "10",
          "unit": "4",
        },
        {
          "id": 2,
          "title": "Shoe",
          "shop": "Sun Farm",
          "image": require('@/assets/images/fashion/2.jpg'),
          "price": "110.00",
          "discount": "7",
          "unit": "8",
        },
        {
          "id": 3,
          "title": "Modern Watch",
          "shop": "Sun Farm",
          "image": require('@/assets/images/fashion/3.jpg'),
          "price": "100.00",
          "discount": "10",
          "unit": "4",
        },
        {
          "id": 4,
          "title": "Wear Set",
          "shop": "Sun Farm",
          "image": require('@/assets/images/fashion/4.jpg'),
          "price": "80.00",
          "discount": "10",
          "unit": "4",
        },
        {
          "id": 5,
          "title": "Merun Bag",
          "shop": "Sun Farm",
          "image": require('@/assets/images/fashion/5.jpg'),
          "price": "150.00",
          "discount": "10",
          "unit": "4",
        },
        {
          "id": 6,
          "title": "Cloth Package",
          "shop": "Sun Farm",
          "image": require('@/assets/images/fashion/16.jpg'),
          "price": "150.00",
          "discount": "10",
          "unit": "4",
        },
        {
          "id": 7,
          "title": "Sunglass",
          "shop": "Sun Farm",
          "image": require('@/assets/images/fashion/6.jpg'),
          "price": "150.00",
          "discount": "10",
          "unit": "4",
        },
        {
          "id": 8,
          "title": "Shoe",
          "shop": "Sun Farm",
          "image": require('@/assets/images/fashion/7.jpg'),
          "price": "110.00",
          "discount": "7",
          "unit": "8",
        },
        {
          "id": 9,
          "title": "Modern Watch",
          "shop": "Sun Farm",
          "image": require('@/assets/images/fashion/8.jpg'),
          "price": "100.00",
          "discount": "10",
          "unit": "4",
        },
        {
          "id": 10,
          "title": "Wear Set",
          "shop": "Sun Farm",
          "image": require('@/assets/images/fashion/9.jpg'),
          "price": "80.00",
          "discount": "10",
          "unit": "4",
        },
        {
          "id": 11,
          "title": "Merun Bag",
          "shop": "Sun Farm",
          "image": require('@/assets/images/fashion/10.jpg'),
          "price": "150.00",
          "discount": "10",
          "unit": "4",
        },
        {
          "id": 12,
          "title": "Cloth Package",
          "shop": "Sun Farm",
          "image": require('@/assets/images/fashion/11.jpg'),
          "price": "150.00",
          "discount": "10",
          "unit": "4",
        },
        {
          "id": 13,
          "title": "Sunglass",
          "shop": "Sun Farm",
          "image": require('@/assets/images/fashion/12.jpg'),
          "price": "150.00",
          "discount": "10",
          "unit": "4",
        },
        {
          "id": 14,
          "title": "Shoe",
          "shop": "Sun Farm",
          "image": require('@/assets/images/fashion/13.jpg'),
          "price": "110.00",
          "discount": "7",
          "unit": "8",
        },
        {
          "id": 15,
          "title": "Modern Watch",
          "shop": "Sun Farm",
          "image": require('@/assets/images/fashion/14.jpg'),
          "price": "100.00",
          "discount": "10",
          "unit": "4",
        },
        {
          "id": 16,
          "title": "Wear Set",
          "shop": "Sun Farm",
          "image": require('@/assets/images/fashion/15.jpg'),
          "price": "80.00",
          "discount": "10",
          "unit": "4",
        },
        {
          "id": 17,
          "title": "Merun Bag",
          "shop": "Sun Farm",
          "image": require('@/assets/images/fashion/16.jpg'),
          "price": "150.00",
          "discount": "10",
          "unit": "4",
        },
        {
          "id": 18,
          "title": "Cloth Package",
          "shop": "Sun Farm",
          "image": require('@/assets/images/fashion/5.jpg'),
          "price": "150.00",
          "discount": "10",
          "unit": "4",
        },
      ]
    }
  },
  head() {
    return {
      title: 'Flash Deals Products'
    }
  },
}
</script>

<style scoped>

</style>
<template>
  <!-- Flash Deals Area Start -->
  <section class="flash-deals-area fashion-flash-deals-area section-t-space">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title-wrap d-flex justify-content-between align-items-center mb-30">
            <div class="section-title d-flex align-items-center">
              <h4>Flash Deals</h4>
              <span class="d-flex align-items-center ml-4">
                Ends in:<CountDown date="December 20, 2030" class="rounded ml-2"></CountDown>
              </span>
            </div>
            <nuxt-link to="/flash-deals" class="color-red font-bold">View all <span class="ml-2"><i class="fas fa-angle-right"></i></span></nuxt-link>
          </div>
        </div>
      </div>
      <div class="row flash-sale-slider-wrap m-0">

        <!-- Flash sale item start-->
        <div v-for="(flashItem, index) in flashItems" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
          <FlashDealsItem :flashItem = 'flashItem' />
        </div>
        <!-- Flash sale item end-->

      </div>
    </div>
  </section>
  <!-- Flash Deals section Area End -->
</template>

<script>
import FlashDealsItem from '../item-box/FlashDealsItem'

export default {
  name: "FurnitureFlashDeals",
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
          "image": require('@/assets/images/furniture/1.jpg'),
          "price": "150.00",
          "discount": "10",
        },
        {
          "id": 2,
          "title": "Shoe",
          "image": require('@/assets/images/furniture/2.jpg'),
          "price": "110.00",
          "discount": "7",
        },
        {
          "id": 3,
          "title": "Modern Watch",
          "image": require('@/assets/images/furniture/3.jpg'),
          "price": "100.00",
          "discount": "10",
        },
        {
          "id": 4,
          "title": "Wear Set",
          "image": require('@/assets/images/furniture/4.jpg'),
          "price": "80.00",
          "discount": "10",
        },
        {
          "id": 5,
          "title": "Merun Bag",
          "image": require('@/assets/images/furniture/10.jpg'),
          "price": "150.00",
          "discount": "10",
        },
        {
          "id": 6,
          "title": "Cloth Package",
          "image": require('@/assets/images/furniture/11.jpg'),
          "price": "150.00",
          "discount": "10",
        },
      ]
    }
  },
}
</script>

<style lang="scss">
.fashion-flash-deals-area {
  .timer {
    color: #fff;
    #demo {
      .single-counter-box {
        background-color: var(--red-color);
        padding: 5px 10px;
        border-radius: 0.25rem !important;
      }
    }
  }

}
</style>
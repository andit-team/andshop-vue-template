<template>
  <div>
    <div class="bg-white p-4">
      <div class="order-list-filter d-flex align-items-center">
        Show: <b-form-select v-model="selected" :options="options" class="ml-2"></b-form-select>
      </div>
      <div class="order-list-wrap">
        <div class="order-list-wrap-title d-flex justify-content-between">
          <div>
            <p><strong>Order</strong> <nuxt-link to="/my-account/my-orders/1" class="color-blue">#612885948115202</nuxt-link></p>
            <p class="font-14">Placed on 10 Jan 2021 14:29:39</p>
          </div>
          <nuxt-link to="/my-account/my-orders/1" class="theme-button small-button rounded">Manage</nuxt-link>
        </div>
        <ul class="list-unstyled">
          <li class="media">
            <img :src='require("@/assets/images/fashion/1.jpg")' class="mr-3" alt="product" style="height: 55px;">
            <div class="media-body d-flex justify-content-between">
              <div>
                <h6 class="mt-0 mb-1">Tops</h6>
                170ml Liquid Soap Refill
              </div>
              <p>Qty: 1</p>
              <button class="theme-button2 small-button rounded color-red">Cancelled</button>
            </div>
          </li>
        </ul>
      </div>
      <div class="order-list-wrap">
        <div class="order-list-wrap-title d-flex justify-content-between">
          <div>
            <p><strong>Order</strong> <nuxt-link to="/my-account/my-orders/2" class="color-blue">#612885948115202</nuxt-link></p>
            <p class="font-14">Placed on 10 Jan 2021 14:29:39</p>
          </div>
          <nuxt-link to="/my-account/my-orders/2" class="theme-button small-button rounded">Manage</nuxt-link>
        </div>
        <ul class="list-unstyled">
          <li class="media">
            <img :src='require("@/assets/images/fashion/2.jpg")' class="mr-3" alt="product" style="height: 55px;">
            <div class="media-body d-flex justify-content-between">
              <div>
                <h6 class="mt-0 mb-1">T-Shirt</h6>
                170ml Liquid Soap Refill
              </div>
              <p>Qty: 1</p>
              <button class="theme-button2 small-button rounded color-red">Cancelled</button>
            </div>
          </li>
          <li class="media">
            <img :src='require("@/assets/images/fashion/3.jpg")' class="mr-3" alt="product" style="height: 55px;">
            <div class="media-body d-flex justify-content-between">
              <div>
                <h6 class="mt-0 mb-1">Long Dress</h6>
                170ml Liquid Soap Refill
              </div>
              <p>Qty: 1</p>
              <button class="theme-button2 small-button rounded color-red">Cancelled</button>
            </div>
          </li>
        </ul>
      </div>
      <div class="order-list-wrap">
        <div class="order-list-wrap-title d-flex justify-content-between">
          <div>
            <p><strong>Order</strong> <nuxt-link to="/my-account/my-orders/1" class="color-blue">#612885948115202</nuxt-link></p>
            <p class="font-14">Placed on 10 Jan 2021 14:29:39</p>
          </div>
          <nuxt-link to="/my-account/my-orders/1" class="theme-button small-button rounded">Manage</nuxt-link>
        </div>
        <ul class="list-unstyled">
          <li class="media">
            <img :src='require("@/assets/images/fashion/4.jpg")' class="mr-3" alt="product" style="height: 55px;">
            <div class="media-body d-flex justify-content-between">
              <div>
                <h6 class="mt-0 mb-1">Coat</h6>
                170ml Liquid Soap Refill
              </div>
              <p>Qty: 1</p>
              <button class="theme-button2 small-button rounded color-red">Cancelled</button>
            </div>
          </li>
          <li class="media">
            <img :src='require("@/assets/images/fashion/5.jpg")' class="mr-3" alt="product" style="height: 55px;">
            <div class="media-body d-flex justify-content-between">
              <div>
                <h6 class="mt-0 mb-1">Tops</h6>
                170ml Liquid Soap Refill
              </div>
              <p>Qty: 1</p>
              <button class="theme-button2 small-button rounded color-red">Cancelled</button>
            </div>
          </li>
          <li class="media">
            <img :src='require("@/assets/images/fashion/6.jpg")' class="mr-3" alt="product" style="height: 55px;">
            <div class="media-body d-flex justify-content-between">
              <div>
                <h6 class="mt-0 mb-1">Shirt</h6>
                170ml Liquid Soap Refill
              </div>
              <p>Qty: 1</p>
              <button class="theme-button2 small-button rounded color-red">Cancelled</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'myOrders',
  layout: 'dashboard',
  data() {
    return {
      selected: null,
        options: [
          { value: null, text: 'All' },
          { value: 'pending', text: 'Pending'},
          { value: 'cancelled', text: 'Cancelled' },
        ]
    }
  }
}
</script>

<style>

</style>
<template>
  <div>
    <div class="order-list-filter d-flex align-items-center">
      Show: <b-form-select v-model="selected" :options="options" class="ml-2"></b-form-select>
    </div>
    <div class="order-list-wrap">
      <div class="order-list-wrap-title d-flex justify-content-between">
        <div>
          <p><strong>Order</strong> <nuxt-link to="/my-account/my-orders/1" class="color-blue">#612885948115202</nuxt-link></p>
          <p class="font-14">Placed on 10 Jan 2021 14:29:39</p>
        </div>
        <nuxt-link to="/my-account/my-orders/1" class="theme-button2 small-button rounded color-blue">Manage</nuxt-link>
      </div>
      <ul class="list-unstyled">
        <li class="media">
          <img :src='"@/assets/images/products/1.jpg"' class="mr-3" alt="product" style="height: 55px;">
          <div class="media-body d-flex justify-content-between">
            <div>
              <h6 class="mt-0 mb-1">Dettol Handwash Re-energize</h6>
              170ml Liquid Soap Refill
            </div>
            <p>Qty: 1</p>
            <button class="theme-button2 small-button rounded">Cancelled</button>
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
        <nuxt-link to="/my-account/my-orders/2" class="theme-button2 small-button rounded color-blue">Manage</nuxt-link>
      </div>
      <ul class="list-unstyled">
        <li class="media">
          <img :src='"@/assets/images/products/1.jpg"' class="mr-3" alt="product" style="height: 55px;">
          <div class="media-body d-flex justify-content-between">
            <div>
              <h6 class="mt-0 mb-1">Dettol Handwash Re-energize</h6>
              170ml Liquid Soap Refill
            </div>
            <p>Qty: 1</p>
            <button class="theme-button2 small-button rounded">Cancelled</button>
            <p>Delevered on 25 Dec 2021</p>
          </div>
        </li>
        <li class="media">
          <img :src='"@/assets/images/products/1.jpg"' class="mr-3" alt="product" style="height: 55px;">
          <div class="media-body d-flex justify-content-between">
            <div>
              <h6 class="mt-0 mb-1">Dettol Handwash Re-energize</h6>
              170ml Liquid Soap Refill
            </div>
            <p>Qty: 1</p>
            <button class="theme-button2 small-button rounded">Cancelled</button>
            <p>Delevered on 25 Dec 2021</p>
          </div>
        </li>
        <li class="media">
          <img :src='"@/assets/images/products/1.jpg"' class="mr-3" alt="product" style="height: 55px;">
          <div class="media-body d-flex justify-content-between">
            <div>
              <h6 class="mt-0 mb-1">Dettol Handwash Re-energize</h6>
              170ml Liquid Soap Refill
            </div>
            <p>Qty: 1</p>
            <button class="theme-button2 small-button rounded">Cancelled</button>
            <p>Delevered on 25 Dec 2021</p>
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
        <nuxt-link to="/my-account/my-orders/1" class="theme-button2 small-button rounded color-blue">Manage</nuxt-link>
      </div>
      <ul class="list-unstyled">
        <li class="media">
          <img :src='"@/assets/images/products/1.jpg"' class="mr-3" alt="product" style="height: 55px;">
          <div class="media-body d-flex justify-content-between">
            <div>
              <h6 class="mt-0 mb-1">Dettol Handwash Re-energize</h6>
              170ml Liquid Soap Refill
            </div>
            <p>Qty: 1</p>
            <button class="theme-button2 small-button rounded">Cancelled</button>
            <p>Delevered on 25 Dec 2021</p>
          </div>
        </li>
        <li class="media">
          <img :src='"@/assets/images/products/1.jpg"' class="mr-3" alt="product" style="height: 55px;">
          <div class="media-body d-flex justify-content-between">
            <div>
              <h6 class="mt-0 mb-1">Dettol Handwash Re-energize</h6>
              170ml Liquid Soap Refill
            </div>
            <p>Qty: 1</p>
            <button class="theme-button2 small-button rounded">Cancelled</button>
            <p>Delevered on 25 Dec 2021</p>
          </div>
        </li>
        <li class="media">
          <img :src='"@/assets/images/products/1.jpg"' class="mr-3" alt="product" style="height: 55px;">
          <div class="media-body d-flex justify-content-between">
            <div>
              <h6 class="mt-0 mb-1">Dettol Handwash Re-energize</h6>
              170ml Liquid Soap Refill
            </div>
            <p>Qty: 1</p>
            <button class="theme-button2 small-button rounded">Cancelled</button>
            <p>Delevered on 25 Dec 2021</p>
          </div>
        </li>
      </ul>
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
<template>
  <div class="notification-page">
    <h4 class="mb-3">Notifications</h4>

    <div id="notification-wrap">

      <b-alert class="border-0 notification-item p-3 rounded d-block" fade show dismissible><nuxt-link to="#">VIP Suction Magic Mobile Stand Pocket Size, 360 Degree Metal Flower Magic Suction Cup Mobile Phone Holder</nuxt-link></b-alert>
      <b-alert class="border-0 notification-item p-3 rounded d-block" fade show dismissible><nuxt-link to="#">VIP Suction Magic Mobile Stand Pocket Size, 360 Degree Metal Flower Magic Suction Cup Mobile Phone Holder</nuxt-link></b-alert>
      <b-alert class="border-0 notification-item p-3 rounded d-block" fade show dismissible><nuxt-link to="#">VIP Suction Magic Mobile Stand Pocket Size, 360 Degree Metal Flower Magic Suction Cup Mobile Phone Holder</nuxt-link></b-alert>
      <b-alert class="border-0 notification-item p-3 rounded d-block" fade show dismissible><nuxt-link to="#">VIP Suction Magic Mobile Stand Pocket Size, 360 Degree Metal Flower Magic Suction Cup Mobile Phone Holder</nuxt-link></b-alert>
      <b-alert class="border-0 notification-item p-3 rounded d-block" fade show dismissible><nuxt-link to="#">VIP Suction Magic Mobile Stand Pocket Size, 360 Degree Metal Flower Magic Suction Cup Mobile Phone Holder</nuxt-link></b-alert>
      <b-alert class="border-0 notification-item p-3 rounded d-block" fade show dismissible><nuxt-link to="#">VIP Suction Magic Mobile Stand Pocket Size, 360 Degree Metal Flower Magic Suction Cup Mobile Phone Holder</nuxt-link></b-alert>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="notification-wrap"
      class="justify-content-center mt-4"
    ></b-pagination>

  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      rows: 100,
      perPage: 10,
      currentPage: 1
    }
  }
}
</script>

<style>

</style>
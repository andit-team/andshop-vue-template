<template lang="html">
  <div class="full-page-loader loading-page" v-if="loading">
    <img :src="require('@/assets/images/preloader.svg')" alt="Loading...">
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }
</script>
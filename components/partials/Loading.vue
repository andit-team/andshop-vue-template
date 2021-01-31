<template lang="html">
  <div class="data-loader loading-page" v-if="loading">
    <img :src="require('@/assets/images/preloader.svg')" alt="Loading...">
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: true
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
<template>

  <section class="error-page">
    <div v-if="error.statusCode === 404" class="text-center mt-4 mb-4">
      <img :src='"@/assets/images/404.png"' alt="Not Found" class="img-fluid">
      <div>
        <button class="btn theme-button mt-3" @click.prevent="goHome">Go Back Home</button>
      </div>
    </div>
    <div v-if="error.statusCode === 403" class="text-center mt-4 mb-4">
      <h1>403</h1>
      <h2 class="my-3 headline ">Sorry, access denied</h2>
      <div>
        <button class="btn theme-button mt-3" @click.prevent="goHome">Go Back Home</button>
      </div>
    </div>
    <div v-if="error.statusCode === 500" class="text-center mt-4 mb-4">
      <h1>500</h1>
      <h2 class="my-3 headline ">Sorry, the server is down</h2>
      <div>
        <button class="btn theme-button mt-3" @click.prevent="goHome">Go Back Home</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'ErrorLayout',
  props: ['error'],
  methods: {
    goHome() {
      this.$router.push({
        path: '/'
      });
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 150px;
  line-height: 150px;
  font-weight: 700;
  color: #252932;
  text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px, rgba(61, 61, 61, 0.3) 3px 3px;
}
.error-page {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	min-height: 400px;
}
</style>
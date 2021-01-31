<template>
  <div>

    <nuxt id="body-content"/>

  </div>
</template>

<style>

</style>
<script>
  export default {
    name: 'ErrorLayout',

  head() {
    return {
      title: '404 - Andshop'
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
  },

}
  
</script>

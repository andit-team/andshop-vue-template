<template>
  <div>
    <FullPageLoader />

    <MenuBar1 />

    <nuxt id="body-content"/>
    <div class="tap-top top-cls" v-scroll-to="'#body-content'">
      <div>
        <i class="fa fa-angle-up"></i>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<style>

</style>
<script>
  export default {
    name: 'Public',

    head() {
      return {
        title: 'Andshop'
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
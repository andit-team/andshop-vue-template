<template>
  <div>
    <FullPageLoader />

    <MenuBar2 />

    <section class="dashboard-home-page bg-white section-t-space">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-4 col-lg-3">
            <DashboardLeftSide />
          </div>
          <div class="col-12 col-sm-12 col-md-8 col-lg-9">
            <!-- Put all content below whice placed in Right side of Dashboard -->
            <nuxt id="body-content" class="dashboard-right-content bg-different p-4" />
            <!-- Put all content below whice placed in Right side of Dashboard -->
          </div>
        </div>
      </div>
    </section>

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
    name: 'dashboard',

    head() {
      return {
        title: 'Andshop Customer Panel'
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
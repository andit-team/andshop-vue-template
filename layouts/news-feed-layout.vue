<template>
  <div>
    <MenuBar />

    <section class="dashboard-home-page section-t-space">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-4 col-lg-3">
              <!-- Left Menu Item List -->
            <div class="dashboard-menu-wrap feed-dashboard-menu-wrap bg-different pb-2 pt-4">

              <nav class="mb-3 dashboard-left-menu-list">
                <b-nav vertical>
                  <div class="left-menu-item"><b-nav-item to="/news-feed/"><img :src='"@/assets/images/all-icon/d-allpost.svg"' alt="Andshop">All posts</b-nav-item></div>
                  <div class="left-menu-item"><b-nav-item to="/news-feed/my-posts"><img :src='"@/assets/images/all-icon/d-my-post.svg"' alt="Andshop">My Posts</b-nav-item></div>
                  <div class="left-menu-item"><b-nav-item to="/news-feed/feeds-details"><img :src='"@/assets/images/all-icon/d-mypost.svg"' alt="Andshop">Single Feed</b-nav-item></div>
                </b-nav>
              </nav>

            </div>
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
    name: 'news-feed-layout',

  head() {
    return {
      title: 'News Feed'
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

<template>
  <div class="product-search-left-side blog-sidebar-wrap">

    <!-- Left side bar box start-->
    <div class="search-left-sidebar-box mb-4">
      <div id="blog_left_search"  class="left-sidebar-content">
        <div class="sidebar-widget search">
          <form class="search-form position-relative">
            <div class="form-row m-0">
              <div class="form-group col p-0">
                <input class="form-control rounded-left" name="search" placeholder="Search..." type="text">
              </div>
              <div class="form-group">
                <button @click.prevent class="search-button rounded-right"><i class="fa fa-search"></i></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Left side bar box end-->

    <!-- Left side bar box start-->
    <div class="search-left-sidebar-box mb-4">
      <b-navbar-toggle target="product_categories_collapse" class="left-sidebar-title text-uppercase w-100 mb-4 d-flex">
        <template #default="{ expanded }">
          <h6>Categories</h6>
          <span v-if="expanded"><i class="fas fa-angle-up"></i></span>
          <span v-else ><i class="fas fa-angle-down"></i></span>
        </template>

      </b-navbar-toggle>

      <b-collapse id="product_categories_collapse" visible class="left-sidebar-content">
        <ul>
          <li><nuxt-link to="/blog/">Fashion</nuxt-link></li>
          <li><nuxt-link to="/blog/no-sidebar">Furniture</nuxt-link></li>
          <li><nuxt-link to="/blog/right-sidebar">Hair care</nuxt-link></li>
          <li><nuxt-link to="/blog/Make up">Make Up</nuxt-link></li>
          <li><nuxt-link to="/blog/">Men's</nuxt-link></li>
          <li><nuxt-link to="/blog/no-sidebar">Women's</nuxt-link></li>
          <li><nuxt-link to="/blog/right-sidebar">Baby</nuxt-link></li>
          <li><nuxt-link to="/blog/Make up">Watch</nuxt-link></li>
          <li><nuxt-link to="/blog/">Make Up</nuxt-link></li>
          <li><nuxt-link to="/blog/no-sidebar">Bags</nuxt-link></li>
          <li><nuxt-link to="/blog/right-sidebar">Electronics</nuxt-link></li>
        </ul>
      </b-collapse>
    </div>
    <!-- Left side bar box end-->

    <!-- Left side bar box start-->
    <div class="search-left-sidebar-box mb-4">
      <b-navbar-toggle target="blog_left_recent_blog" class="left-sidebar-title text-uppercase w-100 mb-4 d-flex">
        <template #default="{ expanded }">
          <h6>Recent Blog</h6>
          <span v-if="expanded"><i class="fas fa-angle-up"></i></span>
          <span v-else ><i class="fas fa-angle-down"></i></span>
        </template>

      </b-navbar-toggle>

      <b-collapse id="blog_left_recent_blog" visible class="left-sidebar-content">
        <ul class="recent-blog">
          <li class="media">
            <nuxt-link to="/blog/Accent Furniture to Personalize Bedroom" class="mr-2">
              <img :src='"@/assets/images/blog/recent-post-1.jpg"' alt="Image">
            </nuxt-link>
            <div class="recent-blog-content">
              <nuxt-link to="/blog/Accent Furniture to Personalize Bedroom">You Can See The Electronic Best ProductsImage</nuxt-link>
              <span class="font-12">Jun 01, 2021</span>
            </div>
          </li>
          <li class="media">
            <nuxt-link to="/blog/Accent Furniture to Personalize Bedroom" class="mr-2">
              <img :src='"@/assets/images/blog/recent-post-2.jpg"' alt="Image">
            </nuxt-link>
            <div class="recent-blog-content">
              <nuxt-link to="/blog/Accent Furniture to Personalize Bedroom">Minimal Design Inspiration Hand WatchImage</nuxt-link>
              <span class="font-12">Mar 15, 2020</span>
            </div>
          </li>
          <li class="media">
            <nuxt-link to="/blog/Accent Furniture to Personalize Bedroom" class="mr-2">
              <img :src='"@/assets/images/blog/recent-post-3.jpg"' alt="Image">
            </nuxt-link>
            <div class="recent-blog-content">
              <nuxt-link to="/blog/Accent Furniture to Personalize Bedroom">Accent Furniture to Personalize Bedroom</nuxt-link>
              <span class="font-12">Feb 10, 2021</span>
            </div>
          </li>
        </ul>
      </b-collapse>
    </div>
    <!-- Left side bar box end-->

    <!-- Left side bar box start-->
    <div class="search-left-sidebar-box mb-4">
      <b-navbar-toggle target="blog_left_meta" class="left-sidebar-title text-uppercase w-100 mb-4 d-flex">
        <template #default="{ expanded }">
          <h6>Meta</h6>
          <span v-if="expanded"><i class="fas fa-angle-up"></i></span>
          <span v-else ><i class="fas fa-angle-down"></i></span>
        </template>

      </b-navbar-toggle>

      <b-collapse id="blog_left_meta" visible class="left-sidebar-content">
        <ul>
          <li><a href="javascript: void(0);">Log In</a></li>
          <li><a href="javascript: void(0);">Entries Feed</a></li>
          <li><a href="javascript: void(0);">Comments Feed</a></li>
          <li><a href="javascript: void(0);">Make Up</a></li>
          <li><a href="javascript: void(0);">Men's</a></li>
        </ul>
      </b-collapse>
    </div>
    <!-- Left side bar box end-->

    <!-- Left side bar box start-->
    <div class="search-left-sidebar-box mb-4">
      <b-navbar-toggle target="blog_left_tags" class="left-sidebar-title text-uppercase w-100 mb-4 d-flex">
        <template #default="{ expanded }">
          <h6>Tags</h6>
          <span v-if="expanded"><i class="fas fa-angle-up"></i></span>
          <span v-else ><i class="fas fa-angle-down"></i></span>
        </template>
      </b-navbar-toggle>

      <b-collapse id="blog_left_tags" visible class="left-sidebar-content">
        <div class="tags">
          <span class="active">Fitness</span>
          <span>Football</span>
          <span>Hair care</span>
          <span>Make Up</span>
          <span>Men's</span>
          <span>Hair care</span>
          <span>Football</span>
          <span>Hair care</span>
          <span>Make Up</span>
          <span>Men's</span>
          <span>Hair care</span>
        </div>
      </b-collapse>
    </div>
    <!-- Left side bar box end-->
  </div>
</template>

<script>
export default {
  name: 'BlogSidebar'

}
</script>
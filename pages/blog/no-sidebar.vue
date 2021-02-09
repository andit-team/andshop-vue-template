<template>
  <div>
    <!-- Breadcrumb Area Start -->
    <div class="breadcrumb-area bg-white">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent m-0 section-t-40-space section-b-40-space">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item"><nuxt-link to="/blog/">Blog</nuxt-link></li>
                <li class="breadcrumb-item active" aria-current="page">No Sidebar</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Area End -->

    <!-- Blog Leftsidebar Page Area Start -->
    <section class="blog-page blog-nosidebar-page section-t-space bg-white">
      <div class="container">
        <div class="row">

          <!-- Product Search Page Right Side-->
          <div class="col-12 col-md-12">

            <div class="d-flex flex-wrap product-row">

              <!-- Blog item start-->
              <div v-for="(blogItem, index) in blogItems" :key="index" class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 product-item-col">
                <BlogItem :blogItem ='blogItem' />
              </div>
              <!-- Blog item end-->

              <!-- Load more button-->
              <div class="col-12 d-block mt-4 text-center"><button class="theme-button rounded load-more-button">Load more</button></div>

            </div>

          </div>
          <!-- Product Search Page Right Side-->
        </div>
      </div>
    </section>
    <!--Blog Leftsidebar Page Area End -->
    
  </div>
</template>

<script>
import BlogItem from '../../components/item-box/BlogItem'

export default {
  name: "BlogNoSidebar",
  components: {
    BlogItem
  },
  head() {
    return {
      title: 'Blog'
    }
  },
  data() {
    return {
      blogItems: [
        {
          "id": 1,
          "image": require('@/assets/images/blog/blog-1.jpg'),
          "title": "Get Your Furniture Ready For The Summer",
          "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit autem.",
        },
        {
          "id": 2,
          "image": require('@/assets/images/blog/blog-2.jpg'),
          "title": "Get Your Furniture Ready For The Summer",
          "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit autem.",
        },
        {
          "id": 3,
          "image": require('@/assets/images/blog/blog-3.jpg'),
          "title": "Get Your Furniture Ready For The Summer",
          "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit autem.",
        },
        {
          "id": 4,
          "image": require('@/assets/images/blog/blog-4.jpg'),
          "title": "Get Your Furniture Ready For The Summer",
          "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit autem.",
        },
        {
          "id": 5,
          "image": require('@/assets/images/blog/blog-5.jpg'),
          "title": "Get Your Furniture Ready For The Summer",
          "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit autem.",
        },
        {
          "id": 6,
          "image": require('@/assets/images/blog/blog-6.jpg'),
          "title": "Get Your Furniture Ready For The Summer",
          "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit autem.",
        },
        {
          "id": 7,
          "image": require('@/assets/images/blog/blog-1.jpg'),
          "title": "Get Your Furniture Ready For The Summer",
          "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit autem.",
        },
        {
          "id": 8,
          "image": require('@/assets/images/blog/blog-2.jpg'),
          "title": "Get Your Furniture Ready For The Summer",
          "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit autem.",
        }
      ]
    }
  }
}
</script>
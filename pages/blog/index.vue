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
                <li class="breadcrumb-item active" aria-current="page">Left Sidebar</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Area End -->

    <!-- Blog Leftsidebar Page Area Start -->
    <section class="blog-page blog-leftsidebar-page section-t-space bg-white">
      <div class="container">
        <div class="row">
        
          <!-- Product Search Page Left Side-->
          <div class="col-12 col-md-3 col-lg-3">
            <div class="product-search-left-side blog-sidebar-wrap">

              <!-- Left side bar box start-->
              <div class="search-left-sidebar-box mb-4">
                <b-navbar-toggle target="blog_left_search" class="left-sidebar-title text-uppercase w-100 mb-4 d-flex">
                  <template #default="{ expanded }">
                    <h6>Search</h6>
                    <span v-if="expanded"><i class="fas fa-angle-up"></i></span>
                    <span v-else ><i class="fas fa-angle-down"></i></span>
                  </template>

                </b-navbar-toggle>

                <b-collapse id="blog_left_search" visible class="left-sidebar-content">
                <div class="sidebar-widget search">
                  <form class="search-form position-relative">
                    <div class="form-row m-0">
                      <div class="form-group col p-0">
                        <input class="form-control rounded-left" name="search" placeholder="Search..." type="text">
                      </div>
                      <div class="form-group">
                        <button class="search-button rounded-right"><i class="fa fa-search"></i></button>
                      </div>
                    </div>
                  </form>
                </div>
                </b-collapse>
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
                    <li><nuxt-link to="/search-results">Fashion</nuxt-link></li>
                    <li><nuxt-link to="/search-results">Furniture</nuxt-link></li>
                    <li><nuxt-link to="/search-results">Hair care</nuxt-link></li>
                    <li><nuxt-link to="/search-results">Make Up</nuxt-link></li>
                    <li><nuxt-link to="/search-results">Men's</nuxt-link></li>
                    <li><nuxt-link to="/search-results">Women's</nuxt-link></li>
                    <li><nuxt-link to="/search-results">Baby</nuxt-link></li>
                    <li><nuxt-link to="/search-results">Watch</nuxt-link></li>
                    <li><nuxt-link to="/search-results">Make Up</nuxt-link></li>
                    <li><nuxt-link to="/search-results">Bags</nuxt-link></li>
                    <li><nuxt-link to="/search-results">Electronics</nuxt-link></li>
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
                    <li><a>Log In</a></li>
                    <li><a>Entries Feed</a></li>
                    <li><a>Comments Feed</a></li>
                    <li><a>Make Up</a></li>
                    <li><a>Men's</a></li>
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
          </div>
          <!-- Product Search Page Left Side-->

          <!-- Product Search Page Right Side-->
          <div class="col-12 col-md-9">

            <div class="d-flex flex-wrap product-row">

              <!-- Blog item start-->
              <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 product-item-col">
                <div class="single-blog">
                  <div class="blog-img">
                    <nuxt-link to="/blog/Get Your Furniture Ready For The Summer">
                      <img :src='"@/assets/images/blog/blog-1.jpg"' alt="Image">
                    </nuxt-link>
                    <span>25 <br> Jun</span>
                  </div>
                  <div class="blog-content">
                    <ul>
                      <li><i class="far fa-user"></i><a>By Admin</a></li>
                    </ul>
                    <nuxt-link to="/blog/Get Your Furniture Ready For The Summer">
                      <h3>Get Your Furniture Ready For The Summer</h3>
                    </nuxt-link>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit autem.</p>
                    <nuxt-link to="/blog/Get Your Furniture Ready For The Summer" class="read-more">
                      Read More
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <!-- Blog item end-->

              <!-- Blog item start-->
              <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 product-item-col">
                <div class="single-blog">
                  <div class="blog-img">
                    <nuxt-link to="/blog/Get Your Furniture Ready For The Summer">
                      <img :src='"@/assets/images/blog/blog-2.jpg"' alt="Image">
                    </nuxt-link>
                    <span>25 <br> Jun</span>
                  </div>
                  <div class="blog-content">
                    <ul>
                      <li><i class="far fa-user"></i><a>By Admin</a></li>
                    </ul>
                    <nuxt-link to="/blog/Get Your Furniture Ready For The Summer">
                      <h3>Get Your Furniture Ready For The Summer</h3>
                    </nuxt-link>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit autem.</p>
                    <nuxt-link to="/blog/Get Your Furniture Ready For The Summer" class="read-more">
                      Read More
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <!-- Blog item end-->
              
              <!-- Blog item start-->
              <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 product-item-col">
                <div class="single-blog">
                  <div class="blog-img">
                    <nuxt-link to="/blog/Get Your Furniture Ready For The Summer">
                      <img :src='"@/assets/images/blog/blog-3.jpg"' alt="Image">
                    </nuxt-link>
                    <span>25 <br> Jun</span>
                  </div>
                  <div class="blog-content">
                    <ul>
                      <li><i class="far fa-user"></i><a>By Admin</a></li>
                    </ul>
                    <nuxt-link to="/blog/Get Your Furniture Ready For The Summer">
                      <h3>Get Your Furniture Ready For The Summer</h3>
                    </nuxt-link>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit autem.</p>
                    <nuxt-link to="/blog/Get Your Furniture Ready For The Summer" class="read-more">
                      Read More
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <!-- Blog item end-->

              <!-- Blog item start-->
              <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 product-item-col">
                <div class="single-blog">
                  <div class="blog-img">
                    <nuxt-link to="/blog/Get Your Furniture Ready For The Summer">
                      <img :src='"@/assets/images/blog/blog-4.jpg"' alt="Image">
                    </nuxt-link>
                    <span>25 <br> Jun</span>
                  </div>
                  <div class="blog-content">
                    <ul>
                      <li><i class="far fa-user"></i><a>By Admin</a></li>
                    </ul>
                    <nuxt-link to="/blog/Get Your Furniture Ready For The Summer">
                      <h3>Get Your Furniture Ready For The Summer</h3>
                    </nuxt-link>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit autem.</p>
                    <nuxt-link to="/blog/Get Your Furniture Ready For The Summer" class="read-more">
                      Read More
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <!-- Blog item end-->

              <!-- Blog item start-->
              <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 product-item-col">
                <div class="single-blog">
                  <div class="blog-img">
                    <nuxt-link to="/blog/Get Your Furniture Ready For The Summer">
                      <img :src='"@/assets/images/blog/blog-5.jpg"' alt="Image">
                    </nuxt-link>
                    <span>25 <br> Jun</span>
                  </div>
                  <div class="blog-content">
                    <ul>
                      <li><i class="far fa-user"></i><a>By Admin</a></li>
                    </ul>
                    <nuxt-link to="/blog/Get Your Furniture Ready For The Summer">
                      <h3>Get Your Furniture Ready For The Summer</h3>
                    </nuxt-link>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit autem.</p>
                    <nuxt-link to="/blog/Get Your Furniture Ready For The Summer" class="read-more">
                      Read More
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <!-- Blog item end-->
              
              <!-- Blog item start-->
              <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 product-item-col">
                <div class="single-blog">
                  <div class="blog-img">
                    <nuxt-link to="/blog/Get Your Furniture Ready For The Summer">
                      <img :src='"@/assets/images/blog/blog-6.jpg"' alt="Image">
                    </nuxt-link>
                    <span>25 <br> Jun</span>
                  </div>
                  <div class="blog-content">
                    <ul>
                      <li><i class="far fa-user"></i><a>By Admin</a></li>
                    </ul>
                    <nuxt-link to="/blog/Get Your Furniture Ready For The Summer">
                      <h3>Get Your Furniture Ready For The Summer</h3>
                    </nuxt-link>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit autem.</p>
                    <nuxt-link to="/blog/Get Your Furniture Ready For The Summer" class="read-more">
                      Read More
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <!-- Blog item end-->

              <!-- Load more button-->
              <div class="col-12 d-block mt-4 text-center"><Loading /></div>
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

export default {
  name: "BlogLeftSidebar",
  head() {
    return {
      title: 'Blog Leftsidebar'
    }
  }
}
</script>
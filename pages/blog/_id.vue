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
                <li class="breadcrumb-item active" aria-current="page">Blog Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Area End -->

    <!-- Blog Leftsidebar Page/ Blog Details Area Start -->
    <section class="blog-page blog-leftsidebar-page blog-details-page section-t-space bg-white">
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
              <div class="col product-item-col">
                <div class="single-blog">
                  <div class="blog-img">
                    <img :src='"@/assets/images/blog/blog-details-1.jpg"' alt="Image">
                    <span>25 <br> Jun</span>
                  </div>
                  <div class="blog-content mb-3">
                    <ul class="d-flex">
                      <li><a><i class="far fa-user"></i>By Admin</a></li>
                      <li><a><i class="far fa-comment-alt"></i>0 comments</a></li>
                    </ul>
                    <h2 class="mb-4">Get Your Furniture Ready For The Summer</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur commodo. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatem ex necessitatibus dolor placeat fuga deleniti doloremque? Ratione officia quia.<br><br>

                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                      laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                      beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut.
                    </p>

                    <blockquote class="d-flex">
                      <div class="quote-img mr-4"><img :src='"@/assets/images/all-icon/quotation.png"' alt="Image"></div>
                      <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation”</p>
                    </blockquote>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                      veritatis et quasi architecto.<br><br>

                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                      commodo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex necessitatibus dolor placeat fuga
                      deleniti doloremque? Ratione officia quia.<br><br>

                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut.
                    </p>

                  </div>

                  <div class="blog-tags mb-3">
                    <ul class="d-flex">
                      <h6 class="blog-tags-title mr-3">Tags</h6>
                      <li><a>Fashion</a></li>
                      <li><a>Furniture</a></li>
                      <li><a>Bag</a></li>
                      <li><a>Men's</a></li>
                    </ul>
                  </div>

                  <div class="leave-reply">
                    <form>
                      <h3 class="mb-3">Leave a Reply</h3>
                      <p class="mb-3">Your email address will not be published. Required fields are marked<span class="required-field color-red">*</span></p>

                      <div class="form-row">
                        <div class="form-group col">
                          <label>Name Name<span class="required-field color-red">*</span></label>
                          <input type="text" name="name" id="name" class="form-control">
                        </div>
                        <div class="form-group col">
                          <label>Email Email<span class="required-field color-red">*</span></label>
                          <input type="email" name="email" id="email" class="form-control">
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col">
                          <label>Your Message</label>
                          <textarea name="message" class="form-control" id="message" rows="6"></textarea>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group">
                          <button class="theme-button rounded">Post Comment</button>
                        </div>
                      </div>
                    </form>
                  </div>

                </div>
              </div>
              <!-- Blog item end-->
            </div>

          </div>
          <!-- Product Search Page Right Side-->
        </div>
      </div>
    </section>
    <!--Blog Leftsidebar Page/ Blog Details Area End -->
    
  </div>
</template>

<script>
export default {
  name: 'blogDetails'

}
</script>

<style>

</style>
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
            <BlogSidebar />
          </div>
          <!-- Product Search Page Left Side-->

          <!-- Product Search Page Right Side-->
          <div class="col-12 col-md-9">

            <div class="d-flex flex-wrap product-row">

              <!-- Blog item start-->
              <div class="col product-item-col">
                <div class="single-blog mb-0">
                  <div class="blog-img">
                    <img :src='require("@/assets/images/blog/blog-details-1.jpg")' alt="Image">
                    <span class="text-white">25 <br> Jun</span>
                  </div>
                  <div class="blog-content mb-3">
                    <ul class="d-flex">
                      <li><a href="javascript: void(0);"><i class="far fa-user"></i>By Admin</a></li>
                      <li><a href="javascript: void(0);"><i class="far fa-comment-alt"></i>0 comments</a></li>
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
                      <div class="quote-img mr-4"><img :src='require("@/assets/images/all-icon/quotation.png")' alt="Image" style="height: 50px;"></div>
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
                      <li><nuxt-link to="/fashion">Fashion</nuxt-link></li>
                      <li><nuxt-link to="/furniture">Furniture</nuxt-link></li>
                      <li><nuxt-link to="/fashion">Bag</nuxt-link></li>
                      <li><nuxt-link to="/fashion">Men's</nuxt-link></li>
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
import BlogSidebar from '../../components/partials/BlogSidebar'

export default {
  name: 'BlogDetails',
  components: {
    BlogSidebar
  },
  head() {
    return {
      title: 'Blog Details'
    }
  }
}
</script>
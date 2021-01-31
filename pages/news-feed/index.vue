<template>
  <div class="all-posts">

    <div class="wirte-post card mb-3">
      <form class="p-4">
        <div class="form-group">
          <textarea class="form-control" rows="3" placeholder="Write your post here"></textarea>
        </div>
        <div class="form-group">
          <div class="upload-img">
            <b-button class="customer-info-box theme-button2 mx-auto text-dark"> <img src="https://www.flaticon.com/svg/static/icons/svg/1040/1040241.svg" alt="upload" style="height:30px;"> Photo
              <b-form-file plain accept=".jpg, .jpeg, .png, .gif, .svg"></b-form-file>
            </b-button>
          </div>

        </div>

        <div class="form-group">
          <button type="button" class="theme-button rounded w-100 justify-content-center">Post</button>
        </div>
      </form>
    </div>

    <div class="card post-item">
      <div class="card-body">
        <nuxt-link to="/my-account/news-feed/1" class="card-text">দীর্ঘ ৫ মাস ১০ দিন পর হাতে পেয়ে অনেক আনন্দিত।</nuxt-link>
        <div class="post-img mt-4 mb-3"><nuxt-link to="/my-account/news-feed/1"><img :src='"@/assets/images/dashboard/feed.jpg"' alt="product" class="img-fluid"></nuxt-link></div>
      </div>
      <div class="card-footer d-flex justify-content-between align-items-center">
        <div class="media">
          <img :src='"@/assets/images/dashboard/user.png"' class="mr-3 rounded-circle" style="height: 35px" alt="user">
          <div class="media-body">
            <h6 class="mt-0">Suraiya Aysha</h6>
            <p class="font-14">about 3 hours ago</p>
          </div>
        </div>
        <div class="feed-buttons position-relative">
          <button v-if="favorite" class="feed-btn"><i class="fas fa-heart"></i>10</button>
          <button v-else class="feed-btn"><i class="far fa-heart"></i>10</button>
          <nuxt-link to="/my-account/news-feed/11" class="feed-btn"><i class="fas fa-comment-alt"></i>1</nuxt-link>
          <button v-b-toggle.share_post class="feed-btn"><i class="fas fa-share-alt"></i>Share</button>
        
          <b-collapse id="share_post">
            <div class="d-flex share-inner"> <div v-b-toggle.share_post class="cross-btn">x</div>
              <div class="share-url p-2">desiered url here..</div>
              <button class="theme-button small-button rounded ml-2">Copy</button>
              <button class="theme-button small-button rounded ml-2">Chat</button>
            </div>
          </b-collapse>

        </div>
      </div>
    </div>
    <div class="card post-item">
      <div class="card-body">
        <nuxt-link to="/my-account/news-feed/1" class="card-text">দীর্ঘ ৫ মাস ১০ দিন পর হাতে পেয়ে অনেক আনন্দিত।</nuxt-link>
        <div class="post-img mt-4 mb-3"><nuxt-link to="/my-account/news-feed/1"><img :src='"@/assets/images/dashboard/feed.jpg"' alt="product" class="img-fluid"></nuxt-link></div>
      </div>
      <div class="card-footer d-flex justify-content-between align-items-center">
        <div class="media">
          <img :src='"@/assets/images/dashboard/user.png"' class="mr-3 rounded-circle" style="height: 35px" alt="user">
          <div class="media-body">
            <h6 class="mt-0">Suraiya Aysha</h6>
            <p class="font-14">about 3 hours ago</p>
          </div>
        </div>
        <div class="feed-buttons position-relative">
          <button v-if="favorite" class="feed-btn"><i class="fas fa-heart"></i>10</button>
          <button v-else class="feed-btn"><i class="far fa-heart"></i>10</button>
          <nuxt-link to="/my-account/news-feed/11" class="feed-btn"><i class="fas fa-comment-alt"></i>1</nuxt-link>
          <button v-b-toggle.share_post class="feed-btn"><i class="fas fa-share-alt"></i>Share</button>
        
          <b-collapse id="share_post">
            <div class="d-flex share-inner"> <div v-b-toggle.share_post class="cross-btn">x</div>
              <div class="share-url p-2">desiered url here..</div>
              <button class="theme-button small-button rounded ml-2">Copy</button>
              <button class="theme-button small-button rounded ml-2">Chat</button>
            </div>
          </b-collapse>

        </div>
      </div>
    </div>
    <div class="card post-item">
      <div class="card-body">
        <nuxt-link to="/my-account/news-feed/1" class="card-text">দীর্ঘ ৫ মাস ১০ দিন পর হাতে পেয়ে অনেক আনন্দিত।</nuxt-link>
        <div class="post-img mt-4 mb-3"><nuxt-link to="/my-account/news-feed/1"><img :src='"@/assets/images/dashboard/feed.jpg"' alt="product" class="img-fluid"></nuxt-link></div>
      </div>
      <div class="card-footer d-flex justify-content-between align-items-center">
        <div class="media">
          <img :src='"@/assets/images/dashboard/user.png"' class="mr-3 rounded-circle" style="height: 35px" alt="user">
          <div class="media-body">
            <h6 class="mt-0">Suraiya Aysha</h6>
            <p class="font-14">about 3 hours ago</p>
          </div>
        </div>
        <div class="feed-buttons position-relative">
          <button v-if="favorite" class="feed-btn"><i class="fas fa-heart"></i>10</button>
          <button v-else class="feed-btn"><i class="far fa-heart"></i>10</button>
          <nuxt-link to="/my-account/news-feed/11" class="feed-btn"><i class="fas fa-comment-alt"></i>1</nuxt-link>
          <button v-b-toggle.share_post class="feed-btn"><i class="fas fa-share-alt"></i>Share</button>
        
          <b-collapse id="share_post">
            <div class="d-flex share-inner"> <div v-b-toggle.share_post class="cross-btn">x</div>
              <div class="share-url p-2">desiered url here..</div>
              <button class="theme-button small-button rounded ml-2">Copy</button>
              <button class="theme-button small-button rounded ml-2">Chat</button>
            </div>
          </b-collapse>

        </div>
      </div>
    </div>
    <div class="card post-item">
      <div class="card-body">
        <nuxt-link to="/my-account/news-feed/1" class="card-text">দীর্ঘ ৫ মাস ১০ দিন পর হাতে পেয়ে অনেক আনন্দিত।</nuxt-link>
        <div class="post-img mt-4 mb-3"><nuxt-link to="/my-account/news-feed/1"><img :src='"@/assets/images/dashboard/feed.jpg"' alt="product" class="img-fluid"></nuxt-link></div>
      </div>
      <div class="card-footer d-flex justify-content-between align-items-center">
        <div class="media">
          <img :src='"@/assets/images/dashboard/user.png"' class="mr-3 rounded-circle" style="height: 35px" alt="user">
          <div class="media-body">
            <h6 class="mt-0">Suraiya Aysha</h6>
            <p class="font-14">about 3 hours ago</p>
          </div>
        </div>
        <div class="feed-buttons position-relative">
          <button v-if="favorite" class="feed-btn"><i class="fas fa-heart"></i>10</button>
          <button v-else class="feed-btn"><i class="far fa-heart"></i>10</button>
          <nuxt-link to="/my-account/news-feed/11" class="feed-btn"><i class="fas fa-comment-alt"></i>1</nuxt-link>
          <button v-b-toggle.share_post class="feed-btn"><i class="fas fa-share-alt"></i>Share</button>
        
          <b-collapse id="share_post">
            <div class="d-flex share-inner"> <div v-b-toggle.share_post class="cross-btn">x</div>
              <div class="share-url p-2">desiered url here..</div>
              <button class="theme-button small-button rounded ml-2">Copy</button>
              <button class="theme-button small-button rounded ml-2">Chat</button>
            </div>
          </b-collapse>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'news-feed-layout',
  data() {
    return {
      favorite: false,
    }
  },
}
</script>

<style>

</style>
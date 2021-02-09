<template>
  <div class="all-posts">

    <div class="card post-item">
      <div class="card-body">
        <p class="card-text">Consectetur adipisicing elit. Error vitae iure mollitia.</p>
        <div class="post-img mt-4 mb-3"><div class="feed-details-img-wrap"><img :src='"@/assets/images/electronics/1.jpg"' alt="product" class="img-fluid"></div></div>
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
          <nuxt-link to="/news-feed/11" class="feed-btn"><i class="fas fa-comment-alt"></i>1</nuxt-link>
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

    <div class="post-comment-area p-3 mt-4">
      <div class="post-comment-item media mt-3">
        <img :src='"@/assets/images/dashboard/user.png"' class="mr-3 rounded-circle" style="height: 35px" alt="user">
        <div class="media-body">
          <div class="comment-inner bg-3 p-3 rounded">
            <h6 class="mt-0">Suraiya Aysha</h6>
            <p class="font-14 pt-2">Sit amet consectetur adipisicing elit. Et, autem.Nulla enim nobis illum iste laborum, explicabo sint sit dolor sunt magnam.</p>
          </div>
          <p class="font-12 pt-2">about 3 hours ago</p>
        </div>
      </div>
      <div class="post-comment-item media mt-3">
        <img :src='"@/assets/images/dashboard/user.png"' class="mr-3 rounded-circle" style="height: 35px" alt="user">
        <div class="media-body">
          <div class="comment-inner bg-3 p-3 rounded">
            <h6 class="mt-0">Suraiya Aysha</h6>
            <p class="font-14 pt-2">Ipsum dolor sit, amet consectetur adipisicing elit. Consectetur sapiente eaque repellendus odit, dolorem beatae voluptatibus praesentium voluptatem cumque ut.</p>
          </div>
          <p class="font-12 pt-2">about 3 hours ago</p>
        </div>
      </div>
      <div class="post-comment-item media mt-3">
        <img :src='"@/assets/images/dashboard/user.png"' class="mr-3 rounded-circle" style="height: 35px" alt="user">
        <div class="media-body">
          <div class="comment-inner bg-3 p-3 rounded">
            <h6 class="mt-0">Suraiya Aysha</h6>
            <p class="font-14 pt-2">Ariatur quos veritatis assumenda temporibus, omnis doloribus tenetur fuga corporis quaerat illum labore nostrum repellat magnam saepe dolore error amet. Voluptate omnis harum adipisci quo inventore, tenetur doloremque, ipsa sapiente esse praesentium aspernatur voluptas quas hic nihil quae? Laboriosam, exercitationem?</p>
          </div>
          <p class="font-12 pt-2">about 3 hours ago</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'news-feed-layout',
  name: 'NewsFeedsDetails',
    head() {
    return {
      title: 'News Feeds Details'
    }
  },
  data() {
    return {
      favorite: false
    }
  }
}
</script>

<style>

</style>
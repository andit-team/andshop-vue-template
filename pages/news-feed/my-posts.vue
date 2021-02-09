<template>
  <div class="all-posts">

    <div class="card post-item">
      <div class="card-body">
        <nuxt-link to="/news-feed/1" class="card-text">Consectetur adipisicing elit. Error vitae iure mollitia.</nuxt-link>
        <div class="post-img mt-4 mb-3"><nuxt-link to="/news-feed/1"><img :src='"@/assets/images/electronics/1.jpg"' alt="product" class="img-fluid"></nuxt-link></div>
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
          <button class="feed-btn theme-button small-button rounded">Edit</button>
          <button class="feed-btn theme-button small-button rounded">Delete</button>
        </div>
      </div>
    </div>
    <div class="card post-item">
      <div class="card-body">
        <nuxt-link to="/news-feed/1" class="card-text">Eos numquam nesciunt rerum quia veniam saepe laboriosam nisi, similique sed.</nuxt-link>
        <div class="post-img mt-4 mb-3"><nuxt-link to="/news-feed/1"><img :src='"@/assets/images/electronics/4.jpg"' alt="product" class="img-fluid"></nuxt-link></div>
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
          <button class="feed-btn theme-button small-button rounded">Edit</button>
          <button class="feed-btn theme-button small-button rounded">Delete</button>
        </div>
      </div>
    </div>
    <div class="card post-item">
      <div class="card-body">
        <nuxt-link to="/news-feed/1" class="card-text">Sit amet consectetur adipisicing elit. Et, autem.</nuxt-link>
        <div class="post-img mt-4 mb-3"><nuxt-link to="/news-feed/1"><img :src='"@/assets/images/furniture/2.jpg"' alt="product" class="img-fluid"></nuxt-link></div>
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
          <button class="feed-btn theme-button small-button rounded">Edit</button>
          <button class="feed-btn theme-button small-button rounded">Delete</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'news-feed-layout',
  name: 'MyPosts',
  head() {
    return {
      title: 'My Posts'
    }
  }
}
</script>
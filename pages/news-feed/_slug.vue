<template>
  <div class="all-posts">

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

    <div class="post-comment-area p-3 mt-4">
      <div class="post-comment-item media mt-3">
        <img :src='"@/assets/images/dashboard/user.png"' class="mr-3 rounded-circle" style="height: 35px" alt="user">
        <div class="media-body">
          <div class="comment-inner bg-3 p-3 rounded">
            <h6 class="mt-0">Suraiya Aysha</h6>
            <p class="font-14 pt-2">EVL448642925..ফোন,,,,??? EVL641735632 ফ্রিজ,,,??? ভণ্ডামির একটা লিমিট আছে কিন্তু আপনাদেন তা নেই,,,,৭ থেকে ৮ মাস হচ্ছে কিন্তু রিফান টাকাটা পাচ্ছিনা,,,মনে রাখবেন মানুষের এই হয়রানি করে আপনি জীবনে কোনোদিন সান্তি ছায়া দেখতে পাবেন না,,, এবং মৃত্যু হলেও না,,,, মানুষের হয়রানি আপনারা খেলা মনে করেন সেই সেলিবেটি রাসেল ভাই ????????</p>
          </div>
          <p class="font-12 pt-2">about 3 hours ago</p>
        </div>
      </div>
      <div class="post-comment-item media mt-3">
        <img :src='"@/assets/images/dashboard/user.png"' class="mr-3 rounded-circle" style="height: 35px" alt="user">
        <div class="media-body">
          <div class="comment-inner bg-3 p-3 rounded">
            <h6 class="mt-0">Suraiya Aysha</h6>
            <p class="font-14 pt-2">EVL448642925..ফোন,,,,??? EVL641735632 ফ্রিজ,,,??? ভণ্ডামির একটা লিমিট আছে কিন্তু আপনাদেন তা নেই,,,,৭ থেকে ৮ মাস হচ্ছে কিন্তু রিফান টাকাটা পাচ্ছিনা,,,মনে রাখবেন মানুষের এই হয়রানি করে আপনি জীবনে কোনোদিন সান্তি ছায়া দেখতে পাবেন না,,, এবং মৃত্যু হলেও না,,,, মানুষের হয়রানি আপনারা খেলা মনে করেন সেই সেলিবেটি রাসেল ভাই ????????</p>
          </div>
          <p class="font-12 pt-2">about 3 hours ago</p>
        </div>
      </div>
      <div class="post-comment-item media mt-3">
        <img :src='"@/assets/images/dashboard/user.png"' class="mr-3 rounded-circle" style="height: 35px" alt="user">
        <div class="media-body">
          <div class="comment-inner bg-3 p-3 rounded">
            <h6 class="mt-0">Suraiya Aysha</h6>
            <p class="font-14 pt-2">EVL448642925..ফোন,,,,??? EVL641735632 ফ্রিজ,,,??? ভণ্ডামির একটা লিমিট আছে কিন্তু আপনাদেন তা নেই,,,,৭ থেকে ৮ মাস হচ্ছে কিন্তু রিফান টাকাটা পাচ্ছিনা,,,মনে রাখবেন মানুষের এই হয়রানি করে আপনি জীবনে কোনোদিন সান্তি ছায়া দেখতে পাবেন না,,, এবং মৃত্যু হলেও না,,,, মানুষের হয়রানি আপনারা খেলা মনে করেন সেই সেলিবেটি রাসেল ভাই ????????</p>
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
  data() {
    return {
      favorite: false
    }
  }
}
</script>

<style>

</style>
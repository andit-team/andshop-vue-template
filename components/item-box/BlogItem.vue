<template>
  <div class="single-blog">
    <div class="blog-img">
      <nuxt-link to="/blog/Get Your Furniture Ready For The Summer">
        <img :src="blogItem.image" alt="Image">
      </nuxt-link>
      <span class="font-14 text-white">25 <br> Jun</span>
    </div>
    <div class="blog-content">
      <ul>
        <li><i class="far fa-user"></i><a>By Admin</a></li>
      </ul>
      <nuxt-link to="/blog/Get Your Furniture Ready For The Summer">
        <h3>{{blogItem.title}}</h3>
      </nuxt-link>
      <p>{{blogItem.description}}</p>
      <nuxt-link to="/blog/Get Your Furniture Ready For The Summer" class="read-more">
        Read More
      </nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "BlogItem",
  props: ['blogItem', 'index'],
}
</script>
<template>
  <div class="product_search_form rounded_input">
    <form @submit.prevent="searchProduct">
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="custom_select">
            <select class="first_null" v-model="productCategory">
              <option value="all">All Category</option>
              <option value="Dresses">Dresses</option>
              <option value="Shirt-Tops">Shirt &amp; Tops</option>
              <option value="T-Shirt">T-Shirt</option>
              <option value="Pents">Pents</option>
              <option value="Jeans">Jeans</option>
            </select>
          </div>
        </div>

        <input class="form-control" placeholder="I'm searching for..." required type="text" v-model="searchQuery">
        <button type="submit" class="search_btn2"><i class="fa fa-search"></i></button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ProductSearch",
  data(){
    return {
      productCategory : 'all',
      searchQuery: ''
    }
  },
  methods: {
    searchProduct(){
      this.$router.push('/search-results?category='+this.productCategory+'&query='+this.searchQuery)

    }
  }
}
</script>

<style scoped>
</style>

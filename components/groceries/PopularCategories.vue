<template>
  <!-- Popular Categories Area Start -->
  <section class="popular-categories-area section-t-space section-b-40-space">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title-wrap d-flex justify-content-between align-items-center mb-30">
            <div class="section-title">
              <h4>Popular Categories</h4>
              <p class="mt-1">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">

        <!-- Popular category item start-->
        <div v-for="(categoryItem, index) in categoryItems" :key="index" class="col-12 col-sm-12 col-md-6 col-lg-4">
         <CategoryItem :categoryItem="categoryItem" />
        </div>
        <!-- Popular category item end-->

      </div>
    </div>
  </section>
  <!-- Popular Categories Area End -->
</template>

<script>
import CategoryItem from '../item-box/CategoryItem'
export default {
  name: "GroceriesPopularCategories",
  components: {
    CategoryItem
  },
  data(){
    return{
      categoryItems: [
        {
          "id": 1,
          "title": "Lorem ipsum category",
          "image": require('@/assets/images/groceries/categories/1.jpg'),
          "quantity": 35,
        },
        {
          "id": 2,
          "title": "Psum dolor sit category",
          "image": require('@/assets/images/groceries/categories/2.jpg'),
          "quantity": 35,
        },
        {
          "id": 3,
          "title": "Consectetur adipisicing",
          "image": require('@/assets/images/groceries/categories/3.jpg'),
          "quantity": 35,
        },
        {
          "id": 4,
          "title": "Psum dolor sit category",
          "image": require('@/assets/images/groceries/categories/4.jpg'),
          "quantity": 35,
        },
        {
          "id": 5,
          "title": "Consectetur adipisicing",
          "image": require('@/assets/images/groceries/categories/5.jpg'),
          "quantity": 35,
        },
        {
          "id": 6,
          "title": "Lorem ipsum category",
          "image": require('@/assets/images/groceries/categories/6.jpg'),
          "quantity": 35,
        }
      ]
    }
  },

}
</script>

<style scoped>

</style>
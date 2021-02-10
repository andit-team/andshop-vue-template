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
                <li class="breadcrumb-item"><nuxt-link to="/new-arrivals">Product</nuxt-link></li>
                <li class="breadcrumb-item active" aria-current="page">Product Search</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Area End -->

    <!-- Product Search Page Area Start -->
    <section class="product-search-page best-seller-area section-t-space bg-white">
      <div class="container">
        <div class="row">

          <!-- Product Search Page Left Side-->
          <div class="col-12 col-md-9">

            <!-- Sort Bar Start-->
            <div class="search-page-sort-bar mb-4 py-2 px-4 d-flex justify-content-between align-items-center bg-different">
              <p>Showing result 1 of 5</p>
              <form class="form-inline">
                <div class="form-group">
                  <label for="sort_bar">Sort By:</label>
                  <select class="form-control" id="sort_bar">
                    <option selected>Default sort</option>
                    <option>Low to high</option>
                    <option>High to low</option>
                    <option>New</option>
                  </select>
                </div>
              </form>
            </div>
            <!-- Sort Bar End-->

            <div>

              <div class="best-seller-items-wrap d-flex flex-wrap product-row">

                <!-- Best Seller item start-->
                <div v-for="(productItem, index) in productItems" :key="index" class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 product-item-col">
                  <ProductItem :productItem ='productItem' />
                </div>
                <!-- Best Seller item end-->

                <!-- Load more button-->
                <div class="col-12 d-block mt-4 text-center"><button class="theme-button rounded load-more-button">Load more</button></div>

              </div>
              
            </div>

          </div>
          <!-- Product Search Page Left Side-->
          
          <!-- Product Search Page Right Side-->
          <div class="col-12 col-md-3 col-lg-3">
            <ProductPageSidebar />
          </div>
          <!-- Product Search Page Right Side-->

        </div>
      </div>
    </section>
    <!-- Product Search Page Area End -->

    <PaymentMethods/>
    
  </div>
</template>

<script>
import ProductItem from '../../components/item-box/ProductItem'
import ProductPageSidebar from '../../components/partials/ProductPageSidebar'
import PaymentMethods from '../../components/partials/PaymentMethods'

export default {
  name: "SearchResultsPage",
  components: {
    ProductItem,
    ProductPageSidebar,
    PaymentMethods
  },
  head() {
    return {
      title: 'Products'
    }
  },

  data() {
    return {
      searchCategory: this.$route.query.category,
      searchQuery: this.$route.query.query,
      productItems: [
        {
          "id": 1,
          "title": "Sunglass",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/fashion/1.jpg'),
          "price": "150.00",
          "discount": "10",
          "priceRange": "150.00",
          "offerSeal": "Sale"
        },
        {
          "id": 2,
          "title": "Fashion Sunglass",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/fashion/2.jpg'),
          "price": "110.00",
          "discount": "7",
          "priceRange": "150.00",
          "offerSeal": "New"
        },
        {
          "id": 3,
          "title": "Winter coat",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/fashion/3.jpg'),
          "price": "100.00",
          "discount": "10",
          "priceRange": "150.00",
          "offerSeal": "Sale"
        },
        {
          "id": 4,
          "title": "Tops",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/fashion/4.jpg'),
          "price": "80.00",
          "discount": "10",
          "priceRange": "150.00",
          "offerSeal": "Hot"
        },
        {
          "id": 5,
          "title": "T-Shirt",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/fashion/5.jpg'),
          "price": "150.00",
          "discount": "10",
          "priceRange": "150.00",
          "offerSeal": "Sale"
        },
        {
          "id": 6,
          "title": "Long Coat",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/fashion/6.jpg'),
          "price": "150.00",
          "discount": "10",
          "priceRange": "150.00",
          "offerSeal": "New"
        },
        {
          "id": 7,
          "title": "Tops",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/fashion/7.jpg'),
          "price": "150.00",
          "discount": "10",
          "priceRange": "150.00",
          "offerSeal": "Sale"
        },
        {
          "id": 8,
          "title": "Sunglass",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/fashion/8.jpg'),
          "price": "150.00",
          "discount": "10",
          "priceRange": "150.00",
          "offerSeal": "Sale"
        },
        {
          "id": 9,
          "title": "Fashion Sunglass",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/fashion/9.jpg'),
          "price": "110.00",
          "discount": "7",
          "priceRange": "150.00",
          "offerSeal": "New"
        },
        {
          "id": 10,
          "title": "Winter coat",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/fashion/10.jpg'),
          "price": "100.00",
          "discount": "10",
          "priceRange": "150.00",
          "offerSeal": "Sale"
        },
        {
          "id": 11,
          "title": "Tops",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/fashion/11.jpg'),
          "price": "80.00",
          "discount": "10",
          "priceRange": "150.00",
          "offerSeal": "Hot"
        },
        {
          "id": 12,
          "title": "T-Shirt",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/fashion/12.jpg'),
          "price": "150.00",
          "discount": "10",
          "priceRange": "150.00",
          "offerSeal": "Sale"
        },
        {
          "id": 13,
          "title": "Long Coat",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/fashion/13.jpg'),
          "price": "150.00",
          "discount": "10",
          "priceRange": "150.00",
          "offerSeal": "New"
        },
        {
          "id": 14,
          "title": "Tops",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/fashion/14.jpg'),
          "price": "150.00",
          "discount": "10",
          "priceRange": "150.00",
          "offerSeal": "Sale"
        },
        {
          "id": 15,
          "title": "Long Coat",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/fashion/15.jpg'),
          "price": "150.00",
          "discount": "10",
          "priceRange": "150.00",
          "offerSeal": "New"
        },
        {
          "id": 16,
          "title": "Tops",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/fashion/16.jpg'),
          "price": "150.00",
          "discount": "10",
          "priceRange": "150.00",
          "offerSeal": "Sale"
        },
        {
          "id": 17,
          "title": "Tops",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/fashion/2.jpg'),
          "price": "150.00",
          "discount": "10",
          "priceRange": "150.00",
          "offerSeal": "Sale"
        },
        {
          "id": 18,
          "title": "Tops",
          "tags": "Alu, Morich",
          "image": require('@/assets/images/fashion/4.jpg'),
          "price": "150.00",
          "discount": "10",
          "priceRange": "150.00",
          "offerSeal": "Sale"
        }
      ]
    }
  }
}
</script>
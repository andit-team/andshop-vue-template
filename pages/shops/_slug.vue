<template>
  <div>
    <div class="shop-profile-banner">
      <img :src="require('@/assets/images/banners/shop-profile.jpg')" alt="banner" class="img-fluid">
    </div>

    <div class="shop-profile-details-container">
      <div class="container">
        <div class="row shop-profile-details-wrap align-items-center">
            <div class="col-12 col-sm-12 col-md-3 p-md-0">
              <div class="shop-profile-side-box mb-sm-2 text-center">
                <img :src="require('@/assets/images/shops/1.png')" alt="shop">
                <h4 class="mt-2">Fashion Store</h4>
                <div class="shop-rating mt-2 mb-2">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p class="font-12">710 Followers <span>40 Review</span></p>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 p-md-0">
              <div class="shop-profile-des">
                <p class="font-14">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At omnis iste neque quasi quaerat blanditiis exercitationem, magnam expedita quae fugit.</p>
                <p class="font-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa soluta et, suscipit architecto ab voluptates. Lorem ipsum, dolor sit amet consectetur adipisicing elit. At omnis iste neque quasi quaerat blanditiis exercitationem, magnam expedita quae fugit.</p>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-3 p-md-0">
              <div class="shop-profile-side-box text-center mt-sm-2">
                <button class="theme-button small-button rounded d-block font-12">Follow</button>
                <button class="theme-button small-button rounded d-block font-12">Chat</button>
              </div>
            </div>
        </div>
      </div>
    </div>

    <!-- Product Search Page Area Start -->
    <section class="shop-page-product-area section-t-space bg-white">
      <div class="container">

        <div class="row">
          <div class="col-12">
            <div class="shop-search-bar mb-4 d-flex align-items-center justify-content-between">
              <h4>Products</h4>
              <div class="search-bar-right-wrap d-flex align-items-center">
                <form>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search...">
                    <div class="input-group-append">
                      <button class="theme-button rounded-right" type="button"><i class="fa fa-search"></i></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="row product-row">
          <!-- Product Search Page Right Side-->

          <!-- Best Seller item start-->
            <div v-for="(productItem, index) in productItems" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 product-item-col">
              <ProductItem :productItem ='productItem' />
            </div>
          <!-- Best Seller item end-->

          <!-- Load more button-->
          <div class=" col-12 d-block mt-4 text-center"><button class="theme-button rounded load-more-button">Load more</button></div>
          <!-- Product Search Page Right Side-->
        </div>
      </div>
    </section>
    <!-- Product Search Page Area End -->

  </div>
</template>

<script>
import ProductItem from '../../components/item-box/ProductItem'

export default {
  name: "ShopDetails",
  components: {
    ProductItem
  },
  head() {
    return {
      title: 'Shop Details'
    }
  },
  data() {
    return {
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
        }
      ]
    }
  }
}
</script>

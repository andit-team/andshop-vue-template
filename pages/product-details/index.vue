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
                <li class="breadcrumb-item"><nuxt-link to="/fashion">Fashion</nuxt-link></li>
                <li class="breadcrumb-item active" aria-current="page">Tops</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Area End -->

    <!-- Product Search Page Area Start -->
    <section class="product-details-page-area section-t-space bg-white">
      <div class="container">
        <div class="row">
          <!-- Product Details Left Side-->
          <div class="col-12 col-md-6 col-lg-6 col-xl-5">
            <div class="product-details-photo-tab">

              <div class="tab-content-wrap text-center">
                <image-magnifier
                  :src="selectedImg"
                  :zoom-src="selectedImg"
                  width="600"
                  height="600"
                  zoom-width="600"
                  zoom-height="570"
                  class="img-fluid"
                  >
                </image-magnifier>
              </div>

              <ul class="tab-img-list">
                <li v-for="(productImage, index) in productImages"
                :key="index" @click="setImage(productImage)"
                :class="{selectedImage : (productImage==selectedImg)}"
                class="rounded">

                  <img :src="productImage" alt="image" class="img-fluid rounded">

                </li>
              </ul>

            </div>
          </div>
          <!-- Product Details Left Side-->

          <!-- Product Details Right Side-->
          <div class="col-12 col-md-6 col-lg-6 col-xl-7">

            <!-- Sort Bar Start-->
            <div class="product-details-content">
              <h2 class="product-title mb-2">Tops</h2>
              <div class="rating_wrap mb-3">
                <div class="given-rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>

              <h5 class="mb-3">
                <span class="price mr-1 text-muted">$45.00 - $95.00</span>
              </h5>
              <p class="product-description mb-md-3 mb-3 mb-lg-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores beatae fuga harum laboriosam maiores quasi quidem quo repudiandae voluptate.</p>

              <div class="product-stock-wrap mb-md-3 mb-3 mb-lg-4">
                <div class="details-price-list d-flex align-items-center mb-4">
                  <div class="price-list-left">
                    <b-form-spinbutton class="mr-4" id="sb-inline" v-model="reqularSaleQty" inline></b-form-spinbutton>
                  </div>
                  <div class="price-list-right">
                    <h6 class="pb-1">Regular Price</h6>
                    <p class="price mr-1 pt-1 text-muted">$ 50.00</p>
                    <p class="stock in-stock pt-1 font-13">500 KG in stock</p>
                  </div>
                </div>
              </div>
              <div class="mb-3 product-details-btn">
                <nuxt-link to="/cart"><button class="theme-button rounded">+ Add to cart</button></nuxt-link>
                <nuxt-link to="/checkout"><button class="theme-button rounded ml-2">Buy Now</button></nuxt-link>
              </div>
              <div class="mb-3"><button><i class="far fa-heart color-red mr-1"></i>Add to wishlist</button></div>
              <div class="mb-3 product-details-categories">
                <h6 class="mb-2">Categories:</h6>
                <p>Hair care, Make up, Men's skin, Skin care</p>
              </div>
              <div class="mb-3 product-details-tags">
                <h6 class="mb-2">Tags:</h6>
                <p>Fashion, Hand bag, belt</p>
              </div>
              <div class="mb-3 product-details-share">
                <h6 class="mb-2">Share this product:</h6>
                <p>
                  <button class="color-red p-2 mr-1 font-14"><i class="fab fa-facebook-f"></i></button>
                  <button class="color-red p-2 mr-1 font-14"><i class="fab fa-twitter"></i></button>
                  <button class="color-red p-2 mr-1 font-14"><i class="fab fa-pinterest-p"></i></button>
                  <button class="color-red p-2 mr-1 font-14"><i class="fab fa-linkedin-in"></i></button>
                </p>
              </div>

            </div>
            <!-- Sort Bar End-->
          </div>
          <!-- Product Details Right Side-->

        </div>

        <!-- Product Details Description & Review Tabs-->
        <div class="row">
          <div class="col">
            <b-card no-body class="mt-5 product-details-des-tab">
              <b-tabs card>
                <b-tab title="Description" active>
                  <div class="product-details-content-box">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero blanditiis quo fugiat magni accusamus exercitationem! Voluptate, deleniti quae. Libero iusto minus, nulla excepturi quidem reprehenderit blanditiis eligendi exercitationem nesciunt ad! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi temporibus deserunt mollitia natus esse, sunt fuga quos. Autem quasi error quisquam architecto fuga suscipit atque voluptatibus nobis impedit nulla. Officia ercitationem.<br /><br />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat tempora aliquid exercitationem. Vel, dicta quos. Velit magnam, eius unde ullam, distinctio atque aperiam obcaecati ipsam id, inventore consectetur laudantium repellat tempora aliquid exercitationem. Vel, dicta quos. Velit magnam, eius unde ullam.
                    </p>
                  </div>
                </b-tab>
                <b-tab title="Additional Information">
                  <div class="product-details-content-box additional-content">
                    <table class="table table-bordered">
                      <tbody>
                        <tr>
                          <th scope="row">Brand:</th>
                          <td>Andshop</td>
                        </tr>
                        <tr>
                          <th scope="row">Color:</th>
                          <td>Orange</td>
                        </tr>
                        <tr>
                          <th scope="row">Size:</th>
                          <td>Large, Medium</td>
                        </tr>
                        <tr>
                          <th scope="row">Weight:</th>
                          <td>27 kg</td>
                        </tr>
                        <tr>
                          <th scope="row">Dimensions:</th>
                          <td>16 x 22 x 123 cm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </b-tab>
                <b-tab title="Reviews(3)">

                  <div class="product-details-content-box">
                    <div class="media comment-box mb-3">
                      <img :src="require('@/assets/images/dashboard/user.png')" class="mr-3" alt="author" height="50px">
                      <div class="media-body">
                        <h6 class="mt-0">Suraiya Aysha</h6>
                        <div class="given-rating">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </div>
                    </div>
                    <div class="media comment-box mb-3">
                      <img :src="require('@/assets/images/dashboard/user.png')" class="mr-3" alt="author" height="50px">
                      <div class="media-body">
                        <h6 class="mt-0">Fatima Malik</h6>
                        <div class="given-rating">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </div>
                    </div>
                    <div class="media comment-box mb-3">
                      <img :src="require('@/assets/images/dashboard/user.png')" class="mr-3" alt="author" height="50px">
                      <div class="media-body">
                        <h6 class="mt-0">Jessica Fernandez</h6>
                        <div class="given-rating">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </div>
                    </div>
                  </div>

                  <div class="product-details-content-box write-review mt-4">
                    <h5 class="mb-2">Add a review:</h5>

                    <div v-if="!isLogin">
                      <p>To submit review <nuxt-link to="/my-account/auth/login">Login</nuxt-link> please!</p>
                      <h5 class="d-block mt-4"><nuxt-link to="/my-account/auth/login" class="theme-button">Login</nuxt-link></h5>
                    </div>

                    <form v-else>
                      <textarea id="textarea-default" placeholder="Write review here..." rows="2" class="mb-2 form-control" wrap="soft"></textarea>
                      <b-form-rating v-model="ratingValue" id="rating-inline" inline color="#ff8800" class="mb-2"></b-form-rating>
                      <button type="submit" class="theme-button d-block rounded">Submit</button>
                    </form>
                  </div>

                </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </div>
        <!-- Product Details Description & Review Tabs-->

      </div>
    </section>
    <!-- Product Search Page Area End -->

    <!-- No Product Found Show this Section Start-->
    <!-- <section class="no-product-found section-t-space">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <img :src="require('@/assets/images/products/no-product-found.jpg')" alt="No product found!">
          </div>
        </div>
      </div>
    </section> -->
    <!-- No Product Found Show this Section End-->

    <!-- Related Products Start -->
    <RelatedProducts />
    <!-- Related Products End -->

    <PaymentMethods/>

  </div>

</template>

<script>
import RelatedProducts from '../../components/partials/RelatedProducts'
import PaymentMethods from '../../components/partials/PaymentMethods'
export default {
  name: "productDetails",
  components: {
    RelatedProducts,
    PaymentMethods
  },
  head() {
    return {
      title: 'Product Details'
    }
  },
  data() {
    return {
      showImg: false,
      ratingValue: 4,
      isLogin: true,
      reqularSaleQty: 0,
      wholeSaleQty: 0,
      flashSaleQty: 0,
      selectedImg : require('@/assets/images/fashion/3.jpg'),
      productImages: [
        require('@/assets/images/fashion/3.jpg'),
        require('@/assets/images/fashion/13.jpg'),
        require('@/assets/images/fashion/15.jpg')
      ],
      product_slug : this.$route.params.slug,
    }
  },
  methods: {
    setImage (imgURL) {
      this.selectedImg = imgURL;
    },
  mounted () {
    this.showImg = false
  },
  updated() {
    this.showImg = true
  }
  }

}
</script>
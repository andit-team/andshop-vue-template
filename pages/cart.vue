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
                <li class="breadcrumb-item"><nuxt-link to="/search-results/">Product</nuxt-link></li>
                <li class="breadcrumb-item active" aria-current="page">Cart</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Area End -->

    <section class="cart-page bg-different section-t-space">
      <div class="container">
        <div class="row">
          <!-- Cart List Left Side -->
          <div class="col-12 col-md-12 col-lg-7 col-xl-8">

            <!-- Cart Product List -->
            <ul class="list-unstyled">

              <li class="bg-white mb-3">
                <div class="cart_product_box media align-items-center p-3">
                  <div class="cart-product-img"><img :src="require('@/assets/images/fashion/1.jpg')" class="mr-3" alt="cart list"></div>
                  <div class="media-body">
                    <p class="mt-0 mb-1 font-weight-bold">Tops</p>
                    <p class="cart-product-des font-14">Product des congue felis in faucibus.</p>
                    <p class="d-flex">
                      <span class="discounted-price mr-3 color-green">$2.00</span>
                      <span class="price mr-3 text-muted" style="text-decoration: line-through">$4.00</span>
                      <span class="discount mr-1 color-red">-25%</span>
                    </p>
                  </div>
                  <div class="media-body">
                    <div class="cart-increment-decrement">
                      <b-form-spinbutton id="cart_increment" v-model="value" min="1" max="100"></b-form-spinbutton>
                    </div>
                  </div>
                  <div class="media-body">
                    <div class="cart-buttons d-flex justify-content-start justify-content-sm-end justify-content-md-end justify-content-lg-end justify-content-xl-end">
                      <button class="mr-3 font-14">
                        <i class="fas fa-heart" v-if="favorite"></i>
                        <i class="far fa-heart" v-else></i>
                        </button>
                      <button class="font-14"><i class="far fa-trash-alt"></i></button>
                    </div>
                  </div>
                </div>
              </li>

              <li class="bg-white mb-3">
                <div class="cart_product_box media align-items-center p-3">
                  <div class="cart-product-img"><img :src="require('@/assets/images/fashion/2.jpg')" class="mr-3" alt="cart list"></div>
                  <div class="media-body">
                    <p class="mt-0 mb-1 font-weight-bold">Shirt</p>
                    <p class="cart-product-des font-14">Product des congue felis in faucibus.</p>
                    <p class="d-flex">
                      <span class="discounted-price mr-3 color-green">$2.00</span>
                      <span class="price mr-3 text-muted" style="text-decoration: line-through">$4.00</span>
                      <span class="discount mr-1 color-red">-25%</span>
                    </p>
                  </div>
                  <div class="media-body">
                    <div class="cart-increment-decrement">
                      <b-form-spinbutton id="cart_increment" v-model="value" min="1" max="100"></b-form-spinbutton>
                    </div>
                  </div>
                  <div class="media-body">
                    <div class="cart-buttons d-flex justify-content-start justify-content-sm-end justify-content-md-end justify-content-lg-end justify-content-xl-end">
                      <button class="mr-3 font-14">
                        <i class="fas fa-heart" v-if="favorite"></i>
                        <i class="far fa-heart" v-else></i>
                        </button>
                      <button class="font-14"><i class="far fa-trash-alt"></i></button>
                    </div>
                  </div>
                </div>
              </li>

              <li class="bg-white mb-3">
                <div class="cart_product_box media align-items-center p-3">
                  <div class="cart-product-img"><img :src="require('@/assets/images/fashion/3.jpg')" class="mr-3" alt="cart list"></div>
                  <div class="media-body">
                    <p class="mt-0 mb-1 font-weight-bold">Ladies wear</p>
                    <p class="cart-product-des font-14">Product des congue felis in faucibus.</p>
                    <p class="d-flex">
                      <span class="discounted-price mr-3 color-green">$2.00</span>
                      <span class="price mr-3 text-muted" style="text-decoration: line-through">$4.00</span>
                      <span class="discount mr-1 color-red">-25%</span>
                    </p>
                  </div>
                  <div class="media-body">
                    <div class="cart-increment-decrement">
                      <b-form-spinbutton id="cart_increment" v-model="value" min="1" max="100"></b-form-spinbutton>
                    </div>
                  </div>
                  <div class="media-body">
                    <div class="cart-buttons d-flex justify-content-start justify-content-sm-end justify-content-md-end justify-content-lg-end justify-content-xl-end">
                      <button class="mr-3 font-14">
                        <i class="fas fa-heart" v-if="favorite"></i>
                        <i class="far fa-heart" v-else></i>
                        </button>
                      <button class="font-14"><i class="far fa-trash-alt"></i></button>
                    </div>
                  </div>
                </div>
              </li>

              <li class="bg-white mb-3">
                <div class="cart_product_box media align-items-center p-3">
                  <div class="cart-product-img"><img :src="require('@/assets/images/fashion/4.jpg')" class="mr-3" alt="cart list"></div>
                  <div class="media-body">
                    <p class="mt-0 mb-1 font-weight-bold">Coat</p>
                    <p class="cart-product-des font-14">Product des congue felis in faucibus.</p>
                    <p class="d-flex">
                      <span class="discounted-price mr-3 color-green">$2.00</span>
                      <span class="price mr-3 text-muted" style="text-decoration: line-through">$4.00</span>
                      <span class="discount mr-1 color-red">-25%</span>
                    </p>
                  </div>
                  <div class="media-body">
                    <div class="cart-increment-decrement">
                      <b-form-spinbutton id="cart_increment" v-model="value" min="1" max="100"></b-form-spinbutton>
                    </div>
                  </div>
                  <div class="media-body">
                    <div class="cart-buttons d-flex justify-content-start justify-content-sm-end justify-content-md-end justify-content-lg-end justify-content-xl-end">
                      <button class="mr-3 font-14">
                        <i class="fas fa-heart" v-if="favorite"></i>
                        <i class="far fa-heart" v-else></i>
                        </button>
                      <button class="font-14"><i class="far fa-trash-alt"></i></button>
                    </div>
                  </div>
                </div>
              </li>

            </ul>
          </div>

          <!-- Cart List Right Side -->
          <div class="col-12 col-md-12 col-lg-5 col-xl-4">
            <div class="product-checkout-wrap bg-white">
              <div class="px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
              <div class="p-4">
                <ul class="list-unstyled mb-4">
                  <li class="d-flex justify-content-between py-3"><strong class="text-muted">Order Subtotal (0 items) </strong><strong>$390.00</strong></li>
                  
                  <form class="form-inline">
                    <div class="form-group">
                      <input type="text" class="form-control rounded" name="voucher_code" id="voucher_code" placeholder="Enter voucher code"/>
                    </div>
                    <button type="submit" class="theme-button rounded ml-2" id="voucher_submit">Apply</button>
                  </form>

                  <li class="d-flex justify-content-between py-3"><strong class="text-muted">Total</strong>
                    <h5 class="font-weight-bold">$400.00</h5>
                  </li>
                </ul>
                <nuxt-link to="/checkout" class="theme-button rounded btn-block justify-content-center">Procceed to checkout</nuxt-link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <PaymentMethods />

  </div>
</template>

<script>
import PaymentMethods from '../components/partials/PaymentMethods'
export default {
  name: "Cart",
  components: {
    PaymentMethods
  },
  head() {
    return {
      title: 'Cart'
    }
  },
  data() {
    return {
      status: 'not_checked',
      value: 5,
      favorite: false
    }
  }
}
</script>
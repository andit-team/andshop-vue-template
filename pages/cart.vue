<template>
  <div>
    <!-- Breadcrumb Area Start -->
    <div class="breadcrumb-area bg-white">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent m-0 section-t-40-space section-b-40-space">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Product</a></li>
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

            <!-- Cart Select All Bar -->
            <div class="cart-page-select-bar d-flex justify-content-between align-items-center bg-white p-3">
              <b-form-checkbox
                id="checkbox-3"
                v-model="status"
                name="checkbox-3"
                value="checked"
                unchecked-value="not_checked"
                class="font-14"
                >
                SELECT ALL (3 ITEM(S))
              </b-form-checkbox>
              
              <button class="font-14"><i class="far fa-trash-alt mr-1"></i>DELETE</button>
            </div>  

            <!-- Cart Product List -->
            <ul class="list-unstyled">

              <li class="bg-white mt-3">
                <!-- Cart Brand Name -->
                <div class="cart_brand_info media p-2">
                  <b-form-checkbox
                  id="checkbox-2"
                  v-model="status"
                  name="checkbox-2"
                  value="checked"
                  unchecked-value="not_checked"
                  >
                </b-form-checkbox>
                <div class="cart_brand_name">
                  <p class="font-weight-normal">Andbaazar<i class="fas fa-angle-right ml-1"></i></p>
                  <p class="font-12">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>  

                </div>

                <!-- Cart Product Box -->
                <div class="cart_product_box media p-2">
                  <div class="cart-product-check">
                    <b-form-checkbox
                      id="checkbox-1"
                      v-model="status"
                      name="checkbox-1"
                      value="checked"
                      unchecked-value="not_checked"
                    >
                    </b-form-checkbox>
                  </div>
                  <div class="cart-product-img"><img :src="require('@/assets/images/best-sellers/1.jpg')" class="mr-3" alt="cart list"></div>
                  <div class="media-body">
                    <p class="mt-0 mb-1 font-weight-bold">Product name here</p>
                    <p class="cart-product-des font-14">Product des congue felis in faucibus.</p>
                  </div>
                  <div class="media-body">
                    <p class="d-flex flex-column">
                      <span class="discounted-price mr-1 color-green">$2.00</span>
                      <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span>
                      <span class="discount mr-1 color-red">-25%</span>
                    </p>
                    <div class="cart-buttons">
                      <button class="mr-2">
                        <i class="fas fa-heart" v-if="favorite"></i>
                        <i class="far fa-heart" v-else></i>
                        </button>
                      <button><i class="far fa-trash-alt"></i></button>
                    </div>
                  </div>
                  <div class="cart-increment-decrement">
                    <b-form-spinbutton id="cart_increment" v-model="value" min="1" max="100"></b-form-spinbutton>
                  </div>
                </div>
              </li>

              <li class="bg-white mt-3">
                <!-- Cart Brand Name -->
                <div class="cart_brand_info media p-2">
                  <b-form-checkbox
                  id="checkbox-2"
                  v-model="status"
                  name="checkbox-2"
                  value="checked"
                  unchecked-value="not_checked"
                  >
                </b-form-checkbox>
                <div class="cart_brand_name">
                  <p class="font-weight-normal">Andbaazar<i class="fas fa-angle-right ml-1"></i></p>
                  <p class="font-12">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>  

                </div>

                <!-- Cart Product Box -->
                <div class="cart_product_box media p-2">
                  <div class="cart-product-check">
                    <b-form-checkbox
                      id="checkbox-1"
                      v-model="status"
                      name="checkbox-1"
                      value="checked"
                      unchecked-value="not_checked"
                    >
                    </b-form-checkbox>
                  </div>
                  <div class="cart-product-img"><img :src="require('@/assets/images/best-sellers/1.jpg')" class="mr-3" alt="cart list"></div>
                  <div class="media-body">
                    <p class="mt-0 mb-1 font-weight-bold">Product name here</p>
                    <p class="cart-product-des font-14">Product des congue felis in faucibus.</p>
                  </div>
                  <div class="media-body">
                    <p class="d-flex flex-column">
                      <span class="discounted-price mr-1 color-green">$2.00</span>
                      <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span>
                      <span class="discount mr-1 color-red">-25%</span>
                    </p>
                    <div class="cart-buttons">
                      <button class="mr-2">
                        <i class="fas fa-heart" v-if="favorite"></i>
                        <i class="far fa-heart" v-else></i>
                        </button>
                      <button><i class="far fa-trash-alt"></i></button>
                    </div>
                  </div>
                  <div class="cart-increment-decrement">
                    <b-form-spinbutton id="cart_increment" v-model="value" min="1" max="100"></b-form-spinbutton>
                  </div>
                </div>
              </li>

              <li class="bg-white mt-3">
                <!-- Cart Brand Name -->
                <div class="cart_brand_info media p-2">
                  <b-form-checkbox
                  id="checkbox-2"
                  v-model="status"
                  name="checkbox-2"
                  value="checked"
                  unchecked-value="not_checked"
                  >
                </b-form-checkbox>
                <div class="cart_brand_name">
                  <p class="font-weight-normal">Andbaazar<i class="fas fa-angle-right ml-1"></i></p>
                  <p class="font-12">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>  

                </div>

                <!-- Cart Product Box -->
                <div class="cart_product_box media p-2">
                  <div class="cart-product-check">
                    <b-form-checkbox
                      id="checkbox-1"
                      v-model="status"
                      name="checkbox-1"
                      value="checked"
                      unchecked-value="not_checked"
                    >
                    </b-form-checkbox>
                  </div>
                  <div class="cart-product-img"><img :src="require('@/assets/images/best-sellers/1.jpg')" class="mr-3" alt="cart list"></div>
                  <div class="media-body">
                    <p class="mt-0 mb-1 font-weight-bold">Product name here</p>
                    <p class="cart-product-des font-14">Product des congue felis in faucibus.</p>
                  </div>
                  <div class="media-body">
                    <p class="d-flex flex-column">
                      <span class="discounted-price mr-1 color-green">$2.00</span>
                      <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span>
                      <span class="discount mr-1 color-red">-25%</span>
                    </p>
                    <div class="cart-buttons">
                      <button class="mr-2">
                        <i class="fas fa-heart" v-if="favorite"></i>
                        <i class="far fa-heart" v-else></i>
                        </button>
                      <button><i class="far fa-trash-alt"></i></button>
                    </div>
                  </div>
                  <div class="cart-increment-decrement">
                    <b-form-spinbutton id="cart_increment" v-model="value" min="1" max="100"></b-form-spinbutton>
                  </div>
                </div>
              </li>

              <li class="bg-white mt-3">
                <!-- Cart Brand Name -->
                <div class="cart_brand_info media p-2">
                  <b-form-checkbox
                  id="checkbox-2"
                  v-model="status"
                  name="checkbox-2"
                  value="checked"
                  unchecked-value="not_checked"
                  >
                </b-form-checkbox>
                <div class="cart_brand_name">
                  <p class="font-weight-normal">Andbaazar<i class="fas fa-angle-right ml-1"></i></p>
                  <p class="font-12">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>  

                </div>

                <!-- Cart Product Box -->
                <div class="cart_product_box media p-2">
                  <div class="cart-product-check">
                    <b-form-checkbox
                      id="checkbox-1"
                      v-model="status"
                      name="checkbox-1"
                      value="checked"
                      unchecked-value="not_checked"
                    >
                    </b-form-checkbox>
                  </div>
                  <div class="cart-product-img"><img :src="require('@/assets/images/best-sellers/1.jpg')" class="mr-3" alt="cart list"></div>
                  <div class="media-body">
                    <p class="mt-0 mb-1 font-weight-bold">Product name here</p>
                    <p class="cart-product-des font-14">Product des congue felis in faucibus.</p>
                  </div>
                  <div class="media-body">
                    <p class="d-flex flex-column">
                      <span class="discounted-price mr-1 color-green">$2.00</span>
                      <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span>
                      <span class="discount mr-1 color-red">-25%</span>
                    </p>
                    <div class="cart-buttons">
                      <button class="mr-2">
                        <i class="fas fa-heart" v-if="favorite"></i>
                        <i class="far fa-heart" v-else></i>
                        </button>
                      <button><i class="far fa-trash-alt"></i></button>
                    </div>
                  </div>
                  <div class="cart-increment-decrement">
                    <b-form-spinbutton id="cart_increment" v-model="value" min="1" max="100"></b-form-spinbutton>
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
                <button class="theme-button rounded btn-block justify-content-center">Procceed to checkout</button>
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
export default {
  name: "Cart",
  data() {
    return {
      status: 'not_checked',
      value: 5,
      favorite: false
    }
  }
}
</script>

<style scoped>

</style>

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
                <li class="breadcrumb-item"><nuxt-link to="/best-sellers">Product</nuxt-link></li>
                <li class="breadcrumb-item active" aria-current="page">Checkout</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Area End -->

    <section class="checkout-page section-t-space bg-different">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-7 col-xl-8">
            <div class="delivery-information bg-white p-4">
              <h4 class="mb-4">Delivery Information</h4>
              <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="f_name">Full name</label>
                    <input type="text" class="form-control" id="f_name" placeholder="Your name">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="phone_number">Phone number</label>
                    <input type="text" class="form-control" id="phone_number" placeholder="Your phone">
                  </div>
                </div>

                <div class="form-row">

                  <div class="form-group col-md-4">
                    <label for="region">Region</label>
                    <select id="region" class="form-control">
                      <option selected>Choose region</option>
                      <option>Khulna</option>
                      <option>Dhaka</option>
                    </select>
                  </div>

                  <div class="form-group col-md-4">
                    <label for="city">City</label>
                    <select id="city" class="form-control">
                      <option selected>Choose City</option>
                      <option>Bagerhat</option>
                      <option>Jhenaidah</option>
                      <option>Khulna</option>
                    </select>
                  </div>

                  <div class="form-group col-md-4">
                    <label for="area">Area</label>
                    <select id="area" class="form-control">
                      <option selected>Choose Area</option>
                      <option>Maheshpur</option>
                      <option>Shailakupa</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="address">Address</label>
                  <input type="text" class="form-control" id="address" placeholder="For Example: House# 123, Street# 123, ABC Road">
                </div>

                <button @click.prevent class="theme-button rounded">Save information</button>
              </form>
            </div>

            <!-- Checkout Product List -->
            <div class="checkout-product-list-wrap mt-4">

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
                      <div class="checkout-qty text-center">
                        Qty: <strong>5</strong>
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="cart-buttons d-flex justify-content-start justify-content-sm-end justify-content-md-end justify-content-lg-end justify-content-xl-end">
                        <button class="font-14"><i class="far fa-trash-alt"></i></button>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="bg-white mb-3">
                  <div class="cart_product_box media align-items-center p-3">
                    <div class="cart-product-img"><img :src="require('@/assets/images/fashion/2.jpg')" class="mr-3" alt="cart list"></div>
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
                      <div class="checkout-qty text-center">
                        Qty: <strong>5</strong>
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="cart-buttons d-flex justify-content-start justify-content-sm-end justify-content-md-end justify-content-lg-end justify-content-xl-end">
                        <button class="font-14"><i class="far fa-trash-alt"></i></button>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="bg-white mb-3">
                  <div class="cart_product_box media align-items-center p-3">
                    <div class="cart-product-img"><img :src="require('@/assets/images/fashion/3.jpg')" class="mr-3" alt="cart list"></div>
                    <div class="media-body">
                      <p class="mt-0 mb-1 font-weight-bold">Women Wear</p>
                      <p class="cart-product-des font-14">Product des congue felis in faucibus.</p>
                      <p class="d-flex">
                        <span class="discounted-price mr-3 color-green">$2.00</span>
                        <span class="price mr-3 text-muted" style="text-decoration: line-through">$4.00</span>
                        <span class="discount mr-1 color-red">-25%</span>
                      </p>
                    </div>
                    <div class="media-body">
                      <div class="checkout-qty text-center">
                        Qty: <strong>5</strong>
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="cart-buttons d-flex justify-content-start justify-content-sm-end justify-content-md-end justify-content-lg-end justify-content-xl-end">
                        <button class="font-14"><i class="far fa-trash-alt"></i></button>
                      </div>
                    </div>
                  </div>
                </li>

              </ul>
            </div>

          </div>
          <div class="col-12 col-md-12 col-lg-5 col-xl-4">
            <div class="proceed-to-pay-wrap">

              <div class="product-checkout-wrap bg-white">

                <!-- Checkout User Info -->
                <div class="px-4 pt-4 checkout-user-info-box">

                  <div class=" py-3 font-weight-bold">Shipping and billing</div>
                  <ul class="list-unstyled">
                    <li class="d-flex justify-content-between py-3"><strong class="text-muted"><i class="fas fa-map-marker-alt"></i>Suraiya Aysha</strong><button>Edit</button></li>
                    <li class="d-flex justify-content-between py-3"><p class="text-muted">House# 123, Street# 123, ABC Road </p></li>
                    <div class="checkout-address-modal-wrap">
                      <b-button v-b-modal.checkout-address-modal class="text-left bg-white heading-color p-2 font-14">
                        Free delivery on collecting your order from Andshop pickup point
                        <span class="font-12 d-block mt-1 text-muted">2 suggested collection point nearby</span>
                      </b-button>

                      <b-modal id="checkout-address-modal" centered title="Pick up from">
                        <b-form-group v-slot="{ ariaDescribedby }">
                          <b-form-radio-group
                            :aria-describedby="ariaDescribedby"
                          >
                            <b-form-radio value="first">Road no-1, House no-33 Niketan,Gulshan-1, Dhaka-1212</b-form-radio>
                            <b-form-radio value="second">Dhaka, Dhaka North, Banani Road No. 12 - 19</b-form-radio>
                          </b-form-radio-group>
                        </b-form-group>

                        <template #modal-footer="{ ok, cancel }">
                          <button size="sm" class="theme-button small-button rounded" @click="cancel()">
                            Cancel
                          </button>
                          <button size="sm" class="theme-button small-button rounded" @click="ok()">
                            Confirm
                          </button>
                        </template>

                      </b-modal>

                    </div>

                    <li class="d-flex justify-content-between py-3"><strong class="text-muted"><i class="far fa-list-alt"></i>Bill to the same address</strong><button>Edit</button></li>
                    <li class="d-flex justify-content-between py-3"><strong class="text-muted"><i class="fas fa-phone-alt"></i>+44 95 87 25</strong><button>Edit</button></li>
                    <li class="d-flex justify-content-between"><strong class="text-muted"><i class="fas fa-envelope"></i>asa@test.com</strong><button>Edit</button></li>

                  </ul>
                </div>

                <!-- Checkout Box -->
                <div class="p-4">
                  <div class=" py-3 font-weight-bold">Order summary </div>
                  <ul class="list-unstyled mb-4">
                    <li class="d-flex justify-content-between py-3"><strong class="text-muted">Order Subtotal (0 items) </strong><strong>$390.00</strong></li>
                    <li class="d-flex justify-content-between py-3"><strong class="text-muted">Shipping Fee </strong><strong>$ 65</strong></li>

                    <form @click.prevent class="form-inline w-100">
                      <div class="form-group">
                        <input type="text" class="form-control rounded" name="voucher_code" id="voucher_code" placeholder="Enter voucher code"/>
                      </div>
                      <button class="theme-button rounded ml-2" id="voucher_submit">Apply</button>
                    </form>

                    <li class="d-flex justify-content-between py-3"><strong class="text-muted">Total</strong>
                      <h5 class="font-weight-bold">$400.00 <span class="d-block font-12 font-weight-light pt-1">VAT included, where applicable</span> </h5>
                    </li>
                  </ul>
                  <button class="theme-button rounded btn-block justify-content-center">Procceed to pay</button>
                </div>
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
  name: "Checkout",
  components: {
    PaymentMethods
  },
  head() {
    return {
      title: 'Checkout'
    }
  }
}
</script>

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
                      <option>Jhenaidah</option>
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
                <div class="form-group">
                  <label>Select a label for effective delivery:</label>

                  <div class="d-flex home-office-select">
                    <span class="rounded active"><i class="fas fa-briefcase"></i>Office</span>
                    <span class="rounded"><i class="fas fa-home"></i>Home</span>
                  </div>
                </div>

                <button class="theme-button rounded">Save information</button>
              </form>
            </div>

            <!-- Checkout Product List -->
            <div class="checkout-product-list-wrap mt-4">

              <ul class="list-unstyled">

                <li class="bg-white mt-3 mb-3">

                  <!-- Package Bar -->
                  <div class="package-bar d-flex justify-content-between align-items-center px-4 py-2 bg-3">
                    <p>Package 1 of 2</p>
                    <p>Fulfilled by <strong>Andbazar</strong></p>
                  </div>

                  <div class="delivery-and-product-wrap p-4">

                    <!-- Delivery Option -->
                    <div class="delivery-option-wrap">
                      <p class="mb-2">Delivery Option</p>
                      <div class="delivery-box d-flex rounded p-2 mb-2">
                        <span class="mr-2"><i class="fas fa-check-circle"></i></span>
                        <div class="delivery-content">
                          <p class="font-14">$ 65</p>
                          <p class="font-14">Home delivery</p>
                          <p class="font-14">Est. Arrival: 3-5 Jan</p>
                        </div>

                      </div>
                    </div>

                    <!-- Checkout Product Box -->
                    <div class="cart_product_box media">
                      <div class="cart-product-img"><img :src="require('@/assets/images/best-sellers/1.jpg')" class="mr-3" alt="cart list"></div>
                      <div class="media-body">
                        <p class="mt-0 mb-1 font-weight-bold">Product name here</p>
                        <p class="cart-product-des font-14">Product des congue felis in faucibus.</p>
                      </div>
                      <div class="media-body">
                        <div class="d-flex flex-column">
                          <span class="discounted-price mr-1 color-red">$2.00</span>
                          <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span>
                          <span class="discount ml-1 color-dark">-25%</span>
                          <span class="ml-2"><button title="delete" class="text-center"><i class="far fa-trash-alt"></i></button></span>
                        </div>
                      </div>
                      <div class="checkout-qty">
                        Qty: <strong>5</strong>
                      </div>
                    </div>

                  </div>

                </li>

                <li class="bg-white mt-3 mb-3">

                  <!-- Package Bar -->
                  <div class="package-bar d-flex justify-content-between align-items-center px-4 py-2 bg-3">
                    <p>Package 1 of 2</p>
                    <p>Fulfilled by <strong>Andbazar</strong></p>
                  </div>

                  <div class="delivery-and-product-wrap p-4">

                    <!-- Delivery Option -->
                    <div class="delivery-option-wrap">
                      <p class="mb-2">Delivery Option</p>
                      <div class="delivery-box d-flex rounded p-2 mb-2">
                        <span class="mr-2"><i class="fas fa-check-circle"></i></span>
                        <div class="delivery-content">
                          <p class="font-14">$ 65</p>
                          <p class="font-14">Home delivery</p>
                          <p class="font-14">Est. Arrival: 3-5 Jan</p>
                        </div>

                      </div>
                    </div>

                    <!-- Checkout Product Box -->
                    <div class="cart_product_box media">
                      <div class="cart-product-img"><img :src="require('@/assets/images/best-sellers/1.jpg')" class="mr-3" alt="cart list"></div>
                      <div class="media-body">
                        <p class="mt-0 mb-1 font-weight-bold">Product name here</p>
                        <p class="cart-product-des font-14">Product des congue felis in faucibus.</p>
                      </div>
                      <div class="media-body">
                        <div class="d-flex flex-column">
                          <span class="discounted-price mr-1 color-red">$2.00</span>
                          <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span>
                          <span class="discount ml-1 color-dark">-25%</span>
                          <span class="ml-2"><button title="delete" class="text-center"><i class="far fa-trash-alt"></i></button></span>
                        </div>
                      </div>
                      <div class="checkout-qty">
                        Qty: <strong>5</strong>
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
                    <li class="d-flex justify-content-between py-3"><strong class="text-muted"><i class="fas fa-map-marker-alt"></i> Suraiya Aysha</strong><button>Edit</button></li>
                    <li class="d-flex justify-content-between py-3"><p class="text-muted">House# 123, Street# 123, ABC Road </p></li>
                    <div class="checkout-address-modal-wrap">
                      <b-button v-b-modal.checkout-address-modal class="text-left bg-white heading-color p-2 font-14">
                        Free delivery on collecting your order from Andbazar pickup point
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
                          <b-button size="sm" class="bg-red border-0 p-2" @click="cancel()">
                            Cancel
                          </b-button>
                          <b-button size="sm" class="bg-red border-0 p-2" @click="ok()">
                            Confirm
                          </b-button>
                        </template>

                      </b-modal>

                    </div>

                    <li class="d-flex justify-content-between py-3"><strong class="text-muted"><i class="far fa-list-alt"></i>Bill to the same address</strong><button>Edit</button></li>
                    <li class="d-flex justify-content-between py-3"><strong class="text-muted"><i class="fas fa-phone-alt"></i>0197111111</strong><button>Edit</button></li>
                    <li class="d-flex justify-content-between"><strong class="text-muted"><i class="fas fa-envelope"></i>asa@test.com</strong><button>Edit</button></li>

                  </ul>
                </div>

                <!-- Checkout Box -->
                <div class="p-4">
                  <div class=" py-3 font-weight-bold">Order summary </div>
                  <ul class="list-unstyled mb-4">
                    <li class="d-flex justify-content-between py-3"><strong class="text-muted">Order Subtotal (0 items) </strong><strong>$390.00</strong></li>
                    <li class="d-flex justify-content-between py-3"><strong class="text-muted">Shipping Fee </strong><strong>$ 65</strong></li>

                    <form class="form-inline w-100">
                      <div class="form-group">
                        <input type="text" class="form-control rounded" name="voucher_code" id="voucher_code" placeholder="Enter voucher code"/>
                      </div>
                      <button type="submit" class="theme-button rounded ml-2" id="voucher_submit">Apply</button>
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
export default {
  name: "Checkout"
}
</script>

<style scoped>

</style>

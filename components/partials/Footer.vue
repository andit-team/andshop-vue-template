<template>
  <!-- Footer Area Start -->
  <footer class="footer-top bg-different section-t-space">
    <FooterSubscribe />
    <section class="section-b-space">
      <div class="container">
        <div class="row footer-theme partition-f">
          <div class="col-12 col-sm-12 col-md-6 col-lg-3">
            <div class="sub-title">
              <div class="footer-title">
                <h5>Information</h5>
              </div>
              <div class="footer-content">
                <ul>
                  <li>
                    <nuxt-link to="/about-us">About us</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/news-feed">News feeds</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/faq">FAQ</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/contact-us">Contact us</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-3">
            <div class="sub-title">
              <div class="footer-title">
                <h5>my account</h5>
              </div>
              <div class="footer-content">
                <ul>
                  <li>
                    <nuxt-link to="/my-account/">Customer Info</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/my-account/my-orders/">Orders</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/cart">Shopping Cart</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/my-account/wishlist">Wishlist</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/checkout">Checkout</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-3">
            <div class="sub-title">
              <div class="footer-title">
                <h5>Customer Service</h5>
              </div>
              <div class="footer-content">
                <ul>
                  <li>
                    <nuxt-link to="/my-account/my-orders/1">Order Tracking</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/my-account/my-reviews">My reviews</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/return-policy">Return Policy</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/terms-and-conditions">Terms & Conditions</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/contact-us">Contact US</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-3">
            <div class="sub-title">
              <div class="footer-title">
                <h5>Contact Us</h5>
              </div>
              <div class="footer-content">
                <ul class="contact-list">
                  <li>
                    <i class="fas fa-map-marker-alt"></i>32,Choto Mirzapur, Ahsan Ahamad Road, Peace Palace, First Floor, Khulna-9100, Bangladesh
                  </li>
                  <li>
                    <i class="fa fa-phone"></i>
                    <a href="tel:041722684">+88 041722684</a>
                  </li>
                  <li>
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:andit.andimpex@gmail.com" class="text-lowercase">andit.andimpex@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="sub-footer bg-dark p-3">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-md-6 col-sm-12">
            <div class="footer-end">
              <p class="white-color font-14">
                <i class="fa fa-copyright" aria-hidden="true"></i> 2021-2022 Andshop. All Rights Reserved
              </p>
            </div>
          </div>
          <div class="col-xl-6 col-md-6 col-sm-12">
            <div class="bottom-footer-list">
              <ul>
                <li><nuxt-link to="/merchant-account/login" class="nav-link">Sell on Andshop</nuxt-link></li>
                <li><a href="#">Download App</a></li>
                <li><a href="#">Customer service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer Area End -->
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
<template>
  <div>
    <section class="orientation-banner-area slider-area text-center" :style="{ 'background-image': 'url(' + require('@/assets/images/orientation-demo/orientation-banner.jpg') + ')' }">
      <div class="overlay"></div>
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-12 col-xl-9 mx-auto p-0">
            <div class="orientation-banner-content">
              <img :src="require('@/assets/images/orientation-demo/logo_white.png')" alt="logo">
              <h1 class="text-white mt-3 mb-4">Andshop - Vuejs Nuxtjs <br> Multi Vendor eCommerce Template</h1>
              <a href="https://themeforest.net/user/andit_themes/portfolio" target="_blank" class="purchase-btn theme-button rounded">Purchase Now</a>       
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Different Demo Section Start -->
    <section id="home_demo" class="demos-area section-t-space section-b-40-space">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="orientation-title text-center mb-5">
              <h2>Home Demo</h2>
            </div>
          </div>
        </div>
      
        <div class="row justify-content-center">
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/fashion" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/fashion.jpg')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Fashion</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/electronics" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/electronics.jpg')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Electronics</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/furniture" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/furniture.jpg')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Furniture</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/groceries" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/grocery.jpg')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Groceries</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Different Demo Section End -->

    <!-- Different Demo Section Start -->
    <section id="product_demo" class="demos-area bg-different section-t-space section-b-40-space">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="orientation-title text-center mb-5">
              <h2>Product Demo</h2>
            </div>
          </div>
        </div>
      
        <div class="row justify-content-center">
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/search-results" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/product-left.jpg')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Product Left sidebar</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/best-sellers" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/product-nosidebar.jpg')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Product No Sidebar</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/search-results/right-sidebar" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/product-right.jpg')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Product Right Sidebar</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/product-details" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/p-d-style1.jpg')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Product Destails 1</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/product-details/left-thumb" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/p-d-style2.jpg')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Product Destails 2</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/product-details/right-thumb" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/p-d-style3.jpg')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Product Destails 3</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/shops" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/shop.jpg')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Shops</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/shops/shop-details" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/shop-details.jpg')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Shop Details</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Different Demo Section End -->

    <!-- Different Demo Section Start -->
    <section id="customer_account_demo" class="demos-area section-t-space section-b-40-space">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="orientation-title text-center mb-5">
              <h2>Customer Account</h2>
            </div>
          </div>
        </div>
      
        <div class="row justify-content-center">
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/my-account/auth/registration" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/authentication_create_account.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Sign Up</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/my-account/auth/login" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/authentication_login.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Login</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/my-account/address-book" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/customer_account_address_book.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Customer Addressbook</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/cart" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/customer_account_cart.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Cart</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/checkout" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/customer_account_checkout.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Checkout</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/my-account/wishlist" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/customer_account_wishlist.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Wishlist</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/compare" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/customer_account_compare.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Compare</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/my-account/wallet" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/customer_account_my_wallet.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Customer Wallet</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/my-account/my-orders/" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/customer_account_my_orders.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Orders</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/my-account/my-orders/1" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/order-tracking.jpg')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Order Tracking</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/my-account/my-orders/my-returns" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/customer_account_my_return.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Order Returns</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/my-account/my-orders/my-cancellations" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/customer_account_my_cancellation.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Order Cancelations</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/my-account/my-reviews" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/customer_account_my_review.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Reviews</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/my-account/my-reviews/write-review" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/write-review.jpg')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Write Review</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/my-account" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/customer-info.jpg')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Personal Information</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/my-account/notifications" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/customer_account_notification.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Notifications</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/my-account/auth/forget-password" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/authentication_forgot_password.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Forgot Password</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/my-account/auth/reset-password" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/authentication_reset_password.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Reset Password</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/my-account/auth/verify-email-address" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/authentication_verify_email.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Email Verification</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/my-account/auth/verify-mobile-no" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/authentication_verify_mobile.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Mobile Verification</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/my-account/auth/verify-otp" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/authentication_verify_otp.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">OTP Verification</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Different Demo Section End -->

    <!-- Different Demo Section Start -->
    <section id="merchant_account_demo" class="demos-area bg-different section-t-space section-b-40-space">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="orientation-title text-center mb-5">
              <h2>Merchant Account</h2>
            </div>
          </div>
        </div>
      
        <div class="row justify-content-center">
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/merchant-account" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/merchant_account_dashboard.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Merchant Dashboard</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/merchant-account/products" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/merchant_account_product.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Merchant Products</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/merchant-account/products/add-product" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/merchant_account_all_product.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Merchant Add Products</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/merchant-account/orders" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/merchant_account_all_orders.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Merchant Orders</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/merchant-account/profile" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/merchant_account_profile.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Merchant Profile</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/merchant-account/settings" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/merchant_account_settings.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Merchant Settings</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/merchant-account/login" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/merchant_login.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Merchant Login</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/merchant-account/registration" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/merchant_registration.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Merchant Registration</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Different Demo Section End -->

    <!-- Different Demo Section Start -->
    <section id="others_demo" class="demos-area section-t-space section-b-40-space">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="orientation-title text-center mb-5">
              <h2>Others Inner Page</h2>
            </div>
          </div>
        </div>
      
        <div class="row justify-content-center">
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/about-us" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/abou_us.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">About us</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/contact-us" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/contact_us.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Contact us</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/news-feed/" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/newsfeed.jpg')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">All News Feed</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/news-feed/my-posts" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/my-feed.jpg')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">News Feed My Posts</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/news-feed/feeds-details" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/single-feed.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">News Feed Details</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/faq" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/faq.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">FAQ</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/terms-and-conditions" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/terms.jpg')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Terms & Conditions</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/return-policy" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/return.jpg')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Return Policy</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/404" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/404.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">404 Page</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Different Demo Section End -->

    <!-- Different Demo Section Start -->
    <section id="blog_demo" class="demos-area bg-different section-t-space section-b-40-space">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="orientation-title text-center mb-5">
              <h2>Blog</h2>
            </div>
          </div>
        </div>
      
        <div class="row justify-content-center">
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/blog/" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/blog_left_sidebar.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Blog left sidebar</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/blog/no-sidebar" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/blog_no_sidebar.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Blog no sidebar</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/blog/right-sidebar" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/blog_right_sidebar.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Blog right sidebar</h4>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="orientation-demo-box text-center">
              <nuxt-link to="/blog/blog-details" target="_blank" class="d-block">
                <img :src="require('@/assets/images/orientation-demo/blog_details.png')" alt="demo" class="img-fluid">
              </nuxt-link>
              <h4 class="mt-4">Blog Details</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Different Demo Section End -->

    <section id="sepcial_features_demo" class="orientation-featurs-area section-t-space section-b-40-space">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="andshop-section-title text-center">
              <h2>Template Features</h2>
              <p class="andshop-subtitle w-50 mx-auto mt-3 mb-5">And there is many more features.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-2 col-md-3 col-6">
            <div class="orientation-feature-box text-center">
              <div class="orientation-feature-img">
                <img :src="require('@/assets/images/orientation-demo/features/vue.png')" alt="demo" class="img-fluid">
              </div>
              <h6 class="mt-4">Vue js</h6>
            </div>
          </div>
          <div class="col-xl-2 col-md-3 col-6">
            <div class="orientation-feature-box text-center">
              <div class="orientation-feature-img">
                <img :src="require('@/assets/images/orientation-demo/features/nuxt-emoji.png')" alt="demo" class="img-fluid">
              </div>
              <h6 class="mt-4">Nuxt js</h6>
            </div>
          </div>
          <div class="col-xl-2 col-md-3 col-6">
            <div class="orientation-feature-box text-center">
              <div class="orientation-feature-img">
                <img :src="require('@/assets/images/orientation-demo/features/html.png')" alt="demo" class="img-fluid">
              </div>
              <h6 class="mt-4">HTML5</h6>
            </div>
          </div>
          <div class="col-xl-2 col-md-3 col-6">
            <div class="orientation-feature-box text-center">
              <div class="orientation-feature-img">
                <img :src="require('@/assets/images/orientation-demo/features/css.png')" alt="demo" class="img-fluid">
              </div>
              <h6 class="mt-4">CSS3</h6>
            </div>
          </div>
          <div class="col-xl-2 col-md-3 col-6">
            <div class="orientation-feature-box text-center">
              <div class="orientation-feature-img">
                <img :src="require('@/assets/images/orientation-demo/features/bootstrap.png')" alt="demo" class="img-fluid">
              </div>
              <h6 class="mt-4">Bootstrap</h6>
            </div>
          </div>
          <div class="col-xl-2 col-md-3 col-6">
            <div class="orientation-feature-box text-center">
              <div class="orientation-feature-img">
                <img :src="require('@/assets/images/orientation-demo/features/sass.png')" alt="demo" class="img-fluid">
              </div>
              <h6 class="mt-4">Sass</h6>
            </div>
          </div>
          <div class="col-xl-2 col-md-3 col-6">
            <div class="orientation-feature-box text-center">
              <div class="orientation-feature-img">
                <img :src="require('@/assets/images/orientation-demo/features/w3c.png')" alt="demo" class="img-fluid">
              </div>
              <h6 class="mt-4">W3 Validate</h6>
            </div>
          </div>
          <div class="col-xl-2 col-md-3 col-6">
            <div class="orientation-feature-box text-center">
              <div class="orientation-feature-img">
                <img :src="require('@/assets/images/orientation-demo/features/google-font.png')" alt="demo" class="img-fluid">
              </div>
              <h6 class="mt-4">Google fonts</h6>
            </div>
          </div>
          <div class="col-xl-2 col-md-3 col-6">
            <div class="orientation-feature-box text-center">
              <div class="orientation-feature-img">
                <img :src="require('@/assets/images/orientation-demo/features/documentation.png')" alt="demo" class="img-fluid">
              </div>
              <h6 class="mt-4">Well Documentation</h6>
            </div>
          </div>
          <div class="col-xl-2 col-md-3 col-6">
            <div class="orientation-feature-box text-center">
              <div class="orientation-feature-img">
                <img :src="require('@/assets/images/orientation-demo/features/count.png')" alt="demo" class="img-fluid">
              </div>
              <h6 class="mt-4">Count Down</h6>
            </div>
          </div>
          <div class="col-xl-2 col-md-3 col-6">
            <div class="orientation-feature-box text-center">
              <div class="orientation-feature-img">
                <img :src="require('@/assets/images/orientation-demo/features/multilevel-menu.png')" alt="demo" class="img-fluid">
              </div>
              <h6 class="mt-4">Multilevel Menu</h6>
            </div>
          </div>
          <div class="col-xl-2 col-md-3 col-6">
            <div class="orientation-feature-box text-center">
              <div class="orientation-feature-img">
                <img :src="require('@/assets/images/orientation-demo/features/seo.png')" alt="demo" class="img-fluid">
              </div>
              <h6 class="mt-4">SEO Friendly</h6>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Orientation Footer -->
    <section class="orientation-footer section-t-space">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="orientation-footer-content text-center">
              <h3 class="mb-3 text-white">Purchase the Andshop Template & <br> make your Multivendor Ecommerce Store </h3>
              <a href="https://themeforest.net/user/andit_themes/portfolio" target="_blank" class="theme-button rounded">Purchase Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  layout: 'public',
  name: 'OrientationPage',
}
</script>
<style>
.orientation-banner-area {
  position: relative;
  background-color: #0f1b27;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 14rem;
  padding-bottom: 14rem;
}
@media only screen and (max-width: 575px){ 
  .orientation-banner-area {
  padding-top: 7rem;
  padding-bottom: 7rem;
}
}
.orientation-banner-area .overlay {
  position: absolute;
  background-color: #212529;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0.7;
}
.orientation-title  h2 {
  line-height: 29px;
}
.demos-area .orientation-demo-box, .orientation-feature-box {
  margin-bottom: 30px;
}
.demos-area .orientation-demo-box img {
  box-shadow: 3px 5px 25px 0 rgb(0 0 0 / 10%);
  transition: all .5s ease;
}
.demos-area .orientation-demo-box:hover img {
  transform: translateY(-3px);
  transition: all .5s ease;
}
.orientation-feature-img {
  box-shadow: 0 0 26px 3px #e2e2e2;
  padding: 50px;
}
.orientation-footer.section-t-space {
  background-color: #1d2531;
}
</style>
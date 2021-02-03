<template>
  <!-- Menu Area Start -->
  <section class="menu-section-area orientation-menu-area">
    <!--Top Menu-->
    <div class="top-menu bg-different py-2">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-8">
            <div class="header_topbar_info d-flex align-items-center">
              <div class="header_offer">
                <a href="tel:01222222">Hotline: +8801 22 22 22</a>
              </div>
              <div class="download_wrap d-flex align-items-center">
                <span class="mr-2">Download App</span>
                <ul class="icon_list text-center text-lg-left d-flex align-items-center">
                  <li><a href="#"><i class="fab fa-apple"></i></a></li>
                  <li><a href="#"><i class="fab fa-android"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div class="d-flex align-items-center justify-content-center justify-content-md-end">

              <b-dropdown id="dropdown-1" class="lng_dropdown">
                <template #button-content class="bg-transparent">
                  <img src="~/assets/images/eng.png" alt="english">English<i class="fas fa-angle-down"></i>
                </template>
                <b-dropdown-item to="#"><img src="~/assets/images/eng.png" alt="english">English</b-dropdown-item>
                <b-dropdown-item to="#"><img src="~/assets/images/fn.png" alt="France">France</b-dropdown-item>
                <b-dropdown-item><img src="~/assets/images/us.png" alt="United States">United States</b-dropdown-item>
              </b-dropdown>

              <b-dropdown id="dropdown-1" class="ml-3 lng_dropdown currency_dropdown">
                <template #button-content class="bg-transparent">
                  USD<i class="fas fa-angle-down"></i>
                </template>
                <b-dropdown-item to="#">USD</b-dropdown-item>
                <b-dropdown-item to="#">EUR</b-dropdown-item>
                <b-dropdown-item to="#">GBR</b-dropdown-item>
              </b-dropdown>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Middle Menu-->
    <div class="middle-menu py-2">
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex justify-content-between align-items-center">
            <nuxt-link to="/" class="navbar-brand">
              <img src="~/assets/images/logo.png" alt="logo">
            </nuxt-link>
            <ProductSearch />
            <ul class="attr-nav d-flex align-items-center">

              <b-dropdown id="dropdown-3" class="middle-menu-dropdown user_dropdown">
                <template #button-content class="bg-transparent">
                  <i class="far fa-user"></i>
                </template>

                <div class="cart_list user_dropdown_list">
                  <!--  For Authenticate Users -->
                  <span v-if="userAuthStatus">
                    <b-dropdown-item to="#">
                      <div class="mr-3"><i class="far fa-smile"></i></div>
                      <div class="media-body">
                        <nuxt-link to="/my-account">
                          <p>Manage my account</p>
                        </nuxt-link>
                      </div>
                    </b-dropdown-item>

                    <b-dropdown-item to="#">
                      <div class="mr-3"><i class="fas fa-box"></i></div>
                      <div class="media-body">
                        <nuxt-link to="/my-account/my-orders">
                          <p>My orders</p>
                        </nuxt-link>
                      </div>
                    </b-dropdown-item>

                    <b-dropdown-item to="#">
                      <div class="mr-3"><i class="far fa-heart"></i></div>
                      <div class="media-body">
                        <nuxt-link to="/my-account/wishlist">
                          <p>My wishlist and followed stores</p>
                        </nuxt-link>
                      </div>
                    </b-dropdown-item>

                    <b-dropdown-item to="#">
                      <div class="mr-3"><i class="far fa-star"></i></div>
                      <div class="media-body">
                        <p>My reviews</p>
                      </div>
                    </b-dropdown-item>

                    <b-dropdown-item to="#">
                      <div class="mr-3"><i class="far fa-times-circle"></i></div>
                      <div class="media-body">
                        <p>My returns and cancellations</p>
                      </div>
                    </b-dropdown-item>

                    <b-dropdown-item to="#">
                      <div class="mr-3"><i class="fas fa-sign-out-alt"></i></div>
                      <div class="media-body">
                        <p>Logout</p>
                      </div>
                    </b-dropdown-item>
                  </span>


                <!--  For UnAuthenticate Users -->
                  <span v-else>
                    <b-dropdown-item to="#">
                      <div class="mr-3"><i class="far fa-user"></i></div>
                        <div class="media-body">
                          <nuxt-link to="/auth/registration">
                          <p>Signup</p>
                          </nuxt-link>
                        </div>
                    </b-dropdown-item>

                    <b-dropdown-item to="#">
                      <div class="mr-3"><i class="fas fa-key"></i></div>
                        <div class="media-body">
                          <nuxt-link to="/auth/login">
                          <p>Login</p>
                          </nuxt-link>
                        </div>
                    </b-dropdown-item>
                  </span>
                </div>
              </b-dropdown>

            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--Bottom Menu-->
    <div class="bottom-menu bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav id="mainNav" class="navbar navbar-expand-lg">

              <div class="col-md-12 col-lg-12 p-0">
                <div class="collapse navbar-collapse" id="main_menu_wrap">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <nuxt-link to="/fashion" class="nav-link">Fashion</nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link to="/electronics" class="nav-link">Electronics</nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link to="/furniture" class="nav-link">Furniture</nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link to="/groceries" class="nav-link">Groceries</nuxt-link>
                    </li>
                  </ul>
                  <ul class="navbar-nav  my-2 my-lg-0">
                    <li class="nav-item">
                      <nuxt-link to="/merchant-account/login" class="nav-link">Sell on Andshop</nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link to="/my-account/my-orders/1" class="nav-link">Track my order</nuxt-link>
                    </li>

                  </ul>
                </div>
              </div>

                <!-- Mobile Device Menu and Buttons Wrap -->
                <div class="mobile_all_menu_container w-100 d-flex align-content-center justify-content-between">

                  <div class="mobile_right_menu_wrap d-flex align-content-center">
                    <div class="mobile_menu_search_wrap position-relative mr-3">
                      <ProductSearch />
                    </div>

                    <!-- Sidebar Menu General -->
                      <!-- Sidebar Menu General Button -->
                      <b-button v-b-toggle.sidebar_general_menu class="sidebar-menu-button bg-transparent border-0"><i class="fas fa-bars"></i></b-button>

                      <b-sidebar id="sidebar_general_menu" right shadow backdrop>
                        <div class="px-3 py-2">
                          <ul>
                            <li class="nav-item active">
                              <nuxt-link to="/fashion" class="nav-link">Fashion</nuxt-link>
                            </li>
                            <li class="nav-item">
                              <nuxt-link to="/electronics" class="nav-link">Electronics</nuxt-link>
                            </li>
                            <li class="nav-item">
                              <nuxt-link to="/furniture" class="nav-link">Furniture</nuxt-link>
                            </li>
                            <li class="nav-item">
                              <nuxt-link to="/groceries" class="nav-link">Groceries</nuxt-link>
                            </li>
                            <li class="nav-item">
                              <nuxt-link to="/merchant-account/login" class="nav-link">Sell on Andshop</nuxt-link>
                            </li>
                            <li class="nav-item">
                              <nuxt-link class="nav-link" to="/my-account/my-orders/1">Track my order</nuxt-link>
                            </li>
                          </ul>
                        </div>
                      </b-sidebar>
                    <!-- Sidebar Menu General -->

                  </div>
                </div>
                <!-- Mobile Device Menu and Buttons Wrap -->

            </nav>

          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Menu Area End -->
</template>

<script>
  export default {
    name: 'menuBar1',
  }
</script>
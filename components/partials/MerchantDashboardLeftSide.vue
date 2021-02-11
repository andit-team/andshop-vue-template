<template>
  <div class="dashboard-left-bar bg-different pt-4 sticky">
    <!-- Account User Photo -->
    <div class="user-profile-photo-wrap card rounded-0 border-right-0 border-left-0 border-top-0 border-bottom border-light bg-transparent text-center">
      <!-- <div class="customer-info-box"> -->
      <div class="user-photo-wrap rounded-circle mx-auto position-relative">
        <img :src='"@/assets/images/dashboard/shop-user.jpg"' alt="Shop photo" class="rounded-circle w-100">

        <div class="upload-profile-photo">
          <form>
            <div class="form-group">
              <div class="upload-img" style="width:168px;">
                <b-button class="customer-info-box theme-button2 mx-auto text-dark">
                  <span class="font-12">Upload Photo</span>
                  <b-form-file plain accept=".jpg, .jpeg, .png, .gif, .svg"></b-form-file>
                </b-button>
              </div>
            </div>
          </form>
        </div>

      </div> 

      <div class="p-2">
        <h6 class="my-2">OnlineShop</h6>
        <p class="font-14">750 followers | 10 review</p>
      </div>
    </div>
    <!-- Account User Photo -->

    <!-- Left Menu Item List -->
    <div class="dashboard-menu-wrap pb-4 my-4">

      <nav class="mb-3 dashboard-left-menu-list">
        <b-nav vertical>
          <div class="left-menu-item"><b-nav-item to="/merchant-account/"><img :src='"@/assets/images/all-icon/d-dashboard.svg"' alt="Andshop">Dashboard</b-nav-item></div>
          <div class="left-menu-item"><b-nav-item to="/merchant-account/products"><img :src='"@/assets/images/all-icon/d-products.svg"' alt="Andshop">Products</b-nav-item></div>
          <div class="left-menu-item"><b-nav-item to="/merchant-account/orders"><img :src='"@/assets/images/all-icon/d-orders.svg"' alt="Andshop">orders</b-nav-item></div>
          <div class="left-menu-item"><b-nav-item to="/merchant-account/profile"><img :src='"@/assets/images/all-icon/d-profile.svg"' alt="Andshop">profile</b-nav-item></div>
          <div class="left-menu-item"><b-nav-item to="/merchant-account/settings"><img :src='"@/assets/images/all-icon/d-settings.svg"' alt="Andshop">settings</b-nav-item></div>
          <div class="left-menu-item"><b-nav-item to="/fashion"><img :src='"@/assets/images/all-icon/d-logout.svg"' alt="Andshop">Logout</b-nav-item></div>
        </b-nav>
      </nav>

    </div>
  </div>
</template>

<script>
export default {

}
</script>
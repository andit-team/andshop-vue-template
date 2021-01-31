<template>
  <div class="dashboard-left-bar bg-different pt-4 sticky">
    <!-- Account User Photo -->
    <div class="user-profile-photo-wrap card rounded-0 border-right-0 border-left-0 border-top-0 border-bottom border-light bg-transparent text-center">
      <!-- <div class="customer-info-box"> -->
      <div class="user-photo-wrap rounded-circle mx-auto position-relative">
        <img :src='"@/assets/images/dashboard/user.png"' alt="Suraiya Aysha" class="rounded-circle w-100">

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
        <h6>Suraiya Aysha</h6>
        <p class="font-14">+955 81254758</p>
        <p class="total-balance-btn rounded justify-content-center bg-success text-white m-auto">$0.00</p>
      </div>
    </div>
    <!-- Account User Photo -->

    <!-- Left Menu Item List -->
    <div class="dashboard-menu-wrap pb-4 my-4">

      <nav class="mb-3 dashboard-left-menu-list">
        <b-nav vertical>
          <div class="left-menu-item"><b-nav-item to="/my-account/"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="Andshop"> Basic Information</b-nav-item></div>
          <div class="left-menu-item"><b-nav-item to="/my-account/address-book"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="Andshop">Address Book</b-nav-item></div>
          <div class="left-menu-item"><b-nav-item to="/my-account/wallet"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="Andshop">Wallet</b-nav-item></div>

          <div class="left-menu-item"><b-nav-item to="/my-account/wishlist"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="Andshop">Wishlist</b-nav-item></div>

          <div class="left-menu-item">
            <b-nav-item to="/my-account/my-orders/" v-b-toggle.my-orders><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="Andshop">My Orders<i class="fas fa-angle-right"></i></b-nav-item>
              <b-collapse id="my-orders" class="sub-menu">
                <b-nav-item to="/my-account/my-orders/1"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="Andshop">Order Tracking</b-nav-item>
                <b-nav-item to="/my-account/my-orders/my-returns"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="Andshop">My Returns</b-nav-item>
                <b-nav-item to="/my-account/my-orders/my-cancellations"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="Andshop">My Cancellations</b-nav-item>
              </b-collapse>
          </div>

          <div class="left-menu-item"><b-nav-item to="/my-account/my-reviews"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="Andshop">My Reviews</b-nav-item></div>
          <div class="left-menu-item">
            <b-nav-item v-b-toggle.news-feed><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="Andshop">News Feeds<i class="fas fa-angle-right"></i></b-nav-item>
              <b-collapse id="news-feed" class="sub-menu">
                <b-nav-item to="/my-account/news-feed/"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="Andshop">All Posts</b-nav-item>
                <b-nav-item to="/my-account/news-feed/my-posts"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="Andshop">My Posts</b-nav-item>
              </b-collapse>
          </div>
          <div class="left-menu-item"><b-nav-item to="/my-account/notifications"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="Andshop">Notification</b-nav-item></div>
          <div class="left-menu-item"><b-nav-item to="/my-account/auth/registration"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="Andshop">Logout</b-nav-item></div>
        </b-nav>
      </nav>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
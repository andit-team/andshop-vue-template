<template>
  <!-- Login/Registration/ Reset Password Area Start -->
  <section class="login-registration-area section-t-space">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-7 col-lg-6 col-xl-4">
          <form class="p-4">
            <h4 class="text-center mb-4">Reset Password</h4>
            <div class="form-group">
              <input type="password" class="form-control" id="new_password" placeholder="New password">
            </div>
            <div class="form-group">
              <input type="password" class="form-control" id="confirm_password" placeholder="Confirm password">
            </div>
            <div class="form-group">
              <button type="button" class="theme-button rounded w-100 justify-content-center">Reset Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- Login/Registration/ Reset Password Area End -->
</template>

<script>
export default {
  name: 'resetPassword',
  data(){
    return{
      password: '',
      password_confirmation: ''
    }
  },

}
</script>

<style>

</style>

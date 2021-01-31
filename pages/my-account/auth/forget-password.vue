<template>
  <!-- Login/Registration/ Forget Password Area Start -->
  <section class="login-registration-area section-t-space">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-7 col-lg-6 col-xl-4">
          <form class="p-4">
            <h4 class="text-center mb-4">Forget Password?</h4>
            <div class="form-group">
              <input type="text" class="form-control" id="phone" placeholder="Phone No" v-model="phone">
            </div>
            <div class="form-group">
              <button type="button" class="theme-button rounded w-100 justify-content-center">Send Verification Code</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- Login/Registration/ Forget Password Area End -->
</template>

<script>
export default {
  name: 'forgetPassword',
  data(){
    return{
      phone:''
    }
  },

}
</script>

<style>

</style>
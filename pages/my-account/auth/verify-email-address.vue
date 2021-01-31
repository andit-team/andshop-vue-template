<template>
  <!-- Verify Email Address -->
  <section class="login-registration-area section-t-space">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-7 col-lg-6 col-xl-4">
          <form class="p-4">
            <h4 class="text-center mb-4">Verify your email address</h4>
            <div class="form-group">
              <input type="text" class="form-control" id="email" placeholder="Email or Phone No" v-model="email">
            </div>
            <div class="form-group">
              <button type="submit" class="theme-button rounded w-100 justify-content-center">Send Verification Code</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- Verify Email Address End -->
</template>

<script>
export default {
  name: "verifyEmailAddress",
  data(){
    return{
      email:''
    }
  },
  mounted() {
    this.email=this.$store.state.userinfo.auth.emailAddress;
  }
}
</script>

<style scoped>

</style>

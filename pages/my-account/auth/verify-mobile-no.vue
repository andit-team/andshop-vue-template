<template>
  <!-- Verify Mobile No -->
  <section class="login-registration-area section-t-space">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-7 col-lg-6 col-xl-4">
          <b-alert dismissible variant="danger" :show="authFailed">
            <strong>Warning!</strong> {{ authError }}
          </b-alert>
          <form class="p-4" @submit.prevent="sendVerificationCode">
            <h4 class="text-center mb-4">Verify your mobile no</h4>
            <div class="form-group">
              <input type="text" class="form-control" id="phone" placeholder="Phone No" v-model="phone">
            </div>
            <div class="form-group">
              <button type="submit" class="theme-button rounded w-100 justify-content-center">Send Verification Code</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- Verify Mobile No End -->
</template>

<script>
import {user_verify_otp} from "@/api/urls";

export default {
  name: "verifyMobileNo",
  data(){
    return{
      phone:'',
      authFailed: false,
      authError: '',
      api_base_url : this.$config.API_BASE_URL
    }
  },
  methods:{
    sendVerificationCode() {
      let self = this;
      let config = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }
      let payload = {
        phone: self.phone,
      }

      self.$axios.$post(this.api_base_url+user_verify_otp, payload, config).then((res) => {
        if (res.error === true){
          this.authFailed=true
          this.authError=res.msg
        }
        else {
          this.$store.commit('userinfo/updateAuthMobileNo',self.phone);
          this.$router.push('/auth/verify-otp');
        }
      }).catch((error)=>{
        console.log(error)
      });
    },
  },
  mounted() {
    this.phone=this.$store.state.userinfo.auth.mobileNo;
  },
}
</script>

<style scoped>

</style>

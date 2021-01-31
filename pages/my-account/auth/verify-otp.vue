<template>
  <!-- Login/Registration Area Start -->
  <section class="login-registration-area verify-otp-page section-t-space">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-12 col-md-8 col-lg-6">
          <b-alert dismissible variant="danger" :show="authFailed">
            <strong>Warning!</strong> {{ authError }}
          </b-alert>
          <form class="p-4 text-center" @submit.prevent="validateAccount">
            <h4 class="text-center mb-2">Please enter the OTP to verify your account</h4>
            <p class="text-center mb-3">A One-Time Password has been sent to {{ authMobileNo }}</p>
            <div class="form-group mb-4">
              <input type="number" maxlength="1" min="0" v-on:keyup="$event.target.nextElementSibling.focus()">
              <input type="number" maxlength="1" min="0" v-on:keyup="$event.target.nextElementSibling.focus()">
              <input type="number" maxlength="1" min="0" v-on:keyup="$event.target.nextElementSibling.focus()">
              <input type="number" maxlength="1" min="0" v-on:keyup="$event.target.nextElementSibling.focus()">
              <input type="number" maxlength="1" min="0">
            </div>

            <div class="form-group">
              <button type="submit" class="btn-success p-2 rounded w-sm-100 w-50 justify-content-center font-bold">Verify</button>
            </div>

            <div class="form-group text-center">
              <span class="text-dark font-weight-600">{{ countDown }}s - </span>
              <button type="button" class="font-bold justify-content-center resend-otp-btn" @click="resendOTP">Resend OTP</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- Login/Registration Area End -->
</template>

<script>
import {get_user_profile, user_login, user_verify_otp} from "@/api/urls";

export default {
  name: 'verifyOTP',
  data(){
    return{
      countDown : 60,
      firstDigit : '',
      secondDigit : '',
      thirdDigit : '',
      fourthDigit : '',
      fifthDigit : '',
      sixDigit : '',
      verifyOTP : this.fifthDigit + this.secondDigit + this.thirdDigit + this.fourthDigit + this.fifthDigit,
      api_base_url : this.$config.API_BASE_URL,
      authFailed: false,
      authError: '',
    }
  },
  methods:{

    countDownTimer() {
      if(this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      }
    },

    getUserProfile: function() {
      let self = this;
      let config = {
        headers: {'Authorization': this.$auth.strategy.token.get()},
      }

      self.$axios.$get(this.api_base_url+get_user_profile, config).then((res) => {
        if (res.error === true){
          this.authFailed=true
          this.authError=res.msg
        }
        else {
          this.$store.commit('userinfo/updateLoggedInStatus',true);
          this.$store.commit('userinfo/updateUserInfo',res.data);
          this.$router.push('/');
        }
      }).catch((error)=>{
        console.log(error)
      });
    },

    validateAccount: function() {
      if (this.verifyOTP.length===5){
        let self = this;
        let config = {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        }
        let payload = {
          phone: self.authMobileNo,
          otp_code: self.verifyOTP,
        }

        self.$axios.$post(this.api_base_url+verify_otp, payload, config).then((res) => {
          if (res.error === true){
            this.authFailed=true
            this.authError=res.msg
          }
          else {
            this.$cookies.set('customerAccessToken', res.data.access_token, {
              path: '/',
              maxAge: 60 * 60
            })
            this.getUserProfile();
          }
        }).catch((error)=>{
          console.log(error)
        });
      }
    },

    resendOTP: function() {
          let self = this;
          let config = {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          }
          let payload = {
            phone: self.authMobileNo,
          }

          self.$axios.$post(this.api_base_url+user_verify_otp, payload, config).then((res) => {
            if (res.error === true){
              this.authFailed=true
              this.authError=res.msg
            }
            else {
              Vue.$toast.success('OTP Resend to your phone no');
              // this.$toastr.s("SUCCESS MESSAGE", "OTP Resend to your phone no");
              this.countDown=60;
            }
          }).catch((error)=>{
            console.log(error)
          });
        },
  },
  computed:{
    authMobileNo(){
      return this.$store.state.userinfo.auth.mobileNo;
    }
  },
  mounted() {
    if (this.authMobileNo == ''){
      this.$router.push('/auth/verify-mobile-no');
    }
  },

  created: function () {
    this.countDownTimer()
  }

}
</script>

<style>
.resend-otp-btn {
	text-decoration: underline;
}
</style>

<template>
  <!-- Login/Registration Area Start -->
  <section class="login-registration-area verify-otp-page section-t-space">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-12 col-md-8 col-lg-6">
          <form class="p-4 text-center" @submit.prevent>
            <h4 class="text-center mb-2">Please enter the OTP to verify your account</h4>
            <p class="text-center mb-3">A One-Time Password has been sent to +99 0145875632</p>

            <div class="verify-otp-wrap d-flex flex-row justify-content-center mb-4">
              <v-otp-input
                ref="otpInput"
                input-classes="otp-input"
                separator=""
                :num-inputs="5"
                :should-auto-focus="true"
                :is-input-num="true"
                @on-change="handleOnChange"
                @on-complete="handleOnComplete"
              />
            </div>

            <div class="form-group">
              <button @click.prevent="goDashboard" class="theme-button rounded w-sm-100 w-50 justify-content-center">Verify</button>
            </div>

            <div class="form-group text-center">
              <span class="text-dark font-weight-600">{{ countDown }}s - </span>
              <button class="font-bold justify-content-center resend-otp-btn">Resend OTP</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- Login/Registration Area End -->
</template>

<script>

export default {
  name: 'verifyOTP',
  data(){
    return{
      countDown : 60,
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

    // Verify OTP Plugins Methods
    handleOnComplete(value) {
      console.log('OTP completed: ', value);
    },
    handleOnChange(value) {
      console.log('OTP changed: ', value);
    },

    goDashboard() {
      this.$router.push({
        path: '/my-account/'
      });
    }

  },

  created: function () {
    this.countDownTimer()
  }

}
</script>

<style lang="scss">
.resend-otp-btn {
	text-decoration: underline;
}
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-bottom: 2px solid var(--border-color);
  text-align: center;
  &.error {
    border: 1px solid red !important;
  }
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
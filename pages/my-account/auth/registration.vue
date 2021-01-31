<template>
  <!-- Login/Registration Area Start -->
  <section class="login-registration-area section-t-space">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-7 col-lg-6 col-xl-4">
          <div class="alert alert-danger alert-dismissible" v-if="authFailed" @click="authFailed=false">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Warning!</strong> {{ authError }}.
          </div>
          <ValidationObserver v-slot="{ handleSubmit }">
            <form class="p-4" @submit.prevent="handleSubmit(registerUser)">
              <h4 class="text-center mb-4">Create an account</h4>
              <div class="form-group">
                <ValidationProvider name="First name" rules="required" v-slot="{ errors }">
                  <input type="text" class="form-control" id="f_name" placeholder="First name" v-model="first_name">
                  <span class="text-danger ">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="form-group">
                <ValidationProvider name="Last name" rules="required" v-slot="{ errors }">
                  <input type="text" class="form-control" id="l_name" placeholder="Last name" v-model="last_name">
                  <span class="text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>

              <div class="form-group">
                <ValidationProvider name="Phone no" rules="required|numeric|min:11|max:11" v-slot="{ errors }">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">+88</div>
                    </div>
                    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="01000000000" v-model="phone">
                  </div>
                  <span class="text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>

              <div class="form-group">
                <ValidationProvider name="Email address" rules="email" v-slot="{ errors }">
                  <input type="email" class="form-control" id="email" placeholder="Your email (optional)" v-model="email">
                  <span class="text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="form-group">
                <ValidationProvider name="Password" rules="required" v-slot="{ errors }">
                  <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
                  <span class="text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>

              <div class="form-group">
                <button type="submit" class="theme-button rounded w-100 justify-content-center">Register</button>
              </div>
              <p class="dont-have-account text-center">Already have an account? <nuxt-link to="/my-account/auth/login">Login</nuxt-link></p>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </section>
  <!-- Login/Registration Area End -->
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full.esm';

export default {
  name : 'userRegistration',
  components: {
    ValidationProvider,
    ValidationObserver
  },

  data(){
    return{
      first_name : '',
      last_name : '',
      email : '',
      phone : '',
      password : '',
      authFailed: false,
      authError: '',
    }
  },

}
</script>

<style>

</style>

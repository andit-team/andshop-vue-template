<template>
  <section class="coming-soon-page section-t-space d-flex align-items-center justify-content-center">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="coming-soon-img text-center">
            <img :src="require('@/assets/images/others/coming-soon.svg')" alt="Comingsoon" class="img-fluid">
          </div>
          <div>
            <form
              class="form-inline subscribe-form rounded-left justify-content-center mt-5"
              id="subscribe-form"
              name="subscribe-form"
            >
              <div class="form-group mb-0">
                <input
                  type="text"
                  class="form-control rounded-left"
                  name="subscribe_email"
                  id="subscribe_email"
                  placeholder="Enter your email"
                  required="required"
                />
              </div>
              <button class="theme-button rounded-right">subscribe</button>
            </form>
          </div>
          <div>
            <ul class="follow-us-social d-flex justify-content-center mt-4">
              <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i class="fab fa-youtube"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
          <div class="text-center mt-3"><nuxt-link to="/fashion" style="text-decoration:underline;" class="heading-color font-bold">Go back to Home</nuxt-link></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'comingSoon',
  layout: 'error-layout',
  head() {
    return {
      title: 'Coming Soon'
    }
  },

}
</script>
<template>
  <div class="light-layout">
    <div class="container">
      <section class="small-section border-section border-top-0 section-b-40-space">
        <div class="row">
          <div class="col-md-12 col-lg-6">
            <div class="subscribe">
              <div>
                <h5 class="mb-2">KNOW IT ALL FIRST!</h5>
                <p>Never Miss Anything From us By Signing Up To Our Newsletter.</p>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6">
            <form
              class="form-inline subscribe-form rounded-left"
              method="post"
              id="subscribe-form"
              name="subscribe-form"
              target="_blank"
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
              <button type="submit" class="theme-button rounded-right">subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
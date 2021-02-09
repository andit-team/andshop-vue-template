<template>
  <div>
    <!-- Breadcrumb Area Start -->
    <div class="breadcrumb-area bg-white">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent m-0 section-t-40-space section-b-40-space">
                <li class="breadcrumb-item"><nuxt-link to="/fashion">Home</nuxt-link></li>
                <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Area End -->

    <section class="contact-us-page section-t-space">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-7">
            <div class="google-map">
              <GmapMap
                :center="{lat:22.820000, lng:89.550003}"
                :zoom="10"
              >
                <GmapMarker
                  :key="index"
                  v-for="(m, index) in markers"
                  :position="m.position"
                  :clickable="true"
                  :draggable="true"
                  @click="center=m.position"
                />
              </GmapMap>

            </div>

          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-5">
            <div class="contact-address-wrap">

              <ul class="list-unstyled">

                <li class="media">
                  <div class="contact-icon">
                    <i class="fas fa-phone-alt"></i>
                    <h6 class="text-uppercase">Contact us</h6>
                  </div>
                  <div class="media-body">
                    <p>+91 123-456-7890</p>
                    <p>+91 123-456-7890</p>
                  </div>
                </li>

                <li class="media">
                  <div class="contact-icon">
                    <i class="fas fa-map-marker-alt"></i>
                    <h6 class="text-uppercase">Address</h6>
                  </div>
                  <div class="media-body">
                    <p class="w-75">32,Choto Mirzapur, Ahsan Ahamad Road, Peace Palace, First Floor, Khulna-9100, Bangladesh </p>
                  </div>
                </li>

                <li class="media">
                  <div class="contact-icon">
                    <i class="far fa-envelope"></i>
                    <h6 class="text-uppercase">Email</h6>
                  </div>
                  <div class="media-body">
                    <p>demo.email@hotmail.com</p>
                    <p>demo.email@hotmail.com</p>
                  </div>
                </li>

                <li class="media">
                  <div class="contact-icon">
                    <i class="fas fa-fax"></i>
                    <h6 class="text-uppercase">Fax</h6>
                  </div>
                  <div class="media-body">
                    <p>demo.email@hotmail.com</p>
                    <p>demo.email@hotmail.com</p>
                  </div>
                </li>

              </ul>

            </div>
          </div>
          <div class="col-12">
            <div class="contact-form section-t-space">
            <form>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="f_name">First Name</label>
                  <input type="text" class="form-control" id="f_name" placeholder="First name">
                </div>
                <div class="form-group col-md-6">
                  <label for="l_name">Last Name</label>
                  <input type="password" class="form-control" id="l_name" placeholder="Last name">
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="phone">Phone Number</label>
                  <input type="text" class="form-control" id="phone" placeholder="Phone number">
                </div>
                <div class="form-group col-md-6">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="Email">
                </div>
              </div>
              <div class="form-group">
                <label for="message">Your Message</label>
                <textarea name="message" id="message" class="form-control" cols="20" rows="5" placeholder="Type your message"></textarea>
              </div>
              <button type="submit" class="theme-button rounded">Submit</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  head() {
    return {
      title: 'Contact Us'
    }
  },
  data(){
    return{
      center: { lat: 22.820000, lng: 89.550003 },
      markers: [
        {
          position: {
            lat: 22.820000,
            lng: 89.550003
          }
        }
      ],
    }
  }

}
</script>
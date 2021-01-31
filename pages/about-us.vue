<template>
  <div>
    <!-- Breadcrumb Area Start ------------->
    <div class="breadcrumb-area bg-white">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent m-0 section-t-40-space section-b-40-space">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item"><a href="#">Pages</a></li>
                <li class="breadcrumb-item active" aria-current="page">About us</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Area End ------------->

    <section class="who-we-are section-t-space">
      <div class="container container-1170">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <div class="who-we-img-wrap text-center">
              <img :src="require('@/assets/images/others/who-we-are.jpg')" alt="who we are" class="img-fluid">
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="who-we-content">
              <h3 class="mb-3">Who we are</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam exercitationem suscipit eaque, voluptatem quaerat non quibusdam libero error adipisci magni?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam exercitationem suscipit eaque, voluptatem quaerat non quibusdam libero error adipisci magni?</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="why-choose-us section-t-space bg-different">
      <div class="container container-1170">
        <div class="row justify-content-center">
          <div class="col-12 col-md-6">
            <div class="text-center">
              <h3 class="mb-3">Why choose us</h3>
              <p class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam exercitationem suscipit eaque, voluptatem quaerat non quibusdam libero error adipisci magni?</p>
            </div>
          </div>
        </div>
        <div class="row why-choose-wrap justify-content-center">
          <div class="col-12 col-sm-6 col-md-4">
            <div class="card why-choose-box p-4 mt-3 rounded text-center">
              <span class="bg-red rounded-circle"><i class="far fa-edit"></i></span>
              <div class="card-body">
                <h5 class="card-title">Creative design</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, similique modi. Tempore nisi officia consequuntur!</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <div class="card why-choose-box p-4 mt-3 rounded text-center">
              <span class="bg-red rounded-circle"><i class="far fa-edit"></i></span>
              <div class="card-body">
                <h5 class="card-title">Creative design</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, similique modi. Tempore nisi officia consequuntur!</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <div class="card why-choose-box p-4 mt-3 rounded text-center">
              <span class="bg-red rounded-circle"><i class="far fa-edit"></i></span>
              <div class="card-body">
                <h5 class="card-title">Creative design</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, similique modi. Tempore nisi officia consequuntur!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-support-area section-t-space section-b-40-space">
      <div class="container container-1170">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-4">
            <div class="card support-box p-4 mb-3 text-center">
              <span class="rounded-circle font-30"><i class="fas fa-truck-moving"></i></span>
              <div class="card-body p-0">
                <h5 class="card-title">Free delivery</h5>
                <p class="card-text">Possimus, similique modi. Tempore nisi officia consequuntur!</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4">
            <div class="card support-box p-4 mb-3 text-center">
              <span class="rounded-circle font-30"><i class="fas fa-hand-holding-usd"></i></span>
              <div class="card-body p-0">
                <h5 class="card-title">30 Day return</h5>
                <p class="card-text">Possimus, similique modi. Tempore nisi officia consequuntur!</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4">
            <div class="card support-box p-4 mb-3 text-center">
              <span class="rounded-circle font-30"><i class="fas fa-headset"></i></span>
              <div class="card-body p-0">
                <h5 class="card-title">24/7 support</h5>
                <p class="card-text">Possimus, similique modi. Tempore nisi officia consequuntur!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
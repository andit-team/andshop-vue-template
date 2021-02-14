<template>
  <div class="reviews-page">
    <b-tabs>
      <b-tab title="To Be Reviewed(19)">

        <div class="review-wrap p-3 d-flex justify-content-between mt-3">

          <div class="product-side">
            <h6 class="purchase-title text-secondary mb-2">Purchase on 21 Dec 2020</h6>
            <ul class="list-unstyled">
              <li class="media review-product-item">
                <img :src='require("@/assets/images/fashion/1.jpg")' class="mr-3" alt="product" style="height:60px;">
                <div class="media-body">
                  <h6 class="mt-0 mb-1">Proton Mobile Phone C9</h6>
                  Proton, Color Family:Navy Blue
                </div>
              </li>
            </ul>
          </div>
          <div class="seller-side">
            Sold by <nuxt-link to="/shop" class="color-blue">Khan Agro Merchant</nuxt-link>
            <div><nuxt-link to="/my-account/my-reviews/write-review" class="theme-button small-button rounded mt-2">Write review</nuxt-link></div>
          </div>

        </div>

        <div class="review-wrap p-3 d-flex justify-content-between mt-3">

          <div class="product-side">
            <h6 class="purchase-title text-secondary mb-2">Purchase on 21 Dec 2020</h6>
            <ul class="list-unstyled">
              <li class="media review-product-item">
                <img :src='require("@/assets/images/fashion/2.jpg")' class="mr-3" alt="product" style="height:60px;">
                <div class="media-body">
                  <h6 class="mt-0 mb-1">Coat</h6>
                  Proton, Color Family:Navy Blue
                </div>
              </li>
              <li class="media review-product-item">
                <img :src='require("@/assets/images/fashion/3.jpg")' class="mr-3" alt="product" style="height:60px;">
                <div class="media-body">
                  <h6 class="mt-0 mb-1">Proton Mobile Phone C9</h6>
                  Proton, Color Family:Navy Blue
                </div>
              </li>
            </ul>
          </div>
          <div class="seller-side">
            Sold by <nuxt-link to="/shop" class="color-blue">Khan Agro Merchant</nuxt-link>
            <div><nuxt-link to="/my-account/my-reviews/write-review" class="theme-button small-button rounded mt-2">Write review</nuxt-link></div>
          </div>

        </div>

        <div class="review-wrap p-3 d-flex justify-content-between mt-3">

          <div class="product-side">
            <h6 class="purchase-title text-secondary mb-2">Purchase on 21 Dec 2020</h6>
            <ul class="list-unstyled">
              <li class="media review-product-item">
                <img :src='require("@/assets/images/fashion/4.jpg")' class="mr-3" alt="product" style="height:60px;">
                <div class="media-body">
                  <h6 class="mt-0 mb-1">Proton Mobile Phone C9</h6>
                  Proton, Color Family:Navy Blue
                </div>
              </li>
              <li class="media review-product-item">
                <img :src='require("@/assets/images/fashion/5.jpg")' class="mr-3" alt="product" style="height:60px;">
                <div class="media-body">
                  <h6 class="mt-0 mb-1">Proton Mobile Phone C9</h6>
                  Proton, Color Family:Navy Blue
                </div>
              </li>
              <li class="media review-product-item">
                <img :src='require("@/assets/images/fashion/6.jpg")' class="mr-3" alt="product" style="height:60px;">
                <div class="media-body">
                  <h6 class="mt-0 mb-1">Proton Mobile Phone C9</h6>
                  Proton, Color Family:Navy Blue
                </div>
              </li>
            </ul>
          </div>
          <div class="seller-side">
            Sold by <nuxt-link to="/shop" class="color-blue">Khan Agro Merchant</nuxt-link>
            <div><nuxt-link to="/my-account/my-reviews/write-review" class="theme-button small-button rounded mt-2">Write review</nuxt-link></div>
          </div>

        </div>

      </b-tab>

      <b-tab title="History(3)">
        <div class="review-wrap p-3 d-flex justify-content-between mt-3">

          <div class="product-side">
            <h6 class="purchase-title text-secondary mb-2">Purchase on 21 Dec 2020</h6>
            <p class="font-weight-bolder">Your product rating & review:</p>
            <ul class="list-unstyled">
              <li class="media review-product-item mt-2">
                <img :src='require("@/assets/images/fashion/7.jpg")' class="mr-3" alt="product" style="height:60px;">
                <div class="media-body">
                  <h6 class="mt-0 mb-1 font-14">Samsung Galaxy A51 - Android 10; One UI - 6GB/128GB - Quad Camera - 48MP Camera</h6>
                  Proton, Color Family:Navy Blue
                  <div class="customer-given-star mt-2">
                    <i class="fas fa-star rating-color"></i>
                    <i class="fas fa-star rating-color"></i>
                    <i class="fas fa-star rating-color"></i>
                    <i class="fas fa-star non-rating-color"></i>
                    <i class="fas fa-star non-rating-color"></i>
                    <span class="ml-2">Delightful</span>
                  </div>
                  
                  <p class="mt-0 mt-2 font-14">Ipsum dolor, sit amet consectetur adipisicing elit. Suscipit cumque facilis consequuntur laboriosam, provident voluptatum. Rerum deleniti doloremque quis quaerat!</p>
                 
                </div>
              </li>
            </ul>
          </div>
          <div class="seller-side">
            Sold by <nuxt-link to="/shop" class="color-blue">Khan Agro Merchant</nuxt-link>
            <div class="seller-review">
              <div class="my-2 font-weight-bolder">Your seller review:</div>
              <div class="seller-review-emoji d-flex align-items-center"><span class="active"><i class="far fa-smile"></i></span>Positive</div>
            </div>
          </div>

        </div>
        <div class="review-wrap p-3 d-flex justify-content-between mt-3">

          <div class="product-side">
            <h6 class="purchase-title text-secondary mb-2">Purchase on 21 Dec 2020</h6>
            <p class="font-weight-bolder">Your product rating & review:</p>
            <ul class="list-unstyled">
              <li class="media review-product-item mt-2">
                <img :src='require("@/assets/images/fashion/8.jpg")' class="mr-3" alt="product" style="height:60px;">
                <div class="media-body">
                  <h6 class="mt-0 mb-1 font-14">Samsung Galaxy A51 - Android 10; One UI - 6GB/128GB - Quad Camera - 48MP Camera</h6>
                  Proton, Color Family:Navy Blue
                  <div class="customer-given-star mt-2">
                    <i class="fas fa-star rating-color"></i>
                    <i class="fas fa-star rating-color"></i>
                    <i class="fas fa-star rating-color"></i>
                    <i class="fas fa-star rating-color"></i>
                    <i class="fas fa-star non-rating-color"></i>
                    <span class="ml-2">Delightful</span>
                  </div>
           
                </div>
              </li>
              <li class="media review-product-item mt-2">
                <img :src='require("@/assets/images/fashion/9.jpg")' class="mr-3" alt="product" style="height:60px;">
                <div class="media-body">
                  <h6 class="mt-0 mb-1 font-14">Samsung Galaxy A51 - Android 10; One UI - 6GB/128GB - Quad Camera - 48MP Camera</h6>
                  Proton, Color Family:Navy Blue
                  <div class="customer-given-star mt-2">
                    <i class="fas fa-star rating-color"></i>
                    <i class="fas fa-star rating-color"></i>
                    <i class="fas fa-star rating-color"></i>
                    <i class="fas fa-star non-rating-color"></i>
                    <i class="fas fa-star non-rating-color"></i>
                    <span class="ml-2">Delightful</span>
                  </div>
                  
                  <p class="mt-0 mt-2 font-14">Dolor, sit amet consectetur adipisicing elit. Ipsa illum facilis excepturi praesentium quisquam nostrum!</p>
                 
                </div>
              </li>
              <li class="media review-product-item mt-2">
                <img :src='require("@/assets/images/fashion/10.jpg")' class="mr-3" alt="product" style="height:60px;">
                <div class="media-body">
                  <h6 class="mt-0 mb-1 font-14">Samsung Galaxy A51 - Android 10; One UI - 6GB/128GB - Quad Camera - 48MP Camera</h6>
                  Proton, Color Family:Navy Blue
                  <div class="customer-given-star mt-2">
                    <i class="fas fa-star rating-color"></i>
                    <i class="fas fa-star rating-color"></i>
                    <i class="fas fa-star rating-color"></i>
                    <i class="fas fa-star non-rating-color"></i>
                    <i class="fas fa-star non-rating-color"></i>
                    <span class="ml-2">Delightful</span>
                  </div>
                  
                  <p class="mt-0 mt-2 font-14">Explicabo at iure earum quaerat, doloremque eius deleniti.</p>
                 
                </div>
              </li>
            </ul>
          </div>
          <div class="seller-side">
            Sold by <nuxt-link to="/shop" class="color-blue">Khan Agro Merchant</nuxt-link>
            <div class="seller-review">
              <div class="my-2 font-weight-bolder">Your seller review:</div>
              <div class="seller-review-emoji d-flex align-items-center"><span class="active"><i class="far fa-frown"></i></span>Negative</div>
            </div>
          </div>

        </div>
        <div class="review-wrap p-3 d-flex justify-content-between mt-3">

          <div class="product-side">
            <h6 class="purchase-title text-secondary mb-2">Purchase on 21 Dec 2020</h6>
            <p class="font-weight-bolder">Your product rating & review:</p>
            <ul class="list-unstyled">
              <li class="media review-product-item mt-2">
                <img :src='require("@/assets/images/fashion/11.jpg")' class="mr-3" alt="product" style="height:60px;">
                <div class="media-body">
                  <h6 class="mt-0 mb-1 font-14">Samsung Galaxy A51 - Android 10; One UI - 6GB/128GB - Quad Camera - 48MP Camera</h6>
                  Proton, Color Family:Navy Blue
                  <div class="customer-given-star mt-2">
                    <i class="fas fa-star rating-color"></i>
                    <i class="fas fa-star rating-color"></i>
                    <i class="fas fa-star rating-color"></i>
                    <i class="fas fa-star non-rating-color"></i>
                    <i class="fas fa-star non-rating-color"></i>
                    <span class="ml-2">Delightful</span>
                  </div>
                  
                  <p class="mt-0 mt-2 font-14">Sit amet consectetur adipisicing elit. Delectus et sit vel hic officia, magnam accusamus totam nihil, a, inventore magni. Autem veniam architecto similique explicabo ab molestias temporibus expedita!</p>
                 
                </div>
              </li>
              <li class="media review-product-item mt-2">
                <img :src='require("@/assets/images/fashion/12.jpg")' class="mr-3" alt="product" style="height:60px;">
                <div class="media-body">
                  <h6 class="mt-0 mb-1 font-14">Samsung Galaxy A51 - Android 10; One UI - 6GB/128GB - Quad Camera - 48MP Camera</h6>
                  Proton, Color Family:Navy Blue
                  <div class="customer-given-star mt-2">
                    <i class="fas fa-star rating-color"></i>
                    <i class="fas fa-star rating-color"></i>
                    <i class="fas fa-star rating-color"></i>
                    <i class="fas fa-star non-rating-color"></i>
                    <i class="fas fa-star non-rating-color"></i>
                    <span class="ml-2">Delightful</span>
                  </div>
                  
                  <p class="mt-0 mt-2 font-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci, officia beatae ratione laborum aut accusantium vero sunt, at delectus quisquam ipsa.</p>
                 
                </div>
              </li>
              <li class="media review-product-item mt-2">
                <img :src='require("@/assets/images/fashion/13.jpg")' class="mr-3" alt="product" style="height:60px;">
                <div class="media-body">
                  <h6 class="mt-0 mb-1 font-14">Samsung Galaxy A51 - Android 10; One UI - 6GB/128GB - Quad Camera - 48MP Camera</h6>
                  Proton, Color Family:Navy Blue
                  <div class="customer-given-star mt-2">
                    <i class="fas fa-star rating-color"></i>
                    <i class="fas fa-star rating-color"></i>
                    <i class="fas fa-star rating-color"></i>
                    <i class="fas fa-star non-rating-color"></i>
                    <i class="fas fa-star non-rating-color"></i>
                    <span class="ml-2">Delightful</span>
                  </div>
                  
                  <p class="mt-0 mt-2 font-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit culpa cum voluptatem consequatur labore a obcaecati quo?</p>
                 
                </div>
              </li>
            </ul>
          </div>
          <div class="seller-side">
            Sold by <nuxt-link to="/shop" class="color-blue">Khan Agro Merchant</nuxt-link>
            <div class="seller-review">
              <div class="my-2 font-weight-bolder">Your seller review:</div>
              <div class="seller-review-emoji d-flex align-items-center"><span class="active"><i class="far fa-smile"></i></span>Positive</div>
            </div>
          </div>

        </div>

      </b-tab>

      <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="notification-wrap"
      class="justify-content-center mt-4"
      ></b-pagination>

    </b-tabs>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      rows: 100,
      perPage: 10,
      currentPage: 1
    }
  }
}
</script>
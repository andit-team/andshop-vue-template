<template>
  <div class="reviews-page write-review-page">
    <h4 class="mb-3">Write review</h4>
    <div class="review-wrap p-3 d-flex justify-content-between mt-3">

      <div class="product-side">
        <h6 class="purchase-title text-secondary mb-2">Delivered on 21 Dec 2020</h6>
        <p class="font-weight-bolder">Rate and review purchase product:</p>
        <ul class="list-unstyled">
          <li class="media review-product-item mt-2">
            <img :src='"@/assets/images/products/1.jpg"' class="mr-3" alt="product" style="height:60px;">
            <div class="media-body">
              <h6 class="mt-0 mb-1 font-14">Samsung Galaxy A51 - Android 10; One UI - 6GB/128GB - Quad Camera - 48MP Camera</h6>
              Proton, Color Family:Navy Blue

              <form>
                <div class="form-group customer-given-star">
                  <div>
                    <b-form-rating inline v-model="userRaing" no-border variant="warning" class="p-0 bg-transparent"></b-form-rating>
                    <span class="ml-2">{{ userRating[userRaing] }}</span>
                  </div>
                </div>

                <div class="form-group">
                  <label for="review">Review Details</label>
                  <textarea class="form-control font-14" name="review" rows="3" placeholder="Write your review"></textarea>
                </div>
                
                <div class="form-group">
                  <div class="upload-img" style="width:168px;">
                    <b-button class="customer-info-box theme-button2 mx-auto text-dark"> <img src="https://www.flaticon.com/svg/static/icons/svg/1040/1040241.svg" alt="upload" style="height:30px;">
                      <span class="font-12">Upload Photo</span>
                      <b-form-file plain accept=".jpg, .jpeg, .png, .gif, .svg"></b-form-file>
                    </b-button>
                  </div>
                </div>

                <div class="important-note">
                  <h6 class="mb-2">Important:</h6>
                  <ul>
                    <li>Maximum 6 images can be uploaded</li>
                    <li>Maximum 6 images can be uploaded</li>
                    <li>Maximum 6 images can be uploaded</li>
                    <li>Maximum 6 images can be uploaded</li>
                  </ul>
                </div>

              </form>
              
            </div>
          </li>
          <li class="media review-product-item mt-2">
            <img :src='"@/assets/images/products/1.jpg"' class="mr-3" alt="product" style="height:60px;">
            <div class="media-body">
              <h6 class="mt-0 mb-1 font-14">Samsung Galaxy A51 - Android 10; One UI - 6GB/128GB - Quad Camera - 48MP Camera</h6>
              Proton, Color Family:Navy Blue

              <form>
                <div class="form-group customer-given-star">
                  <div>
                    <b-form-rating inline v-model="userRaing" no-border variant="warning" class="p-0 bg-transparent"></b-form-rating>
                    <span class="ml-2">{{ userRating[userRaing] }}</span>
                  </div>
                </div>

                <div class="form-group">
                  <label for="review">Review Details</label>
                  <textarea class="form-control font-14" name="review" rows="3" placeholder="Write your review"></textarea>
                </div>
                
                <div class="form-group">
                  <div class="upload-img" style="width:168px;">
                    <b-button class="customer-info-box theme-button2 mx-auto text-dark"> <img src="https://www.flaticon.com/svg/static/icons/svg/1040/1040241.svg" alt="upload" style="height:30px;">
                      <span class="font-12">Upload Photo</span>
                      <b-form-file plain accept=".jpg, .jpeg, .png, .gif, .svg"></b-form-file>
                    </b-button>
                  </div>
                </div>

                <div class="important-note">
                  <h6 class="mb-2">Important:</h6>
                  <ul>
                    <li>Maximum 6 images can be uploaded</li>
                    <li>Maximum 6 images can be uploaded</li>
                    <li>Maximum 6 images can be uploaded</li>
                    <li>Maximum 6 images can be uploaded</li>
                  </ul>
                </div>

              </form>
              
            </div>
          </li>
          <li class="media review-product-item mt-2">
            <img :src='"@/assets/images/products/1.jpg"' class="mr-3" alt="product" style="height:60px;">
            <div class="media-body">
              <h6 class="mt-0 mb-1 font-14">Samsung Galaxy A51 - Android 10; One UI - 6GB/128GB - Quad Camera - 48MP Camera</h6>
              Proton, Color Family:Navy Blue

              <form>
                <div class="form-group customer-given-star">
                  <div>
                    <b-form-rating inline v-model="userRaing" no-border variant="warning" class="p-0 bg-transparent"></b-form-rating>
                    <span class="ml-2">{{ userRating[userRaing] }}</span>
                  </div>
                </div>

                <div class="form-group">
                  <label for="review">Review Details</label>
                  <textarea class="form-control font-14" name="review" rows="3" placeholder="Write your review"></textarea>
                </div>
                
                <div class="form-group">
                  <div class="upload-img" style="width:168px;">
                    <b-button class="customer-info-box theme-button2 mx-auto text-dark"> <img src="https://www.flaticon.com/svg/static/icons/svg/1040/1040241.svg" alt="upload" style="height:30px;">
                      <span class="font-12">Upload Photo</span>
                      <b-form-file plain accept=".jpg, .jpeg, .png, .gif, .svg"></b-form-file>
                    </b-button>
                  </div>
                </div>

                <div class="important-note">
                  <h6 class="mb-2">Important:</h6>
                  <ul>
                    <li>Maximum 6 images can be uploaded</li>
                    <li>Maximum 6 images can be uploaded</li>
                    <li>Maximum 6 images can be uploaded</li>
                    <li>Maximum 6 images can be uploaded</li>
                  </ul>
                </div>

              </form>
              
            </div>
          </li>
        </ul>
      </div>
      <div class="seller-side">
        Sold by <nuxt-link to="/shop" class="color-blue">Khan Agro Merchant</nuxt-link>
        <div class="seller-review">

          <form>
            <div class="form-group">
              <div class="my-2 font-weight-bolder">Rate and review your seller:</div>
              <div class="seller-review-emoji d-flex align-items-center">
                <span :class="{  'active' : (merchantRating==1) }" @click="merchantRating=1"><i class="far fa-frown"></i></span>
                <span :class="{  'active' : (merchantRating==2) }" @click="merchantRating=2"><i class="far fa-meh"></i></span>
                <span :class="{  'active' : (merchantRating==3) }" @click="merchantRating=3"><i class="far fa-smile"></i></span>
                {{merchantRatingGroup[merchantRating]}}
              </div>
            </div>

            <div class="form-group">
              <label for="review">Review Details</label>
              <textarea class="form-control font-14" name="review" rows="3" placeholder="Write your review"></textarea>
            </div>

            <b-form-checkbox v-model="reviewAs" switch size="lg"><span class="font-14">Review as: Suraiya Aysha</span></b-form-checkbox>
            <div><button class="theme-button small-button rounded mt-3 w-100 justify-content-center">Submit</button></div>
          </form>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
 layout: 'dashboard',
  data() {
    return {
      ratingGroup:{
        1:'Very poor',
        2:'Poor',
        3:'Dlightful',
        4:'Good',
        5:'Very Good',
      },
      userRating: 5,

      merchantRatingGroup:{
        1:'Negative',
        2:'Neutal',
        3:'Positive',
      },
      merchantRating : 3,

      reviewAs: true

    }
  },

}
</script>

<style>
.write-review-page form .upload-img button {
  background-color: #fff;
  border: 1px solid var(--border-color);
}
.write-review-page form .upload-img button:hover {
  border: 1px solid var(--border-color)!important;
}
.write-review-page form .upload-img .customer-info-box:active, .write-review-page form .upload-img .customer-info-box.btn-secondary:not(:disabled):not(.disabled):active, .write-review-page form .upload-img .customer-info-box.btn-secondary:not(:disabled):not(.disabled).active, .write-review-page form .upload-img .customer-info-box.show > .btn-secondary.dropdown-toggle, .write-review-page form .upload-img .customer-info-box.btn-secondary:not(:disabled):not(.disabled):active, .write-review-page form .upload-img .customer-info-box.btn-secondary:not(:disabled):not(.disabled).active, .write-review-page form .upload-img .customer-info-box.show > .btn-secondary.dropdown-toggle {
  background-color: #fff!important;
  border: 1px solid var(--border-color)!important;
}

</style>
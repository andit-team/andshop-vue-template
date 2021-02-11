<template>
  <div class="merchant-add-product-page">
    <div class="card dashboard-table border-0 mt-0">
      <div class="card-body">
        <div class="merchant-add-product">
          <h4 class="text-capitalize mb-4 pb-2 border-bottom">all products</h4>
          <form>
            <div class="form-row">
              <div class="form-group col">
                <label for="product_name">Product name</label>
                <input type="text" class="form-control" id="product_name" placeholder="T-shirt">
              </div>
              <div class="form-group col">
                <label for="product_price">Product price</label>
                <input type="text" class="form-control" id="product_price" placeholder="$10">
              </div>
              <div class="form-group col">
                <label for="product_unit">Product unit</label>
                <select id="product_unit" class="form-control">
                  <option selected>Piece</option>
                  <option>KG</option>
                  <option>Ounce</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group datepicker-wrap col">
                <label for="datepicker">Product Available From</label>
                <b-form-datepicker class="form-control" id="datepicker" placeholder="Choose a date" locale="en"></b-form-datepicker>
              </div>
              <div class="form-group col">
                <label for="estimate_day">Estimate Available For Days</label>
                <input type="text" class="form-control" id="estimate_day" placeholder="30">
              </div>
              <div class="form-group col">
                <label for="stock">Available Stock (Quantity)</label>
                <input type="text" class="form-control" id="stock" placeholder="400">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col">
                <label for="sale_support">Whole sale support</label>
                <select id="sale_support" class="form-control">
                  <option selected>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div class="form-group col">
                <label for="flash_support">Flash sale support</label>
                <select id="flash_support" class="form-control">
                  <option selected>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div class="form-group col">
                <label for="frequency_support">Frequency support</label>
                <select id="frequency_support" class="form-control">
                  <option selected>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col">
                <div class="upload-product-img">
                  <img :src="require('@/assets/images/fashion/2.jpg')" style="height: 100px" class="blur-up lazyloaded" alt="product">
                </div>
                <div class="upload-product-photo">
                  <div class="upload-img" style="width:168px;">
                    <b-button class="customer-info-box theme-button2 mx-auto text-dark">
                      <span class="font-12">Upload Photo</span>
                      <b-form-file plain accept=".jpg, .jpeg, .png, .gif, .svg"></b-form-file>
                    </b-button>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="col mb-3">
                <label for="product_images">Product Images</label>
                <dropzone id="product_images" ref="el" :options="options" :destroyDropzone="true"></dropzone>
              </div>
            </div>

            <div class="form-row">
              <div class="w-100 mb-3 col">
                <label for="add_product_details">Description</label>
                <tinymce id="add_product_details"></tinymce>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col">
                <label for="return_policy">Return Policy (if any)</label>
                <textarea name="return_policy" id="return_policy" class="form-control" cols="30" rows="3" placeholder="Your custom return policy..."></textarea>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col">
                <button class="theme-button rounded">Submit</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'

export default {
  name: 'merchantAddProduct',
  layout: 'merchant-dashboard',
  components: {
    Dropzone
  },
  data() {
    return {
      options: {
        url: "http://httpbin.org/anything"
      }
    }
  },
  mounted() {
    // Everything is mounted and you can access the dropzone instance
    const instance = this.$refs.el.dropzone
  }

}
</script>

<style>
#datepicker {
  padding: 7px 10px 12px;
}
#datepicker svg {
    height: 18px;
}
.vue-dropzone {
	border: 2px dashed #e5e5e5;
	font-size: 25px;
}
</style>
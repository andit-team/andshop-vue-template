<template>
  <div class="order-details-page">
    <h4 class="mb-3">Order Details</h4>
    <div class="order-details-wrap-title d-flex justify-content-between mb-3">
      <div>
        <p><strong>Order</strong> <nuxt-link to="/my-account/my-orders/1" class="color-blue">#612885948115202</nuxt-link></p>
        <p class="font-14">Placed on 10 Jan 2021 14:29:39</p>
      </div>
      <p>Total: <strong>$ 700</strong></p>
    </div>

    <div class="order-list-wrap">
      <div class="order-list-wrap-title d-flex justify-content-between">
        <div>
          <p><img src="https://www.flaticon.com/svg/static/icons/svg/1244/1244359.svg" alt="icon" style="height: 20px;"> Package 1 </p>
          <p class="font-14">Sold by <nuxt-link to="#" class="color-blue">Khan Agro Merchant</nuxt-link></p>
        </div>
        <nuxt-link to="/my-account/my-orders/1" class=" color-blue"><i class="far fa-comment-alt"></i> Chat Now</nuxt-link>
      </div>

      <div class="order-tracking-container">
        <div class="delivered-on d-flex justify-content-between mt-3">
          <p>Delivered on 28 Dec 2020</p>
          <p>Standard</p>
        </div>

        <div class="order-tracking-progress text-center">
          <div class="track-bar-wrap">
            <div class="track-dot active"><span>Payment Pending</span></div>
            <div class="track-dot active"><span>Processing</span></div>
            <div class="track-dot"><span>Shipped</span></div>
            <div class="track-dot"><span>Delivered</span></div>
          </div>
        </div>

        <div class="show-more-less">
          <p>2021-01-10 16:15:12 <strong>An item(s) from your order has been cancelled.</strong>
          <span v-if="readMore"></span>
            <span v-else>...</span>
          </p>

          <div v-show="readMore">
            <p>2021-01-10 16:15:12 <strong>An item(s) from your order has been cancelled 1.</strong></p>
            <p>2021-01-10 16:15:12 <strong>An item(s) from your order has been cancelled 2.</strong></p>
            <p>2021-01-10 16:15:12 <strong>An item(s) from your order has been cancelled 3.</strong></p>
          </div>
          <button class="color-blue" @click="readMore =! readMore">
            <span v-if="readMore">View Less</span>
            <span v-else>View More</span>
          </button>
        </div>
  
        <ul class="list-unstyled">
          <li class="media">
            <img :src='"@/assets/images/products/1.jpg"' class="mr-3" alt="product" style="height: 55px;">
            <div class="media-body d-flex justify-content-between">
              <div>
                <h6 class="mt-0 mb-1">Dettol Handwash Re-energize</h6>
                170ml Liquid Soap Refill
              </div>
              <div class="my-orders-price-quantity-wrap d-flex justify-content-between">
                <p>$ 387</p>
                <p>Qty: 1</p>
              </div>
              <div class="return-write-review-wrap">
                <nuxt-link to="#" class="color-blue d-block text-uppercase font-bold"><i id="return-info" class="far fa-question-circle"></i> Return</nuxt-link>

                <b-tooltip target="return-info" triggers="hover">
                  <p class="font-14 text-white">Return not available</p>
                  <p class="font-12 text-white">Lorem ipsum dolor sit amet consectetur <nuxt-link to="#" class="text-white font-weight-bolder">return policy</nuxt-link> adipisicing elit. Possimus, aspernatur!</p>
                </b-tooltip>

                <span class="d-block font-12">until 4 Jan 2021</span>
                <nuxt-link to="/my-account/my-reviews/write-review" class="d-block color-blue text-uppercase font-bold">Write a review</nuxt-link>
              </div>
            </div>
          </li>
          <li class="media">
            <img :src='"@/assets/images/products/1.jpg"' class="mr-3" alt="product" style="height: 55px;">
            <div class="media-body d-flex justify-content-between">
              <div>
                <h6 class="mt-0 mb-1">Dettol Handwash Re-energize</h6>
                170ml Liquid Soap Refill
              </div>
              <div class="my-orders-price-quantity-wrap d-flex justify-content-between">
                <p>$ 387</p>
                <p>Qty: 1</p>
              </div>
              <div class="return-write-review-wrap">
                <nuxt-link to="#" class="color-blue d-block text-uppercase font-bold"><i id="return-info" class="far fa-question-circle"></i> Return</nuxt-link>

                <b-tooltip target="return-info" triggers="hover">
                  <p class="font-14 text-white">Return not available</p>
                  <p class="font-12 text-white">Lorem ipsum dolor sit amet consectetur <nuxt-link to="#" class="text-white font-weight-bolder">return policy</nuxt-link> adipisicing elit. Possimus, aspernatur!</p>
                </b-tooltip>

                <span class="d-block font-12">until 4 Jan 2021</span>
                <nuxt-link to="/my-account/my-reviews/write-review" class="d-block color-blue text-uppercase font-bold">Write a review</nuxt-link>
              </div>
            </div>
          </li>
          <li class="media">
            <img :src='"@/assets/images/products/1.jpg"' class="mr-3" alt="product" style="height: 55px;">
            <div class="media-body d-flex justify-content-between">
              <div>
                <h6 class="mt-0 mb-1">Dettol Handwash Re-energize</h6>
                170ml Liquid Soap Refill
              </div>
              <div class="my-orders-price-quantity-wrap d-flex justify-content-between">
                <p>$ 387</p>
                <p>Qty: 1</p>
              </div>
              <div class="return-write-review-wrap">
                <nuxt-link to="#" class="color-blue d-block text-uppercase font-bold"><i id="return-info" class="far fa-question-circle"></i> Return</nuxt-link>

                <b-tooltip target="return-info" triggers="hover">
                  <p class="font-14 text-white">Return not available</p>
                  <p class="font-12 text-white">Lorem ipsum dolor sit amet consectetur <nuxt-link to="#" class="text-white font-weight-bolder">return policy</nuxt-link> adipisicing elit. Possimus, aspernatur!</p>
                </b-tooltip>

                <span class="d-block font-12">until 4 Jan 2021</span>
                <nuxt-link to="/my-account/my-reviews/write-review" class="d-block color-blue text-uppercase font-bold">Write a review</nuxt-link>
              </div>
            </div>
          </li>
        </ul>

      </div>

      <div class="billing-address w-100">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-6">

            <div class="address bg-white p-3 mt-3">
              <h6 class="mb-2">Shipping Address</h6>
              <p class="user-name">Suraiya aysha</p>
              <p> <span class="bg-red white-color rounded px-1">Home</span> H-120, R-12, East Park, Australia.</p>
              <p class="user-mobile">1923456789</p>
            </div>

            <div class="address bg-white p-3 mt-3">
              <h6 class="mb-2">Shipping Address</h6>
              <p class="user-name">Suraiya aysha</p>
              <p> <span class="bg-red white-color rounded px-1">Home</span>  H-120, R-12, East Park, Australia.</p>
              <p class="user-mobile">1923456789</p>
            </div>

          </div>
          <div class="col-12 col-md-12 col-lg-6">
            <div class="total-summary bg-white p-3 mt-3">
              <div class="subtotal d-flex justify-content-between"><span>Subtotal</span><span>$ 387.00</span></div> 
              <div class="shipping-fee d-flex justify-content-between"><span>Shipping Fee</span><span>$ 80.00</span></div> 
              <div class="total d-flex justify-content-between"><span>Total</span><span>$ 467.00</span></div> 
              <p>Paid by Cash on Delivery</p>
            </div>
          </div>
        </div>
      
      </div>

    </div>

  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data(){
    return {
      readMore: false
    }
  }
}
</script>

<style>
.show-more-less {
	background-color: #fff;
	border: 1px solid var(--border-secondary);
	margin: 20px 0;
	padding: 20px;
	text-align: center;
}
</style>
<template>
  <div>
    <div class="account-info-wrap d-flex align-items-center mb-4">
      <div class="account-info-box d-flex align-items-center rounded">
        <div>Wallet Balance <span class="d-block">$<strong>3885</strong></span></div>
      </div>
      <div class="account-info-box d-flex align-items-center rounded">
        <div>Total Credit <span class="d-block">$<strong>5314</strong></span></div>
      </div>
      <div class="account-info-box d-flex align-items-center rounded">
        <div>Total Debit <span class="d-block">$<strong>1431</strong></span></div>
      </div>
      <div v-b-modal.withdraw_modal class="account-info-box d-flex align-items-center font-weight-bolder hover-color rounded withdraw-btn">
        Withdraw<span><b-icon icon="arrow-right" aria-hidden="true"></b-icon></span>
      </div>

      <b-modal id="withdraw_modal" title="Withdraw" centered hide-footer >
        <div class="card">
          <div class="card-body pb-4">
            <form>
              <div class="form-group">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <label class="input-group-text display-5">$</label>
                  </div>
                  <input type="text" maxlength="4" class="form-control" placeholder="00.00">
                </div>
              </div>
            </form>
            <div class="text-center mb-3">
              <h5 class="mb-3">OR</h5> 
              <ul class="list-inline mb-0">
                <li class="line-inline-item mb-0 d-inline-block">
                  <a href="javascript:;" class="updatebtn rounded small-button theme-button">$50</a>
                </li>
                <li class="line-inline-item mb-0 d-inline-block">
                  <a href="javascript:;" class="updatebtn rounded small-button theme-button">$100</a>
                </li>
                <li class="line-inline-item mb-0 d-inline-block">
                  <a href="javascript:;" class="updatebtn rounded small-button theme-button">$150</a>
                </li>
              </ul>
            </div>
            <a href="javascript:void(0);" class="rounded text-center theme-button d-block withdraw-btn">Withdraw</a>
          </div>
        </div>
      </b-modal>

    </div>

    <!-- Transaction History -->
    <div class="transaction-history">
      <h5 class="mb-4">Transaction History</h5>

      <div v-if="transactionList" class="transaction-list">
        <ul class="list-unstyled">
          <li class="media">
            <img :src='require("@/assets/images/fashion/1.jpg")' class="mr-3" alt="products">
            <div class="media-body d-flex justify-content-between">
              <div class="transaction-list-content">
                <h6 class="mt-0 mb-1">Sunglass</h6>
                Cras sitin vulputate at, tempus viverra turpis.
              </div>
              <nuxt-link to="/checkout" class="theme-button small-button rounded">Details</nuxt-link>
            </div>
          </li>
          <li class="media">
            <img :src='require("@/assets/images/fashion/5.jpg")' class="mr-3" alt="products">
            <div class="media-body d-flex justify-content-between">
              <div class="transaction-list-content">
                <h6 class="mt-0 mb-1">Fashion Sunglass</h6>
                Cras sitin vulputate at, tempus viverra turpis.
              </div>
              <nuxt-link to="/checkout" class="theme-button small-button rounded">Details</nuxt-link>
            </div>
          </li>
          <li class="media">
            <img :src='require("@/assets/images/fashion/2.jpg")' class="mr-3" alt="products">
            <div class="media-body d-flex justify-content-between">
              <div class="transaction-list-content">
                <h6 class="mt-0 mb-1">Winter coat</h6>
                Cras sitin vulputate at, tempus viverra turpis.
              </div>
              <nuxt-link to="/checkout" class="theme-button small-button rounded">Details</nuxt-link>
            </div>
          </li>
          <li class="media">
            <img :src='require("@/assets/images/fashion/3.jpg")' class="mr-3" alt="products">
            <div class="media-body d-flex justify-content-between">
              <div class="transaction-list-content">
                <h6 class="mt-0 mb-1">Tops</h6>
                Cras sitin vulputate at, tempus viverra turpis.
              </div>
              <nuxt-link to="/checkout" class="theme-button small-button rounded">Details</nuxt-link>
            </div>
          </li>
        </ul>
      </div>
      
      <div v-else class="transaction-404 text-center">
        <img :src='require("@/assets/images/dashboard/error.png")' alt="404">
        <h6>Sorry, No Transaction found</h6>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',

  data() {
    return {
      transactionList: true,
    }
  }
}
</script>
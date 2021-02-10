<template>
  <div>
    <div class="info-box-wrap bg-white p-4">

      <div class="info-box w-100">
        <div class="d-flex justify-content-between align-content-center mb-4 info-box-title">
          <h4>Merchant Profile</h4>
          <button @click="openUpdateForm= true" class="theme-button small-button rounded">Edit</button>
        </div>

        <div class="info-row-wrap" v-if="!openUpdateForm">
          <div class="info-row d-flex pb-2">
            <p><strong>Company name:</strong></p> <p>OnlineShop</p>
          </div>
          <div class="info-row d-flex pb-2">
            <p><strong>Email address:</strong></p> <p>demo@example.com</p>
          </div>
          <div class="info-row d-flex pb-2">
            <p><strong>Country / Region:</strong></p> <p>Australia</p>
          </div>
          <div class="info-row d-flex pb-2">
            <p><strong>Year Established:</strong></p> <p>2020</p>
          </div>
          <div class="info-row d-flex pb-2">
            <p><strong>Total Employees:</strong></p> <p>101 - 200 People</p>
          </div>
          <div class="info-row d-flex pb-2">
            <p><strong>Category:</strong></p> <p>Clothing</p>
          </div>
          <div class="info-row d-flex pb-2">
            <p><strong>Street address:</strong></p> <p>Melborne clay road</p>
          </div>
          <div class="info-row d-flex pb-2">
            <p><strong>City/state:</strong></p> <p>Australia</p>
          </div>
          <div class="info-row d-flex pb-2">
            <p><strong>Zip:</strong></p> <p>1203</p>
          </div>
        </div>

        <div class="info-update-form" v-if="openUpdateForm">
          <form>
          <div class="form-row">
            <div class="form-group col">
              <label for="c_name">Company name</label>
              <input type="text" class="form-control" id="c_name" value="Andshop">
            </div>
            <div class="form-group col">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" value="demo@exaplme.com">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col">
              <label for="country">Country / Region</label>
              <input type="text" class="form-control" id="country" value="Australia">
            </div>
            <div class="form-group col">
              <label for="year">Year Established</label>
              <input type="text" class="form-control" id="year" value="2020">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col">
              <label for="employees">Total Employees</label>
              <input type="text" class="form-control" id="employees" value="101 - 200 People">
            </div>
            <div class="form-group col">
              <label for="category">Category</label>
              <input type="text" class="form-control" id="category" value="Clothing">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col">
              <label for="street">Street address</label>
              <input type="text" class="form-control" id="street" value="Melborne clay road">
            </div>
            <div class="form-group col">
              <label for="city">City/state</label>
              <input type="text" class="form-control" id="city" value="Australia">
            </div>
            <div class="form-group col">
              <label for="zip">Zip</label>
              <input type="text" class="form-control" id="zip" value="1203">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col">
              <button type="button" @click="openUpdateForm= !openUpdateForm" class="theme-button rounded justify-content-center bg-dark">Cancel</button>
              <button type="button" class="theme-button rounded justify-content-center">Save</button>
            </div>
          </div>
          </form>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'merchantProfile',
  layout: 'merchant-dashboard',
  data() {
    return {
      openUpdateForm: false,
    }
  }
}
</script>
<template>
  <div>
    <div class="info-box-wrap d-flex">
      <div class="icon-wrap mr-3 rounded-circle"><i class="fas fa-clipboard-list"></i></div>

      <div class="info-box w-100">
        <div class="d-flex justify-content-between align-content-center mb-4 info-box-title"><h4>Personal information</h4> <button @click="openUpdateForm= true" class="theme-button2 rounded">Edit</button></div>

        <div class="info-row-wrap" v-if="!openUpdateForm">
          <div class="info-row d-flex pb-2">
            <p><strong>Andbaazar Number:</strong></p> <p>0123456789</p>
          </div>
          <div class="info-row d-flex pb-2">
            <p><strong>First Name:</strong></p> <p>Suraiya</p>
          </div>
          <div class="info-row d-flex pb-2">
            <p><strong>Last Name:</strong></p> <p>Aysha</p>
          </div>
          <div class="info-row d-flex pb-2">
            <p><strong>Contact Number:</strong></p> <p>0123456789</p>
          </div>
          <div class="info-row d-flex pb-2">
            <p><strong>Gender:</strong></p> <p>female</p>
          </div>
          <div class="info-row d-flex pb-2">
            <p><strong>Email:</strong></p> <p>demo@example.com</p>
          </div>
        </div>

        <div class="info-update-form" v-if="openUpdateForm">
          <form>
            <div class="form-group">
              <label for="f_name">First name</label>
              <input type="text" class="form-control" id="f_name" value="Suraiya">
            </div>
            <div class="form-group">
              <label for="l_name">Last name</label>
              <input type="text" class="form-control" id="l_name" value="Aysha">
            </div>
            
            <div class="form-group">
              <label for="phone">Phone</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">+88</div>
                </div>
                <input type="text" class="form-control" id="phone" value="01236547">
              </div>
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" value="demo@exaplme.com">
            </div>

            <div class="form-group">
              <button type="button" @click="openUpdateForm= !openUpdateForm" class="theme-button rounded justify-content-center bg-dark">Cancel</button>
              <button type="button" class="theme-button rounded justify-content-center">Save</button>
            </div>
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
      openUpdateForm: false,
    }
  }
}
</script>

<style>

</style>
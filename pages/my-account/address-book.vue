<template>
  <div>
    <div class="info-box-wrap">

      <div class="info-box w-100">
        <!-- List Address-->
        <div class="address-table" v-if="addreList">
          <b-table responsive :items="items">
            <template #cell(action)>
              <button @click="updateState('edit')" class="hover-color">Edit</button>
            </template>
          </b-table>

          <div class="text-right"><button @click="updateState('addNew')" class="bg-red text-white p-2 rounded">+ Add new address</button></div>

        </div>

        <!-- Add Address-->
        <div class="add-address-form" v-if="saveAddressForm">
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="f_name">Full name</label>
                <input type="email" class="form-control" id="f_name" placeholder="Your name">
              </div>
              <div class="form-group col-md-6">
                <label for="phone_number">Phone number</label>
                <input type="text" class="form-control" id="phone_number" placeholder="Your phone">
              </div>
            </div>

            <div class="form-row">

              <div class="form-group col-md-4">
                <label for="region">Region</label>
                <select id="region" class="form-control">
                  <option selected>Choose region</option>
                  <option>Khulna</option>
                  <option>Dhaka</option>
                </select>
              </div>

              <div class="form-group col-md-4">
                <label for="city">City</label>
                <select id="city" class="form-control">
                  <option selected>Choose City</option>
                  <option>Bagerhat</option>
                  <option>Jhenaidah</option>
                  <option>Jhenaidah</option>
                </select>
              </div>

              <div class="form-group col-md-4">
                <label for="area">Area</label>
                <select id="area" class="form-control">
                  <option selected>Choose Area</option>
                  <option>Maheshpur</option>
                  <option>Shailakupa</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="address">Address</label>
              <input type="text" class="form-control" id="address" placeholder="For Example: House# 123, Street# 123, ABC Road">
            </div>

            <div class="form-group">
              <label>Select a label for effective delivery:</label>
              
              <div class="d-flex home-office-select">
                <span class="rounded active"><i class="fas fa-briefcase"></i>Office</span>
                <span class="rounded"><i class="fas fa-home"></i>Home</span>
              </div>
            </div>

            <button type="button" @click="updateState('list')" class="theme-button rounded justify-content-center bg-dark">Cancel</button>
            <button type="button" class="theme-button rounded justify-content-center">Save address</button>
          </form>
        </div>

        <!-- Update Address -->
        <div class="add-address-form" v-if="UpdateAddressForm">
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="f_name">Full name</label>
                <input type="email" class="form-control" id="f_name" value="Suraiya Aysha">
              </div>
              <div class="form-group col-md-6">
                <label for="phone_number">Phone number</label>
                <input type="text" class="form-control" id="phone_number" value="+8801235">
              </div>
            </div>

            <div class="form-row">

              <div class="form-group col-md-4">
                <label for="region">Region</label>
                <select id="region" class="form-control">
                  <option selected>Choose region</option>
                  <option>Khulna</option>
                  <option>Dhaka</option>
                </select>
              </div>

              <div class="form-group col-md-4">
                <label for="city">City</label>
                <select id="city" class="form-control">
                  <option selected>Choose City</option>
                  <option>Bagerhat</option>
                  <option>Jhenaidah</option>
                  <option>Jhenaidah</option>
                </select>
              </div>

              <div class="form-group col-md-4">
                <label for="area">Area</label>
                <select id="area" class="form-control">
                  <option selected>Choose Area</option>
                  <option>Maheshpur</option>
                  <option>Shailakupa</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="address">Address</label>
              <input type="text" class="form-control" id="address" value="House# 123, Street# 123, ABC Road">
            </div>

            <div class="form-group">
              <label>Select a label for effective delivery:</label>
              
              <div class="d-flex home-office-select">
                <span class="rounded active"><i class="fas fa-briefcase"></i>Office</span>
                <span class="rounded"><i class="fas fa-home"></i>Home</span>
              </div>
            </div>

            <button type="button" @click="updateState('list')" class="theme-button rounded justify-content-center bg-dark">Cancel</button>
            <button type="button" class="theme-button rounded justify-content-center">Save address</button>
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
      addreList: true,
      saveAddressForm: false,
      UpdateAddressForm: false,

      fields: [
        {
          key: 'full_name',
          label: 'Full Name',
        },
        {
          key: 'address',
          label: 'Address',
        },
        {
          key: 'region',
          label: 'Region',
        },
        {
          key: 'phone',
          label: 'Phone Number',
        },
        {
          key: 'action',
          label: 'Action',
        }
      ],
      items: [
        {full_name: 'Dickerson', address: 'anina address, Janina address,', region: 'Khulna - Jhenaidah - Shailakupa', phone: 1235440, action: '' },
        {full_name: 'Larsen', address: 'anina address, Janina address,', region: 'Khulna - Jhenaidah - Shailakupa', phone: 1235421, action: '' },
        {full_name: 'Geneva', address: 'anina address, Janina address,', region: 'Khulna - Jhenaidah - Shailakupa', phone: 1235489, action: '' },
        {full_name: 'Jami', address: 'anina address, Janina address,', region: 'Khulna - Jhenaidah - Shailakupa', phone: 1235438, action: ''}
      ]
    }
  },
  methods:{
    updateState(currentSate){
        if(currentSate=='addNew'){
          this.addreList=false;
          this.UpdateAddressForm=false;
          this.saveAddressForm=true;
        }
        else if(currentSate=='edit'){
          this.addreList=false;
          this.UpdateAddressForm=true;
          this.saveAddressForm=false;
        }
        else{
          this.addreList=true;
          this.UpdateAddressForm=false;
          this.saveAddressForm=false;
        }
      }
  }
}
</script>

<style scoped>
.address-table td {
	border-bottom: 1px solid #dee2e6;
}
</style>
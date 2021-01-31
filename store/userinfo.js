export const state = () => ({
  userLoggedIn:false,
  auth:{
    mobileNo: ''
  },
  userInfo: {
    email: "",
    first_name: "",
    last_name: "",
    address: "",
    country: "",
    phone_no: "",
  },
})

export const mutations = {
  updateFirstName(state, firstName){
    state.userInfo.first_name=firstName;
  },
  updateLastName(state, lastName){
    state.userInfo.last_name=lastName;
  },
  updatePhoneNo(state, phoneNo){
    state.userInfo.phone_no=phoneNo;
  },
  updateEmail(state, email){
    state.userInfo.email=email;
  },
  updateLoggedInStatus(state, status){
    state.userLoggedIn=status;
  },
  updateUserInfo(state, userInfo){
    state.userInfo=userInfo;
  },
  updateAuthMobileNo(state, mobileNo){
    state.auth.mobileNo=mobileNo;
  }
}

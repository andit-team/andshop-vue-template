(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{397:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"f",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"e",(function(){return f})),n.d(e,"d",(function(){return h}));var o="/profile",r="/user-verify-otp",c="/krishibazar/site-info/new-arrival-products",l="/krishibazar/site-info/category-wise-products/",f="/krishibazar/site-info/sub-categories/",h="/krishibazar/site-info/parent-categories/"},540:function(t,e,n){"use strict";n.r(e);var o=n(397),r={name:"verifyMobileNo",data:function(){return{phone:"",authFailed:!1,authError:"",api_base_url:this.$config.API_BASE_URL}},methods:{sendVerificationCode:function(){var t=this,e=this,n={phone:e.phone};e.$axios.$post(this.api_base_url+o.f,n,{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(n){!0===n.error?(t.authFailed=!0,t.authError=n.msg):(t.$store.commit("userinfo/updateAuthMobileNo",e.phone),t.$router.push("/auth/verify-otp"))})).catch((function(t){console.log(t)}))}},mounted:function(){this.phone=this.$store.state.userinfo.auth.mobileNo}},c=n(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"login-registration-area section-t-space"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12 col-sm-10 col-md-7 col-lg-6 col-xl-4"},[n("b-alert",{attrs:{dismissible:"",variant:"danger",show:t.authFailed}},[n("strong",[t._v("Warning!")]),t._v(" "+t._s(t.authError)+"\n        ")]),t._v(" "),n("form",{staticClass:"p-4",on:{submit:function(e){return e.preventDefault(),t.sendVerificationCode(e)}}},[n("h4",{staticClass:"text-center mb-4"},[t._v("Verify your mobile no")]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"text",id:"phone",placeholder:"Phone No"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),t._m(0)])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("button",{staticClass:"theme-button rounded w-100 justify-content-center",attrs:{type:"submit"}},[this._v("Send Verification Code")])])}],!1,null,"cc8f9c7c",null);e.default=component.exports}}]);
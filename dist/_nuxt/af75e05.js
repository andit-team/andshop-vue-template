(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{712:function(t,e,o){"use strict";o.r(e);var n={name:"verifyMobileNo",data:function(){return{phone:"",authFailed:!1,authError:""}},methods:{goVerifyOTP:function(){this.$router.push({path:"/my-account/verify-otp"})}}},r=o(17),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"login-registration-area section-t-space"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-12 col-sm-10 col-md-7 col-lg-6 col-xl-4"},[o("b-alert",{attrs:{dismissible:"",variant:"danger",show:t.authFailed}},[o("strong",[t._v("Warning!")]),t._v(" "+t._s(t.authError)+"\n        ")]),t._v(" "),o("form",{staticClass:"p-4",on:{submit:function(e){return e.preventDefault(),t.sendVerificationCode(e)}}},[o("h4",{staticClass:"text-center mb-4"},[t._v("Verify your mobile no")]),t._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"text",id:"phone",placeholder:"Phone No"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("button",{staticClass:"theme-button rounded w-100 justify-content-center",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.goVerifyOTP()}}},[t._v("Send Verification Code")])])])],1)])])])}),[],!1,null,"03c7458c",null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{617:function(t,n,e){var content=e(742);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(66).default)("2ea46527",content,!0,{sourceMap:!1})},741:function(t,n,e){"use strict";e(617)},742:function(t,n,e){(n=e(65)(!1)).push([t.i,".resend-otp-btn{text-decoration:underline}.otp-input{width:40px;height:40px;padding:5px;margin:0 10px;font-size:20px;border-bottom:2px solid var(--border-color);text-align:center}.otp-input.error{border:1px solid red!important}.otp-input::-webkit-inner-spin-button,.otp-input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}",""]),t.exports=n},812:function(t,n,e){"use strict";e.r(n);e(35);var o={name:"verifyOTP",data:function(){return{countDown:60}},methods:{countDownTimer:function(){var t=this;this.countDown>0&&setTimeout((function(){t.countDown-=1,t.countDownTimer()}),1e3)},handleOnComplete:function(t){console.log("OTP completed: ",t)},handleOnChange:function(t){console.log("OTP changed: ",t)},goDashboard:function(){this.$router.push({path:"/my-account/"})}},created:function(){this.countDownTimer()}},r=(e(741),e(17)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"login-registration-area verify-otp-page section-t-space"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-12 col-sm-12 col-md-8 col-lg-6"},[e("form",{staticClass:"p-4 text-center",on:{submit:function(t){t.preventDefault()}}},[e("h4",{staticClass:"text-center mb-2"},[t._v("Please enter the OTP to verify your account")]),t._v(" "),e("p",{staticClass:"text-center mb-3"},[t._v("A One-Time Password has been sent to +99 0145875632")]),t._v(" "),e("div",{staticClass:"verify-otp-wrap d-flex flex-row justify-content-center mb-4"},[e("v-otp-input",{ref:"otpInput",attrs:{"input-classes":"otp-input",separator:"","num-inputs":5,"should-auto-focus":!0,"is-input-num":!0},on:{"on-change":t.handleOnChange,"on-complete":t.handleOnComplete}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("button",{staticClass:"theme-button rounded w-sm-100 w-50 justify-content-center",on:{click:function(n){return n.preventDefault(),t.goDashboard(n)}}},[t._v("Verify")])]),t._v(" "),e("div",{staticClass:"form-group text-center"},[e("span",{staticClass:"text-dark font-weight-600"},[t._v(t._s(t.countDown)+"s - ")]),t._v(" "),e("button",{staticClass:"font-bold justify-content-center resend-otp-btn"},[t._v("Resend OTP")])])])])])])])}),[],!1,null,null,null);n.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{807:function(e,t,r){"use strict";r.r(t);var o={name:"userLogin",data:function(){return{uname:"",password:"",remember_me:!1,authFailed:!1,authError:""}},methods:{goMyAccount:function(){this.$router.push({path:"/my-account/"})}}},n=r(17),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"login-registration-area section-t-space"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-12 col-sm-10 col-md-7 col-lg-6 col-xl-4"},[e.authFailed?r("div",{staticClass:"alert alert-danger alert-dismissible",on:{click:function(t){e.authFailed=!1}}},[r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"}},[e._v("×")]),e._v(" "),r("strong",[e._v("Warning!")]),e._v(" "+e._s(e.authError)+".\n        ")]):e._e(),e._v(" "),r("form",{staticClass:"p-4",on:{submit:function(t){return t.preventDefault(),e.userLogin(t)}}},[r("h4",{staticClass:"text-center mb-4"},[e._v("Login")]),e._v(" "),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.uname,expression:"uname"}],staticClass:"form-control",attrs:{type:"text",id:"email",placeholder:"Email/Phone No"},domProps:{value:e.uname},on:{input:function(t){t.target.composing||(e.uname=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group form-check"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.remember_me,expression:"remember_me"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.remember_me)?e._i(e.remember_me,null)>-1:e.remember_me},on:{change:function(t){var r=e.remember_me,o=t.target,n=!!o.checked;if(Array.isArray(r)){var c=e._i(r,null);o.checked?c<0&&(e.remember_me=r.concat([null])):c>-1&&(e.remember_me=r.slice(0,c).concat(r.slice(c+1)))}else e.remember_me=n}}}),e._v(" "),r("div",{staticClass:"remember-box d-flex justify-content-between"},[r("label",{staticClass:"form-check-label",attrs:{for:"checkbox"}},[e._v("Remember me")]),e._v(" "),r("nuxt-link",{attrs:{to:"/my-account/auth/forget-password"}},[e._v("Forgot password ?")])],1)]),e._v(" "),r("div",{staticClass:"form-group"},[r("button",{staticClass:"theme-button rounded w-100 justify-content-center",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.goMyAccount(t)}}},[e._v("Log In")])]),e._v(" "),r("p",{staticClass:"dont-have-account text-center"},[e._v("Don’t have an account? "),r("nuxt-link",{attrs:{to:"/my-account/auth/registration"}},[e._v("Sign up")])],1)])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);
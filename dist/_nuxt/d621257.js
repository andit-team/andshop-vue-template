(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{694:function(t,e,r){"use strict";r.r(e);var n=r(586),o={name:"userRegistration",components:{ValidationProvider:n.b,ValidationObserver:n.a},data:function(){return{first_name:"",last_name:"",email:"",phone:"",password:"",authFailed:!1,authError:""}},methods:{goMerchant:function(){this.$router.push({path:"/merchant-account/"})}}},l=r(17),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"login-registration-area section-t-space"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-12 col-sm-10 col-md-7 col-lg-6 col-xl-4"},[t.authFailed?r("div",{staticClass:"alert alert-danger alert-dismissible",on:{click:function(e){t.authFailed=!1}}},[r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"}},[t._v("×")]),t._v(" "),r("strong",[t._v("Warning!")]),t._v(" "+t._s(t.authError)+".\n        ")]):t._e(),t._v(" "),r("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.handleSubmit;return[r("form",{staticClass:"p-4",on:{submit:function(e){return e.preventDefault(),n(t.registerUser)}}},[r("h4",{staticClass:"text-center mb-4"},[t._v("Merchant Registration")]),t._v(" "),r("div",{staticClass:"form-group"},[r("ValidationProvider",{attrs:{name:"First name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.first_name,expression:"first_name"}],staticClass:"form-control",attrs:{type:"text",id:"f_name",placeholder:"First name"},domProps:{value:t.first_name},on:{input:function(e){e.target.composing||(t.first_name=e.target.value)}}}),t._v(" "),r("span",{staticClass:"text-danger "},[t._v(t._s(n[0]))])]}}],null,!0)})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("ValidationProvider",{attrs:{name:"Last name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.last_name,expression:"last_name"}],staticClass:"form-control",attrs:{type:"text",id:"l_name",placeholder:"Last name"},domProps:{value:t.last_name},on:{input:function(e){e.target.composing||(t.last_name=e.target.value)}}}),t._v(" "),r("span",{staticClass:"text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("ValidationProvider",{attrs:{name:"Phone no",rules:"required|numeric|min:11|max:11"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("div",{staticClass:"input-group"},[r("div",{staticClass:"input-group-prepend"},[r("div",{staticClass:"input-group-text"},[t._v("+88")])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"text",id:"inlineFormInputGroup",placeholder:"01000000000"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),r("span",{staticClass:"text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("ValidationProvider",{attrs:{name:"Email address",rules:"email"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Your email (optional)"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),r("span",{staticClass:"text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("ValidationProvider",{attrs:{name:"Password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),r("span",{staticClass:"text-danger"},[t._v(t._s(n[0]))])]}}],null,!0)})],1),t._v(" "),r("div",{staticClass:"form-group"},[r("button",{staticClass:"theme-button rounded w-100 justify-content-center",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.goMerchant()}}},[t._v("Register")])]),t._v(" "),r("p",{staticClass:"dont-have-account text-center"},[t._v("Already have an account? "),r("nuxt-link",{attrs:{to:"/merchant-account/login"}},[t._v("Login")])],1)])]}}])})],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{472:function(t,e,c){"use strict";c.r(e);var o={name:"ProductItem",props:["productItem","index"],methods:{discountedPrice:function(t){return t.price-t.price*t.discount/100}}},r=c(18),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"product-item rounded bg-white"},[c("div",{staticClass:"img-wrap mb-2"},[c("img",{staticClass:"rounded-top",attrs:{src:t.productItem.image,alt:"products"}}),t._v(" "),c("div",{staticClass:"product_action_box w-100"},[c("ul",{staticClass:"list_none pr_action_btn d-flex justify-content-center"},[c("li",{staticClass:"add-to-cart"},[c("nuxt-link",{attrs:{to:"/cart"}},[c("b-icon",{attrs:{icon:"cart-plus-fill"}})],1)],1),t._v(" "),c("li",[c("nuxt-link",{attrs:{to:"/my-account/wishlist"}},[c("b-icon",{attrs:{icon:"heart"}})],1)],1),t._v(" "),c("li",[c("nuxt-link",{attrs:{to:"/compare"}},[c("b-icon",{attrs:{icon:"arrow-repeat"}})],1)],1),t._v(" "),c("li",[c("nuxt-link",{attrs:{to:"/product-details"}},[c("b-icon",{attrs:{icon:"eye-fill"}})],1)],1)])])]),t._v(" "),c("div",{staticClass:"product-content"},[c("p",{staticClass:"product-tags text-uppercase font-12"},[t._v(t._s(t.productItem.tags))]),t._v(" "),c("p",{staticClass:"product-title font-bold mt-1"},[c("nuxt-link",{attrs:{to:"/product-details"}},[t._v(t._s(t.productItem.title))])],1),t._v(" "),t._m(0),t._v(" "),c("div",{staticClass:"product-price-box d-flex align-items-center"},[c("span",{staticClass:"price mr-1 text-muted",staticStyle:{"text-decoration":"line-through"}},[t._v("$"+t._s(t.productItem.price))]),t._v(" "),c("span",{staticClass:"discounted-price mr-1 color-red"},[t._v("$"+t._s(t.discountedPrice(t.productItem)))]),t._v(" "),c("span",{staticClass:"special-tag bg-red white-color rounded font-12 px-2"},[t._v(t._s(t.productItem.offerSeal))])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rating_wrap"},[e("div",{staticClass:"given-rating"},[e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"fas fa-star"})])])}],!1,null,null,null);e.default=component.exports},473:function(t,e,c){t.exports=c.p+"img/3.03a6f49.jpg"},479:function(t,e,c){t.exports=c.p+"img/4.ae77550.jpg"},480:function(t,e,c){t.exports=c.p+"img/5.220624e.jpg"},482:function(t,e,c){t.exports=c.p+"img/13.1865914.jpg"},483:function(t,e,c){t.exports=c.p+"img/6.7847e38.jpg"},484:function(t,e,c){t.exports=c.p+"img/11.aaa5c37.jpg"},485:function(t,e,c){t.exports=c.p+"img/12.d681f32.jpg"},486:function(t,e,c){t.exports=c.p+"img/15.d8abb30.jpg"},487:function(t,e,c){t.exports=c.p+"img/16.352622e.jpg"},488:function(t,e,c){t.exports=c.p+"img/14.6f78d06.jpg"},489:function(t,e,c){t.exports=c.p+"img/7.6c91762.jpg"},491:function(t,e,c){t.exports=c.p+"img/8.1ea10c8.jpg"},492:function(t,e,c){t.exports=c.p+"img/9.ec11168.jpg"},493:function(t,e,c){t.exports=c.p+"img/10.76556ae.jpg"},541:function(t,e,c){t.exports=c.p+"img/1.59ff9e5.png"},713:function(t,e,c){t.exports=c.p+"img/shop-profile.9b02c96.jpg"},823:function(t,e,c){"use strict";c.r(e);var o={name:"ShopDetails",components:{ProductItem:c(472).default},head:function(){return{title:"Shop Details"}},data:function(){return{productItems:[{id:1,title:"Sunglass",tags:"Alu, Morich",image:c(246),price:"150.00",discount:"10",priceRange:"150.00",offerSeal:"Sale"},{id:2,title:"Fashion Sunglass",tags:"Alu, Morich",image:c(244),price:"110.00",discount:"7",priceRange:"150.00",offerSeal:"New"},{id:3,title:"Winter coat",tags:"Alu, Morich",image:c(473),price:"100.00",discount:"10",priceRange:"150.00",offerSeal:"Sale"},{id:4,title:"Tops",tags:"Alu, Morich",image:c(479),price:"80.00",discount:"10",priceRange:"150.00",offerSeal:"Hot"},{id:5,title:"T-Shirt",tags:"Alu, Morich",image:c(480),price:"150.00",discount:"10",priceRange:"150.00",offerSeal:"Sale"},{id:6,title:"Long Coat",tags:"Alu, Morich",image:c(483),price:"150.00",discount:"10",priceRange:"150.00",offerSeal:"New"},{id:7,title:"Tops",tags:"Alu, Morich",image:c(489),price:"150.00",discount:"10",priceRange:"150.00",offerSeal:"Sale"},{id:8,title:"Sunglass",tags:"Alu, Morich",image:c(491),price:"150.00",discount:"10",priceRange:"150.00",offerSeal:"Sale"},{id:9,title:"Fashion Sunglass",tags:"Alu, Morich",image:c(492),price:"110.00",discount:"7",priceRange:"150.00",offerSeal:"New"},{id:10,title:"Winter coat",tags:"Alu, Morich",image:c(493),price:"100.00",discount:"10",priceRange:"150.00",offerSeal:"Sale"},{id:11,title:"Tops",tags:"Alu, Morich",image:c(484),price:"80.00",discount:"10",priceRange:"150.00",offerSeal:"Hot"},{id:12,title:"T-Shirt",tags:"Alu, Morich",image:c(485),price:"150.00",discount:"10",priceRange:"150.00",offerSeal:"Sale"},{id:13,title:"Long Coat",tags:"Alu, Morich",image:c(482),price:"150.00",discount:"10",priceRange:"150.00",offerSeal:"New"},{id:14,title:"Tops",tags:"Alu, Morich",image:c(488),price:"150.00",discount:"10",priceRange:"150.00",offerSeal:"Sale"},{id:15,title:"Long Coat",tags:"Alu, Morich",image:c(486),price:"150.00",discount:"10",priceRange:"150.00",offerSeal:"New"},{id:16,title:"Tops",tags:"Alu, Morich",image:c(487),price:"150.00",discount:"10",priceRange:"150.00",offerSeal:"Sale"}]}}},r=c(18),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"shop-profile-banner"},[o("img",{staticClass:"img-fluid",attrs:{src:c(713),alt:"banner"}})]),t._v(" "),o("div",{staticClass:"shop-profile-details-container"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row shop-profile-details-wrap align-items-center"},[o("div",{staticClass:"col-12 col-sm-12 col-md-3 p-md-0"},[o("div",{staticClass:"shop-profile-side-box mb-sm-2 text-center"},[o("img",{attrs:{src:c(541),alt:"shop"}}),t._v(" "),o("h4",{staticClass:"mt-2"},[t._v("Fashion Store")]),t._v(" "),t._m(0),t._v(" "),t._m(1)])]),t._v(" "),t._m(2),t._v(" "),t._m(3)])])]),t._v(" "),o("section",{staticClass:"shop-page-product-area section-t-space bg-white"},[o("div",{staticClass:"container"},[t._m(4),t._v(" "),o("div",{staticClass:"row product-row"},[t._l(t.productItems,(function(t,e){return o("div",{key:e,staticClass:"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 product-item-col"},[o("ProductItem",{attrs:{productItem:t}})],1)})),t._v(" "),t._m(5)],2)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"shop-rating mt-2 mb-2"},[e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"fas fa-star"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"font-12"},[this._v("710 Followers "),e("span",[this._v("40 Review")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-sm-12 col-md-6 p-md-0"},[e("div",{staticClass:"shop-profile-des"},[e("p",{staticClass:"font-14"},[this._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. At omnis iste neque quasi quaerat blanditiis exercitationem, magnam expedita quae fugit.")]),this._v(" "),e("p",{staticClass:"font-14"},[this._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa soluta et, suscipit architecto ab voluptates. Lorem ipsum, dolor sit amet consectetur adipisicing elit. At omnis iste neque quasi quaerat blanditiis exercitationem, magnam expedita quae fugit.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-sm-12 col-md-3 p-md-0"},[e("div",{staticClass:"shop-profile-side-box text-center mt-sm-2"},[e("button",{staticClass:"theme-button small-button rounded d-block font-12"},[this._v("Follow")]),this._v(" "),e("button",{staticClass:"theme-button small-button rounded d-block font-12"},[this._v("Chat")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"shop-search-bar mb-4 d-flex align-items-center justify-content-between"},[e("h4",[this._v("Products")]),this._v(" "),e("div",{staticClass:"search-bar-right-wrap d-flex align-items-center"},[e("form",[e("div",{staticClass:"input-group"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search..."}}),this._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"theme-button rounded-right",attrs:{type:"button"}},[e("i",{staticClass:"fa fa-search"})])])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:" col-12 d-block mt-4 text-center"},[e("button",{staticClass:"theme-button rounded load-more-button"},[this._v("Load more")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:c(472).default})}}]);
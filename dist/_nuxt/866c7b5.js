(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{514:function(t,e,n){t.exports=n.p+"img/13.1865914.jpg"},515:function(t,e,n){t.exports=n.p+"img/15.d8abb30.jpg"},516:function(t,e,n){t.exports=n.p+"img/2.53b55bf.jpg"},517:function(t,e,n){t.exports=n.p+"img/3.03a6f49.jpg"},518:function(t,e,n){t.exports=n.p+"img/11.aaa5c37.jpg"},519:function(t,e,n){t.exports=n.p+"img/12.d681f32.jpg"},520:function(t,e,n){t.exports=n.p+"img/16.352622e.jpg"},521:function(t,e,n){t.exports=n.p+"img/14.6f78d06.jpg"},523:function(t,e,n){t.exports=n.p+"img/5.220624e.jpg"},524:function(t,e,n){t.exports=n.p+"img/1.7192f00.jpg"},525:function(t,e,n){t.exports=n.p+"img/4.ae77550.jpg"},526:function(t,e,n){t.exports=n.p+"img/6.7847e38.jpg"},527:function(t,e,n){t.exports=n.p+"img/8.1ea10c8.jpg"},528:function(t,e,n){t.exports=n.p+"img/9.ec11168.jpg"},529:function(t,e,n){t.exports=n.p+"img/10.76556ae.jpg"},530:function(t,e,n){t.exports=n.p+"img/7.6c91762.jpg"},531:function(t,e,n){"use strict";n.r(e);var c={name:"FlashDealsItem",props:["flashItem","index"],methods:{discountedPrice:function(t){return t.price-t.price*t.discount/100}}},r=n(17),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flash-sale-item my-3"},[n("nuxt-link",{attrs:{to:"/product-details"}},[n("div",{staticClass:"img-wrap"},[n("img",{staticClass:"rounded-top",attrs:{src:t.flashItem.image,alt:"products"}})]),t._v(" "),n("div",{staticClass:"product-content"},[n("h6",[n("span",{staticClass:"discounted-price mr-1 color-green"},[t._v("$"+t._s(t.discountedPrice(t.flashItem)))]),t._v(" "),n("span",{staticClass:"price mr-1 text-muted",staticStyle:{"text-decoration":"line-through"}},[t._v("$"+t._s(t.flashItem.price))]),t._v(" "),n("span",{staticClass:"discount mr-1 color-red"},[t._v(t._s(t.flashItem.discount)+"% Off")])]),t._v(" "),n("p",{staticClass:"product-title font-bold"},[t._v(t._s(t.flashItem.title))]),t._v(" "),n("div",{staticClass:"rating_wrap mb-1 d-flex align-items-center"},[n("div",{staticClass:"given-rating"},[n("i",{staticClass:"fas fa-star"}),t._v(" "),n("i",{staticClass:"fas fa-star"}),t._v(" "),n("i",{staticClass:"fas fa-star"}),t._v(" "),n("i",{staticClass:"fas fa-star"}),t._v(" "),n("i",{staticClass:"fas fa-star"})]),t._v(" "),n("span",{staticClass:"rating_num"},[t._v("(25)")])]),t._v(" "),n("div",{staticClass:"sold-quantity mb-1"},[n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-bar",staticStyle:{width:"25%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})]),t._v(" "),n("p",{staticClass:"mt-1 font-bold"},[t._v("Sold: 0/40")])])])])],1)}),[],!1,null,null,null);e.default=component.exports},753:function(t,e,n){"use strict";n.r(e);var c={name:"FlashDealsProducts",components:{FlashDealsItem:n(531).default},data:function(){return{flashDealExist:!1,flashItems:[{id:1,title:"Sunglass",shop:"Sun Farm",image:n(524),price:"150.00",discount:"10",unit:"4"},{id:2,title:"Shoe",shop:"Sun Farm",image:n(516),price:"110.00",discount:"7",unit:"8"},{id:3,title:"Modern Watch",shop:"Sun Farm",image:n(517),price:"100.00",discount:"10",unit:"4"},{id:4,title:"Wear Set",shop:"Sun Farm",image:n(525),price:"80.00",discount:"10",unit:"4"},{id:5,title:"Merun Bag",shop:"Sun Farm",image:n(523),price:"150.00",discount:"10",unit:"4"},{id:6,title:"Cloth Package",shop:"Sun Farm",image:n(520),price:"150.00",discount:"10",unit:"4"},{id:7,title:"Sunglass",shop:"Sun Farm",image:n(526),price:"150.00",discount:"10",unit:"4"},{id:8,title:"Shoe",shop:"Sun Farm",image:n(530),price:"110.00",discount:"7",unit:"8"},{id:9,title:"Modern Watch",shop:"Sun Farm",image:n(527),price:"100.00",discount:"10",unit:"4"},{id:10,title:"Wear Set",shop:"Sun Farm",image:n(528),price:"80.00",discount:"10",unit:"4"},{id:11,title:"Merun Bag",shop:"Sun Farm",image:n(529),price:"150.00",discount:"10",unit:"4"},{id:12,title:"Cloth Package",shop:"Sun Farm",image:n(518),price:"150.00",discount:"10",unit:"4"},{id:13,title:"Sunglass",shop:"Sun Farm",image:n(519),price:"150.00",discount:"10",unit:"4"},{id:14,title:"Shoe",shop:"Sun Farm",image:n(514),price:"110.00",discount:"7",unit:"8"},{id:15,title:"Modern Watch",shop:"Sun Farm",image:n(521),price:"100.00",discount:"10",unit:"4"},{id:16,title:"Wear Set",shop:"Sun Farm",image:n(515),price:"80.00",discount:"10",unit:"4"},{id:17,title:"Merun Bag",shop:"Sun Farm",image:n(520),price:"150.00",discount:"10",unit:"4"},{id:18,title:"Cloth Package",shop:"Sun Farm",image:n(523),price:"150.00",discount:"10",unit:"4"}]}},head:function(){return{title:"Flash Deals Products"}}},r=n(17),component=Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"breadcrumb-area bg-white"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb bg-transparent m-0 section-t-40-space section-b-40-space"},[e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:"/"}},[this._v("Home")])],1),this._v(" "),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[this._v("Flash Deals")])])])])])])]),this._v(" "),e("section",{staticClass:"flash-deals-page section-t-40-space section-b-40-space"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row flash-deals-page-wrap"},this._l(this.flashItems,(function(t,n){return e("div",{key:n,staticClass:"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"},[e("FlashDealsItem",{attrs:{flashItem:t}})],1)})),0)])])])}),[],!1,null,"7e2ba443",null);e.default=component.exports;installComponents(component,{FlashDealsItem:n(531).default})}}]);
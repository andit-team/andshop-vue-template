(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{475:function(t,e,r){"use strict";r.r(e);var l={name:"ProductItem",props:["productItem","index"],methods:{discountedPrice:function(t){return t.price-t.price*t.discount/100}}},c=r(17),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item rounded bg-white"},[r("div",{staticClass:"img-wrap mb-2"},[r("img",{staticClass:"rounded-top",attrs:{src:t.productItem.image,alt:"products"}}),t._v(" "),r("div",{staticClass:"product_action_box w-100"},[r("ul",{staticClass:"list_none pr_action_btn d-flex justify-content-center"},[r("li",{staticClass:"add-to-cart"},[r("nuxt-link",{attrs:{to:"/cart"}},[r("b-icon",{attrs:{icon:"cart-plus-fill"}})],1)],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/my-account/wishlist"}},[r("b-icon",{attrs:{icon:"heart"}})],1)],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/compare"}},[r("b-icon",{attrs:{icon:"arrow-repeat"}})],1)],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/product-details"}},[r("b-icon",{attrs:{icon:"eye-fill"}})],1)],1)])])]),t._v(" "),r("div",{staticClass:"product-content"},[r("p",{staticClass:"product-tags text-uppercase font-12"},[t._v(t._s(t.productItem.tags))]),t._v(" "),r("p",{staticClass:"product-title font-bold mt-1"},[r("nuxt-link",{attrs:{to:"/product-details"}},[t._v(t._s(t.productItem.title))])],1),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"product-price-box d-flex align-items-center"},[r("span",{staticClass:"price mr-1 text-muted",staticStyle:{"text-decoration":"line-through"}},[t._v("$"+t._s(t.productItem.price))]),t._v(" "),r("span",{staticClass:"discounted-price mr-1 color-red"},[t._v("$"+t._s(t.discountedPrice(t.productItem)))]),t._v(" "),r("span",{staticClass:"special-tag bg-red white-color rounded font-12 px-2"},[t._v(t._s(t.productItem.offerSeal))])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rating_wrap"},[e("div",{staticClass:"given-rating"},[e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"fas fa-star"})])])}],!1,null,null,null);e.default=component.exports},477:function(t,e,r){"use strict";r.r(e);var l={name:"PaymentMethods"},c=r(17),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"payment-system-area section-t-space"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-4 col-md-12 col-sm-12 col-12"},[l("div",{staticClass:"payment-box text-center m-auto"},[l("h5",{staticClass:"position-relative mb-3"},[t._v("Trusted Shopping")]),t._v(" "),l("ul",{staticClass:"d-flex justify-content-center"},[l("li",[l("a",{staticClass:"rounded",attrs:{href:"#"}},[l("img",{staticClass:"img-fluid",attrs:{src:r(478),alt:"payment"}})])]),t._v(" "),l("li",[l("a",{staticClass:"rounded",attrs:{href:"#"}},[l("img",{staticClass:"img-fluid",attrs:{src:r(479),alt:"payment"}})])]),t._v(" "),l("li",[l("a",{staticClass:"rounded",attrs:{href:"#"}},[l("img",{staticClass:"img-fluid",attrs:{src:r(480),alt:"payment"}})])])])])]),t._v(" "),l("div",{staticClass:"col-lg-4 col-md-12 col-sm-12 col-12"},[l("div",{staticClass:"payment-box text-center m-auto"},[l("h5",{staticClass:"position-relative mb-3"},[t._v("Payment Option")]),t._v(" "),l("ul",{staticClass:"d-flex justify-content-center"},[l("li",[l("a",{staticClass:"rounded",attrs:{href:"#"}},[l("img",{staticClass:"img-fluid",attrs:{src:r(481),alt:"payment"}})])]),t._v(" "),l("li",[l("a",{staticClass:"rounded",attrs:{href:"#"}},[l("img",{staticClass:"img-fluid",attrs:{src:r(484),alt:"payment"}})])]),t._v(" "),l("li",[l("a",{staticClass:"rounded",attrs:{href:"#"}},[l("img",{staticClass:"img-fluid",attrs:{src:r(478),alt:"payment"}})])])])])]),t._v(" "),l("div",{staticClass:"col-lg-4 col-md-12 col-sm-12 col-12"},[l("div",{staticClass:"payment-box text-center m-auto"},[l("h5",{staticClass:"position-relative mb-3"},[t._v("Delivery Partners")]),t._v(" "),l("ul",{staticClass:"d-flex justify-content-center"},[l("li",[l("a",{staticClass:"rounded",attrs:{href:"#"}},[l("img",{staticClass:"img-fluid",attrs:{src:r(479),alt:"payment"}})])]),t._v(" "),l("li",[l("a",{staticClass:"rounded",attrs:{href:"#"}},[l("img",{staticClass:"img-fluid",attrs:{src:r(480),alt:"payment"}})])]),t._v(" "),l("li",[l("a",{staticClass:"rounded",attrs:{href:"#"}},[l("img",{staticClass:"img-fluid",attrs:{src:r(481),alt:"payment"}})])])])])])])])])}),[],!1,null,null,null);e.default=component.exports},478:function(t,e,r){t.exports=r.p+"img/1.5723855.png"},479:function(t,e,r){t.exports=r.p+"img/2.70588ba.png"},480:function(t,e,r){t.exports=r.p+"img/3.41e841c.png"},481:function(t,e,r){t.exports=r.p+"img/4.fbed999.png"},484:function(t,e,r){t.exports=r.p+"img/5.1088666.png"},486:function(t,e,r){t.exports=r.p+"img/13.1865914.jpg"},488:function(t,e,r){t.exports=r.p+"img/11.aaa5c37.jpg"},489:function(t,e,r){t.exports=r.p+"img/12.d681f32.jpg"},490:function(t,e,r){t.exports=r.p+"img/15.d8abb30.jpg"},491:function(t,e,r){t.exports=r.p+"img/16.352622e.jpg"},492:function(t,e,r){t.exports=r.p+"img/14.6f78d06.jpg"},494:function(t,e,r){t.exports=r.p+"img/1.e45947c.jpg"},499:function(t,e,r){t.exports=r.p+"img/2.5b8efaa.jpg"},500:function(t,e,r){t.exports=r.p+"img/4.497e1dd.jpg"},510:function(t,e,r){"use strict";r.r(e);var l={name:"RelatedProducts",components:{ProductItem:r(475).default},data:function(){return{swiperOption:{slidesPerView:5,spaceBetween:30,slidesPerGroup:1,loop:!1,breakpoints:{1400:{slidesPerView:5},1366:{slidesPerView:5},1199:{slidesPerView:5},992:{slidesPerView:4},991:{slidesPerView:3},768:{slidesPerView:3},767:{slidesPerView:3},766:{slidesPerView:3},575:{slidesPerView:2},400:{slidesPerView:2},399:{slidesPerView:1},0:{slidesPerView:1}}},productItems:[{id:1,title:"Fashion Sunglass",tags:"bath & body, football",image:r(491),price:"150.00",discount:"10",offerSeal:"Sale"},{id:2,title:"Black Cap",tags:"Alu, Morich",image:r(249),price:"110.00",discount:"7",offerSeal:"New"},{id:3,title:"Jeans coat",tags:"bath & body, football",image:r(490),price:"100.00",discount:"10",offerSeal:"Sale"},{id:4,title:"T-Shirt",tags:"Alu, Morich",image:r(492),price:"80.00",discount:"10",offerSeal:"Hot"},{id:5,title:"Coat",tags:"bath & body, football",image:r(486),price:"150.00",discount:"10",offerSeal:"Sale"},{id:6,title:"Long Coat",tags:"Alu, Morich",image:r(489),price:"150.00",discount:"10",offerSeal:"New"},{id:6,title:"Tops",tags:"bath & body, football",image:r(488),price:"150.00",discount:"10",offerSeal:"Sale"}]}}},c=r(17),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"related-products-area best-seller-area bg-different section-t-space"},[e("div",{staticClass:"container"},[this._m(0),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"best-seller-slider-wrap d-flex flex-wrap justify-content-between"},[e("swiper",{staticClass:"swiper",attrs:{options:this.swiperOption}},this._l(this.productItems,(function(t,r){return e("swiper-slide",{key:r},[e("ProductItem",{attrs:{productItem:t}})],1)})),1)],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"section-title-wrap d-flex justify-content-between align-items-center mb-30"},[e("div",{staticClass:"section-title"},[e("h4",[this._v("Related Products")]),this._v(" "),e("p",{staticClass:"mt-1"},[this._v("Browse the collection of our related products.")])])])])])}],!1,null,"12b4cca9",null);e.default=component.exports;installComponents(component,{ProductItem:r(475).default})},522:function(t,e,r){var l=r(19),c=Math.ceil,n=Math.floor;l({target:"Math",stat:!0},{trunc:function(t){return(t>0?n:c)(t)}})},523:function(t,e,r){"use strict";r.r(e);r(522),r(34);var l={mounted:function(){var t=this;window.setInterval((function(){t.now=Math.trunc((new Date).getTime()/1e3)}),1e3)},props:["date"],data:function(){return{timerdate:Math.trunc(new Date(this.date).getTime()/1e3),now:Math.trunc((new Date).getTime()/1e3)}},computed:{seconds:function(){return(this.timerdate-this.now)%60},minutes:function(){return Math.trunc((this.timerdate-this.now)/60)%60},hours:function(){return Math.trunc((this.timerdate-this.now)/60/60)%24},days:function(){return Math.trunc((this.timerdate-this.now)/60/60/24)}}},c=r(17),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"timer"},[r("span",{attrs:{id:"demo"}},[r("span",{staticClass:"single-counter-box"},[r("span",{staticClass:"timer-num"},[t._v(t._s(t.hours))]),t._v(" "),r("span",{staticClass:"timing-unit"},[t._v("Hours")])]),t._v(" "),r("span",{staticClass:"single-counter-box"},[r("span",{staticClass:"timer-num"},[t._v(t._s(t.minutes))]),t._v(" "),r("span",{staticClass:"timing-unit"},[t._v("Mins")])]),t._v(" "),r("span",{staticClass:"single-counter-box"},[r("span",{staticClass:"timer-num"},[t._v(t._s(t.seconds))]),t._v(" "),r("span",{staticClass:"timing-unit"},[t._v("Sec")])])])])}),[],!1,null,null,null);e.default=component.exports},771:function(t,e,r){"use strict";r.r(e);var l=r(510),c=r(477),n={name:"productDetails",components:{RelatedProducts:l.default,PaymentMethods:c.default},head:function(){return{title:"Product Details - Left Thumb"}},data:function(){return{showImg:!1,loading:!0,ratingValue:4,isLogin:!0,reqularSaleQty:0,wholeSaleQty:0,flashSaleQty:0,selectedImg:r(494),productImages:[r(494),r(499),r(500)],product_slug:this.$route.params.slug}},methods:{setImage:function(t){this.selectedImg=t},mounted:function(){this.showImg=!1},updated:function(){this.showImg=!0}}},o=r(17),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"breadcrumb-area bg-white"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col"},[l("nav",{attrs:{"aria-label":"breadcrumb"}},[l("ol",{staticClass:"breadcrumb bg-transparent m-0 section-t-40-space section-b-40-space"},[l("li",{staticClass:"breadcrumb-item"},[l("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),l("li",{staticClass:"breadcrumb-item"},[l("nuxt-link",{attrs:{to:"/fashion"}},[t._v("Fashion")])],1),t._v(" "),l("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Tops")])])])])])])]),t._v(" "),l("section",{staticClass:"product-details-page-area product-details-left-thumb section-t-space bg-white"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12 col-md-6 col-lg-6 col-xl-5"},[l("div",{staticClass:"product-details-photo-tab"},[l("div",{staticClass:"tab-content-wrap text-center"},[l("image-magnifier",{staticClass:"img-fluid",attrs:{src:t.selectedImg,"zoom-src":t.selectedImg,width:"600",height:"600","zoom-width":"600","zoom-height":"570"}})],1),t._v(" "),l("ul",{staticClass:"tab-img-list"},t._l(t.productImages,(function(e,r){return l("li",{key:r,staticClass:"rounded",class:{selectedImage:e==t.selectedImg},on:{click:function(r){return t.setImage(e)}}},[l("img",{staticClass:"img-fluid rounded",attrs:{src:e,alt:"image"}})])})),0)])]),t._v(" "),l("div",{staticClass:"col-12 col-md-6 col-lg-6 col-xl-7"},[l("div",{staticClass:"product-details-content"},[l("h2",{staticClass:"product-title mb-2"},[t._v("Tops")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),l("div",{staticClass:"product-stock-wrap mb-md-3 mb-3 mb-lg-4"},[l("div",{staticClass:"details-price-list mb-4"},[t._m(2),t._v(" "),l("div",{staticClass:"price-list-left"},[l("b-form-spinbutton",{staticClass:"mr-4",attrs:{id:"sb-inline",inline:""},model:{value:t.reqularSaleQty,callback:function(e){t.reqularSaleQty=e},expression:"reqularSaleQty"}})],1)])]),t._v(" "),l("div",{staticClass:"mb-3 product-details-btn"},[l("nuxt-link",{attrs:{to:"/cart"}},[l("button",{staticClass:"theme-button rounded"},[t._v("+ Add to cart")])])],1),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),l("div",{staticClass:"mb-4 offer-ends-counter"},[l("h6",{staticClass:"mb-4"},[t._v("Offer ends in:")]),t._v(" "),l("div",[l("CountDown",{staticClass:"rounded",attrs:{date:"December 20, 2021"}})],1)]),t._v(" "),t._m(6),t._v(" "),t._m(7)])])]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col"},[l("b-card",{staticClass:"mt-5 product-details-des-tab",attrs:{"no-body":""}},[l("b-tabs",{attrs:{card:""}},[l("b-tab",{attrs:{title:"Description",active:""}},[l("div",{staticClass:"product-details-content-box"},[l("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero blanditiis quo fugiat magni accusamus exercitationem! Voluptate, deleniti quae. Libero iusto minus, nulla excepturi quidem reprehenderit blanditiis eligendi exercitationem nesciunt ad! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi temporibus deserunt mollitia natus esse, sunt fuga quos. Autem quasi error quisquam architecto fuga suscipit atque voluptatibus nobis impedit nulla. Officia ercitationem."),l("br"),l("br"),t._v("\n                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat tempora aliquid exercitationem. Vel, dicta quos. Velit magnam, eius unde ullam, distinctio atque aperiam obcaecati ipsam id, inventore consectetur laudantium repellat tempora aliquid exercitationem. Vel, dicta quos. Velit magnam, eius unde ullam.\n                  ")])])]),t._v(" "),l("b-tab",{attrs:{title:"Video"}},[l("div",{staticClass:"product-details-content-box"},[l("div",{staticClass:"product-details-video text-center"},[l("iframe",{attrs:{src:"https://www.youtube.com/embed/BUWzX78Ye_8",allow:"autoplay; encrypted-media",allowfullscreen:"allowfullscreen",width:"560",height:"315"}})])])]),t._v(" "),l("b-tab",{attrs:{title:"Reviews(3)"}},[l("div",{staticClass:"product-details-content-box"},[l("div",{staticClass:"media comment-box mb-3"},[l("img",{staticClass:"mr-3",attrs:{src:r(250),alt:"author",height:"50px"}}),t._v(" "),l("div",{staticClass:"media-body"},[l("h6",{staticClass:"mt-0"},[t._v("Suraiya Aysha")]),t._v(" "),l("div",{staticClass:"given-rating"},[l("i",{staticClass:"fas fa-star"}),t._v(" "),l("i",{staticClass:"fas fa-star"}),t._v(" "),l("i",{staticClass:"fas fa-star"}),t._v(" "),l("i",{staticClass:"fas fa-star"}),t._v(" "),l("i",{staticClass:"fas fa-star"})]),t._v("\n                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    ")])]),t._v(" "),l("div",{staticClass:"media comment-box mb-3"},[l("img",{staticClass:"mr-3",attrs:{src:r(250),alt:"author",height:"50px"}}),t._v(" "),l("div",{staticClass:"media-body"},[l("h6",{staticClass:"mt-0"},[t._v("Fatima Malik")]),t._v(" "),l("div",{staticClass:"given-rating"},[l("i",{staticClass:"fas fa-star"}),t._v(" "),l("i",{staticClass:"fas fa-star"}),t._v(" "),l("i",{staticClass:"fas fa-star"})]),t._v("\n                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    ")])]),t._v(" "),l("div",{staticClass:"media comment-box mb-3"},[l("img",{staticClass:"mr-3",attrs:{src:r(250),alt:"author",height:"50px"}}),t._v(" "),l("div",{staticClass:"media-body"},[l("h6",{staticClass:"mt-0"},[t._v("Jessica Fernandez")]),t._v(" "),l("div",{staticClass:"given-rating"},[l("i",{staticClass:"fas fa-star"}),t._v(" "),l("i",{staticClass:"fas fa-star"})]),t._v("\n                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                    ")])])]),t._v(" "),l("div",{staticClass:"product-details-content-box write-review mt-4"},[l("h5",{staticClass:"mb-2"},[t._v("Add a review:")]),t._v(" "),t.isLogin?l("form",[l("textarea",{staticClass:"mb-2 form-control",attrs:{id:"textarea-default",placeholder:"Write review here...",rows:"2",wrap:"soft"}}),t._v(" "),l("b-form-rating",{staticClass:"mb-2",attrs:{id:"rating-inline",inline:"",color:"#ff8800"},model:{value:t.ratingValue,callback:function(e){t.ratingValue=e},expression:"ratingValue"}}),t._v(" "),l("button",{staticClass:"theme-button d-block rounded",attrs:{type:"submit"}},[t._v("Submit")])],1):l("div",[l("p",[t._v("To submit review "),l("nuxt-link",{attrs:{to:"/my-account/auth/login"}},[t._v("Login")]),t._v(" please!")],1),t._v(" "),l("h5",{staticClass:"d-block mt-4"},[l("nuxt-link",{staticClass:"theme-button",attrs:{to:"/my-account/auth/login"}},[t._v("Login")])],1)])])])],1)],1)],1)])])]),t._v(" "),l("RelatedProducts"),t._v(" "),l("PaymentMethods")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rating_wrap mb-3"},[e("div",{staticClass:"given-rating"},[e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"fas fa-star"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"mb-3"},[e("span",{staticClass:"price mr-1 text-muted",staticStyle:{"text-decoration":"line-through"}},[this._v("$95.00")]),this._v(" "),e("span",{staticClass:"price mr-1 text-muted"},[this._v("$45.00")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"price-list-right"},[e("h6",[this._v("Quantity")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-3"},[e("button",[e("i",{staticClass:"far fa-heart color-red mr-1"}),this._v("Add to wishlist")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h6",{staticClass:"mb-2"},[this._v("Details:")]),this._v(" "),e("p",{staticClass:"product-description mb-md-3 mb-3 mb-lg-4"},[this._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores beatae fuga harum laboriosam maiores quasi quidem quo repudiandae voluptate.\n              ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-3 product-details-categories"},[e("h6",{staticClass:"mb-2"},[this._v("Categories:")]),this._v(" "),e("p",[this._v("Hair care, Make up, Men's skin, Skin care")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-3 product-details-tags"},[e("h6",{staticClass:"mb-2"},[this._v("Tags:")]),this._v(" "),e("p",[this._v("Fashion, Hand bag, belt")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-3 product-details-share"},[e("h6",{staticClass:"mb-2"},[this._v("Share this product:")]),this._v(" "),e("p",[e("button",{staticClass:"color-red p-2 mr-1 font-14"},[e("i",{staticClass:"fab fa-facebook-f"})]),this._v(" "),e("button",{staticClass:"color-red p-2 mr-1 font-14"},[e("i",{staticClass:"fab fa-twitter"})]),this._v(" "),e("button",{staticClass:"color-red p-2 mr-1 font-14"},[e("i",{staticClass:"fab fa-pinterest-p"})]),this._v(" "),e("button",{staticClass:"color-red p-2 mr-1 font-14"},[e("i",{staticClass:"fab fa-linkedin-in"})])])])}],!1,null,"4c3fdde6",null);e.default=component.exports;installComponents(component,{CountDown:r(523).default,RelatedProducts:r(510).default,PaymentMethods:r(477).default})}}]);
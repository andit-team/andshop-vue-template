<template>
  <div>
    <section class="wishlist-page bg-white p-3">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4 class="mb-4 pb-2 border-bottom">Wishlist</h4>
          </div>
          <div class="col-12">

            <!-- Wishlist Products List wrap -->
            <div class="wishlist-products-list-wrap mb-3">
              <!-- Shop/Brand Name -->
              <div class="cart_brand_info media p-2">
                <div class="cart_brand_name">
                  <p class="font-weight-normal">Bp Baazar</p>
                </div>  
              </div>

              <!-- Cart Product List -->
              <ul class="list-unstyled">

                <li class="bg-white mt-3">
                  <!-- Cart Product Box -->
                  <div class="cart_product_box media p-2">
                    <div class="cart-product-img"><img :src="require('@/assets/images/fashion/1.jpg')" class="mr-3" alt="cart list"></div>
                    <div class="media-body">
                      <p class="mt-0 mb-1 font-weight-bold">Sunglass</p>
                      <p class="cart-product-des font-14">Product des congue felis in faucibus.</p>
                    </div>
                    <div class="media-body">
                      <div class="d-flex flex-column">
                        <span class="discounted-price mr-1 color-red">$2.00</span>
                        <p>
                          <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span> 
                          <span class="discount ml-1 color-dark">-25%</span>
                        </p>   
                        <span class="discounted-price mr-1 color-green">Price dropped</span></div>
                    </div>
                    <div class="wishlist-add-to-cart">
                      <button class="font-14 ml-2" title="delete"><i class="far fa-trash-alt"></i></button>
                      <button class="font-14 ml-2" title="add to cart"><i class="fas fa-cart-plus"></i></button>
                    </div>
                  </div>
                </li>

              </ul>

            </div>
            <!-- Wishlist Products List wrap -->

            <!-- Wishlist Products List wrap -->
            <div class="wishlist-products-list-wrap mb-3">
              <!-- Shop/Brand Name -->
              <div class="cart_brand_info media p-2">
                <div class="cart_brand_name">
                  <p class="font-weight-normal">Bp Baazar</p>
                </div>  
              </div>

              <!-- Cart Product List -->
              <ul class="list-unstyled">

                <li class="bg-white mt-3">
                  <!-- Cart Product Box -->
                  <div class="cart_product_box media p-2">
                    <div class="cart-product-img"><img :src="require('@/assets/images/fashion/2.jpg')" class="mr-3" alt="cart list"></div>
                    <div class="media-body">
                      <p class="mt-0 mb-1 font-weight-bold">Fashion Sunglass</p>
                      <p class="cart-product-des font-14">Product des congue felis in faucibus.</p>
                    </div>
                    <div class="media-body">
                      <div class="d-flex flex-column">
                        <span class="discounted-price mr-1 color-red">$2.00</span>
                        <p>
                          <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span> 
                          <span class="discount ml-1 color-dark">-25%</span>
                        </p>   
                        <span class="discounted-price mr-1 color-green">Price dropped</span></div>
                    </div>
                    <div class="wishlist-add-to-cart">
                      <button class="font-14 ml-2" title="delete"><i class="far fa-trash-alt"></i></button>
                      <button class="font-14 ml-2" title="add to cart"><i class="fas fa-cart-plus"></i></button>
                    </div>
                  </div>
                </li>

                <li class="bg-white mt-3">
                  <!-- Cart Product Box -->
                  <div class="cart_product_box media p-2">
                    <div class="cart-product-img"><img :src="require('@/assets/images/fashion/3.jpg')" class="mr-3" alt="cart list"></div>
                    <div class="media-body">
                      <p class="mt-0 mb-1 font-weight-bold">Winter coat</p>
                      <p class="cart-product-des font-14">Product des congue felis in faucibus.</p>
                    </div>
                    <div class="media-body">
                      <div class="d-flex flex-column">
                        <span class="discounted-price mr-1 color-red">$2.00</span>
                        <p>
                          <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span> 
                          <span class="discount ml-1 color-dark">-25%</span>
                        </p>   
                        <span class="discounted-price mr-1 color-green">Price dropped</span></div>
                    </div>
                    <div class="wishlist-add-to-cart">
                      <button class="font-14 ml-2" title="delete"><i class="far fa-trash-alt"></i></button>
                      <button class="font-14 ml-2" title="add to cart"><i class="fas fa-cart-plus"></i></button>
                    </div>
                  </div>
                </li>

                <li class="bg-white mt-3">
                  <!-- Cart Product Box -->
                  <div class="cart_product_box media p-2">
                    <div class="cart-product-img"><img :src="require('@/assets/images/fashion/4.jpg')" class="mr-3" alt="cart list"></div>
                    <div class="media-body">
                      <p class="mt-0 mb-1 font-weight-bold">Product name here</p>
                      <p class="cart-product-des font-14">Product des congue felis in faucibus.</p>
                    </div>
                    <div class="media-body">
                      <div class="d-flex flex-column">
                        <span class="discounted-price mr-1 color-red">$2.00</span>
                        <p>
                          <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span> 
                          <span class="discount ml-1 color-dark">-25%</span>
                        </p>   
                        <span class="discounted-price mr-1 color-green">Price dropped</span></div>
                    </div>
                    <div class="wishlist-add-to-cart">
                      <button class="font-14 ml-2" title="delete"><i class="far fa-trash-alt"></i></button>
                      <button class="font-14 ml-2" title="add to cart"><i class="fas fa-cart-plus"></i></button>
                    </div>
                  </div>
                </li>

             </ul>

            </div>
            <!-- Wishlist Products List wrap -->

            <!-- Wishlist Products List wrap -->
            <div class="wishlist-products-list-wrap mb-3">
              <!-- Shop/Brand Name -->
              <div class="cart_brand_info media p-2">
                <div class="cart_brand_name">
                  <p class="font-weight-normal">Bp Baazar</p>
                </div>  
              </div>

              <!-- Cart Product List -->
              <ul class="list-unstyled">

                <li class="bg-white mt-3">
                  <!-- Cart Product Box -->
                  <div class="cart_product_box media p-2">
                    <div class="cart-product-img"><img :src="require('@/assets/images/fashion/5.jpg')" class="mr-3" alt="cart list"></div>
                    <div class="media-body">
                      <p class="mt-0 mb-1 font-weight-bold">Tops</p>
                      <p class="cart-product-des font-14">Product des congue felis in faucibus.</p>
                    </div>
                    <div class="media-body">
                      <div class="d-flex flex-column">
                        <span class="discounted-price mr-1 color-red">$2.00</span>
                        <p>
                          <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span> 
                          <span class="discount ml-1 color-dark">-25%</span>
                        </p>   
                        <span class="discounted-price mr-1 color-green">Price dropped</span></div>
                    </div>
                    <div class="wishlist-add-to-cart">
                      <button class="font-14 ml-2" title="delete"><i class="far fa-trash-alt"></i></button>
                      <button class="font-14 ml-2" title="add to cart"><i class="fas fa-cart-plus"></i></button>
                    </div>
                  </div>
                </li>

                <li class="bg-white mt-3">
                  <!-- Cart Product Box -->
                  <div class="cart_product_box media p-2">
                    <div class="cart-product-img"><img :src="require('@/assets/images/fashion/6.jpg')" class="mr-3" alt="cart list"></div>
                    <div class="media-body">
                      <p class="mt-0 mb-1 font-weight-bold">Shirt</p>
                      <p class="cart-product-des font-14">Product des congue felis in faucibus.</p>
                    </div>
                    <div class="media-body">
                      <div class="d-flex flex-column">
                        <span class="discounted-price mr-1 color-red">$2.00</span>
                        <p>
                          <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span> 
                          <span class="discount ml-1 color-dark">-25%</span>
                        </p>   
                        <span class="discounted-price mr-1 color-green">Price dropped</span>
                      </div>
                    </div>
                    <div class="wishlist-add-to-cart">
                      <button class="font-14 ml-2" title="delete"><i class="far fa-trash-alt"></i></button>
                      <button class="font-14 ml-2" title="add to cart"><i class="fas fa-cart-plus"></i></button>
                    </div>
                  </div>
                </li>

                <li class="bg-white mt-3">
                  <!-- Cart Product Box -->
                  <div class="cart_product_box media p-2">
                    <div class="cart-product-img"><img :src="require('@/assets/images/fashion/7.jpg')" class="mr-3" alt="cart list"></div>
                    <div class="media-body">
                      <p class="mt-0 mb-1 font-weight-bold">Long Coat</p>
                      <p class="cart-product-des font-14">Product des congue felis in faucibus.</p>
                    </div>
                    <div class="media-body">
                      <div class="d-flex flex-column">
                        <span class="discounted-price mr-1 color-red">$2.00</span>
                        <p>
                          <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span> 
                          <span class="discount ml-1 color-dark">-25%</span>
                        </p>   
                        <span class="discounted-price mr-1 color-green">Price dropped</span></div>
                    </div>
                    <div class="wishlist-add-to-cart">
                      <button class="font-14 ml-2" title="delete"><i class="far fa-trash-alt"></i></button>
                      <button class="font-14 ml-2" title="add to cart"><i class="fas fa-cart-plus"></i></button>
                    </div>
                  </div>
                </li>

             </ul>

            </div>
            <!-- Wishlist Products List wrap -->
            
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'dashboard'
}
</script>
<template>
  <div>
    <!-- Breadcrumb Area Start -->
    <div class="breadcrumb-area bg-white">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent m-0 section-t-40-space section-b-40-space">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item"><nuxt-link to="/search-results/">Product</nuxt-link></li>
                <li class="breadcrumb-item active" aria-current="page">Compare</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Area End -->

    <section class="compare-page bg-different section-t-space">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12">
          <div class="compare_box bg-white p-4">
            <div class="table-responsive mb-0">
              <table class="table table-bordered text-center">
              <tbody>
                <tr class="pr_add_to_cart">
                  <td class="row_title">Add To Cart</td>
                  <td class="row_btn"><nuxt-link to="/cart" class="theme-button small-button rounded">Add To Cart</nuxt-link></td>
                  <td class="row_btn"><nuxt-link to="/cart" class="theme-button small-button rounded">Add To Cart</nuxt-link></td>
                  <td class="row_btn"><nuxt-link to="/cart" class="theme-button small-button rounded">Add To Cart</nuxt-link></td>
                </tr>
                <tr class="pr_image">
                  <td class="row_title">Product Image</td>
                  <td class="row_img"><img :src="require('@/assets/images/fashion/1.jpg')" alt="compare-img"></td>
                  <td class="row_img"><img :src="require('@/assets/images/fashion/2.jpg')" alt="compare-img"></td>
                  <td class="row_img"><img :src="require('@/assets/images/fashion/3.jpg')" alt="compare-img"></td>
                </tr>
                <tr class="pr_title">
                  <td class="row_title">Product Name</td>
                  <td class="product_name"><a href="shop-product-detail.html">Dress For Woman</a></td>
                  <td class="product_name"><a href="shop-product-detail.html">Lether Coat</a></td>
                  <td class="product_name"><a href="shop-product-detail.html">Women dress</a></td>
                </tr>
                <tr class="pr_price">
                  <td class="row_title">Price</td>
                  <td class="product_price"><span class="price">$45.00</span></td>
                  <td class="product_price"><span class="price">$55.00</span></td>
                  <td class="product_price"><span class="price">$68.00</span></td>
                </tr>
                <tr class="pr_rating">
                  <td class="row_title">Rating</td>
                  <td>
                    <div class="rating_wrap">
                      <div class="rating">
                        <div class="product_rate" style="width:80%"></div>
                      </div>
                      <span class="rating_num">(21)</span>
                    </div>
                  </td>
                  <td>
                    <div class="rating_wrap">
                      <div class="rating">
                        <div class="product_rate" style="width:68%"></div>
                      </div>
                      <span class="rating_num">(15)</span>
                    </div>
                  </td>
                  <td>
                    <div class="rating_wrap">
                      <div class="rating">
                        <div class="product_rate" style="width:87%"></div>
                      </div>
                      <span class="rating_num">(25)</span>
                    </div>
                  </td>
                </tr>
                <tr class="description">
                  <td class="row_title">Description</td>
                  <td class="row_text"><p>Sum dolor, sit amet consectetur adipisicing elit. Nobis accusantium ut eveniet fuga.</p></td>
                  <td class="row_text"><p>Amet consectetur, adipisicing elit. Libero consequatur facilis minima quisquam optio ea maxime, inventore.</p></td>
                  <td class="row_text"><p>Printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve.</p></td>
                </tr>
                <tr class="pr_size">
                  <td class="row_title">Sizes Available</td>
                  <td class="row_size"><span>S, M, L, XL</span></td>
                  <td class="row_size"><span>S, M, L, XL</span></td>
                  <td class="row_size"><span>S, M, L, XL</span></td>
                </tr>
                <tr class="pr_stock">
                  <td class="row_title">Item Availability</td>
                  <td class="row_stock"><span class="in-stock text-success">In Stock</span></td>
                  <td class="row_stock"><span class="out-stock color-red">Out Of Stock</span></td>
                  <td class="row_stock"><span class="in-stock text-success">In Stock</span></td>
                </tr>
                <tr class="pr_weight">
                  <td class="row_title">Weight</td>
                  <td class="row_weight"></td>
                  <td class="row_weight"></td>
                  <td class="row_weight"></td>
                </tr>
                <tr class="pr_dimensions">
                  <td class="row_title">Dimensions</td>
                  <td class="row_dimensions">N/A</td>
                  <td class="row_dimensions">N/A</td>
                  <td class="row_dimensions">N/A</td>
                </tr>
                <tr class="pr_remove">
                  <td class="row_title"></td>
                  <td class="row_remove">
                    <button class="small-button">Remove <i class="fa fa-times"></i></button>
                  </td>
                  <td class="row_remove">
                    <button class="small-button">Remove <i class="fa fa-times"></i></button>
                  </td>
                  <td class="row_remove">
                    <button class="small-button">Remove <i class="fa fa-times"></i></button>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>

    <PaymentMethods />

  </div>
</template>

<script>
import PaymentMethods from '../components/partials/PaymentMethods'
export default {
  name: "Compare",
  components: {
    PaymentMethods
  },
  head() {
    return {
      title: 'Compare'
    }
  },
}
</script>
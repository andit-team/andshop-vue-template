<template>
  <div class="merchant-products-page">
    <div class="card dashboard-table border-0 mt-0">
      <div class="card-body">
        <div class="top-sec d-flex justify-content-between mb-4 pb-2 border-bottom">
          <h4 class="text-capitalize">all products</h4>
          <nuxt-link to="/merchant-account/products/add-product" class="theme-button small-button rounded">add product</nuxt-link>
        </div>
        <div class="filtering-part mb-2">
          <form @click.prevent>
            <div class="form-row">
              <div class="form-group col">
                <input type="text" class="form-control" id="inputCity" placeholder="Search...">
              </div>
              <div class="form-group col">
                <select id="input_category" class="form-control">
                  <option selected>All category</option>
                  <option>Shirt</option>
                  <option>Pents</option>
                  <option>T-Shirt</option>
                </select>
              </div>
              <div class="form-group col">
                <select id="input_status" class="form-control">
                  <option selected>Status</option>
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Rejected</option>
                </select>
              </div>
              <div class="form-group">
                <button class="form-control bg-red text-white font-weight-600">Search</button>
              </div>
            </div>
          </form>
        </div>
        <table class="table-responsive-xs table-responsive-sm table-responsive-md table-responsive-lg table mb-0">
          <thead>
            <tr>
              <th scope="col">image</th>
              <th scope="col">product name</th>
              <th scope="col">category</th>
              <th scope="col">price</th>
              <th scope="col">stock</th>
              <th scope="col">sales</th>
              <th scope="col">edit/delete</th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <th scope="row"><img :src="require('@/assets/images/fashion/1.jpg')" class="blur-up lazyloaded" alt="product"></th>
                <td>neck velvet dress</td>
                <td>women clothes</td>
                <td>$205</td>
                <td>1000</td>
                <td>2000</td>
                <td>
                  <button><i class="far fa-edit mr-1"></i></button>
                  <button><i class="far fa-trash-alt ml-1"></i></button>
                </td>
              </tr>
              <tr>
                <th scope="row"><img :src="require('@/assets/images/furniture/1.jpg')" class="blur-up lazyloaded" alt="product"></th>
                <td>belted trench coat</td>
                <td>women clothes</td>
                <td>$350</td>
                <td>800</td>
                <td>350</td>
                <td>
                  <button><i class="far fa-edit mr-1"></i></button>
                  <button><i class="far fa-trash-alt ml-1"></i></button>
                </td>
              </tr>
              <tr>
                <th scope="row"><img :src="require('@/assets/images/electronics/1.jpg')" class="blur-up lazyloaded" alt="product"></th>
                <td>men print tee</td>
                <td>men clothes</td>
                <td>$150</td>
                <td>750</td>
                <td>150</td>
                <td>
                  <button><i class="far fa-edit mr-1"></i></button>
                  <button><i class="far fa-trash-alt ml-1"></i></button>
                </td>
              </tr>
              <tr>
                <th scope="row"><img :src="require('@/assets/images/groceries/1.jpg')" class="blur-up lazyloaded" alt="product"></th>
                <td>woman print tee</td>
                <td>women clothes</td>
                <td>$150</td>
                <td>750</td>
                <td>150</td>
                <td>
                  <button><i class="far fa-edit mr-1"></i></button>
                  <button><i class="far fa-trash-alt ml-1"></i></button>
                </td>
              </tr>
              <tr>
                <th scope="row"><img :src="require('@/assets/images/fashion/3.jpg')" class="blur-up lazyloaded" alt="product"></th>
                <td>men print tee</td>
                <td>men clothes</td>
                <td>$150</td>
                <td>750</td>
                <td>150</td>
                <td>
                  <button><i class="far fa-edit mr-1"></i></button>
                  <button><i class="far fa-trash-alt ml-1"></i></button>
                </td>
              </tr>
              <tr>
                <th scope="row"><img :src="require('@/assets/images/furniture/4.jpg')" class="blur-up lazyloaded" alt="product"></th>
                <td>men print tee</td>
                <td>men clothes</td>
                <td>$150</td>
                <td>750</td>
                <td>150</td>
                <td>
                  <button><i class="far fa-edit mr-1"></i></button>
                  <button><i class="far fa-trash-alt ml-1"></i></button>
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'merchantProducts',
  layout: 'merchant-dashboard',
}
</script>
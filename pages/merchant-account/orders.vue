<template>
  <div class="merchant-orders-page">
    <div class="card dashboard-table border-0 mt-0">
      <div class="card-body">
        <div class="top-sec d-flex justify-content-between mb-4">
          <h4 class="text-capitalize">all Orders</h4>
        </div>
        <table class="table table-responsive-sm mb-0">
          <thead>
            <tr>
              <th scope="col">order id</th>
              <th scope="col">product details</th>
              <th scope="col">status</th>
              <th scope="col">price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">#125021</th>
              <td>neck velvet dress</td>
              <td>shipped</td>
              <td>$205</td>
            </tr>
            <tr>
              <th scope="row">#521214</th>
              <td>belted trench coat</td>
              <td>shipped</td>
              <td>$350</td>
            </tr>
            <tr>
              <th scope="row">#521021</th>
              <td>men print tee</td>
              <td>pending</td>
              <td>$150</td>
            </tr>
            <tr>
              <th scope="row">#245021</th>
              <td>woman print tee</td>
              <td>shipped</td>
              <td>$150</td>
            </tr>
            <tr>
              <th scope="row">#122141</th>
              <td>men print tee</td>
              <td>canceled</td>
              <td>$150</td>
            </tr>
            <tr>
              <th scope="row">#125015</th>
              <td>men print tee</td>
              <td>pending</td>
              <td>$150</td>
            </tr>
            <tr>
              <th scope="row">#245021</th>
              <td>woman print tee</td>
              <td>shipped</td>
              <td>$150</td>
            </tr>
            <tr>
              <th scope="row">#122141</th>
              <td>men print tee</td>
              <td>canceled</td>
              <td>$150</td>
            </tr>
            <tr>
              <th scope="row">#125015</th>
              <td>men print tee</td>
              <td>pending</td>
              <td>$150</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'merchantOrders',
  layout: 'merchant-dashboard',
}
</script>

<style>

</style>
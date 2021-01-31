<template>
  <div>
    <!-- Top List Box -->
    <ul class="list-unstyled top-list d-flex justify-content-start mb-4">
      <li class="media bg-white rounded border-left border-left-5 border-danger p-3 mr-3 w-100" style="border-width: 3px !important">
        <img :src='"@/assets/images/all-icon/dashboard-list-1.svg"' class="mr-3" alt="andgarivara" style="height: 50px">
        <div class="media-body">
          <h5 class="mt-0 mb-1">25</h5>
          <p class="text-black-color">Total Products</p>
          </div>
      </li>
      <li class="media bg-white rounded border-left border-left-5 border-danger p-3 mr-3 w-100" style="border-width: 3px !important">
        <img :src='"@/assets/images/all-icon/dashboard-list-2.svg"' class="mr-3" alt="andgarivara" style="height: 50px">
        <div class="media-body">
          <h5 class="mt-0 mb-1">1225</h5>
          <p class="text-black-color">Total Sales</p>
          </div>
      </li>
      <li class="media bg-white rounded border-left border-left-5 border-danger p-3 mr-3 w-100" style="border-width: 3px !important">
        <img :src='"@/assets/images/all-icon/dashboard-list-3.svg"' class="mr-3" alt="andgarivara" style="height: 50px">
        <div class="media-body">
          <h5 class="mt-0 mb-1">285</h5>
          <p class="text-black-color">Order Pending</p>
          </div>
      </li>
    </ul>
    <!-- Top List Box -->

    <div class="row graphical-chart-wrap mb-4">

      <div class="col-lg-6">
        <div class="card border-0 p-3">
          <div class="card-body">
            <b-dropdown class="float-right" variant="black" toggle-class="arrow-none card-drop" right>
                <template v-slot:button-content>
                    <i class="mdi mdi-dots-horizontal"></i>
                </template>
                <!-- item-->
                <b-dropdown-item>Settings</b-dropdown-item>
                <!-- item-->
                <b-dropdown-item>Download</b-dropdown-item>
                <!-- item-->
                <b-dropdown-item>Upload</b-dropdown-item>
                <!-- item-->
                <b-dropdown-item>Action</b-dropdown-item>
            </b-dropdown>

            <h6 class="header-title">Total Revenue</h6>

            <div class="mt-3 text-center">
              <div class="row pt-2">
                <div class="col-4">
                  <p class="text-muted font-14 mb-1 text-truncate">Target</p>
                  <h4 class="font-14">$56,214</h4>
                </div>
                <div class="col-4">
                  <p class="text-muted font-14 mb-1 text-truncate">Last week</p>
                  <h4 class="font-14">$840</h4>
                </div>
                <div class="col-4">
                  <p class="text-muted font-14 mb-1 text-truncate">Last Month</p>
                  <h4 class="font-14">$7,845</h4>
                </div>
              </div>
              <div dir="ltr">
                <apexchart class="apex-charts" type="line" :options="chartOptions" height="265" :series="series"></apexchart>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card border-0 p-3">
          <div class="card-body">
           <h6 class="header-title mb-2">Total Revenue</h6>
            <div id="chart">
              <apexchart type="donut" :options="chartOptions1" :series="series1"></apexchart>
            </div>
          </div>
        </div>

      </div>

    </div>

    <div class="row merchant-product-table">
      <div class="col-lg-6">
        <div class="card dashboard-table">
          <div class="card-body">
            <h6 class="header-title mb-3">Trending Products</h6>
            <table class="table mb-0">
              <thead>
                <tr>
                  <th scope="col">image</th>
                  <th scope="col">product name</th>
                  <th scope="col">price</th>
                  <th scope="col">sales</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><img :src="require('@/assets/images/products/1.jpg')" class="blur-up lazyloaded"></th>
                  <td>neck velvet dress</td>
                  <td>$205</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <th scope="row"><img :src="require('@/assets/images/products/1.jpg')" class="blur-up lazyloaded"></th>
                  <td>belted trench coat</td>
                  <td>$350</td>
                  <td>800</td>
                </tr>
                <tr>
                  <th scope="row"><img :src="require('@/assets/images/products/1.jpg')" class="blur-up lazyloaded"></th>
                  <td>man print tee</td>
                  <td>$150</td>
                  <td>750</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card dashboard-table">
          <div class="card-body">
            <h6 class="header-title mb-3">Recent Orders</h6>
            <table class="table mb-0">
              <thead>
                <tr>
                  <th scope="col">order id</th>
                  <th scope="col">product details</th>
                  <th scope="col">status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">#21515</th>
                  <td>neck velvet dress</td>
                  <td>confrimed</td>
                </tr>
                <tr>
                  <th scope="row">#78153</th>
                  <td>belted trench coat</td>
                  <td>shipped</td>
                </tr>
                <tr>
                  <th scope="row">#51512</th>
                  <td>man print tee</td>
                  <td>pending</td>
                </tr>
                <tr>
                  <th scope="row">#78153</th>
                  <td>belted trench coat</td>
                  <td>shipped</td>
                </tr>
                <tr>
                  <th scope="row">#78153</th>
                  <td>belted trench coat</td>
                  <td>shipped</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  layout: 'merchant-dashboard',
  components: {
    apexchart: () => import('vue-apexcharts'),
    
  },

  data() {
    return {
      series: [{
        name: "Desktops",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
      },
      {
        name: "Laptops",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
      }
      ],
      chartOptions: {
        chart: {
          type: "line",
          padding: {
            right: 0,
            left: 0
          },
          stacked: false,
          toolbar: {
            show: false
          }
        },
        stroke: {
          width: [1, 2],
          curve: "smooth"
        },
        plotOptions: {
          bar: {
            columnWidth: "50%"
          }
        },
        colors: ["#3bafda", "#1abc9c", "#f7b84b"],
        fill: {
          opacity: [0.25, 1],
          gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: [
          "01/01/2020",
          "02/01/2020",
          "03/01/2020",
          "04/01/2020",
          "05/01/2020",
          "06/01/2020",
          "07/01/2020",
          "08/01/2020",
          "09/01/2020",
          "10/01/2020",
          "11/01/2020"
        ],
        markers: {
          size: 0
        },
        legend: {
          offsetY: 5
        },
        xaxis: {
          type: "datetime"
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return val + "k";
            },
            offsetX: -10
          }
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " Dollars";
              }
              return y;
            }
          }
        },
        grid: {
          borderColor: "#f1f3fa",
          padding: {
            bottom: 10
          }
        }
      },

     series1: [44, 55, 41, 17, 15],
      chartOptions1: {
        chart: {
          type: 'donut',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },

    };
  }

}
</script>

<style>

</style>
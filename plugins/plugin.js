import Vue from 'vue'

import { BootstrapVueIcons } from 'bootstrap-vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import ImageMagnifier from 'vue-image-magnifier'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueApexCharts from 'vue-apexcharts'
import tinymce from 'vue-tinymce-editor'
import OtpInput from "@bachdgvn/vue-otp-input";

Vue.use(BootstrapVueIcons)
Vue.use(VueAwesomeSwiper)
Vue.use(ImageMagnifier)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAuo-_NYLqOIQdCkQoInC-Z8bvE0NVMuC8',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
})

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.component('tinymce', tinymce)
Vue.component("v-otp-input", OtpInput)
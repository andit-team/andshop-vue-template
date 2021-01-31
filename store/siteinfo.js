export const state = () => ({
  sliderList:[],
  productCategoryList:[],
  bestSellerProducts:[],
  newArrivalProducts:[],
  flashDealProducts:[],
  popularCategories:[],
  risingStarsShops:[],
  topRatedProducts:[],
  upcomingProducts:[]
})

export const mutations = {
  updateSliderList(state, sliderList){
    state.sliderList=sliderList;
  },
  updateProductCategoryList(state, categoryList){
    state.productCategoryList=categoryList;
  },
  updateBestSellerProducts(state, products){
    state.bestSellerProducts=products;
  },
  updateNewArrivalProducts(state, products){
    state.newArrivalProducts=products;
  },
  updateFlashDealProducts(state, products){
    state.flashDealProducts=products;
  },
  updatePopularCategories(state, categories){
    state.popularCategories=categories;
  },
  updateRisingStarsShops(state, risingStar){
    state.risingStarsShops=risingStar;
  },
  updateTopRatedProducts(state, products){
    state.topRatedProducts=products;
  },
  updateUpcomingProducts(state, products){
    state.upcomingProducts=products;
  },
}

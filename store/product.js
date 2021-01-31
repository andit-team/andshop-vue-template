export const state = () => ({
    categoryWiseProducts:[],
    productDetails:[],
    // productCategoryList:[]
  })
  
  export const mutations = {
    updateCategoryWiseProducts(state, categoryWiseProducts){
      state.categoryWiseProducts=categoryWiseProducts;
    },
    loadMoreCategoryWiseProducts(state, categoryWiseProducts){
      state.categoryWiseProducts = state.categoryWiseProducts.concat(categoryWiseProducts); //array merge.. with concate.
    },
    updateProductDetails(state, productDetails){
      state.productDetails = productDetails;
    },
  }
  
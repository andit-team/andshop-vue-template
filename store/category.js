export const state = () => ({
    subCategories:[],
    parentCategories:[],
  })
  
  export const mutations = {
    updateSubCategories(state, subCategories){
      state.subCategories=subCategories;
    },
    updateParentCategories(state, parentCategories){
      state.parentCategories=parentCategories;
    },
  }
  
import {GET_MSITE_DATA,GET_SHIWU_DATA,GET_CATEGORYS_DATA} from './mutations-type'

export default {
  [GET_MSITE_DATA](state,{cateList}){
    state.cateList = cateList
  },
  [GET_SHIWU_DATA](state,{shiwu}){
    state.shiwu = shiwu
  },
  
  [GET_CATEGORYS_DATA](state,{categoryList}){
    state.categoryList = categoryList
  }
}

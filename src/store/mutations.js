import {GET_MSITE_DATA} from './mutations-type'

export default {
  [GET_MSITE_DATA](state,{cateList}){
    state.cateList = cateList
  }
}

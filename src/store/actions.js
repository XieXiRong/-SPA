
import {GET_MSITE_DATA,GET_SHIWU_DATA,GET_CATEGORYS_DATA} from './mutations-type'
import {getMsiteDate,getShiwuData,getCategoryList} from '../api/index'

//获取主页数据
export default {
  async getMsiteDates({commit,state}){
    const result = await getMsiteDate()
    if(result.code===0){
      const cateList = result.data
      commit(GET_MSITE_DATA,{cateList})
    }
  },
  async getShiwuDatas({commit,state}){
    const result = await getShiwuData()
    if(result.code===0){
      const shiwu = result.data
      commit(GET_SHIWU_DATA,{shiwu})
    }
  },
  async getCategoryLists({commit,state}){
    const result = await getCategoryList()
    if(result.code === 0){
      const categoryList = result.data
      
      commit(GET_CATEGORYS_DATA,{categoryList})
    }
  },
}

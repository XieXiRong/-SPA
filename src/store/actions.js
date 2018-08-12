
import {GET_MSITE_DATA} from './mutations-type'
import {getMsiteDate} from '../api'

//获取主页数据
export default {
  async getMsiteDates({commit,state}){
    const result = await getMsiteDate()
    if(result.code===0){
      const cateList = result.data
      commit(GET_MSITE_DATA,{cateList})
    }
  }
}

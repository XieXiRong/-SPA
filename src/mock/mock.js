import Mock from 'mockjs'
import msiteData from '../../data/datahome'
import shiwuData from '../../data/datashiwu'
import fenleiData from '../../data/datafenlei'

Mock.mock('/msite',{code:0,data:msiteData})
Mock.mock('/shiwu',{code:0,data:shiwuData})
Mock.mock('/categorys',{code:0,data:fenleiData})

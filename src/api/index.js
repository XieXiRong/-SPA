import ajax from './ajax'

export const getMsiteDate = () => ajax('/msite')

export const getShiwuData = () => ajax('/shiwu')

export const getCategoryList = () => ajax('/categorys')



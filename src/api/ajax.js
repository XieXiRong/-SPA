
import axios from 'axios'

export default function ajax(url,data={},type='GET'){
  return new Promise(function (resolve,reject) {
    let prom = ''
    if(type==='GET'){
      let queryStr = ''
      Object.keys(data).forEach(key=>{
        const value = data[key]
        queryStr += key + '=' + value + '&'
      })
      if(queryStr) { // username=tom&password=123&-->username=tom&password=123
        // 去除最后的&
        queryStr = queryStr.substring(0,queryStr.length-1) // username=tom&password=123
        queryStr = '?' + queryStr //?username=tom&password=123
      }
      prom = axios.get(url+queryStr)
    }else{
      prom = axios.post(url,data)
    }
    prom.then(response =>{
      resolve(response.data)
    }).catch(err=>{
      reject(err)
    })
  })
}



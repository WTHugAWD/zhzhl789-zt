import axios from 'axios'
import { baseUrl } from '@/config'   // 导入配置文件

// 请求类
class HttpRequest {
  constructor(baseUrl = baseURL) {  //构造函数
    this.baseUrl = baseUrl
    this.queue = {}
  }

  // 获取默认配置
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      timeout: 5000,
      headers:{
      	"Authorize" : localStorage.getItem('AccessToken') + '|' + localStorage.getItem('RefreshToken'),
      	'Content-type': 'application/json'
      }
    }

    return config
  }

  // 请求和响应拦截
  interceptors(instance, url) {

    // 请求拦截器
    instance.interceptors.request.use(config => {
      if (!Object.keys(this.queue).length) {
        //显示Loading
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })

    // 响应拦截器
    instance.interceptors.response.use(res => {
      delete this.queue[url]
      if(res.headers.authorize !== undefined) {
      	var authorize = JSON.parse(res.headers.authorize);
      	localStorage.setItem("AccessToken", authorize.Access_token);
      	localStorage.setItem("RefreshToken", authorize.Refresh_token);
      }
      
//    if(res.data.type != 1){
//				alert(res.data.message);
//    }
      return res
    }, error => {
      delete this.queue[url]
      return Promise.reject(error)
    })
  }

  // 获取axios实例
  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(options)
  }
}

export default HttpRequest

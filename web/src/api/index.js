import axios from 'axios'
import $config from '../config/index.js'
const  process = import.meta.env
console.log(process,'ppp')
// 创建 Axios 实例
const service = axios.create({
  baseURL: process.VITE_BASE_API, // 从环境变量获取基础URL
  timeout: 15000, // 请求超时时间
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }
})

// 请求拦截器
service.interceptors.request.use(
    config => {
      // 请求前处理（如添加token）
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    error => {
      return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
      // 统一处理响应数据格式
      const res = response.data
      if (res.code !== 200) { // 根据业务状态码判断
        return Promise.reject(new Error(res.message || 'Error'))
      }
      return res
    },
    error => {
      // 统一错误处理
      let message = ''
      if (error.response) {
        // HTTP 状态码处理
        switch (error.response.status) {
          case 400:
            message = '请求错误'
            break
          case 401:
            message = '未授权，请重新登录'
            // 跳转登录页
            break
          case 403:
            message = '拒绝访问'
            break
          case 404:
            message = '请求资源不存在'
            break
          case 500:
            message = '服务器错误'
            break
          default:
            message = `连接错误: ${error.response.status}`
        }
      } else {
        message = '网络连接异常'
      }
      // 显示错误提示（可根据UI库调整）
      console.error(message)
      return Promise.reject(error)
    }
)

// 封装请求方法
const http = {
  get(url, params, config = {}) {
    return service({
      method: 'get',
      url,
      params,
      ...config
    })
  },

  post(url, data, config = {}) {
    return service({
      method: 'post',
      url,
      data,
      ...config
    })
  },

  put(url, data, config = {}) {
    return service({
      method: 'put',
      url,
      data,
      ...config
    })
  },

  delete(url, params, config = {}) {
    return service({
      method: 'delete',
      url,
      params,
      ...config
    })
  },

  // 文件上传
  upload(url, file) {
    const formData = new FormData()
    formData.append('file', file)
    return this.post(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  }
}

export default http

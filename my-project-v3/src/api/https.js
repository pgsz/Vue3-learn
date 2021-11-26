import axios from "axios";
import { ElMessage } from 'element-plus'

// 是否是生产环境
const isProd = import.meta.env.PROD
// 获取部署的基本url
const ctx = import.meta.env.BASE_URL

const service = axios.create({
  timeout: 20000,
  baseURL: ctx
})


// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== '0' && res.code !== '200') {
      return Promise.reject(new Error(res.msg || res.message))
    } else {
      return Promise.resolve(res)
    }
  },
  error => {
    if (error.message.indexOf('timeout') > -1) {
      ElMessage.error('请求超时，请重试！')
    }
    return Promise.reject(error)
  }
)

export default service
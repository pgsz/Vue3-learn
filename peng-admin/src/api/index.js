import axios from "axios";

const service = axios.create({
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    //
    return config
  },
  error => {
    //
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== '200') {
      return Promise.reject(new Error(res.message))
    } else {
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)
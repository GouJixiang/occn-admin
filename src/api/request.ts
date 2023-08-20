import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export const createAxiosByinterceptors = (
  config?: AxiosRequestConfig
): AxiosInstance => {
  const instance = axios.create({
    timeout: 1000, //超时配置
    withCredentials: true, //跨域携带cookie
    ...config // 自定义配置覆盖基本配置
  })

  // 请求拦截器
  instance.interceptors.request.use(function (config: any) {
    console.log('请求拦截器', config)
    return config
  })

  // 响应拦截器
  instance.interceptors.response.use(function (response) {
    console.log('响应拦截器', response)
    return response.data
  })

  return instance
}

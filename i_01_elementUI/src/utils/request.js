import axios from 'axios';
import { Message } from 'element-ui';


// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000, // 请求超时时间
});


export const setToken = (token:string) => {
  service.defaults.headers['x-Token'] = token;
};

export const clearToken = () => {
  service.defaults.headers['x-Token'] = null;
  delete service.defaults.headers['x-Token'];
};

// request拦截器
/* service.interceptors.request.use((config) => {
  if (store.getters.token) {
    config.headers['X-Token'] = store.getters.token;// 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config;
}, (error) => {
  console.log(error); // for debug
  Promise.reject(error);
}); */

// respone拦截器
service.interceptors.response.use(
  response => response.data,
  (error) => {
    console.log(`err${error}`);// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  },
);

export default service;

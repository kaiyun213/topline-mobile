//封装axios的所有请求
//导入axios
import axios from 'axios'

//创建一个对象
const request = axios.create({
    baseURL: 'http://ttapi.research.itcast.cn/',
});

//设置请求拦截器
request.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

//设置响应拦截器
request.interceptors.response.use(function (response) {

    return response.data.data||response.data;
}, function (error) {

    return Promise.reject(error);
});


//暴露出口
export default request


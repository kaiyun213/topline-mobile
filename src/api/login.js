//封装所有与login有关的请求

//导入request 
import request from '@/utils/request.js'

//封装发送请求的方法

function doLogin({ mobile, code }) {
    return request({
        url: '/app/v1_0/authorizations',
        method: 'POST',
        data: {
            mobile:mobile,
            code:code
        }
    })
}

//将函数暴露出去
export { doLogin }
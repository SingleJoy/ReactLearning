
import React,{component} from 'react';
import axios from 'axios';
import qs from 'qs';


const Axios = axios.create({
    timeout: 30000,                    // request timeout
    responseType: "text",
    // ContentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    transformRequest: [function (data) {  // 将数据转换为表单数据
        data = qs.stringify(data)
        return data
    }],
})


// 请求拦截
Axios.interceptors.request.use((config)=>{
    //做点什么
    return config;
},(error)=>{
    //做点什么
    return Promise.reject(error);
});

// 响应时拦截
Axios.interceptors.response.use((res)=> {
    //做点什么

    return res;
},(error)=> {
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                error.message = '错误请求'
                break;
            case 401:
                error.message = '未授权，请重新登录'
                break;
            case 403:
                error.message = '拒绝访问'
                break;
            case 404:
                error.message = '请求错误,未找到该资源'
                break;
            case 405:
                error.message = '请求方法未允许'
                break;
            case 408:
                error.message = '请求超时'
                break;
            case 500:
                error.message = '服务器端出错'
                break;
            case 501:
                error.message = '网络未实现'
                break;
            case 502:
                error.message = '网络错误'
                break;
            case 503:
                error.message = '服务不可用'
                break;
            case 504:
                error.message = '网络超时'
                break;
            case 505:
                error.message = 'http版本不支持该请求';
                break;
            default:
                error.message = `连接错误${error.response.status}`
        }
    } else {
        error.message = "连接到服务器失败"
    }

    return Promise.reject(error);
});

export default Axios;
;
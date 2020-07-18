import axios from 'axios';
const BASE_URL =  '/enroll';
import Vue from 'vue'
const service = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
    withCredentials: true,
});

service.interceptors.request.use(config => {
    // add some param in header
  config.headers['Authorization'] = localStorage.getItem('Auth') || '';
  config.headers['lang'] = localStorage.getItem('lang') || 'zh_CN'
    return config;
}, error => {
    Promise.reject(error);
});

service.interceptors.response.use(
    response => {
        let headers = response.headers;
        let data = response.data || {};
        if (data.code !== 200) {
            Vue.prototype.$message.error(data.message || '出错了,请稍后再试')
            // return Promise.reject()
        }

        return response.data;
    },
    error => {
        return Promise.reject(error);
    });

// export default service

function checkStatus(response) {
    return response;
}

const request = (config) => {
    return service.request(config).then(checkStatus);
};

export const GET = (url, data, config) => {
    const CONF = {
        url,
        method: 'get',
        params: data,
    };
    return request({...CONF, ...config});
};

export const POST = (url, data, config) => {
    const CONF = {
        url,
        method: 'post',
        data,
    };
    return request({...CONF, ...config});
};

export const PUT = (url, data, config) => {
    const CONF = {
        url,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'put',
        data,
    };
    return request({...CONF, ...config});
};

export const DELETE = (url, data, config) => {
    const CONF = {
        url,
        method: 'delete',
        data,
    };
    return request({...CONF, ...config});
};

import Axios from 'axios'
import router from '@/router'
// import store from '@/store/index.js'

const system = navigator.userAgent.match("iPhone")?"2":"1"

const http = Axios.create({
    // baseURL:process.env.NODE_ENV === "development"?"":""
})
http.defaults.withCredentials = false


// 请求拦截
http.interceptors.request.use((config:any)=>{
    return config
})



// 响应拦截
http.interceptors.response.use((response)=>{
    if(response.data.code === 401){
        localStorage.clear()
        router.push("/login")
    }
    return response
})


export function post(url:string,data:any){
    return new Promise((resolve,reject)=>{
        http.post(url,data).then(res=>{
            const result = res.data
            result.header = res.headers
            resolve(result)
        }).catch(err=>{

        })
    })
}


export function get(url:string,params:any){
    return new Promise((resolve,reject)=>{
        http.get(url,{params}).then(res=>{
            const result = res.data
            result.header = res.headers
            resolve(result)
        }).catch(err=>{

        })
    })
}



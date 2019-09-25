import {get, post, CRM } from '@/axios';



let ajax = '';
export default function Ajax(type,url,msg,data){
    return new Promise((resolve,reject)=>{
        if(msg){
            if(ajax===url){
                // message.warning(msg)
            }else if(type==='get'){
                ajax = url;
                get({
                    url:CRM[url],
                    data
                }).then(res=>{
                    if(res.is_succ){
                        ajax = '';
                        resolve(res.data)
                    }else{
                        ajax = '';
                        console.log(res.message)
                        data&&reject(res)
                    }
                })
            }else{
                ajax = url;
                post({
                    url:CRM[url],
                    data
                }).then(res=>{
                    if(res.is_succ){
                        ajax = '';
                        resolve(res.data)
                    }else{
                        ajax = '';
                        console.log(res.message)
                        data&&reject(res)
                    }
                })
            }
        }else{
            if(type==='get'){
                get({
                    url:CRM[url],
                    data
                }).then(res=>{
                    if(res.is_succ){
                        resolve(res.data)
                    }else{
                        console.log(res.message)
                        data&&reject(res)
                    }
                })
            }else{
                post({
                    url:CRM[url],
                    data
                }).then(res=>{
                    if(res.is_succ){
                        resolve(res.data)
                    }else{
                        console.log(res.message)
                        data&&reject(res)
                    }
                })
            }
        }

    })
}

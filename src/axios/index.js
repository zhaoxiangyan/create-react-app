/**
 * http通用工具函数
 */
import axios from 'axios';


/**
 * 公用get请求
 * @param url       接口地址
 * @param data      接口参数
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
export const get = ({url, data, headers}) => axios.get(url, data&&{params:data}, headers).then(Response).catch(Error_res);

export const post = ({url, data, headers}) => axios.post(url, data, headers).then(Response).catch(Error_res);

// 处理res返回

function Response(res){
    if(localStorage.getItem('token')&&res.headers.authorization&&(localStorage.getItem('token')!==res.headers.authorization)){
        axios.defaults.headers['Authorization']=res.headers.authorization;
        localStorage.setItem('token',res.headers.authorization);
        return res.data;
    }else{
        return res.data;
    }
}
// 处理err返回
function Error_res(err){
    if(err.response&&(err.response.data.code === 100025||err.response.data.code === 100024||err.response.data.code === 100010)){
        window.location.href="/login";
        localStorage.removeItem('token')
    }
    return (!Boolean(err.response)||!Boolean(err.response.status)||err.response.status===500)?{is_succ:false,message:'Error'}:err.response.data;
}


/**
 * 所有api接口url
 */
export const CRM = {

    // 客户列表 划转
    customer_list_transfer:'/api/customer/list_transfer',
    
}
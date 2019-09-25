import { combineReducers } from 'redux';
import * as type from './type';


const defaultState = {
    lang: (window.localStorage.getItem('lang')&&['zh','cn'].includes(window.localStorage.getItem('lang')))?window.localStorage.getItem('lang'):'zh'
}
// 服务器数据
const serverData = (state,action)=>{
    switch (action.type){
        default:
            return {...state};
    }   
}

// 客户端数据
const clientData = (state=defaultState,action)=>{
    switch (action.type){
        case type.lang_DATA:
            return {...state,lang:action.data||'zh'}
        default:
            return {...state};
    } 
}

export default combineReducers({
    serverData,clientData
});

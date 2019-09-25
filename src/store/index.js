import { applyMiddleware, createStore,compose } from 'redux'

import thunk from 'redux-thunk'

import reducer from './reducer'

const middleware = [thunk];
let store = process.env.NODE_ENV === 'development'?(
    // 开发环境
    createStore(reducer,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():f=>f))
):(
    // 生产环境
    createStore(reducer, applyMiddleware(...middleware))
)
// console.log(store.getState());


export default store
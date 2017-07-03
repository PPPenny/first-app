/**
 * Created by Administrator on 2017/6/25.
 */
import {createStore} from 'redux';
import reducer from  './Reducer.js';

const counterValue={
    "add":11,
    "del":22
}
const store = createStore(counterValue,reducer);
export  default store;

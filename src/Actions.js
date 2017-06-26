/**
 * Created by Administrator on 2017/6/18.
 * 实现Action
 */
import * as ActionType from 'ActionType';
import  AppDispatcher from 'AppDispatcher';

export const add = (click)=>{
    AppDispatcher.dispatch({
        type:ActionType.ADD,
        click:click
    })
}
export const del = (click)=>{
    AppDispatcher.dispatch({
        type:ActionType.DEL,
        click:click
    })
}
/**
 * Created by Administrator on 2017/6/18.
 * 实现Action
 */
import * as ActionTypes from 'ActionType';

export const add = (click)=>{
  return {
        type:ActionTypes.ADD,
        click:click
    };
}
export const del = (click)=>{
    return{
        type:ActionTypes.DEL,
        click:click
    };
}
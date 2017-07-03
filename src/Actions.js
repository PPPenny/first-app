/**
 * Created by Administrator on 2017/6/18.
 * 实现Action
 */
import * as ActionType from 'ActionType';

export const add = (click)=>{
  return {
        type:ActionType.ADD,
        click:click
    };
}
export const del = (click)=>{
    return{
        type:ActionType.DEL,
        click:click
    };
}
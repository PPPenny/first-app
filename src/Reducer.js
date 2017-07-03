
import * as ActionType from 'ActionType';

export  default (state,action)=>{
    const {click}= action;
    switch (action.type){
        case ActionType.add:
            return{...state,[click]:state[click]+1};
        case ActionType.del:
            return{...state,[click]:state[click]-1};
    }
}
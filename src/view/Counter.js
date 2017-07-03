/**
 * Created by Administrator on 2017/7/2.
 */
import store from  '../stores/Store';
import React,{Component}from 'react';
import Actions from '../Actions';
class Counter1 extends Component{
    constructor(props){
        super(props);
        this.state = this.getOwnState();
        this.onChange = this.onChange.bind(this);
    }
    getOwnState(){
        return {
            value:store.getState()[this.props.title]
        }
    }
    onChange(){
        this.setState(this.getOwnState())
    }
    compomentDidMount(){
        store.subscribe(this.onChange);
    }
    compomentWillUnMount(){
        store.unsubscribe(this.onChange);
    }
    onAdd(){
        store.dispatch(Actions.add(this.props.title));
    }
    onDel(){
        store.dispatch(Actions.add(this.props.title));
    }
    render(){
        return(
            <div>
                <button  onClick={this.onAdd}>-</button>
                <input value={value}  onChange={this.onChange}/>
                <button  onClick={this.onDel}>+</button>
            </div>
        )
    }
}
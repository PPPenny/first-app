import React,{Component}from 'react';
import $ from 'jquery';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        this.state = {value: 0}
    }

    onClickButton(event) {
        var current = $(event.target);
        if(current.hasClass("del")){
            this.setState({value:Number(this.state.value)-1});
        }else{
            this.setState({value:Number(this.state.value)+1});
        }
    }

    changeInput(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="title">测试input输入,点击加减</div>
                <button className='del countBtn' onClick={this.onClickButton}>-</button>
                <input  className="myInput" value={this.state.value}  onChange={this.changeInput}/>
                <button className='add countBtn' onClick={this.onClickButton}>+</button>
            </div>
        );
    }
}
export  default Counter;
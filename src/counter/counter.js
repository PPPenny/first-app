import React,{Component}from 'react';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.onAddButton = this.onAddButton.bind(this);
        this.onDelButton = this.onDelButton.bind(this);
        this.state = {value: 1}
    }

    onDelButton() {
        if(Number(this.state.value)-1 < 1){
            alert("不能再减了！！");
            return;
        }
         this.setState({value:Number(this.state.value)-1});
    }
    onAddButton() {
        this.setState({value:Number(this.state.value)+1});
   }

    changeInput(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="title">测试input输入,点击加减</div>
                <button className='del countBtn' onClick={this.onDelButton}>-</button>
                <input  className="myInput" value={this.state.value}  onChange={this.changeInput}/>
                <button className='add countBtn' onClick={this.onAddButton}>+</button>
            </div>
        );
    }
}

class  CounterTest extends Component{
    render(){
        return(<div>
            <Counter1 initValue="123" />

        </div>)
    }
}

class Counter1 extends Component{
    render(){
        return (<div>
            <input defaultValue ={ this.props.initValue}/>
        </div>)
    }

}
export  default Counter;
export {CounterTest};
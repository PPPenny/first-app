/**
 * Created by Administrator on 2017/7/3.
 */
import React,{Component}from 'react';
class ShowTime extends Component{
    constructor(props){
        super(props);
        this.state = {time:new Date().toLocaleTimeString()};
        this.parse = this.parse.bind(this);
        this.start = this.start.bind(this);
    }
    componentDidMount(){
         this.start();
    }
    start(){
        this.timer = setInterval(function(){
            this.setState({time:new Date().toLocaleTimeString()});
        }.bind(this),1000);
    }
    parse(){
        clearInterval(this.timer);
    }
    render(){
        return(<div>
            当前时间：{this.state.time}
            <button onClick={this.parse}>暂停时间</button>
            <button onClick={this.start}>开始时间</button>
        </div>)
    }
}
export default ShowTime;

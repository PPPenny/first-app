/**
 * Created by Administrator on 2017/6/11.
 */
import React,{Component}from 'react';
class Comptime extends Component{

    componentWillMount(){
        console.log("I'm will mount!");
    }
    clickFunc(){
        document.getElementById('txt').remove();
    }
    render(){
        return <div id="txt" onClick={this.clickFunc} >
           点击我，就可以删掉我了！
        </div>
    }
    componentDidMount(){
        console.log("I have mounted!");
       let html = document.getElementById('txt').innerText;
        console.log({html});
    }
}
export  default Comptime;
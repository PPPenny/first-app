/**
 * Created by Administrator on 2017/6/6.
 * 父子组件互相传参数
 */
import React,{Component}from 'react';
//父传子
class Fathert extends Component {
    render() {
        return (<Son value={this.props.name}/>)
    }
};
Fathert.defaultProps = {
    name:'彭彭'
};
class Son extends Component {
    render() {
        return (<div>
            {this.props.value}
        </div>)
    }
}
//子传父
class Parent extends Component {
    clickFuction() {
        console.log(this.name)
    }

    render() {
        return (<Child name={this.props.name} onParent={this.clickFuction}/>);
    }
}
class Child extends Component {
    constructor(props){
        super(props);
        this.clickMe = this.clickMe.bind(this);
    }
    clickMe() {
        this.props.onParent();
    }

    render() {
        return <div onClick={this.clickMe}>ClickMe{this.props.name}</div>
    }

}


export {Parent};
export {Fathert};

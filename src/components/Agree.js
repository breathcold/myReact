import React from 'react';
import axios from 'axios';

export default class Agree extends React.Component {
    componentWillReceiveProps(nextProps){
        //alert("原有的点赞数："+this.props.agreeNum+"新的点赞数："+nextProps.agreeNum)
    }
    shouldComponentUpdate(nextProps, nextState){
        alert("原有的点赞数："+this.props.agreeNum+"新的点赞数："+nextProps.agreeNum)
        return true;
    }
    render(){
        return <div>
            <span>点赞数：{this.props.agreeNum}</span>
        </div>
    }
}
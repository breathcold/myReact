import React from 'react';
import Passport from './../core/Passport';

export default class UserLogin extends React.Component
{
    constructor(props){
        super(...props);
        this.state={
            userName:"",
            userPass:""
        }
    }
    setValue(event,key){
        let val = event.target.value;
        let obj = {};
        obj[key]=val;
        this.setState(obj)
    }
    render(){
        return <div>
            <div><span>用户名</span><input type="text" onChange={
                (event)=>{this.setValue(event,"userName")}
                }/></div>
            <div><span>密码</span><input type="password" onChange={
                (event)=>{this.setValue(event,"userPass")}
            }/></div>
            <button onClick={()=>{
                    let p = this.props.passport==null?new Passport():this.props.passport;
                    p.login(this.state.userName,this.state.userPass,()=>{
                        this.props.history.push('/news')
                    })
                }
            }>登录</button>
        </div>
    }
}
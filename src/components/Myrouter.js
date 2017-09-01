import React from 'react';
import {HashRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import TopList from './TopList';
import NewsToplist from './NewsToplist';
import InfoDetail from './InfoDetail';
import UserLogin from './UserLogin';
import Passport from './../core/Passport';
let passport = new Passport();

export default class Myrouter extends React.Component
{
    render(){
        return  <Router>
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/goods">商品排行榜</Link></li>
                    <li><Link to="/news">新闻排行榜</Link></li>
                    <li><Link to="/login">用户登录</Link></li>
                </ul>
            
                <hr/>
                {/* exact 精确匹配 */}
                <Route exact path="/" component={TopList}/>
                <Route path="/goods" component={TopList}/>
                <Route exact path="/news" render={(props)=>{
                    if(passport.isLogin){
                        return <NewsToplist {...props}/>
                    }else{
                        return <Redirect to='/login'/>
                    }
                }}/>
                <Route path="/news/:newsid" component={InfoDetail}/>
                <Route path="/login" render={(props)=>{
                    return <UserLogin passport={passport} {...props}/>
                }} />
            </div>
        </Router>
    }
}
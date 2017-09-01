import React from 'react';
import axios from 'axios';
import Agree from './Agree';

export default class News extends React.Component {
    constructor(props){
        super(...props);
        this.state={
            agree:"",
            _title:"",
            desc:""
        }
    }
    showAgree(that){
        axios.post('http://localhost:3300/api/news.php',"newsid="+that.props.newsid)
        .then((res)=>{
            that.setState({
                agree:res.data.agree
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    componentWillMount(){
        axios.get('http://localhost:3300/api/news.php',{
            params:{
                newsid:this.props.newsid
            }
        })
        .then((res)=>{
            console.log(res.data)
            this.setState({
                _title:res.data.title,
                agree:res.data.agree,
                desc:res.data.desc
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    render(){
        return (
            <div>
                <h1>hello world</h1>
                <h1>{this.state._title}</h1>
                <p>描述：{this.state.desc}</p>
                <Agree agreeNum={this.state.agree}/>
                <input type="button" value="点赞" onClick={
                    ()=>{this.showAgree(this)}
                }/>
                <input type="button" value="原有点赞数" onClick={()=>{
                    this.setState({
                        agree:19
                    })
                }}/>
            </div>
        )
    }
}
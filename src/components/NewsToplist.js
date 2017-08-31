import React from 'react';
import axios from 'axios';

export default class NewsToplist extends React.Component
{
    constructor(...props){
        super(...props);
        this.state={
            dataList:[]
        }
    }
    componentWillMount(){
        axios.get("http://localhost:3300/api/toplist.php?type=news")
        .then((res)=>{
            this.setState({
                dataList:res.data
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    render(){
        return <div>          
            <dl>
                <dt>新闻列表</dt>
                {
                    this.state.dataList.map((item,index)=>{
                        return <dd key={index}>
                                <a href="#">{item.title}</a>
                                <p>{item.desc}</p>
                            </dd>   
                    })
                }
            </dl>
        </div>
    }
}
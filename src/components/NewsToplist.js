import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class NewsToplist extends React.Component
{
    constructor(props){
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
                                <Link to={'/news/'+item.newsid}>{item.title}</Link>
                                <p>{item.desc}</p>
                            </dd>   
                    })
                }
            </dl>
        </div>
    }
}
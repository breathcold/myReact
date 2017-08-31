import React from 'react';
import axios from 'axios';

export default class TopList extends React.Component
{
    constructor(...props){
        super(...props);
        this.state={
            dataList:[]
        }
    }
    componentWillMount(){
        axios.get("http://localhost:3300/api/toplist.php")
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
                <dt>商品列表</dt>
                {
                    this.state.dataList.map((item,index)=>{
                        return <dd key={index}><a href="#">{item.prodName}</a></dd>
                    })
                }
            </dl>
        </div>
    }
}
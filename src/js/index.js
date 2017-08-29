import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


let teamate = [
    {
        name:"youming",
        age : 18
    },
    {
        name : "wujia",
        age : "18"
    }
]

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state={
            teamate : this.props.teamate
        }
    }
    componentWillMount(){
        var params = 'key='+JSON.stringify({"name":"tom","age":26});
        axios.post('http://localhost:3300/api.php',params)
        .then((res)=>{
            console.log(res.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    render(){
        return (
            <div>
                <h1>hello world</h1>
                {this.state.teamate.map((item,index)=>{
                   return  <h2 key={index}>{item.name} {item.age}</h2>
                })}
                <h2>项目经理：{this.props.leader}</h2>
                <input type="button" value="改变" onClick={()=>{
                    var getSate = this.state.teamate;
                    getSate[0].name="zhangfei";
                    {/* this.setState({
                        teamate:getSate
                    }) */}
                   
                    this.forceUpdate()
                }}/>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock teamate={teamate} leader="youming"/>,
    document.getElementById('root')
)






































import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date:new Date(),
            getData:""
        }
    }
    componentDidMount(){
        this.timerId = setInterval(()=>this.tick(),1000)
        axios.get('http://www.ezhi.net/api/test/index.php?a=get_users&uid=10003')
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    componentWillUnmount(){
        clearInterval(this.timerId)

    }
    tick(){
        this.setState({
            date:new Date()
        })
    }
    render(){
        return (
            <div>
                <h1>hello world</h1>
                <h2>it is now {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
)






































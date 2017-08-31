import React from 'react';
export default class Age extends React.Component {
    render(){
        return <div>
            我的年龄是：{this.props.age}
        </div>
    }
}
import React from 'react';
export default class Me extends React.Component {
    render(){
        alert(this.props.children.length)
        return <div>{this.props.children}</div>
    }
}
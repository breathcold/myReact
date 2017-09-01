import React from 'react';

export default class InfoDetail extends React.Component
{
    render(){
        return <div>
            <h2>这里是详细内容，新闻id是{this.props.match.params.newsid}</h2>
        </div>
    }
}
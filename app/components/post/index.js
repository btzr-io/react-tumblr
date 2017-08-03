import React from 'react';
import ReactDOM from 'react-dom';

export default class Post extends React.Component  {

    constructor(props) {
        super(props)
    }

    render() {

        const bg = {
            background: `url('${this.props.image}') no-repeat center`,
            backgroundSize: 'cover'
        };

        return(
            <div id={this.props.id} className="post">
                <div className="header">{ '@' + this.props.blog}</div>
                <div className="image" style={bg}/>
                <div className="body">{this.props.summary}</div>
                <div className="tags">
                    {this.props.tags.map((i, k) => <span key={k}>{i}</span>)}
                </div>
            </div>
        );
    }

}

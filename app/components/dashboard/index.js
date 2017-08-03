import React from 'react';
import ReactDOM from 'react-dom';
import Post from '../post';

const req = require('superagent');

export default class Dashboard extends React.Component  {

    constructor(props) {
        super(props)
        this.state = {
            posts: [],
        }
    }

    componentDidMount(){
        req.get('/dashboard')
           .end((err, res) => {
                if (err) console.error(err);
                this.setState({posts: res.body});
           });

    }

    render() {
        return(
            <div className="dashboard">
            {this.state.posts.map(i => <Post key={i.id} {...i}/> )}
            </div>
        );
    }

}

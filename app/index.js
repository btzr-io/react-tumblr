import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from  './components/dashboard'

class App extends React.Component  {

    constructor(props) {
        super(props)
    }

    render() {
        return(<div><Dashboard/></div>);
    }

}

ReactDOM.render(<App/>, document.getElementById('root'));

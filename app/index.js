var React = require('react');
var ReactDOM = require('react-dom');

require('bootstrap/dist/css/bootstrap.css');
require('./index.css');

class App extends React.Component {
    render() {
        return (
            <div className="container">
                Hello Dude
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
var React = require('react');

var Home = require('./Home');
var Header = require('./Header');

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
            </div>
        )
    }
}

module.exports = App;
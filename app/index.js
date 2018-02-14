var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./components/App');

require('bootstrap/dist/css/bootstrap.css');
require('./index.css');

ReactDOM.render(<App />, document.getElementById('app'));
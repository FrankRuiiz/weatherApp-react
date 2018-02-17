var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Header = require('./Header');
var Home = require('./Home');
var Forecast = require('./Forecast');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/forecast" component={Forecast} />
          </Switch>
        </div>
      </Router>
    );
  }
}

module.exports = App;

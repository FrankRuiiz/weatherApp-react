const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

const Header = require('./Header');
const Home = require('./Home');
const Forecast = require('./Forecast');
const Details = require('./Details');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/forecast" component={Forecast} />
            <Route path="/details/:city" component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

module.exports = App;

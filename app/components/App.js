import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Forecast from './Forecast';
import Details from './Details';

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

var React = require('react');
var withRouter = require('react-router-dom').withRouter;
var ZipCode = require('./ZipCode');

function Header(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Weather Check
      </a>
      <ZipCode
        onSubmitLocation={function(location) {
          props.history.push({
            pathname: '/forecast',
            search: '?city=' + location
          });
        }}
      />
    </nav>
  );
}

module.exports = withRouter(Header);

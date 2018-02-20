var React = require('react');
var api = require('../utils/api');
var queryString = require('query-string');

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: null,
      error: null
    };
  }

  componentDidMount() {
    var { city } = queryString.parse(this.props.location.search);
    api.fetchFiveDayWeather(city).then(
      function(data) {
        if (data === null) {
          return this.setState(function() {
            return {
              error: 'There was an error, the city might not be valid.',
              loading: false
            };
          });
        }

        this.setState(function() {
          return {
            error: null,
            data: data,
            loading: false
          };
        });
      }.bind(this)
    );
  }

  render() {
    var loading = this.state.loading;

    if (loading) {
      return (
        <div style={{ marginTop: '100px' }}>
          <h1>Loading...</h1>
        </div>
      );
    }

    return (
      <div style={{ marginTop: '100px' }}>
        <h1>Weather Data</h1>
      </div>
    );
  }
}

module.exports = Forecast;

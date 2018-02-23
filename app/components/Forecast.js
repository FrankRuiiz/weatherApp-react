var React = require('react');
var api = require('../utils/api');
var getFormattedDate = require('../utils/helpers').getFormattedDate;
var queryString = require('query-string');

function DayItem(props) {
  // console.log(props);
  const icon = props.day.weather[0].icon;
  const date = getFormattedDate(props.day.dt);
  // console.log(icon);
  return (
    <li>
      <img src={'app/images/weather-icons/' + icon + '.svg'} />
      <p>{date}</p>
    </li>
  );
}

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: null,
      error: null
    };
  }

  makeWeatherRequest(props) {
    var { city } = queryString.parse(props.location.search);
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

  componentWillReceiveProps(nextProps) {
    // Check to make sure nextProps are different then current props
    if (this.props.location.search != nextProps.location.search) {
      this.makeWeatherRequest(nextProps);
    }
  }

  componentDidMount() {
    this.makeWeatherRequest(this.props);
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

    var { city, list } = this.state.data;

    return (
      <div style={{ marginTop: '100px' }}>
        <h1>{city.name}</h1>
        <ul>
          {list.map(function(day) {
            return <DayItem key={day.dt} day={day} />;
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Forecast;

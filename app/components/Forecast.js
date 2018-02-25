var React = require('react');
var api = require('../utils/api');
var getFormattedDate = require('../utils/helpers').getFormattedDate;
var queryString = require('query-string');

function DayItem(props) {
  const icon = props.day.weather[0].icon;
  const date = getFormattedDate(props.day.dt);
  return (
    <div onClick={props.onClick} className="card">
      <img
        className="card-img-top"
        src={'app/images/weather-icons/' + icon + '.svg'}
        alt="weather"
      />
      <div className="card-body">
        <h3 className="card-title">{date}</h3>
      </div>
    </div>
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

    this.handleDayClick = this.handleDayClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.city = queryString.parse(nextProps.location.search).city;
    // Check to make sure nextProps are different then current props
    if (this.props.location.search != nextProps.location.search) {
      this.makeWeatherRequest(nextProps);
    }
  }

  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city;
    this.makeWeatherRequest(this.props);
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

  handleDayClick(city) {
    this.props.history.push({
      pathname: 'details/' + this.city,
      state: city
    });
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
      <div className="container" style={{ marginTop: '100px' }}>
        <h1>{city.name}</h1>
        <div className="card-deck">
          {list.map(day => {
            return (
              <DayItem
                onClick={this.handleDayClick.bind(this, day)}
                key={day.dt}
                day={day}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

module.exports = Forecast;

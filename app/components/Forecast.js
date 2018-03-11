import React from 'react';
import { fetchFiveDayWeather } from '../utils/api';
import { getFormattedDate } from '../utils/helpers';
import queryString from 'query-string';

function DayItem({ day, onClick }) {
  const icon = day.weather[0].icon;
  const date = getFormattedDate(day.dt);
  return (
    <div onClick={onClick} className="card">
      <img
        className="card-img-top"
        src={`app/images/weather-icons/${icon}.svg`}
        alt="weather"
      />
      <div className="card-body">
        <h3 className="card-title">{date}</h3>
      </div>
    </div>
  );
}

class Forecast extends React.Component {
  state = {
    loading: true,
    data: null,
    error: null
  };

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

  makeWeatherRequest = props => {
    const { city } = queryString.parse(props.location.search);
    fetchFiveDayWeather(city).then(data => {
      if (data === null) {
        return this.setState(() => ({
          error: 'There was an error, the city might not be valid.',
          loading: false
        }));
      }

      this.setState(() => ({
        error: null,
        data: data,
        loading: false
      }));
    });
  };

  handleDayClick = city => {
    this.props.history.push({
      pathname: `details/${this.city}`,
      state: city
    });
  };

  render() {
    const loading = this.state.loading;

    if (loading) {
      return (
        <div style={{ marginTop: '100px' }}>
          <h1>Loading...</h1>
        </div>
      );
    }

    const { city, list } = this.state.data;

    return (
      <div className="container" style={{ marginTop: '100px' }}>
        <h1>{city.name}</h1>
        <div className="card-deck">
          {list.map(day => {
            return (
              <DayItem
                onClick={() => this.handleDayClick(day)}
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

export default Forecast;

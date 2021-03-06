import React from 'react';
import { getFormattedDate, convertKelvinToFahrenheit } from '../utils/helpers';

class Details extends React.Component {
  render() {
    const { state } = this.props.location;

    const city = this.props.match.params.city;
    const icon = state.weather[0].icon;
    const date = getFormattedDate(state.dt);
    const description = state.weather[0].description;
    const min_temp = state.temp.min;
    const max_temp = state.temp.max;
    const humidity = state.humidity;

    return (
      <div className="details details-container">
        <div className="details-top">
          <img
            src={'/app/images/weather-icons/' + icon + '.svg'}
            alt="weather"
          />
          <h2>{date}</h2>
        </div>
        <div className="details-bottom">
          <p>{city}</p>
          <p>{description}</p>
          <p>min temp: {convertKelvinToFahrenheit(min_temp)}</p>
          <p>max temp: {convertKelvinToFahrenheit(max_temp)}</p>
          <p>humidity: {humidity}</p>
        </div>
      </div>
    );
  }
}

export default Details;

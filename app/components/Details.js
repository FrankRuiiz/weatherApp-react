var React = require('react');
var helpers = require('../utils/helpers');

class Details extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    const state = this.props.location.state;

    const city = this.props.match.params.city;
    const icon = state.weather[0].icon;
    const date = helpers.getFormattedDate(state.dt);
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
          <p>min temp: {helpers.convertKelvinToFahrenheit(min_temp)}</p>
          <p>max temp: {helpers.convertKelvinToFahrenheit(max_temp)}</p>
          <p>humidity: {humidity}</p>
        </div>
      </div>
    );
  }
}

module.exports = Details;

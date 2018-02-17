var axios = require('axios');

var API_KEY = '4f3b63ed27461e8bbf8c08f24bb45840';

module.exports = {
  fetchCurrentWeather: function(location) {
    var encodedURI = window.encodeURI(
      'http://api.openweathermap.org/data/2.5/weather?q=' +
        location +
        '&type=accurate&APPID=' +
        API_KEY
    );
    return axios.get(encodedURI).then(function(response) {
      console.log(response.data);
      return response.data;
    });
  },
  fetchFiveDayWeather: function(location) {
    var encodedURI = window.encodeURI(
      'http://api.openweathermap.org/data/2.5/forecast/daily?q=' +
        location +
        '&type=accurate&APPID=' +
        API_KEY +
        '&cnt=5'
    );
    return axios.get(encodedURI).then(function(response) {
      console.log(response.data);
      return response.data;
    });
  }
};

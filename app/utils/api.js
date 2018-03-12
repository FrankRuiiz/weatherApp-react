const API_KEY = '4f3b63ed27461e8bbf8c08f24bb45840';

// export function fetchCurrentWeather(location) {
//   const encodedURI = window.encodeURI(
//     `http://api.openweathermap.org/data/2.5/weather?q=${location}&type=accurate&APPID=${API_KEY}`
//   );
//   return axios.get(encodedURI).then(({ data }) => data);
// }

export async function fetchFiveDayWeather(location) {
  const encodedURI = window.encodeURI(
    `http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&type=accurate&APPID=${API_KEY}&cnt=5`
  );
  const response = await fetch(encodedURI).catch(error => {
    console.log('error in fetchFiveDayWeather', error);
  });
  const weather = await response.json();
  return weather;
}

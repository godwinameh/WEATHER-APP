

const apiKey = '729966db2d70a4791f17136442eecb27';
const apiKey2 = '5fc937c60d2847d7836182854242401';

function getWeather() {
  const cityInput = document.getElementById('cityInput');
  const cityName = cityInput.value;

  if (cityName === '') {
    alert('Please enter a city name');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&${apiKey}`;
  const apiUrl2 = `http://api.weatherapi.com/v1/current.json?key=${apiKey2}&q=${cityName}`;

  fetch(apiUrl2)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (!data.location) {
            alert('City not found. Please enter a valid city name.');
          } else {
            const weatherInfo = document.getElementById('weatherInfo');
            const temperature = data.current.temp_c; // Convert temperature to Celsius
            // const description = data.weather[0].description;
      
            weatherInfo.innerHTML = `Current weather in ${cityName}: ${temperature}`;
          }
    })
    .catch(error => console.error('Error fetching weather data:', error));
}



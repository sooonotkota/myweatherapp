function refreshWeather(response) {
let temperatureElement = document.querySelector("#temperature");
let temperature = response.data.temperature.current;
let cityElement = document.querySelector("#city");
  
cityElement.innerHTML = response.data.city;
temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
    let apiKey = "c5fb501012566e9bd47a3bo39e25tb37";
    let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}';
    axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Rockford");

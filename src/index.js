function refreshWeather(response) {
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = response.data.temperature.current;
}

function searchCity(city) {
  let apiKey = "c5fb501012566e9bd47a3bo39e25tb37";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

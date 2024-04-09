const locationEl = document.getElementById("location")
const weatherText = document.getElementById("weather-text")
const temp = document.getElementById("temp")

async function getWeather(a, b) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${a},${b}&units=metric&APPID=fc8b0838dee4878fc5ea019eb48acb67`
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  let weather = data.weather[0].main
  weatherText.textContent = weather
  let currentTemp = data.main.feels_like
  temp.innerText = `${currentTemp}`
}
async function getLocation() {
  let url = 'https://ipinfo.io/json?token=2253a22081ae73';
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  let currentLocation = data.city
  let latAndLong = data.loc
  JSON.stringify(latAndLong)
  locationEl.textContent = currentLocation
  let countryCode = data.country
  let city = data.city
  getWeather(city, countryCode)
}
// fetch("https://ipinfo.io/json?token=2253a22081ae73").then(
//   (response) => response.json()
// ).then(
//   (jsonResponse) => console.log(jsonResponse.ip, jsonResponse.country)
// )
getLocation()

const locationEl = document.getElementById("location")


async function getLocation() {
  let url = 'https://ipinfo.io/json?token=2253a22081ae73';
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  let currentLocation = data.city
  locationEl.textContent = currentLocation
}

// fetch("https://ipinfo.io/json?token=2253a22081ae73").then(
//   (response) => response.json()
// ).then(
//   (jsonResponse) => console.log(jsonResponse.ip, jsonResponse.country)
// )
getLocation()

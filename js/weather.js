const API_KEY = "ec5b78643058363b0940ab47aec3c284";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weatherForecast span:first-child");
      const weather = document.querySelector(
        "#weatherForecast span:nth-child(2)"
      );
      const temp = document.querySelector("#weatherForecast span:last-child");
      city.innerText = `Location: ${data.name}`;
      weather.innerText = `Weather: ${data.weather[0].main}`;
      temp.innerText = `Temperature: ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

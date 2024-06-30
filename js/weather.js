const API_KEY = "ec5b78643058363b0940ab47aec3c284";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weatherForecast span:first-child");
      const temp = document.querySelector("#weatherForecast span:nth-child(2)");
      const weather = document.querySelector(
        "#weatherForecast span:last-child"
      );
      city.innerText = `${data.name}`;
      temp.innerText = `| ${data.main.temp} °C`;
      weather.innerText = `| ${data.weather[0].main}`;
    });
}

function onGeoError() {
  //Sydney Town Hall
  const lat = -33.873867;
  const lon = 151.206902;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weatherForecast span:first-child");
      const temp = document.querySelector("#weatherForecast span:nth-child(2)");
      const weather = document.querySelector(
        "#weatherForecast span:last-child"
      );
      alert("Couldn't find you location.");
      city.innerText = `${data.name}`;
      temp.innerText = `| ${data.main.temp} °C`;
      weather.innerText = `| ${data.weather[0].main}`;
    });
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

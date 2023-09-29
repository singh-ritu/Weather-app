// http://api.weatherapi.com/v1/current.json?key=3bd2bd0b2f68434a8ed82333232809&q=London&aqi=no

async function getWeather() {
  const country = document.getElementsByClassName("input")[0].value;
  const response = await fetch(
    ` http://api.weatherapi.com/v1/current.json?key=3bd2bd0b2f68434a8ed82333232809&q=${country}&aqi=no`
  );
  const data = await response.json();

  const temperature = document.querySelector("#temperature");
  temperature.innerText = data.current.temp_c;

  const windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerText = data.current.wind_kph;

  const humidity = document.querySelector("#humidity");
  humidity.innerText = data.current.humidity;

  const name = document.querySelector("#name");
  name.innerText = data.location.name;

  if (!document.querySelector("#weather-img")) {
    const weatherStatusImg = document.createElement("img");
    const weatherStatus = document.createElement("h3");

    weatherStatus.id = "weather-status";
    weatherStatusImg.id = "weather-img";

    weatherStatusImg.src = data.current.condition.icon;
    weatherStatus.innerText = data.current.condition.text;

    const tempContainer = document.querySelector(".temp-container");

    tempContainer.append(weatherStatusImg, weatherStatus);
  } else {
    const weatherStatusImg = document.querySelector("#weather-img");
    const weatherStatus = document.querySelector("#weather-status");

    weatherStatusImg.src = data.current.condition.icon;
    weatherStatus.innerText = data.current.condition.text;
  }

  console.log(country, data);
}

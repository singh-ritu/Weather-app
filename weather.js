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

  console.log(country, data);
}

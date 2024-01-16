const apiKey = "06a95360eeab58ef5ba028b8de7990d7";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search input");
const button = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon");
async function checkWeather(grad) {
  const response = await fetch(apiUrl + grad + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".grad").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  if (data.weather[0].main == "Clouds") {
    icon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    icon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    icon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    icon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    icon.src = "images/mist.png";
  }
}
button.addEventListener("click", () => checkWeather(search.value));

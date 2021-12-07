var textArea = document.getElementById("text-input");
var searchColumnEl = document.getElementById("search-column");
var searchedCitiesEl = document.getElementById("searched-cities");
var cityDateEl = document.getElementById("city-name");
var tempEl = document.getElementById("city-temp");
var windEl = document.getElementById("city-wind");
var humidityEl = document.getElementById("city-humidity");



function getWeather(evt) {
    evt.preventDefault();
    var cityName = evt.target.value;
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=c862e70d6b9a039c19389ff98b655d95';
  
    fetch(requestUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        cityDateEl.innerText = cityName + " and the date is " + data.dt + " in UTC!";
        tempEl.innerText = "Temp: " + data.main.temp + " Kelvin";
        windEl.innerText = "Wind: " + data.wind.speed + " meter/sec";
        humidityEl.innerText = "Humidity: " + data.main.humidity +"%";
        }
      );

    var newCityEl = document.createElement("button");
    newCityEl.innerText = cityName;
    newCityEl.className = "col-12";
    searchedCitiesEl.appendChild(newCityEl);

  }
  
textArea.addEventListener("blur",getWeather);
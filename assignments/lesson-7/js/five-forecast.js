let weatherForecast = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=e75905a8d4d39f18d872bc9f14e111aa';
weatherForecast.open('Get', apiURLstring, true);
weatherForecast.send();

weatherForecast.onload = function() {
    let weatherData = JSON.parse(weatherForecast.responseText);
    console.log(weatherData);

//current temp and icon//
document.getElementById('cc-fore-temp').innerHTML = weatherData.forecast.temp;
let icon = "http://openweathermap.org/img/w/" + weatherData.forecast[0].icon + ".png";

document.getElementById('cc-foreImg').setAttribute('src', icon);
}   
let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=e75905a8d4d39f18d872bc9f14e111aa';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

//current temp and icon//
document.getElementById('cc-temp').innerHTML = weatherData.main.temp;
//let icon = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
//let desc = weatherData.weather.description;
//document.getElementById('cc-img').setAttribute('src', icon);
//document.getElementById('cc-img').setAttribute('alt', desc);
//high temp//
document.getElementById('cc-tempHigh').innerHTML = weatherData.main.temp_max;
//humidity//
document.getElementById('cc-humidity').innerHTML = weatherData.main.humidity;
//wind speed//
document.getElementById('cc-windS').innerHTML = weatherData.wind.speed;
//wind chill//
let t = weatherData.main.temp
let s = weatherData.wind.speed
document.getElementById('cc-windC').innerHTML = (35.74 + (0.6215 * t) - (35.75 * s) + (0.4275 * t * s)).toFixed(2)
}
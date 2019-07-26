let weatherHague = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?lat=52.078663&lon=4.288788&units=imperial&APPID=e75905a8d4d39f18d872bc9f14e111aa';
weatherHague.open('Get', apiURLstring, true);
weatherHague.send();

weatherHague.onload = function() {
    let weatherData = JSON.parse(weatherHague.responseText);
    console.log(weatherData);

//current temp//
document.getElementById('hag-current').innerHTML = weatherData.weather[0].main;
document.getElementById('hag-temp').innerHTML = weatherData.main.temp;
//high temp//
document.getElementById('hag-tempHigh').innerHTML = weatherData.main.temp_max;
//humidity//
document.getElementById('hag-humidity').innerHTML = weatherData.main.humidity;
//wind speed//
document.getElementById('hag-windS').innerHTML = weatherData.wind.speed;
}
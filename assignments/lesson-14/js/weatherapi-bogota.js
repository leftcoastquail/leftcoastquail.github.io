let weatherBogota = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?lat=4.624335&lon=-74.063644&units=imperial&APPID=e75905a8d4d39f18d872bc9f14e111aa';
weatherBogota.open('Get', apiURLstring, true);
weatherBogota.send();

weatherBogota.onload = function() {
    let weatherData = JSON.parse(weatherBogota.responseText);
    console.log(weatherData);

//current temp//
document.getElementById('bog-current').innerHTML = weatherData.weather[0].main;
document.getElementById('bog-temp').innerHTML = weatherData.main.temp;
//high temp//
document.getElementById('bog-tempHigh').innerHTML = weatherData.main.temp_max;
//humidity//
document.getElementById('bog-humidity').innerHTML = weatherData.main.humidity;
//wind speed//
document.getElementById('bog-windS').innerHTML = weatherData.wind.speed;
}

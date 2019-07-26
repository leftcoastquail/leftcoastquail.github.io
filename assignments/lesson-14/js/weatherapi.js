//-------BOGOTA--------//
let weatherBogota = new XMLHttpRequest();
let apiURLstringBogota = 'https://api.openweathermap.org/data/2.5/weather?lat=4.624335&lon=-74.063644&units=imperial&APPID=e75905a8d4d39f18d872bc9f14e111aa';
weatherBogota.open('Get', apiURLstringBogota, true);
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

//-------HAGUE--------//
let weatherHague = new XMLHttpRequest();
let apiURLstringHague = 'https://api.openweathermap.org/data/2.5/weather?lat=52.078663&lon=4.288788&units=imperial&APPID=e75905a8d4d39f18d872bc9f14e111aa';
weatherHague.open('Get', apiURLstringHague, true);
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

//-------PAPEETE--------//
let weatherPapeete = new XMLHttpRequest();
let apiURLstringPapeete = 'https://api.openweathermap.org/data/2.5/weather?lat=-17.650920&lon=-149.426042&units=imperial&APPID=e75905a8d4d39f18d872bc9f14e111aa';
weatherPapeete.open('Get', apiURLstringPapeete, true);
weatherPapeete.send();

weatherPapeete.onload = function() {
    let weatherData = JSON.parse(weatherPapeete.responseText);
    console.log(weatherData);

//current temp//
document.getElementById('pap-current').innerHTML = weatherData.weather[0].main;
document.getElementById('pap-temp').innerHTML = weatherData.main.temp;
//high temp//
document.getElementById('pap-tempHigh').innerHTML = weatherData.main.temp_max;
//humidity//
document.getElementById('pap-humidity').innerHTML = weatherData.main.humidity;
//wind speed//
document.getElementById('pap-windS').innerHTML = weatherData.wind.speed;
}

//-------CEBU--------//
let weatherCebu = new XMLHttpRequest();
let apiURLstringCebu = 'https://api.openweathermap.org/data/2.5/weather?lat=-17.650920&lon=-149.426042&units=imperial&APPID=e75905a8d4d39f18d872bc9f14e111aa';
weatherCebu.open('Get', apiURLstringCebu, true);
weatherCebu.send();

weatherCebu.onload = function() {
    let weatherData = JSON.parse(weatherCebu.responseText);
    console.log(weatherData);

//current temp//
document.getElementById('ceb-current').innerHTML = weatherData.weather[0].main;
document.getElementById('ceb-temp').innerHTML = weatherData.main.temp;
//high temp//
document.getElementById('ceb-tempHigh').innerHTML = weatherData.main.temp_max;
//humidity//
document.getElementById('ceb-humidity').innerHTML = weatherData.main.humidity;
//wind speed//
document.getElementById('ceb-windS').innerHTML = weatherData.wind.speed;
}
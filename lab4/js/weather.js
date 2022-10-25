const successCallback = (pos) => {
    console.log(pos.coords);
    var lon = pos.coords.longitude;
    var lat = pos.coords.latitude;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=uk&appid=7ec2b68b2ebb233110d84c7945ade4d1`).then(res => res.json()).then(function(data)
    {
    console.log(data);
    document.querySelector('.city_name').textContent = data.name;
    document.querySelector('.degree').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.disc').textContent = data.weather[0]['description'];
})
.catch(function(){});
};

const errorCallback = (error) => {
    console.error(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
    enableHighAccuracy: true,
    timeout: 50
})


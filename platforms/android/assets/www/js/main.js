if("geolocation" in navigator){
  navigator.geolocation.getCurrentPosition(function(position){
    loadWeather(position.coords.latitude + "," + position.coords.longitude);
  });
}
else{
  loadWeather("Delhi,IN","");
}

$(document).ready(function(){
  setInterval(loadWeather,10000);
});

function loadWeather(location,woeid){
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: "c",
    success: function(weather){
      city = weather.city;
      temp = weather.temp + "&deg;<small>C</small>"; //23°
      wcode = "<img src = 'weathericons/" +weather.code + ".svg'>";
      wind = "<p>" + weather.wind.speed + "</p><p>" + weather.units.speed + "</p>";
      humidity = weather.humidity + " %";

      $(".temp").html(temp);
      $(".place").html(city);
      $(".weather-img").html(wcode);
      $(".humidity").html(humidity);
      $(".wind-speed").html(wind);
    },
    error: function(){

    }
  });
}

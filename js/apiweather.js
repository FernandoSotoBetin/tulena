(function () {

  var API_WEATHER_KEY = "2d5fd25d126547c97aa4b2d962482765";
  var API_WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather?APPID=" + API_WEATHER_KEY + "&";
  var IMG_WEATHER = "http://openweathermap.org/img/w/";

  var today = new Date();
  var timeNow = today.toLocaleTimeString();


  if(navigator.geolocation) 
  {
    navigator.geolocation.getCurrentPosition(getCoords, errorFound);
  } 
  else 
  {
    alert("Por Favor, Actualiza Tu Navegador...");
  }


  function errorFound(error) 
  {
    alert("Un error ocurrió: " + error.code);
    if(error.code==0)
    {
        alert("Error Desconocido");
    }
    else if(error.code==1)
    {
        alert("Permiso Denegado");
    }
    else if(error.code==2)
    {
        alert("Posición No Está Disponible");
    }
    else if(error.code==3)
    {
        alert("Timeout");
    } 
  }

  function getCoords(position) 
  {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    console.log("Tu posición es: " + lat + "," + lon);
    $.getJSON(API_WEATHER_URL + "lat=" + lat + "&lon=" + lon, getCurrentWeather);
  }

  function getCurrentWeather(data) 
  {
    console.log(data);
    $("[data-city]").text(data.name);
    //$("[data-icon]").src = IMG_WEATHER + data.weather[0].icon + ".png";
    $("[data-icon]").attr('src', IMG_WEATHER + data.weather[0].icon + ".png");
    $("[data-temp='current']").text((data.main.temp - 273.15).toFixed(0));
    $("[data-temp='max']").text((data.main.temp_max - 273.15).toFixed(0));
    $("[data-temp='min']").text((data.main.temp_min - 273.15).toFixed(0));
    
  }
 
})();
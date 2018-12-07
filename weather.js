$(document).ready(function(){

  $('#submitWeather').click(function(){
    var city = $("#city").val();
    if (city != '') {
      $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=1e81d502107988c6b48d7c7a0322e623",
        type: "GET",
        dataType: "jsonp",
        success: function(data){
          var widget = show(data);
          $("#show").html(widget);
          $('#city').val('');
        }
      });
    } else {
      $("#error").html("<div class='alert alert-danger id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Field cannot be empty</div>");
    }
  });
});

function show(data){
  return  "<h3 style='margin-top:10px;font-size:30px; font-weight: bold;' class='text-center'>Current Weather " + data.name + " ," + data.sys.country + "</h3>" +
          "<h3 style='font-size:20px;padding-left:20px;'><strong>Weather</strong>: " + data.weather[0].main + "</h3>" +
          "<h3 style='font-size:20px;padding-left:20px;'><strong>Description</strong>: <img src='http://openweathermap.org/img/w/" +data.weather[0].icon+".png'>" + data.weather[0].description + "</h3>" +
          "<h3 style='font-size:20px;padding-left:20px;'><strong>Temperature</strong>: " + data.main.temp + "&deg;C</h3>" +
          "<h3 style='font-size:20px;padding-left:20px;'><strong>Pressure</strong>: " + data.main.pressure + " hPa</h3>" +
          "<h3 style='font-size:20px;padding-left:20px;'><strong>Humidity</strong>: " + data.main.humidity + "%</h3>" +
          "<h3 style='font-size:20px;padding-left:20px;'><strong>Min. Temperature</strong>: " + data.main.temp_min + "&deg;C</h3>" +
          "<h3 style='font-size:20px;padding-left:20px;'><strong>Max. Temperature</strong>: " + data.main.temp_max + "&deg;C</h3>" +
          "<h3 style='font-size:20px;padding-left:20px;'><strong>Wind Speed</strong>: " + data.main.speed + "m/s</h3>" +
          "<h3 style='font-size:20px;padding-left:20px;'><strong>Wind Direction</strong>: " + data.main.deg + "&deg;</h3>" ;

}

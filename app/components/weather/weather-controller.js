function WeatherController(){
	var wc = this;
    var weatherService = new WeatherService();
    
    

    function drawWeather(weather){
        var fahrenheit = Math.floor((9/5) * (weather.main.temp - 273) + 32);
        
        var template = ""
        template += `
        <div class="w-bg">
        <h5 class="mx-2">${fahrenheit}°F</h5>
        <img class="w-img" src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png"
        
        <h6 class="mx-2">${weather.name}</h6>
        </div>
        `
        document.getElementById('weather').innerHTML = template
    }
weatherService.getWeather(drawWeather)

	
	// weatherService.getWeather(function(weather){

    //     console.log(weather);
        
	// 	//What can you do with this weather object?
	// })

}
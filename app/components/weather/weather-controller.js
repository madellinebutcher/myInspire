function WeatherController(){
	var wc = this;
    var weatherService = new WeatherService();
    
    function drawWeather(weather){
        var fahrenheit = Math.floor((9/5) * (weather.main.temp - 273) + 32);
        var template = ""
        template += `
        <h5>${fahrenheit}°</h5>
        <h5>${weather.name}</h5>
        `
        document.getElementById('weather').innerHTML = template
    }
weatherService.getWeather(drawWeather)

	
	// weatherService.getWeather(function(weather){

    //     console.log(weather);
        
	// 	//What can you do with this weather object?
	// })

}
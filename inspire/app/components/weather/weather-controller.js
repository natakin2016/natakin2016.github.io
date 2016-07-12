(function (){
	
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
	    
	    var stepone=weather.main.temp-273.15
		var steptwo=stepone*1.80
		var stepthree=steptwo+32
		var final=Math.floor(stepthree)
		
		console.log(final);
		
		$('#weather').text(`
			${final} ºF
	
			${weather.weather[0].description}		
		`)
		
	})
	
}())

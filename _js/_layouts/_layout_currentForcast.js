function currentWeatherDisplay(data,country){
		var weather_condition_container = document.getElementById('weather_condition');
		var application_container = document.getElementById('app');
		var city = data.name;
		var temp = convertTemp(data.main.temp);
		var wind = data.wind.speed;
		var weather_avg = 15;
		var weather_desc = data.weather[0].description;
		//Get the weather condition
		var weather_icon = convertClouds(data.weather[0].main,weather_desc);
		var cc = country.split(',');
		//show icon for weather condition
		weather_condition_container.innerHTML = '<div id="weather_condition_icon"><img src="_img/_icons/'+weather_icon+'.svg"><em>'+weather_desc+'</em></div><div id="current_temp_icon"><h3>'+temp+'<sup>&deg;<em>c</em></sup></h3></div>';
		// create background UI elements and Data
		var background_stage = '<div id="stage"><div id="mountains"></div><div id="sky"></div><div id="grass"></div><div id="foreground"></div></div><a id="current_temp" data-city="'+city+'" data-country="'+cc[1]+'"><div id="current_temp_status"><h3>'+city+'</h3><h4>Wind: '+wind+' KPH</h4></div><div id="current_temp_degree"><span id="temp_degrees">'+temp+'</span><sup>&deg;<em>C</em></sup></div></a>';
		var stage = document.createElement("div");
			stage.innerHTML = background_stage;
			//Build the stage (UI elements) in the DOM
			application_container.innerHTML = "";
			application_container.appendChild(stage);	
		// add event listener to display forcast
		var detail_trigger = document.getElementById('current_temp');
		detail_trigger.addEventListener("click", function( event ) {
			event.preventDefault();
			event.stopPropagation();
			//get forecast info
			var forecast_layout = new QueryAPI("forecast",city);
		});
}
function forecastWeatherDisplay(data){
	var loop = 0;
	//This block creates the container to load the forecast in
	var appElement = document.getElementById('app');
	var forecast_info = '<div id="forecast_wrapper"></div>';
	var forecast_content = document.createElement("div");
		forecast_content.setAttribute('id',"forcast_container");
		forecast_content.innerHTML = forecast_info;
		appElement.appendChild(forecast_content);
	var forecast_wrapper = document.getElementById('forecast_wrapper');
	//This block loops the the data passed from the API and creates 5 blocks of 3 hour intervals for the weather forecast

	while(loop <= 4){
		console.log(loop);
		var forecast = data.list[loop];
		var proj_temp = convertTemp(forecast.main.temp);
		var day_date = forecast.dt_txt;
		var forecast_wrapper_item = document.createElement("div");
		var we_desc = forecast.weather[0].description;
		var split_date = day_date.split(' ');
		var weather_icon_display = convertClouds(forecast.weather[0].main,we_desc);
		// APPEND TO THE DOM
		var hours_format = split_date[1].split(':');
		var timeofDay = convertDay(hours_format[0]);
		forecast_wrapper_item.setAttribute('class','forecast_day');
		forecast_wrapper_item.innerHTML = '<h5>'+timeofDay+'</h5><img src="_img/_icons/'+weather_icon_display+'.svg"><span class="forecast_weather_condition">'+we_desc+'</span><h3>'+proj_temp+'</span><sup>&deg;<em>C</em></sup></h3>';
		//create element in DOM
		forecast_wrapper.appendChild(forecast_wrapper_item);
		// UPDATE LOOP NUMBER
		loop = loop + 1;
	}
}
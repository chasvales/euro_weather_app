"use strict";
var myCallback;
function convertTemp(units,type){
	switch(type){
		case "celsius":
		var base = 273.15;
		break;
		default: 
		var base = 273.15;
		break;
	}
	return Math.floor(units - base);
}
function convertDay(number){
	var full_day,time_of;
	switch(true) {
	  case (number == 00):
	  	full_day = 12;
		time_of = "AM";
	  break;
	  case (number <= 9):
	  	number = Math.floor((number*.1)*10);
		full_day = number;
		time_of = "AM";
	  break;
	  case (number >= 12):
	  	full_day = number - 12;
		time_of = "PM";
	  break;
	  default : 
	  	full_day = number;
		time_of = "AM";
	  break;
	}
	var hour_format = full_day+' '+time_of;
	return hour_format;
}
function convertClouds(type,weather_description){
	var icon;
	switch(type){
		case "Mist":
		icon = "mist"
		break;
		case "Clouds":
			switch(weather_description){
				case "few clouds":
					icon = "clouds_partially";
				break;
				case "broken clouds":
					icon = "cloud_clear";
				break;
				case "scattered clouds":
					icon = "cloud_dark";
				break;
				default:
					icon = "cloud_clear";
				break;
			}
		break;
		case "Clear":
			icon = "sun";
		break;
		case "Drizzle":
			icon = "mist";
		break;
		case "Rain":
			icon = "heavy_rain";
		break;
		default:
			icon = "sun";
		break;
	}
	return icon;
}
function toggleCondtions(vali){
	if(vali){
		window.clearInterval(myCallback);
		console.log('interval cleared');
	}else{
		myCallback = window.setInterval(function(){
			var condition_icon = document.getElementById('weather_condition_icon');
			var current_temperature = document.getElementById('current_temp_icon');
			condition_icon.classList.toggle('animate-temp');
			current_temperature.classList.toggle('animate-temp');
		},5000);
	}
}
$(window).load(function(){
	setTimeout(function(){
		var forcast_init = new QueryAPI("weather","London,UK");
		$('body').addClass('current_weather_showing');
	},800);
});
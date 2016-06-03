function Layout(layout_type,data,country){
	window.clearInterval(toggleCondtions);	
	switch(layout_type){
		case "weather":
		//send weather to layout
		currentWeatherDisplay(data,country);
		break;
		case "forecast":
		//send forcast info to layout
		forecastWeatherDisplay(data);
		break;
	}//end switch layout type
}
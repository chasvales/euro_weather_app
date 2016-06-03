var navElement = document.getElementById('nav-cities');
for (var i in cities_nav.cities) {
	var city = cities_nav.cities[i].city;
	var country = cities_nav.cities[i].country;
	var countrycode = cities_nav.cities[i].conutryabv;
	var nav_city = document.createElement("li");
	var nav_city_info = '<a href="#/'+city+'" class="action_trigger city_nav" data-city="'+city+'" data-country="'+countrycode+'" data-api="weather">'+city+', '+countrycode+'</a>';
		nav_city.innerHTML = nav_city_info;
		//Build the nav in the DOM
		navElement.appendChild(nav_city);
}
//Set up click functions to show forcast per city
var newcity_trigger = document.getElementsByClassName('action_trigger');
for(var n in newcity_trigger){
	if(n >=0){
		newcity_trigger[n].addEventListener("click", function( event ) {
			//prevent clicks from bubbling
			event.stopPropagation();
			//store (cache) data to vars to be used later
 			var selected_city = this.dataset.city;
 			var selected_country = this.dataset.country;
 			var selected_api = this.dataset.api;

 			var city_country = selected_city+','+selected_country;

			var highlighted_city = document.querySelectorAll(".active_city");
			var parentEl= this;

			//UN-HIGHLIGHT THE PREVIOUS CITY
			if(highlighted_city[0]){
				highlighted_city[0].classList.remove("active_city");
			}
			// HIGHLIGHT THE CURRENT CITY
			var att = document.createAttribute("class");
			att.value = "active_city";
			parentEl.setAttributeNode(att); 

			$('body').addClass('current_weather_showing');
			var forcast = new QueryAPI("weather",city_country);
		});
	}
}
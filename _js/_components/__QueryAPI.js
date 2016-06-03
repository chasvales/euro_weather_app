function QueryAPI(api,location){
	var secret = new SecretValues();
	$('#loading_icon').addClass('waiting');
	//request data from the api
	$.getJSON( secret.apiURI+api+"?APPID="+secret.appid+"&q="+location, function( data ) {
		//hide loading icon
		toggleCondtions('unset');
		$('#loading_icon').removeClass('waiting');
		//create new layout based on user request
	 	switch(api){
	 		case "weather":
	 		var display_layout = new Layout('weather',data,location);
	 		toggleCondtions();	
	 		break;
	 		case "forecast":
	 		var display_layout = new Layout ('forecast',data);
	 		break;
	 	}
	});
}
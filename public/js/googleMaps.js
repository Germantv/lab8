function initMap() {
	//create center marker at UCSD
	var ucsd_ltlng = {lat:32.8789248, lng:-117.2362174};

	//create a map object and specify the DOM element for display
	var map = new google.maps.Map(document.getElementById('map'), {
		center: ucsd_ltlng,
		zoom: 15
	});

	var marker = new google.maps.Marker({ 
		position: ucsd_ltlng,
		map: map, //'map' on right side of ':' referring to map object made above
		title: "UCSD"
	});
}
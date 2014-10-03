var map;

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(show_map, showError);
} else {
	alert('not supported');
};

function show_map(position) {
	// ...
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;

	var latlng = new google.maps.LatLng(lat, lon);

	var opts = {zoom : 16, center : latlng};
	map = new google.maps.Map($('#map').get(0), opts);

	new google.maps.Marker({position : latlng, map : map });
}

function showError(error) {
	// ...
}

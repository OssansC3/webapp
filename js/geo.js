if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(showLocation, showError);
} else {
	alert('not supported');
};

function showLocation(position) {
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	// ...
	$('#lat').text(lat);
	$('#lon').text(lon);

}

function showError(error) {
	// ...
}

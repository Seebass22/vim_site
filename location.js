function getLocation(){
	const posText = document.getElementById('posText');

	// posText.href = '';
	posText.innerHTML = '';

	function success(position) {
		var latitude  = position.coords.latitude;
		var longitude = position.coords.longitude;

		posText.innerHTML = `Ihr Breitengrad: ${latitude}, Ihr Längengrad: ${longitude}`;
	}
	function error() {
		posText.innerHTML = 'Unable to retrieve your location';
	}

	if(!navigator.geolocation) {
		posText.textContent = 'Geolocation is not supported by your browser';
	} else {
		posText.textContent = 'Locating…';
		navigator.geolocation.getCurrentPosition(success, error);
	}
}

window.onload = getLocation;

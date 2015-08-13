var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var bounds = new google.maps.LatLngBounds();
var center;
var marker;

function initialize() {
    console.log('Initializing...');
    localStorage.setItem('minprice',1);
    localStorage.setItem('maxprice',4);
    localStorage.setItem('one_dollar',0);
    localStorage.setItem('two_dollars',0);
    localStorage.setItem('three_dollars',0);
    localStorage.setItem('four_dollars',0);
    localStorage.setItem('rating',0);
    
    map = Apperyio("google_map").gmap;
    
    if (!map) {
        setDelay();
    } else {
        directionsDisplay = new google.maps.DirectionsRenderer();
    }
}

function displayDirections(sourceAddress, destinationAddress, map) {
    
    deleteMarker(marker);
    
    var request = {
        origin: sourceAddress,
        destination: destinationAddress,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
        directionsDisplay.setMap(map);
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            alert("Directions query unsuccessful. Response status: " + status);
        }
    });
}

function setDelay() {
    setTimeout(initialize, 50);
}

function dropPin() {
    center = map.getCenter();
    
    deleteMarker(marker);
    marker = new google.maps.Marker({position: center, map: map});
    
    var lat = center.lat();
    var lng = center.lng();
    localStorage.setItem('markerLat',lat);
    localStorage.setItem('markerLng',lng);
}

function resetLoc() {
	geolocation1.execute();
}

function deleteMarker(marker_obj) {
    if(marker_obj) // catches exception if marker_obj is null
    {
        marker_obj.setMap(null);
        directionsDisplay.setMap(null);
        marker_obj=null;
    }
}
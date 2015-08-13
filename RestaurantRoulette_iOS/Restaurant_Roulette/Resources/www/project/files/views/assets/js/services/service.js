/*
 * Service settings
 */
var features_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "54c50a46e4b023aa09a9afb6"
}

/*
 * Services
 */

var reserveTable = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': 'https://opentable.herokuapp.com/api/restaurants',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1439488358290',
        'appery-rest': '7735bc71-0c8e-4f4e-8c6a-9167cd75dfca'
    },
    'dataType': 'json',
    'type': 'get',
});

var radarSearch = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': 'https://maps.googleapis.com/maps/api/place/radarsearch/json?',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1439488358291',
        'appery-rest': '286d2d95-5a8f-4c11-adc4-1c4689ae73d7'
    },
    'dataType': 'json',
    'type': 'get',
});

var orderFood = new Apperyio.RestService({
    'url': '',
    'dataType': 'json',
    'type': 'get',
});
var GeolocationService = new Apperyio.GeolocationService({});

var initializeMap = new Apperyio.RestService({
    'url': '',
    'dataType': 'json',
    'type': 'get',
});

var getDetails = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': 'https://maps.googleapis.com/maps/api/place/details/json?',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1439488358291',
        'appery-rest': '286d2d95-5a8f-4c11-adc4-1c4689ae73d7'
    },
    'dataType': 'json',
    'type': 'get',
});

var PlaceMyMarker = new Apperyio.RestService({
    'url': '',
    'dataType': 'json',
    'type': 'get',
});

var features_reservations_query_service = new Apperyio.RestService({
    'url': '{database_url}/collections/reservations',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': features_settings
});

var yelpSearch = new Apperyio.RestService({
    'url': 'http://api.yelp.com/v2/search?',
    'dataType': 'json',
    'type': 'get',
});

var features_reservations_read_service = new Apperyio.RestService({
    'url': '{database_url}/collections/reservations/{_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': features_settings
});

var features_reservations_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/reservations',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': features_settings
});
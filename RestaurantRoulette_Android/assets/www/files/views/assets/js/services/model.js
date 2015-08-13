/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "Number": {
        "type": "number"
    },
    "Boolean": {
        "type": "boolean"
    },
    "results": {
        "type": "array",
        "items": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    },
    "String": {
        "type": "string"
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);

/**
 * Data storage
 */
Apperyio.storage = {

    "markerLat": new $a.LocalStorage("markerLat", "String"),

    "markerLatLng": new $a.LocalStorage("markerLatLng", "String"),

    "markerLng": new $a.LocalStorage("markerLng", "String"),

    "restaurantLat": new $a.LocalStorage("restaurantLat", "String"),

    "restaurantLng": new $a.LocalStorage("restaurantLng", "String"),

    "restaurantLoc": new $a.LocalStorage("restaurantLoc", "String"),

    "website": new $a.LocalStorage("website", "String"),

    "name": new $a.LocalStorage("name", "String"),

    "icon": new $a.LocalStorage("icon", "String"),

    "place_id": new $a.LocalStorage("place_id", "String"),

    "results": new $a.LocalStorage("results", "results"),

    "status": new $a.LocalStorage("status", "String"),

    "phone_number": new $a.LocalStorage("phone_number", "String"),

    "open": new $a.LocalStorage("open", "Boolean"),

    "one_dollar": new $a.LocalStorage("one_dollar", "Number"),

    "two_dollars": new $a.LocalStorage("two_dollars", "Number"),

    "three_dollars": new $a.LocalStorage("three_dollars", "Number"),

    "four_dollars": new $a.LocalStorage("four_dollars", "Number"),

    "minprice": new $a.LocalStorage("minprice", "String"),

    "maxprice": new $a.LocalStorage("maxprice", "String"),

    "opentable_link": new $a.LocalStorage("opentable_link", "String"),

    "rating": new $a.LocalStorage("rating", "String")
};
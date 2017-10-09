// Webfontloader
// https://www.npmjs.com/package/webfontloader

'use strict';

var x = document.getElementById('geolocation');

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";}
    }

function showPosition(position) {
    x.innerHTML='Latitude: ' + position.coords.latitude + '<br />Longitude: ' + position.coords.longitude;
}

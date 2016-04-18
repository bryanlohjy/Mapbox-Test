L.mapbox.accessToken = 'pk.eyJ1IjoiYnJ5YW5sb2hqeSIsImEiOiJjaW12Nnd2M3QwMm1pdXBra2hmeWQ2OWI3In0.M3vzM36scSxM3aTimLK56Q';

navigator.geolocation.watchPosition(plot);

function plot(pos){
	var lat=pos.coords.latitude;
	var lon=pos.coords.longitude;
	var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([lat, lon], 19);
    
    L.marker([lat,lon]).addTo(map);
}

// https://gist.github.com/joyrexus/8681168
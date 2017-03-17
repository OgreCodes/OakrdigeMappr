/* Do the main bits to get the map added and add the trails to the map on load */



/* Create the base map, set the view and add the trailSet to it */
var trailMap = new TrailMap('mapid');
trailMap.setView(trailSet.coordinates, 11);
trailMap.trailSet = trailSet;

/* Add the topo tiles */
var OpenTopoMap = L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png?a=5', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(trailMap);

/* Add Routes */
trailSet
	.each(function(trail) {
		var trailView = new TrailView({ 
			model: trail, 
			map: trailMap
		});
		$("#trail-tags .trails").append(trailView.$el);
		trail.on("change:polyline", trailMap.addTrail, trailMap);
	});



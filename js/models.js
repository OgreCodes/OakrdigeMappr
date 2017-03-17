/* The Trail Model and Collection.

Trails have a name and a reference to a GPX file. The Trail Model parses the GPX
(Using a rather simple parser looking for a single set of standard named points)
Then creates a Leaflet polyline from that set of points.

*/

var TrailModel = Backbone.Model.extend({
	initialize: function(options) {
		// get the raw GPX file and convert it to a polyline
		var thisTrail = this;
		$.ajax({
		    type: "GET",
		    url: this.get("url"),
		    dataType: "xml",
		    success: function (xml) {
		    	var rawPoints = xml.getElementsByTagName("trkpt");
		        var points = _(rawPoints)
		        	.map(function(coord) {
		        		// get elevation and convert to feet.
						elevation=coord.getElementsByTagName("ele")[0].childNodes[0].nodeValue * 3.28084; 
		        		return L.latLng(coord.attributes.lat.value, coord.attributes.lon.value, elevation ); 
		        	});
				thisTrail.set("polyline", L.polyline(points, defaultLine));
			}
		});
	},
	getElevation: function(latlon) {
		return 400;

	}
});


var TrailCollection = Backbone.Collection.extend({
	model: TrailModel
});

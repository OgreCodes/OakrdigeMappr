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
		        		return [coord.attributes.lat.value, coord.attributes.lon.value]; 
		        	});
				thisTrail.set("polyline", L.polyline(points, {color: 'blue'}));
			}
		});
	}
});


var TrailCollection = Backbone.Collection.extend({
	model: TrailModel
});

/* Extend the Map object to include an addTrail method and activate method */


var TrailMap = L.Map.extend({
	addTrail: function(trail) {
		trail.get("polyline").addTo(this);
	},
	activate: function(polyline) {
		this.trailSet.each(function(trail) {
			trail.get("polyline").setStyle(disabledLine);
		});
		polyline
			.setStyle(activeLine)
			.bringToFront();
		this.flyToBounds(polyline.getBounds(), {paddingBottomRight: [150,0]});
	}
});


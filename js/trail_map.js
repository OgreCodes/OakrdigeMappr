/* Extend the Map object to include an addTrail method and activate method */


var TrailMap = L.Map.extend({
	addTrail: function(trail) {
		trail.get("polyline").addTo(this);
	},
	activate: function(polyline) {
		this.trailSet.each(function(trail) {
			trail.get("polyline").setStyle({color: "#533", opacity: 0.7});
		});
		polyline
			.setStyle({color: "#F00", opacity: 1})
			.bringToFront();
		this.flyToBounds(polyline.getBounds(), {paddingBottomRight: [150,0]});
	}
});


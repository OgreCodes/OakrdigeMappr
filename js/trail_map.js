/* Extend the Map object to include an addTrail method and activate method */


var TrailMap = L.Map.extend({
	addTrail: function(trail) {
		var polyline = trail.get("polyline"), thisMap = this;
		polyline.addTo(this);
		polyline.on("click", function(e) {
			thisMap.activate(polyline);
		});
	},
	activate: function(polyline) {
		this.trailSet.each(function(trail) {
			trail.get("polyline").setStyle(disabledLine);
		});
		polyline
			.setStyle(activeLine)
			.bringToFront();
		this.flyToBounds(polyline.getBounds(), {paddingBottomRight: [150,0]});
		if (typeof(this.elevationProfile) === "undefined") {
			this.elevationProfile = new ElevationProfile({el: "#elevation-profile", polyline: polyline});
		} else {
			this.elevationProfile.setSource(polyline);
		}
	}
});


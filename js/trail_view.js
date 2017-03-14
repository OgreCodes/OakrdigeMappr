/* Trail View is the clickable list of trails in the sidebar 
	responsible for rendering the list of names and responding to clicks.
*/

var TrailView = Backbone.View.extend({
	tagName: "a",
	className: "trail-button",
	initialize: function(options) {
		if (typeof(options) === "undefined" || typeof(options.map) == "undefined") {
			console.log("Map object must be specified at initialization");
			return false;
		}
		this.map = options.map;
		this.render();
	},
	render: function() {
		this.$el.html(this.model.get("name"));
	},
	events: {
		"click": "click"
	},
	click: function(event) {
		event.preventDefault();
		var polyline = this.model.get("polyline");

		this.map.activate(polyline);
	}
});


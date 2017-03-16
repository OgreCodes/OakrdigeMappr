/* Draw the chart for a plotline */

var ElevationProfile = Backbone.View.extend({
	chartOptions: {
		height: 150,
		// lineSmooth: false,
		// showPoint: false,
		axisX: {
		    showGrid: false,
		},	
		chartPadding: {
			top: 2,
			right: 5,
			bottom: 2,
			left: 5
		},
	},

	initialize: function(options) {
		options = options || {};
		if (!options.polyline) {
			console.log("ElevationProfile required Polyline with altitude data to initialize");
			return false;
		}

		this.polyline = options.polyline;
		this.render();
	}, 
	render: function() {
		this.$el.css("display","block");
		var data = {
			series: [ this.getChartSeries() ]
		};
		this.chart = new Chartist.Bar('.ct-chart', data, this.chartOptions);
	},
	getChartSeries: function() {
		var path = this.polyline.getLatLngs();
		var count = path.length;
		var columns = this.$el.width()-70;
		var step = Math.max(5,Math.round(count/columns,1));
		return _.chain(_.range(0,count, step))
			.map(function(index) {
				return path[index].alt;
			}).value();
	},
	setSource: function(polyline) {
		this.polyline = polyline;
		this.chart.update({series: [ this.getChartSeries() ]})
		
	},

});

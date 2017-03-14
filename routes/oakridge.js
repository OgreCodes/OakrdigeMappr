/* A basic set of trails */ 

var trailSet = new TrailCollection(
	[
		{
			name: "ATCA",
			url: "routes/atca.gpx"
		},
		{
			name: "Alpine",
			url: "routes/Alpine.gpx"
		},
		{
			name: "Hardesty",
			url: "routes/Hardesty.gpx"
		},
		{
			name: "Heckletooth",
			url: "routes/Heckletooth.gpx"
		},
		{
			name: "Larrison Creek",
			url: "routes/Larrison_Creek.gpx"
		},
		{
			name: "Lawler",
			url: "routes/Lawler.gpx"
		},
		{
			name: "Lost Creek",
			url: "routes/Lost_Creek.gpx"
		},
		{
			name: "Middle Fork",
			url: "routes/Full_Middle_Fork.gpx"
		},
	]
);

_.extend(trailSet, {
	coordinates: [43.7465, -122.4617],
	name: "Oarkridge"
});


var samplePoints = [
  [
    -122.488164,
    43.870969,
    1369.78
  ],
  [
    -122.488388,
    43.870865,
    1375.26
  ],
  [
    -122.488613,
    43.870865,
    1379.13
  ],
  [
    -122.49544,
    43.760231,
    344.45
  ]
];

describe('distanceBetween', function () {
  it('should accurately reflect distance between points', function () {
    // Checked these distances from : https://www.fcc.gov/media/radio/distance-and-azimuths
    expect(distanceBetween(samplePoints[0], samplePoints[1])).toBe(21);
    expect(distanceBetween(samplePoints[1], samplePoints[2])).toBe(18);
  });  
});

describe('closerThan', function () {
  it('should check the points are closer than 20 meters apart', function () {
    expect(closerThan(samplePoints[1], samplePoints[2],20)).toBe(true);
  });  

  it('should return false if points are more than 20 meters apart', function () {
    expect(closerThan(samplePoints[0], samplePoints[1],20)).toBe(false);
  });  
});


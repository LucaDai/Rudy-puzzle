var s = 8;


var sizes = [s * 0.38, s * 0.95, s, s * 0.53, s * 11.2, s * 9.45, s * 4, s * 3.88];

function setup() {
	createCanvas(800, 600);
	colorMode(HSB);
	noStroke();



}

function draw() {
	background(255);
	for (var i = 0; i < sizes.length; i += 1) {
		fill(sizes[i], 100, 100);
		var h = height / 2;
		ellipse(50 + i * 100, h + random(-1, 1), sizes[i], sizes[i]);

	}
}

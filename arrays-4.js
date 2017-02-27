var shades = [10, 25, 45, 25, 60, 25, 45, 25, 10];

function setup() {
	createCanvas(400, 400);
	colorMode(HSB);
	noStroke();
}

function draw() {
	for (i = 0; i < shades.length; i++) {

		fill(shades[i], 100, 100);
		var w = width / shades.length;
		rect(i * w, 0, w, height);

	}
}

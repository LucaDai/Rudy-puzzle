var shades = [10, 25, 45, 25, 60];

function setup() {
	createCanvas(400, 400);
	colorMode(HSB);
	noStroke();
}

function draw() {
	for (i = 0; i < shades.length; i++) {

		fill(shades[i], 100, 100);
		rect(i * width / 5, 0, width / 5, height);

	}
}

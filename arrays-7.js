var shades = [10, 25, 45, 25, 60, 25, 45, 25, 10];

function setup() {
	createCanvas(400, 400);
	colorMode(HSB);
	noStroke();

}

var H = 0;

function draw() {
	for (i = 0; i < shades.length; i++) {
		var c = shades[i] + H;
		if (c > 360) {
			c = c - 360;
		}
		fill(c, 100, 100);
		var w = width / shades.length;
		rect(i * w, 0, w, height);

	}
	H = H + 1;
	if (H > 360) {
		H = H - 360;
	}

}

function mousePressed() {
	append(shades, mouseY);
}

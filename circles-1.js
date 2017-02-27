var sizes = [40, 70, 50, 30, 60, 50, 80, 10, 20, 40];

function setup() {
	createCanvas(800, 600);

	noStroke();

	for (var i = 0; i < sizes.length; i += 1) {
		fill(sizes[i]);
		ellipse(50 + i * 80, height / 2, sizes[i], sizes[i]);
	}
}

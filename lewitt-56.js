function setup() {
	createCanvas(800, 400);

	for (x = 10; x < width; x += 10) {
		for (y = height / 2; y < height; y += 10) {
			line(x, 0, x, width / 2);
			line(0, y, width, y);
			line(width / 2, y - height / 2 + 10, width, y - height / 2 + 10);
		}
	}
	for (x = 0; x < width / 2; x += 10) {
		for (y = height / 2; y < height; y += 10) {
			line(x + 10, y, x, y + 10);
		}
	}
	for (x = width / 2; x < width; x += 10) {
		for (y = height / 2; y < height; y += 10) {
			line(x , y, x+10, y + 10);
		}
	}
}

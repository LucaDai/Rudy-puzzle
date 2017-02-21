function setup() {
	createCanvas(400, 400);

	background(255);
	for (i = 10; i < 360; i += 40) {
		for (j = 10; j < 370; j += 40) {
			strokeWeight(6);
			fill(255);
			rect(i, j, 19+random(40), 19+random(40));

		}
	}
}

function draw() {}
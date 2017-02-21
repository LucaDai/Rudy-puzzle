function setup() {
	createCanvas(400, 400);
	noStroke();
	background(255);
	for (i = 0; i < 400; i += 40) {
		for (j = 0; j < 400; j += 40) {
			fill(240);
			rect(i, j, 19, 19);
			fill(100);
			rect(i+19, j, 19, 19);
				fill(150);
			rect(i, j+19, 19, 19);
				fill(200);
			rect(i+19, j+19, 19, 19);
			
		}
	}
}

function draw() {}
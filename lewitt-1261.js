function setup() {
	createCanvas(400, 400);
	background(0);

}
var r = 0;

function draw() {

	for (i = 20; i < 400; i += 40) {
		noFill();
		strokeWeight(4);
		stroke(255);
		d = i + r;
		ellipse(200, 200, d, d);

		r += 5;
	}
}

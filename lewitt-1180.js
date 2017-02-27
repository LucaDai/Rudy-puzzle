var stars = [];

function setup() {
	createCanvas(400, 400);


	for (i = 0; i < 1000; i++) {
		stars[i] = new Star(random(0, 400), random(0, 400));

	}
	colorMode(HSB);
}

function Star(firstX, firstY) {

	this.x = firstX;
	this.y = firstY;
	this.h = random(0, 240);
	this.display = function() {
		noStroke();
		fill(this.h);
		ellipse(this.x, this.y, random(5), random(5));
	}
	this.move = function() {

		this.x += random(-1, 1);
		this.y += random(-1, 1);

	}
}

function draw() {
	background(0);
	for (i = 0; i < stars.length; i++) {
		stars[i].display();
		stars[i].move();
	}

}

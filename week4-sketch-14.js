var ball = [];

function setup() {
	createCanvas(400, 400);
	for (i = 0; i < 4; i++) {
		ball[i] = new Ball(random(50, 350), random(50, 350));

	}
	colorMode(HSB);
}

function Ball(firstX, firstY) {

	this.x = firstX;
	this.y = firstY;
	this.h = random(0, 360);
	this.x1 = random(1, 5);
	this.y1 = random(1, 5);
	this.display = function() {
		noStroke();
		fill(this.h, 100, 100)
		ellipse(this.x, this.y, 50, 50);
	}
	this.move = function() {

		this.x = this.x + this.x1;
		this.y = this.y + this.y1;
		if (this.y > 375 || this.y < 25) {
			this.y1 = -this.y1;
		}
		if (this.x < 25 || this.x > 375) {
			this.x1 = -this.x1;
		}

	}
}

function draw() {
	background(255);
	for (i = 0; i < ball.length; i++) {
		ball[i].display();
		ball[i].move();
	}

}

function mousePressed() {
	ball[ball.length] = new Ball(mouseX, mouseY);
}

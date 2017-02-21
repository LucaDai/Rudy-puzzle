function setup() {
	createCanvas(800, 400);

	background(0);
	stroke(255);
	for (i = 10; i < 800; i += 10) {

		line(i, 0, i, 400);
	}
	fill(0);
	rect(50,50,300,300);
	fill(0);
	ellipse(600,200,300,300);
	for(j = 50; j<350;j+=10)
	{
		line(50,j,350,j);
	}
	for(j = 50; j<=350;j+=10)
	{
		line(450,j,750,j);
	}
}
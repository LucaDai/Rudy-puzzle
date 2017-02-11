function setup() { 
  createCanvas(400, 400);
  background(0);
	strokeWeight(4);
	stroke(255);
	
 	for(x=10;x<=390;x+=10)
	{
			line(x,random(0,400),x,400);
		}
} 


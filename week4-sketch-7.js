function setup() { 
  createCanvas(400, 400);
  background(0);
	strokeWeight(2);
	stroke(255);
 	for(x=10;x<=390;x+=10)
	{
		for(y=10;y<=390;y+=10)
		{
			line(x,y,400-x,y);
			line(x,y,x,400-y);
		}
	}
} 


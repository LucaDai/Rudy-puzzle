function setup() { 
  createCanvas(400, 400);
  background(0);
	noStroke();
	fill(255);
var startX = 0;
var endX =400;
	for(y = 20; y<= 200; y+=20)
	{
			startX+=20;
			endX-=20;
		for(x= startX; x<=endX; x+= 20)
		{
				ellipse(x,y, 15, 15);	
				ellipse(x,400- y, 15, 15);	
		}
	} 
	
} 

function draw()
{ 
	
}

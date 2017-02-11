function setup() { 
  createCanvas(400, 400);
  	background(0);
  
} 
var x = 20;
var y = 20;
function draw()
{

	while(x<400)
	{
			fill(255);
		ellipse(x,x,20,20);
		x = x+ 20;
	}
	
}


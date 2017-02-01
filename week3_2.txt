function setup() { 
  createCanvas(400, 400);
  
 
} 
function draw()
{
	for(i=10;i<400;i+=20)
	{
		noFill();
		ellipse(200,200,i,i);
	}
	
}

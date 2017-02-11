function setup() { 
  createCanvas(400, 400);
  
 
} 
function draw()
{
	background(0);
	stroke(255);
	
for(x=20;x<width-20;x+=10)
	{
		for(y=20;y<width-20;y+=10)
		{
			stroke(255);
			line(x,y+ 10, x+10, y);
			
			
		}
	}

}

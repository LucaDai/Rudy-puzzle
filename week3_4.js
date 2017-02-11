function setup() { 
  createCanvas(400, 400);
  
 background(255);
} 

function draw()
{
	var y = 10;

	for(x= 200;x<390;x+=10)
	{
			y = y+10;
	line(400-x,y, x, y);	
	line(400-x,400-y, x, 400-y);	
	}
}

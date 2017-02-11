function setup() { 
  createCanvas(400, 400);
  

} 

function draw()
{
	var y = 20;
	for(x=10; x<width-10;x+=10)
	{
		y = y + 20;
		line(x,0,x,y);
	}
}

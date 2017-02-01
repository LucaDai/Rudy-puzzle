function setup() { 
  createCanvas(400, 400);
} 

function draw()
{
	noFill();
	rectMode(CENTER);
	for(i=20;i<55;i+=10)
	{
		for(x=40;x<400;x+= 80)
		{
			rect(x, 200,i,i);
		}
	}	
}

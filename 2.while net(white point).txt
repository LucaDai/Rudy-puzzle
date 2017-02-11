function setup() { 
  createCanvas(400, 400);
  background(0);
  fill(255);
} 


function draw()
{var x = 20;

	while(x<=380)
	{var y = 20;
		while(y<height)
		{
			ellipse(x,y,20,20);
			y += 20;
		}
	 x +=20;
	}
}


function setup() { 
  createCanvas(400, 400);
    var H = 4;
	colorMode(HSB);
	noStroke();

	for(i = 20; i <= 380; i += 20)
	{
			
		for(j = 20; j<= 380; j+= 20)
		{
		
			ellipse(j, i, 15, 15);
			
			fill(H,50,100,255);
			var H = random(360);
		}
	} 
} 

function draw()
{ 
	
}

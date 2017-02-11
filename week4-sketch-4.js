function setup() { 
  createCanvas(400, 400);
    var H = 0;
	colorMode(HSB);
	var S = 50; 
	var B = 100; 
	var O = 255; 
	
	print(H);
	noStroke();
	fill(H,S,B,O);
	for(i = 20; i <= 380; i += 20)
	{
			
		for(j = 20; j<= 380; j+= 20)
		{
		
			ellipse(j, i, 15, 15);
			
			fill(H,50,100,255);
			H= H + 1;
		}
	} 
} 

function draw()
{ 
	
}

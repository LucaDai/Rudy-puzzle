function setup() { 
  createCanvas(400, 400);
  
  
} 

function mousePressed()
{
print("("+mouseX+","+mouseY+")");
}

var i = 0;

function draw()
{
	background(255);
	var x1 = i + 100 ;
	var y1 = 100;
	ellipse(x1,y1,50,50);
	i = i + 3;
	if(i > 300)
	{
	i=0;
	}
}

function setup() { 
  createCanvas(400, 400);
  
  
} 
function mousePressed()
{
print("("+mouseX+","+mouseY+")");
}

function draw()
{
	background(255);
	var x1 = mouseX ;
	var y1 = mouseY;
	var x2 = mouseX - 20;
	var y2 = mouseY - 20;
	var x3 = mouseX + 20;
	var y3 = mouseY - 20;
	
ellipse(x1,y1,100,100);
ellipse(x2,y2,10,10);
ellipse(x3,y3,10,10);
	var x4 = mouseX;
	var y4 = mouseY+10;

	if(mouseX > 200)
	{

		arc(x4, y4, 40, (mouseX-200)/3, 0, PI,CHORD);
	}
	else
	{
		arc(x4, y4, 40, (mouseX-200)/3, PI, PI,CHORD);
	}


}

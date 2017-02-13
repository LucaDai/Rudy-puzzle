function setup() { 
  createCanvas(400, 400);
  
  
} 
var y = 3;
var x = 4;
var x1 =100;
var y1 = 100;
var x3 = 6;
var y3 = 3;
var x4 =200;
var y4 = 300;


function ball_1()
{
	fill(50, 50, 255)
ellipse(x1,y1,50,50);
	x1 = x1 + x;
	y1 = y1 + y;
	if(x1 > 375)
	{
		x =-x;
	}
	if(x1<25)
	{
		x=-x;
	}
	
	if(y1 > 375)
	{
		y =-y;
	}
	if(y1<25)
	{
		y=-y;
	}
}

function ball_2()
{
	fill(160, 50, 255)
ellipse(x4,y4,50,50);
	x4 = x4 + x3;
	y4 = y4 + y3;
	if(x4 > 375)
	{
		x3 =-x3;
	}
	if(x4<25)
	{
		x3=-x3;
	}
	
	if(y4 > 375)
	{
		y3 =-y3;
	}
	if(y4<25)
	{
		y3=-y3;
	}
}
function draw()
{
	background(255);
	ball_1();
	ball_2();

}

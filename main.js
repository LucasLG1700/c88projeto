
var canvas = new fabric.Canvas('myCanvas')

ballX=0;
ballY=0;
holeX=400;
holeY=800;


ballimagewidth = 5;
ballimageheight = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png", function(Img)
	{
		holeOBJ = Img;
		holeOBJ.scaleToWidth(50);
		holeOBJ.scaleToHeight(50);
		holeOBJ.set({
			top:holeY,
			left:holeX
		});
		canvas.add(holeOBJ);
	});
	newImage();
}

function newImage()
{
	fabric.Image.fromURL("ball.png", function(Img)
	{
		ballOBJ = Img;
		ballOBJ.scaleToWidth(50);
		ballOBJ.scaleToHeight(50);
		ballOBJ.set({
			top:ballY,
			left:ballX
		});
		canvas.add(ballOBJ);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ballX==holeX)&&(ballY==holeY)){
		canvas.remove(ballOBJ);
		document.getElementById("hd3").innerHTML="Você atingiu o objetivo!!!";
document.getElementById("myCanvas").style.borderColor="red";
	}
	
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	
	
}
function up(){
	
		if(ballY >=0)
		{
			ballY = ballY - ballimageheight;
			canvas.remove(ballOBJ);
			newImage();
		}
	}

	function down()
	{
		if(ballY <=899)
    {
        ballY = ballY + ballimageheight;
        canvas.remove(ballOBJ);
        newImage();
    }
	}

	function left()
	{
		if(ballX >5)
		{
			
				ballX = ballX - ballimageheight;
				canvas.remove(ballOBJ);
				newImage();
			
		}
	}

	function right()
	{
		if(ballX <=1150)
		{
			
				ballX = ballX + ballimageheight;
				canvas.remove(ballOBJ);
				newImage();
			
		}
	}

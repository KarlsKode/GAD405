//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
function setup() {
  createCanvas(500, 500); //Use this function to define the size of the output window
  textSize(32);
  //noLoop();
  }
  x = 00;
  y = 00;
  evilX = 00;
  evilY = 00;
  beat = false;
function draw() {
		  background(0); //Set your background color to black (0)
		  grid();
		  mouseBox();
		  clampingFunction();
		  //beatFunc();
		  
	push();		  
	  fill(255, 0, 0);
	  text(x/10, boxWidth*boxesX[x] + 53, boxWidth*boxesY[y] + 25);
	  text(y, boxWidth*boxesX[x] + 53, boxWidth*boxesY[y] + 50);
    pop();
  //console.log(x / 10 + " x");
  //console.log(y + " y");	
  }
  
  boxesX = [];
  boxesY = [];
  //collidersX = [];
  //collidersY = [];
  function grid(){
	boxWidth = width/10;
		for (let posX = 0; posX < 10; posX++) {	
			for (let posY = 0; posY < 10; posY++){
				 //drawing the rectangles in the grid
				 rect(boxWidth*posX, boxWidth*posY, boxWidth, boxWidth);
				 boxesX.push(posX);
				 boxesY.push(posY);
    			 /*drawing the colliders in the grid
				 collidePointRect(mouseX,mouseY,boxWidth*posX, boxWidth*posY, boxWidth, boxWidth);;
				 collidersX.push(posX);
				 collidersY.push(posY);
				 */
				  //fill(0, 255, 0)
				  text(posX, boxWidth * posX, boxWidth * posY + 50); 
				  text(posY, boxWidth * posX + 15, boxWidth * posY + 50); 
			}
		}
	}
  function mouseBox(){
	push();
	stroke(255, 0, 0);  
	line(mouseX, 0, mouseX, height);
	line(0, mouseY, width, mouseY);	
	fill(255, 0, 0);
	text(round(mouseX) + " x", mouseX + 12, mouseY + 32);
	text(round(mouseY) + " y", mouseX + 12, mouseY + 64);
	pop();
  }
  function keyPressed(){
	  if (keyCode === LEFT_ARROW) {
		x = x - 10;
	  } else if (keyCode === RIGHT_ARROW) {
		x = x + 10;
	  } else if (keyCode == UP_ARROW) {
		y = y - 1;
	  }	else if (keyCode == DOWN_ARROW) {
		y = y + 1;
		}
	  beatFunc();
	}
  function clampingFunction(){
	  if(x <= 99){
	  fill(x + 100, 0, x + 100);
	  rect(boxWidth*boxesX[x], boxWidth*boxesY[y], boxWidth, boxWidth);				
	  //console.log("drawn1");
	  }else{
		  x = x - 100;
	  }
	  if(x >= 00){
	  rect(boxWidth*boxesX[x], boxWidth*boxesY[y], boxWidth, boxWidth);				
	  //console.log("drawn2");
	  }else{
		  x = x + 100;
	  }
	  if(y <= 99){
	  fill(255, 0, 0);
	  rect(boxWidth*boxesX[x], boxWidth*boxesY[y], boxWidth, boxWidth);				
	  //console.log("drawn3");
	  }else{
		  y = y - 100;
	  }
	  if(y >= 00){
	  rect(boxWidth*boxesX[x], boxWidth*boxesY[y], boxWidth, boxWidth);
	  //console.log("drawn4");
	  }else{
		  y = y + 100;
	  }	  
  }
function beatFunc(){
beat = true;
if (beat == true){
	enemy();
	beat = false;
}
}	
 function enemy(){
  evilX = x;
	  rect(boxWidth*boxesX[evilX], boxWidth*boxesY[00], boxWidth, boxWidth);				
		console.log(evilX);
  }
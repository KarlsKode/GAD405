//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//09_Exercise 4 - Color Coordinates
function setup() {
  createCanvas(500, 500); //Use this function to define the size of the output window
  }
let i = 1;
function draw() {
  //background(0); //Set your background color to black (0)
   	   i = i + 1;
	   push();
			   fill(random(255), random(255), random(255));
			   rect(random(width), random(height), 50, 50);
	   pop();
   for (let x = 0; x < 1; x++) {
	   push();
		   fill(random(255), random(255), random(255));
		   ellipse(random(width), random(height), random(width/4), random(height/4));
		   //translate(0 + x);
	   pop();
	}
  }

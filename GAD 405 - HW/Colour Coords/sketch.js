//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//09_Exercise 4 - Color Coordinates

function setup() {
  createCanvas(400, 400); //Use this function to define the size of the output window
  }

function draw() {
  background(0); //Set your background color to black (0)
  var X = width/2
  var Y = height/2
  
  fill(mouseX, mouseY, mouseX);
  rect(0, 0, X, Y);
  fill(mouseX * 3, mouseY + 18, mouseX/2);

  rect(X, Y, X, Y);
  fill(mouseY * 2, mouseX / 2, mouseY * 5);
  rect(0, Y, X,  Y);
  fill(mouseX * 5, mouseX / 6, mouseY * 3);
  rect(X, 0, X, Y);
  }

let x;
let y;
let speedX;
let speedY;
let r =255; let g=255; let b=255;

function setup(){
  createCanvas(400, 400);
  x = width/2;
  y = height/2;
  speedX = random (-5., 5.);
  speedY = random (-5., 5.);
  textSize(16);
}

function draw(){
  background(100);
  x += speedX;
  y += speedY;
  if (x>width)x= 0;
  if (x<0)x = width;
  if (y>height)y = 0;
  if (y<0)y = height;
ellipse(x, y, 50, 50);
fill(255);
text(x, width/2, height/2-20);
text(y, width/2, height/2+20);
}

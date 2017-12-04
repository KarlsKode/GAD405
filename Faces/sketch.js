function setup(){
  createCanvas(400,400);
}

function draw(){
  background(160);

for (let i=0; i<100; i++){
  push();
  translate(random(width), random(height));
  face();
  pop();
  noLoop();
  }
}

function face(){
  fill(random(255), 0, random(255));
  rect(50, 50, 50, 50);
  rect(150, 50, 50, 50);
  rect(50, 250, 150, 50);
}

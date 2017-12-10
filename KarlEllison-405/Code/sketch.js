function setup(){
  createCanvas(594,841); //set canvas size
}

function draw(){
  background(51);     //set background colour
  branchdisplay();   //call branchdisplay (details for branch function)
}

function branchdisplay(){
  strokeWeight(10);               //stoke size for branches
  translate(width/2,height);   //position of first branch
  branch(0);    //call branch function
}

function branch(depth){
  if (depth < 15) {
    line(0,0,0,-height/10); // draw a trunk of tree with first line up
    {
      translate(0,-height/10); // move the space upwards
      rotate(random(-0.05,0.05));  // random rotation

      if (random(1.0) < 0.66){ // branching
        rotate(0.33); // rotate branch to the right
        scale(0.8); // downsize branch

        push(); // save the transform state
        branch(depth + 1); // Add another branch branch while depth <15
        pop(); // move back to saved state

        rotate(-0.66); // rotate back to the left

        push(); // save state
        branch(depth + 1);   // start a second new branch while depth<15
        pop(); // back to saved state
     }
      else { // no branch - continue at the same depth
        branch(depth);
          noLoop();
      }
    }
  }
}


// add class for branch? Animate starfield or fireworks? OnClick for fireworks. Moon arc

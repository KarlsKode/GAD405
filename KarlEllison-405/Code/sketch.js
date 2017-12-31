var drops = []; // Global varialbe for rain drops array

function setup(){
  createCanvas(594,841); //set canvas size
  for (var i = 0; i < 600; i++) { // Set loop for amount of rain drops
    drops[i] = new Drop();
  }
}

function draw(){
  background(220, 220, 220);     //set background colour
  branchdisplay();   //call branchdisplay (details for branch function) draws a new tree every frame
  for (var i = 0; i < drops.length; i++) { //draws rain drop
    drops[i].fall();
    drops[i].show();
  }
}

function branchdisplay(){
  strokeWeight(7);               //stoke size for branches
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
      else { // end of branch function when it reaches depth limit
        branch(depth);
        //noLoop();
      }
    }
  }
}

function Drop() {   //Creates rain drops
  this.x = random(width); // Determines X placement
  this.y = random(-600, -100); //Determines Y placement off screen to help create random rain fall
  this.z = random(0, 30); //
  this.len = map(this.z, 0, 30, 10, 20); //Determines length of rain drops
  this.yspeed = map(this.z, 0, 30, 1, 20);

  this.fall = function() {  //Gives rain drops their movement
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 30, 0, 0.5); //Maps speed of drops, drops further back are slower then those in front
    this.yspeed = this.yspeed + grav; // Speed of rain fall

    if (this.y > height) {
      this.y = random(-300, -150);
      this.yspeed = map(this.z, 0, 30, 4, 15);
    }
  }

  this.show = function() {  // Visual for rain drops
    var thick = map(this.z, 0, 30, 1, 3); //local variable for rain. Rain at back smaller than those at front
    strokeWeight(thick);
    stroke(100, 30, 22); // Rain colour for blood rain
    line(this.x, this.y, this.x, this.y+this.len);
  }
}



// add class for branch? Animate starfield or fireworks? OnClick for fireworks. Moon arc

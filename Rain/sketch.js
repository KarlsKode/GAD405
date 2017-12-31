var drops = []; // Global varialbe for rain drops array

function setup() {
  createCanvas(594,841);
  for (var i = 0; i < 500; i++) { // Set loop for amount of rain drops
    drops[i] = new Drop();
  }
}

function draw() {
  background(220, 220, 220);
  for (var i = 0; i < drops.length; i++) { //draws rain drop
    drops[i].fall();
    drops[i].show();
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

/*
function :  draw turtle
x, y : position of turtle
*/

function setup() {
  createCanvas( 500, 500);
  background(255);
  drawTurtle(250, 150, 170);
}

function drawTurtle(x, y, size) {
  //body-1
  fill(255);
  ellipse(x, y+size*0.7, size*1.3, size*1.1);

  //arms
  fill(191, 253, 255);
  rotate(radians(30));
  ellipse(x, y-size*0.3, size, size*0.35);
  rotate(radians(-60));
  ellipse(x-size*0.4, y+size*1.17, size, size*0.35);
  
  //legs
  rotate(radians(30));
  ellipse(x-size*0.2, y+size*1.2, size*0.4, size*0.9);
  ellipse(x+size*0.2, y+size*1.2, size*0.4, size*0.9);  
  
  //body-2
  fill(255, 248, 162);
  arc(x, y+size*0.8, size*1.18, size, radians(0), radians(180) );
  arc(x, y+size*0.8, size*1.18, size*1.5, radians(180), radians(360));
  noFill();
  stroke(0, 0, 0);
  line(x, y+size/2, x, y+size*1.1);
  line(x, y+size*1.1, x-size/4.5, y+size*1.25);
  line(x, y+size*1.1, x+size/4.5, y+size*1.25);
  bezier( x-size/2, y+size/2.5, x-size/4, y+size/1.9, x+size/4, y+size/1.9, x+size/2, y+size/2.5);
  bezier( x-size/3, y+size*0.85, x-size/5, y+size*0.9, x+size/5, y+size*0.9, x+size/3, y+size*0.85);
  line(x-size/3, y+size*0.85, x-size/1.75, y+size*0.6); 
  line(x-size/3, y+size*0.85, x-size/1.8, y+size);
  line(x+size/3, y+size*0.85, x+size/1.75, y+size*0.6); 
  line(x+size/3, y+size*0.85, x+size/1.8, y+size);
   
  
  //head
  fill(191, 253, 255);
  ellipse(x, y, size*0.9, size/1.3);
  
  //eyes
  fill(255);
  arc(x-size/4, y-size*0.035, size*0.2, size*0.31, radians(150), radians(385), CHORD);
  arc(x+size/4, y-size*0.035, size*0.2, size*0.31, radians(155), radians(390), CHORD);
  fill(0);
  arc(x-size/4.2, y-size*0.045, size*0.17, size*0.32, radians(145), radians(390), CHORD);
  arc(x+size/4.2, y-size*0.045, size*0.17, size*0.32, radians(150), radians(395), CHORD);
  fill(255);
  ellipse(x-size/4.3, y-size*0.15, size/10.5, size/10.5);
  ellipse(x+size/4.3, y-size*0.15, size/10.5, size/10.5);
  fill(139, 34, 35);
  arc(x-size/4.2, y+size*0.009, size*0.17, size*0.2, radians(150), radians(385), CHORD);
  arc(x+size/4.2, y+size*0.009, size*0.17, size*0.2, radians(155), radians(390), CHORD);
  fill(0);
  ellipse(x-size/4.2, y-size*0.05, size/10.5, size/10.5);
  ellipse(x+size/4.2, y-size*0.05, size/10.5, size/10.5);
  
  //eyebrow
  fill(0);
  bezier(x-size/5.5, y-size*0.23, x-size/6.1, y-size*0.22, x-size/6.2, y-size*0.21, x-size/6.5, y-size*0.2);
  bezier(x+size/5.5, y-size*0.23, x+size/6.1, y-size*0.22, x+size/6.2, y-size*0.21, x+size/6.5, y-size*0.2);
  
  //nose
  strokeWeight(2);
  point(x-size*0.05, y+size*0.055);
  point(x+size*0.05, y+size*0.055);
  
  //mouth
  noFill();
  bezier(x, y+size*0.1, x-size*0.1, y+size*0.07, x-size*0.15, y+size*0.12, x-size*0.4, y+size*0.1);
  bezier(x, y+size*0.1, x+size*0.1, y+size*0.07, x+size*0.15, y+size*0.12, x+size*0.4, y+size*0.1);
  fill(0);
  arc(x, y+size*0.1, size*0.75, size*0.47, radians(0), radians(180));
  noStroke();
  fill(216, 129, 142, 200);
  ellipse( x, y+size*0.23, size*0.6, size*0.16);
  fill(250, 109, 130); 
  ellipse( x, y+size*0.26, size*0.5 ,size*0.15);  
}

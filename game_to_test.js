//Andres Albornoz
//Nicholas Brown-Hernandez
//Web and FX: From Theory to Practice, 502-A22-LA 
//The Bigger, The Better
//URL: https://openprocessing.org/sketch/1880762
//Instruction:  Make the ant as big as a monster
//- Mov. interaction: ant moves. -Click: changes background (world) with every click. -Key presses: W restarts its original form
//Story: An ant that is always underrated because of being small and innocent is being bullied by a human, he's gonna prove that he is messing with the wrong ant.

let rectWidth = 50;
let rectHeight = 50;
let rectSize = 20;
let rectX, rectY;
let speed = 20;
let circleX, circleY; 
let circleSize = 50; 
let r = 124;
let g = 252;
let b = 0;

function resetCircle() {
  circleX = random(circleSize/2, width - circleSize/2); 
  circleY = random(circleSize/2, height - circleSize/2); 
  rectWidth += 10;
  rectHeight += 10;
}

function setup() {
  createCanvas(900, 900);
  rectX = width/2 - rectWidth/2;
  rectY = height/2 - rectHeight/2;
  circleX = random(width);
  circleY = random(height);
  resetCircle(); 
}

function draw() {
  background(r,g,b);
  fill(0, 0, 255); 
  rectMode(CENTER);
  rect(mouseX, mouseY, rectWidth, rectHeight);
    if (dist(rectX + rectWidth/2, rectY + rectHeight/2, circleX, circleY) < (circleSize/2 + rectWidth/2)) {
    resetCircle();
  }
  fill(255, 0, 0); 
  noStroke(); 
  ellipse(circleX, circleY, circleSize, circleSize); 
  if (dist(circleX, circleY, mouseX, mouseY) < circleSize/2 + rectSize/2) {
    resetCircle();
  }
}

function mouseClicked() {
  r = random(255);
  g = random(255);
  b = random(255);
}

function keyPressed() {
  if (key === 'w' || key === 'W') {
    rectWidth = 50;
    rectHeight = 50;
  }
}

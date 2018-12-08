var x = 0  
var y = 0
var sz = 0

function setup() {
	createCanvas(500, 500); 
}

function draw() {
 
  background(173,216,230); 
  
  fill(255,255,127,150); 
  stroke(255,255,127);
  strokeWeight(15); 

  if (mouseX > 1590 && mouseY < 250);{
	fill("blue");
}
  ellipse(mouseX,mouseY,100,100);

  ellipse(x,135,100,100);

  fill("#9ecc43");
  noStroke();

  rect(150,250,200,200);
  rect(200,50,100,100);
  rect()


 x = random(0, width);
 y = random(0, height);
}
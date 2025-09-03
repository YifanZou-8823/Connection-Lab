function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  strokeWeight(8);
}

function draw() {
  background(220);
 fill(255);
  drawHead();
  drawEyes(100);
  drawMouth();
  drawTeeth();
  drawFreckles(100,200);
  drawFreckles(110,180);
}

function drawFreckles(x,y){
  point(x,y);
  point(x-5, y-5);
  point(x+5,y-5);
}

function drawEyes(H) {
  ellipse(150, 150, 40, H);
  ellipse(250, 150, 40, H);
}

function drawHead() {
  circle(200, 200, 300);
}

function drawMouth() {
  arc(200, 225, 200, 160, 0, 180, CHORD);
}

function drawTeeth(){
    fill("yellow");
  line(110, 260, 290, 260);
  line(200,225, 200, 300);
  line(150, 225, 150, 290);
  line(250,225,250,290);
  rect(200, 225, 50,35);
}


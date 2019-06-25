var s = 0;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  angleMode(DEGREES);
  background(185, 66, 26);
}

function draw() {
  noStroke();
  background(185, 66, 26, 20);

  push();
  translate(300, 300);
  rotate(-1.2*s);
  scale(sin(s));

  for (i = 0; i < 20; i++) {
    var x = i + frameCount / 200.0;
    var y = i + frameCount / 200.0;
    var z = 0;
    //stroke(0,(height/3)/2 -x);

    x = cos(s + z);
    x = map(x, -1, 1, -200, 200);
    y = sin(s + z);
    y = map(y, -1, 1, -200, 200);

    fill(176,170,120,20);
    ellipse(x, y, 100, 100);
    ellipse(y, x, 100, 100);
    ellipse(-x, -y, 100, 100);
    ellipse(-y, -x, 100, 100);

    z = z + 10;
  }
  pop();
  s++;
}
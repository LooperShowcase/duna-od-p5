let img;
function preload() {
  img = loadImage("Play.png");
}

function setup() {
  // The size of our starting canvas: 400px width, 400px height
  let cnv = createCanvas(400, 400);
  cnv.center();
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("black");
  translate(width / 2, height / 2);
  image(img, -50, -50, 100, 100);
  rotate(-90);
  let hrs = hour();
  let mns = minute();
  let scs = second();
  let mls = millis() / 100;
  // console.log(`${hrs}:${mns}:${scs}`);
  stroke("#5C6D70");
  strokeWeight(8);
  noFill();
  ellipse(0, 0, 300, 300);

  let secondAngle = map(scs, 0, 60, 0, 360);

  let minuteAngle = map(mns, 0, 60, 0, 360) + map(scs, 0, 60, 0, 6);

  let hourAngle = map(hrs % 12, 0, 12, 0, 360);

  let milliAngle = map(mls % 12, 0, 12, 0, 360);

  stroke("black");
  arc(0, 0, 250, 250, 0, secondAngle);
  arc(0, 0, 200, 200, 0, minuteAngle);
  arc(0, 0, 150, 150, 0, hourAngle);
  arc(0, 0, 150, 150, 0, milliAngle);

  push();
  rotate(secondAngle);
  stroke("#C49991");
  line(0, 0, 125, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("#8C2F39");
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke("#F3FFE1");
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(milliAngle);
  stroke("#F3FFE1");
  line(0, 0, 75, 0);
  stroke("#e5989b");
  // arc(0, 0, 250, 250, 0, milliAngle);
  pop();
}

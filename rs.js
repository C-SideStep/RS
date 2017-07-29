var ctx;
function setup() {
  createCanvas(1000, 500);
  background(0);
  ctx = document.getElementById("defaultCanvas0").getContext("2d");
  angleMode(DEGREES);
  ellipse(250, 250, 10 ,10)
}
function draw_cC(fC, speed){
  fill("black");
  rect(0,0,500,500);
  fill("red");
  stroke("red");
  ellipse(250 + sin(((fC) % 360*speed)) * 100, 250 + cos(((fC) % 360*speed))  * 100, 10 , 10);
  ellipse(250 + sin(90 + ((fC) % 360*speed)) * 100, 250 + cos(90 + ((fC) % 360*speed))  * 100, 10 , 10);
  ellipse(250 + sin(180 + ((fC) % 360*speed)) * 100, 250 + cos(180 + ((fC) % 360*speed))  * 100, 10 , 10);
  ellipse(250 + sin(270 + ((fC) % 360*speed)) * 100, 250 + cos(270 + ((fC) % 360*speed))  * 100, 10 , 10);
  line(250, 250,250 + sin(((fC) % 360*speed)) * 100, 250 + cos(((fC) % 360*speed))  * 100);
  line(250, 250,250 + sin(90 + ((fC) % 360*speed)) * 100, 250 + cos(90 + ((fC) % 360*speed))  * 100);
  line(250, 250,250 + sin(180 + ((fC) % 360*speed)) * 100, 250 + cos(180 + ((fC) % 360*speed))  * 100);
  line(250, 250,250 + sin(270 + ((fC) % 360*speed)) * 100, 250 + cos(270 + ((fC) % 360*speed))  * 100);
  fill("white")
  stroke("white")
  ellipse(250, 250, 10 ,10);
}
function draw() {
  draw_cC(frameCount, 4); 
  
  speed = 500;
  
  stroke("black");
  line(500, ((frameCount) % speed)*(500/speed), 1000, ((frameCount) % speed) * (500/speed));
  stroke("green");
  line(0, ((frameCount + 1) % speed)*(500/speed), 1000, ((frameCount + 1) % speed) * (500/speed));
  for(var i = 0;i <= 500;i++){
    c = ctx.getImageData(i, ((frameCount) % speed)*(500/speed), 1, 1).data
    stroke(c[0], c[1], c[2], c[3]);
    point(i + 500, ((frameCount) % speed)*(500/speed))
  }
  stroke("black");
}
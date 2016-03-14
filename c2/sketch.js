function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  fullscreen(true);
   background(0);
}

function draw() {
  noStroke();
  rect(mouseX,mouseY,20,20);
  
  
}
function mouseClicked(){
  fullscreen(true);
}
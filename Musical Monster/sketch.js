var creepy, g, bomby, buildings;
var fontExistence;
var fontGuakala;
var Paginas = 1;
var x;
var y;
var m;
var n;


function preload() {
  fontExistence = loadFont("assets/Existence-Light.otf");

  fontGuakala = loadFont("assets/Guakala.otf");

  creepy = loadAnimation("assets/creepy-01.png", "assets/creepy-08.png");
  g = loadAnimation("assets/g-17.png", "assets/g-24.png");
  bomby = loadAnimation("assets/bomby-09.png", "assets/bomby-16.png");
  buildings = loadAnimation("assets/buildings-01.png", "assets/buildings-08.png");

  //mySound = loadSound("assets/Zoom.mp3")

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // mySound.setVolume(0.8);
  //mySound.play();
  bug = new startingScreen();
  bug2 = new howToPlay();
}

function draw() {
  background(33, 45, 86);



  if (Paginas == 1) {
    bug.start();

  }
  if (mouseIsPressed == true && mouseX > x - 125 && mouseX < x + 125 && mouseY > y - 25 && mouseY < y + 25) {
    Paginas = 2;

  } else if (Paginas == 2) {

    bug2.instructions();


  }
  if (mouseIsPressed == true && mouseX > m - 125 && mouseX < m + 125 && mouseY > n - 25 && mouseY < m + 25) {

    Paginas = 1;
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

function startingScreen() {

  this.start = function() {

    x = width * 0.65;
    y = height * 0.9;

    fill(147, 200, 143);
    noStroke();
    rectMode(CENTER);
    rect(width * 0.35, height * 0.9, 250, 50);


    textSize(35);
    fill(33, 45, 86);
    textFont(fontGuakala);
    text("START GAME", width * 0.28, height * 0.92);

    fill(147, 200, 143);
    noStroke();
    rectMode(CENTER);
    rect(x, y, 250, 50);
    textSize(35);

    fill(33, 45, 86);
    textFont(fontGuakala);
    text("HOW TO PLAY", width * 0.58, height * 0.92);
    fill(56, 56, 57);
    noStroke();
    rect(width * 0.01, height * 0.65, 4000, 150);


    fill(255);
    stroke(255);
    rect(width * 0.01, height * 0.65, 80, 5);
    rect(width * 0.25, height * 0.65, 80, 5);
    rect(width * 0.5, height * 0.65, 80, 5);
    rect(width * 0.75, height * 0.65, 80, 5);
    rect(width * 0.95, height * 0.65, 80, 5);

    animation(buildings, width * 0.5, 350);
    animation(creepy, 300, 300);
    animation(g, width * 0.5, 300);
    animation(bomby, width * 0.75, 300);


    fill(255);
    textSize(60);
    textFont(fontExistence);
    text("MUSICAL", width * 0.45, height * 0.12);
    textSize(100);
    textFont(fontGuakala);
    text("MONSTER", width * 0.38, height * 0.25);
    fill(33, 45, 86);

  }
}



function howToPlay() {

  this.instructions = function() {

    m = width * 0.85;
    n = height * 0.9;

    background(33, 45, 86);

    textSize(33);

    fill(147, 200, 143);
    noStroke();
    rectMode(CENTER);
    rect(width * 0.5, height * 0.15, 250, 50);

    fill(33, 45, 86);
    textFont(fontGuakala);
    text("INSTRUCTIONS", width * 0.43, height * 0.18);



    fill(147, 200, 143);
    noStroke();
    rectMode(CENTER);
    rect(m, n, 250, 50);
    textSize(33);

    fill(33, 45, 86);
    textFont(fontGuakala);
    text("BACK TO MENU", width * 0.77, height * 0.92);
   
    fill(255);
    noStroke();
    rect(width * 0.5, height * 0.52, 900, 400);

  }
}
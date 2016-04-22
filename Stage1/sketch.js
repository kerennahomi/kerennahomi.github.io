var creepy
var Cs;
var Ds;
var Es;
var fontExistence;
var fontGuakala;
var img;
//var sonidos;



function preload() {

  creepy = createSprite(750, 500);
  creepy.addAnimation("normal", "imagenes/creepy-01.png", "imagenes/creepy-08.png");
  creepy.addAnimation("eat", "imagenes/eating-09.png", "imagenes/eating-16.png");
  creepy.setCollider("circle", 0, 0, 50);
  creepy.debug = true;


  fontExistence = loadFont("imagenes/Existence-Light.otf");

  fontGuakala = loadFont("imagenes/Guakala.otf");



}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // sonidos = ["imagenes/C_mezcla.mp3","imagenes/D_mezcla.mp3","imagenes/E_mezcla.mp3"];

  img = loadImage("imagenes/back.png");

  Cs = new Group();
  Ds = new Group();
  Es = new Group();


  for (var i = 0; i < 4; i++) {
    var newC = createSprite(i * width / 4, random(-height, 0));
    newC.addAnimation("normal", "imagenes/C-01.png", "imagenes/C-06.png");
    newC.velocity.y = random(1, 3);
    newC.setCollider("circle", 0, 0, 50);
    newC.debug = true;
    Cs.add(newC);
  }

  for (var i = 0; i < 4; i++) {
    var newD = createSprite(i * width / 4 + 100, random(-height, 0));
    newD.addAnimation("normal", "imagenes/D-07.png", "imagenes/D-12.png");
    newD.velocity.y = random(1, 3);
    Ds.add(newD);
  }
  for (var i = 0; i < 4; i++) {
    var newE = createSprite(i * width / 4 + 125, random(-height, 0));
    newE.addAnimation("normal", "imagenes/E-13.png", "imagenes/E-18.png");
    newE.velocity.y = random(1, 3);
    Es.add(newE);
  }

}

function draw() {
  background(37, 117, 111);
  image(img, 0, height * 0.15, img.width * 0.7, img.height * 0.7);

  creepy.position.x = mouseX;


  if (creepy.overlap(Ds, collect) || creepy.overlap(Es, collect) || creepy.overlap(Cs, collect)) {
    creepy.changeAnimation("eat");
  } else {
    creepy.changeAnimation("normal");
  }


  //if (Ds.overlap(creepy) || Es.overlap(creepy) || Cs.overlap(creepy))
  // creepy.changeAnimation("eat");
  //else
  //creepy.changeAnimation("normal");


  drawSprites(Cs);
  drawSprites(Ds);
  drawSprites(Es);
  drawSprites();


  noStroke();
  fill(255);
  textSize(70);
  textFont(fontGuakala);
  text("LEVEL 1", width * 0.4, height * 0.07);

  textSize(25);
  textFont(fontExistence);
  text("SCORE:", width * 0.85, height * 0.12);
  text("TIME:", width * 0.15, height * 0.12);



  //if(sonido=1){
  //sound.play();
  //}
}

function collect(collector, collected) {
  if (dist(collected.position.x, collected.position.y, collector.position.x, collector.position.y) > 30 && collector.position.y < collected.position.y) {
    collected.remove();
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
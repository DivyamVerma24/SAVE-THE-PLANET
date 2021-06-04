var alien;
var bg;
var alienImage;
var gaurdian;
var gaurdianImage

function preload() {
 bg = loadImage("BG2.jpg")
 alienImage = loadImage("alien.png")
 gaurdianImage = loadImage("Gaurdian.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  gaurdian = createSprite(displayWidth-100,displayHeight/2+100,40,40);
  gaurdian.addImage(gaurdianImage);
  gaurdian.scale = 0.2;
}

function draw() {
  background(bg);
  if(World.frameCount%60 === 0) {
     alien = createSprite(-10,random(30,800),20,20);
     alien.addImage(alienImage);
     alien.scale = 0.2;
     alien.velocityX =6; 
    }
  
    if(keyDown(UP_ARROW)) {
      gaurdian.y = gaurdian.y-5;
    }
    if(keyDown(DOWN_ARROW)) {
      gaurdian.y = gaurdian.y+5;
    }
    if(keyDown(RIGHT_ARROW)) {
      gaurdian.x = gaurdian.x+5;
    }
    if(keyDown(LEFT_ARROW)) {
      gaurdian.x = gaurdian.x-5;
    }

  drawSprites()
}
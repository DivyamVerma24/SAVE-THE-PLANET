var alien;
var bg;
var alienImage;
var warrior;
var warriorImage
var alienGroup;
var score = 0;
var blackhole;
var blackholeGroup;
var blackholeImage;
var gameState = "start";
var GameOverImage;
var GOsound;
var Ssound;

function preload() {
 bg = loadImage("BG2.jpg")
 alienImage = loadImage("alien.png")
 warriorImage = loadImage("warrior.png")
 GameOverImage = loadImage("GameOver.jpg")
 blackholeImage = loadImage("blackhole.png")
 GOsound = loadSound("GameOverSound.wav")
 Ssound = loadSound("Swordsound.wav")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  warrior = createSprite(displayWidth-100,displayHeight/2+100,40,40);
  warrior.addImage(warriorImage);
  warrior.scale = 0.2;

  alienGroup = new Group();
  blackholeGroup = new Group();

}

function draw() {
  background(bg);
  if(World.frameCount%80 === 0) {
     alien = createSprite(-10,random(30,800),20,20);
     alien.addImage(alienImage);
     alien.scale = 0.2;
     alien.velocityX =10; 
     alienGroup.add(alien);
    }

    if(frameCount%20 === 0) {
      blackhole = createSprite(random(300,800),-10,10,10);
      blackhole.addImage(blackholeImage);
      blackhole.scale = 0.2;
      blackhole.velocityY = 20;
      blackhole.shapeColor = "black";
      blackholeGroup.add(blackhole);
    }


    if(keyDown(UP_ARROW)) {
      warrior.y = warrior.y-5;
    }
    if(keyDown(DOWN_ARROW)) {
      warrior.y = warrior.y+5;
    }
    if(keyDown(RIGHT_ARROW)) {
      warrior.x = warrior.x+5;
    }
    if(keyDown(LEFT_ARROW)) {
      warrior.x = warrior.x-5;
    }

    if(alienGroup.isTouching(warrior)) {
      Ssound.play();
      alienGroup.destroyEach();
      score = score+20;
    } 
  
    if(blackholeGroup.isTouching(warrior)) {
      warrior.destroy();  
      background(GameOverImage);
      GOsound.play();
     alienGroup.setvelocityXEach(0);
      blackholeGroup.setvelocityXEach(0);
    }
  drawSprites();
  textSize(40);
  fill("white");
  text("SCORE  : " + score , 50,50);


}
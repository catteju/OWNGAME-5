var C1, C2, C3;
var O1, O2, O3, O4;
var D1, D2, D3, D4; 
var V1, V2, V3;
var OB1, OB2, OB3, OB4, OBImg;
var I1, I2, I3;
var letter, letter2, letter3;
var boundary1, boundary2, boundary3, boundary4;
var player, playerImg;
var corona1, corona2, corona3, corona4, corona1Img, corona2Img, corona3Img, corona4Img;
var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10;
var mask1, mask2, mask3, mask4, maskImg;
var m1 = [];
var m2 = [];
var m3 = [];
var m4 = [];
var winSound, pointSound, overSound;
var gameState = "play";
var score = 0;

function preload(){
  playerImg = loadImage("Doraemon 2.png");
  maskImg = loadImage("download.png");
  OBImg = loadImage("images.jpg");
  corona1Img = loadImage("Corona 1.png");
  corona2Img = loadImage("Corona 1.png");
  corona3Img = loadImage("Corona 1.png");
  corona4Img = loadImage("Corona 1.png");
  letter = loadImage("Wood.PNG");
  letter2 = loadImage("Wood 2.png");
  letter3 = loadImage("Wood 3.png");

  winSound = loadSound("Win.mp3");
  overSound = loadSound("Game Over.mp3");
  pointSound = loadSound("Mask.mp3");
}
function setup() {
  createCanvas(1900,800);

  player = createSprite(50, 50, 80, 80);
  player.shapeColor = "green"
  player.addImage("Tikki", playerImg);
  player.scale = 0.2;
  player.debug = false;
  player.setCollider("circle", 0, 0, 100);

  for(var i = 180; i < 1800; i = i + 110){
    if(i !== 950){
    mask1 = createSprite(i, 70, 50, 50);
    mask1.shapeColor = "blue";
    mask1.addImage("mask", maskImg);
    mask1.scale = 0.3;
    m1.push(mask1);
  }
}

  for(var i = 160; i < 750; i = i + 100){
    mask2 = createSprite(70, i, 50, 50);
    mask2.shapeColor = "blue";
    mask2.addImage("mask", maskImg);
    mask2.scale = 0.3;
    m2.push(mask2);
  }

  for(var i = 70; i < 750; i = i + 100){
    mask3 = createSprite(1820, i, 50, 50);
    mask3.shapeColor = "blue";
    mask3.addImage("mask", maskImg);
    mask3.scale = 0.3;
    m3.push(mask3);
  }

  for(var i = 70; i < 1850; i = i + 110){
    mask4 = createSprite(i, 750, 50, 50);
    mask4.shapeColor = "blue";
    mask4.addImage("mask", maskImg);
    mask4.scale = 0.3;
    m4.push(mask4);
  }

  C1 = createSprite(150, 350, 50, 400);
  C1.addImage("mask", letter);
  C1.scale = 0.7;
  C1.tint = "red";

  C2 = createSprite(250, 150, 250, 50);
  C2.addImage("mask", letter);
  C2.scale = 0.4;
  C2.rotation = -90;
  C2.tint = "red";

  C3 = createSprite(250, 550, 250, 50);
  C3.addImage("mask", letter);
  C3.scale = 0.4;
  C3.rotation = -90;
  C3.tint = "red";

  O1 = createSprite(690, 350, 50, 400);
  O1.addImage("mask", letter);
  O1.scale = 0.7;
  O1.tint = "red";

  O2 = createSprite(490, 350, 50, 400);
  O2.addImage("mask", letter);
  O2.scale = 0.7;
  O2.tint = "red";

  O3 = createSprite(590, 150, 250, 20);
  O3.addImage("mask", letter);
  O3.scale = 0.4;
  O3.rotation = -90;
  O3.tint = "red";

  O4 = createSprite(590, 550, 250, 20);
  O4.addImage("mask", letter);
  O4.scale = 0.4;
  O4.rotation = -90;
  O4.tint = "red";

  V1 = createSprite(944, 538, 50, 50);
  V1.addImage("mask", letter2);
  V1.scale = 0.7;
  V1.tint = "red";

  V2 = createSprite(884, 350, 50, 450);
  V2.addImage("mask", letter);
  V2.scale = 0.7;
  V2.rotation = -16;
  V2.tint = "red";

  V3 = createSprite(1004, 350, 50, 450);
  V3.addImage("mask", letter);
  V3.scale = 0.7;
  V3.rotation = 16;
  V3.tint = "red";

  I1 = createSprite(1304, 350, 50, 400);
  I1.addImage("mask", letter);
  I1.scale = 0.7;
  I1.tint = "red";

  I2 = createSprite(1300, 160, 250, 50);
  I2.addImage("mask", letter);
  I2.scale = 0.5;
  I2.rotation = -90;
  I2.tint = "red";

  I3 = createSprite(1300, 545, 250, 50);
  I3.addImage("mask", letter);
  I3.scale = 0.5;
  I3.rotation = -90;
  I3.tint = "red";
 
  D1 = createSprite(1554, 350, 50, 450);
  D1.addImage("mask", letter);
  D1.scale = 0.7;
  D1.tint = "red";

  D4 = createSprite(1634, 494, 50, 200);
  D4.addImage("mask", letter);
  D4.scale = 0.45;
  D4.rotation = 51;
  D4.tint = "red";

  D2 = createSprite(1634, 207, 50, 200);
  D2.addImage("mask", letter);
  D2.scale = 0.45;
  D2.rotation = -50;
  D2.tint = "red";

  D3 = createSprite(1728, 351, 50, 196);
  D3.addImage("mask", letter3);
  D3.scale = 0.5;
  D3.tint = "red";

  boundary1 = createSprite(1000, 10, 2100, 20);
  boundary1.shapeColor = "yellow";

  boundary2 = createSprite(10, 300, 20, 1000);
  boundary2.shapeColor = "yellow";

  boundary3 = createSprite(1000, 790, 2100, 20);
  boundary3.shapeColor = "yellow";

  boundary4 = createSprite(1890, 300, 20, 1000);
  boundary4.shapeColor = "yellow";

  corona1 = createSprite(410, 340, 40, 50);
  corona1.velocityY = +20;
  corona1.addImage("mask", corona1Img);
  corona1.scale = 0.07;
 
  corona2 = createSprite(770, 340, 40, 50);
  corona2.velocityY = -20;
  corona2.addImage("mask", corona2Img);
  corona2.tint = "orange";
  corona2.scale = 0.07;

  corona3 = createSprite(1140, 340, 40, 50);
  corona3.velocityY = + 20;
  corona3.addImage("mask", corona3Img);
  corona3.tint = "pink";
  corona3.scale = 0.07;

  corona4 = createSprite(1470, 340, 40, 50);
  corona4.velocityY = -20;
  corona4.addImage("mask", corona4Img);
  corona4.tint = "yellow";
  corona4.scale = 0.07;

  OB1 = createSprite(950, 90, 20, 100);
  OB1.rotationSpeed = 10;
  OB1.addImage("brick", OBImg);
  OB1.scale = 0.5;

  OB2 = createSprite(250, 680, 20, 180);
  OB2.addImage("brick", OBImg);
  OB2.rotationSpeed = -5;

  OB3 = createSprite(950, 90, 20, 100);
  OB3.rotationSpeed = -10;
  OB3.addImage("brick", OBImg);
  OB3.scale = 0.5;

  OB4 = createSprite(1650, 650, 20, 180);
  OB4.addImage("brick", OBImg);
  OB4.rotationSpeed = 5;
}

function draw() {
  background("black");

  if(gameState === "play"){

  fill("white");
  textSize(50);
  text("SCORE = " + score, 834, 650);

  if(keyDown("left")){
    player.x = player.x - 10;
  } 
  if(keyDown("right")){
    player.x = player.x + 10;
  } 
  if(keyDown("up")){
    player.y = player.y - 10;
  } 
  if(keyDown("down")){
    player.y = player.y + 10;
  } 

  for(var i = 0; i<m1.length; i++){
  if(player.isTouching(m1[i])){
     m1[i].destroy();
     score = score + 50;
     pointSound.play();
    } 
  }

  for(var i = 0; i<m2.length; i++){
    if(player.isTouching(m2[i])){
       m2[i].destroy();
       score = score + 50;
      } 
    }

  for(var i = 0; i<m3.length; i++){
    if(player.isTouching(m3[i])){
       m3[i].destroy();
       score = score + 50;
      } 
    }

    for(var i = 0; i<m4.length; i++){
      if(player.isTouching(m4[i])){
         m4[i].destroy();
         score = score + 50;
        } 
      }

  if(score === 2200){
    gameState = "win";
    
  }

  player.bounceOff(boundary1);
  player.bounceOff(boundary2);
  player.bounceOff(boundary3);
  player.bounceOff(boundary4);
  player.bounceOff(C1);
  player.bounceOff(C2);
  player.bounceOff(C3);
  player.bounceOff(O1);
  player.bounceOff(O2);
  player.bounceOff(V1);
  player.bounceOff(V2);
  //player.bounceOff(V3);
  player.bounceOff(I1);
  player.bounceOff(I2);
  player.bounceOff(I3);
  player.bounceOff(D1);
  player.bounceOff(D2);
  player.bounceOff(D3);
  player.bounceOff(D4);

  corona1.bounceOff(boundary1);
  corona1.bounceOff(boundary3);

  corona2.bounceOff(boundary1);
  corona2.bounceOff(boundary3);

  corona3.bounceOff(boundary1);
  corona3.bounceOff(boundary3);
  
  corona4.bounceOff(boundary1);
  corona4.bounceOff(boundary3);

  if(player.isTouching(corona1)||player.isTouching(corona2)||
  player.isTouching(corona3)||player.isTouching(corona4)
  ||player.isTouching(OB1)||player.isTouching(OB2)||player.isTouching(OB3)){
    gameState = "end";
  }
  
  drawSprites();
}
if(gameState === "end"){
  fill("red");
  stroke("white");
  textSize(200);
  text("GAME OVER", 400, 400);
  overSound.play();
  }

  if(gameState === "win"){
    fill("green");
    stroke("white");
    textSize(200);
    text("YOU WIN", 450, 400);
    winSound.play();
    }
}


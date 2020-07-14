
var ground
var banana
var bananaGroup
var Stone
var Monkey1,Monkey2,Monkey3,Monkey4,Monkey5,Monkey6,Monkey7,Monkey8,Monkey9,Monkey10
function preload(){
Monkey = loadAnimation("Monkey_01.png,Monkey_02.png,Monkey_03.png,Monkey_04.png,Monkey_05.png,Monkey_06.png,Monkey_07.png,Monkey_08.png,Monkey_09.png,Monkey_10.png");
  
  
  groundImage = loadImage("ground.jpg")
  bananaGroup = loadImage("Banana.png")
  Stone = loadImage("stone.jpg")
  jungleImage = loadImage("jungle.jpg")
}

function setup() {
  createCanvas(1000, 400);
  
  Monkey = createSprite(50,180,20,50);
  Monkey.addAnimation(Monkey_01.png,Monkey_02.png,Monkey_03.png);
  Monkey.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  
  StoneGroup = new Group();
  BananaGroup = new Group();
  
  
  
  
  
  
  
  
  
  
}

function draw() {
  background(255);
  
  if(keyDown("space")) {
    Monkey.velocityY = -10;
  }
  
  Monkey.velocityY = Monkey.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  Monkey.collide(invisibleGround);
  drawSprites();
  spawnClouds();
  spawnObstacles(); 
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var Stone = createSprite(600,165,10,40);
    stone.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand){
      case 1:
        stone.png.addImage(Stone);
        break;}
        
         
StoneGroup.add(stone)        
        
        
    
    //assign scale and lifetime to the obstacle           
    stone.scale = 0.5;
    stone.lifetime = 100;
  }
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    Banana.y = Math.round(random(80,120));
    Banana.addImage(cloudImage);
    Banana.scale = 0.5;
    Banana.velocityX = -3;
    
     //assign lifetime to the variable
    Banana.lifetime = 150;
    
    //adjust the depth
    Banana.depth = trex.depth;
    Monkey.depth = trex.depth + 1;
    BananaGroup.add(Banana)
  }
  
}
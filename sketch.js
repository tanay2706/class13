var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var count = 0;


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
  obstacle1Image = loadImage("obstacle1.png");
  obstacle2Image = loadImage("obstacle2.png");
  obstacle3Image = loadImage("obstacle3.png");
  obstacle4Image = loadImage("obstacle4.png");
  obstacle5Image = loadImage("obstacle5.png");
  obstacle6Image = loadImage("obstacle6.png");


}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}



function draw() {
  background(180);
  count =Math.round( frameCount / 4);
  text("score :" + count,500,35) 
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();

  spawnobstacle()


  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 200
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;    
    }
}


function spawnobstacle(){
  
  if(frameCount %100 === 0){
      obstacle = createSprite(600,165,10,40);
      obstacle.velocityX = -5;
      var number = Math.round(random(1,6))
      switch(number){
        case 1 : 
          obstacle.addImage(obstacle1Image);
          break;
        case 2 : 
          obstacle.addImage(obstacle2Image);
          break;
        case 3 : 
          obstacle.addImage(obstacle3Image);
          break;
        case 4 : 
          obstacle.addImage(obstacle4Image);
          break;
        case 5 : 
          obstacle.addImage(obstacle5Image);
          break;
        case 6 : 
          obstacle.addImage(obstacle6Image);
          break;

        default : break;
      }
    obstacle.scale = 0.5;
    obstacle.lifetime  = 120;  
    
  }
}

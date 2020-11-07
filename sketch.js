var arrow,arrow_running,edges;
var groundImage,ground;


function preload(){
 //load your images here 
groundImage = loadImage("background0.png");
 
  arrow_running=
    
  loadAnimation("arrow0.png");
  arrow_collided=loadImage("arrow_collided.png");
  
}

function setup() {
  background(220);
  createCanvas(600, 600);
  
  //creating ground.
  ground=createSprite(100,180,350,20);
  ground.addImage("ground",groundImage);
  ground.x=ground.width/2;
  ground.velocityX=-4;
  
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
  //create a arrow sprite.
  arrow = createSprite(50,160,20,50);
  arrow.addAnimation("running", arrow_running);
  arrow.scale = 0.5;
}

function draw() {
//set background colour
  background(225);
  
  //add code here
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
 
   
 // console.log(trex.depth);

  
  // jump when the space key is pressed
  if(keyDown("space")&& arrow.y >= 100) {
    arrow.velocityY = -10;
  }
  
  arrow.velocityY = arrow.velocityY + 0.8
   

  //stop arrow from falling down
  arrow.collide(invisibleGround);
  
     drawSprites();
}
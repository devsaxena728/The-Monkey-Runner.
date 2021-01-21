

var monkey , monkeyimage ;
var banana , bananaimage , bananagroup;
var bar , bargroup;
var score=0;
var gamestate="start";

var restart , restartimage;

var backgroundsprite ,  backgroundimage;

var bird , birdimage , birdgroup;
var cloud , cloudimage;
var stone , stoneimage;
var bird1;





function preload(){
  monkeyimage=loadImage("Monkey_Img.png")
  bananaimage=loadImage("Banana.png")
  restartimage=loadImage("901841-200.png")
  backgroundimage=loadImage(",2.jpg");
  birdimage=loadImage("Bird.gif")
  cloudimage=loadImage("Clouds_Image.png")
  stoneimage=loadImage("Stone.png");
  birdimage1=loadImage("Bird.gif")
}

function setup() {
         createCanvas(400,700);
  backgroundsprite=createSprite(200,200,400,1000)
  //backgroundsprite.scale=2

  backgroundsprite.addImage(backgroundimage);

  monkey=createSprite(200, 200, 50, 50);
  monkey.addImage(monkeyimage)
  monkey.scale=0.12
  //monkey.debug=true
  bargroup = new Group();
  bananagroup = new Group();
  birdgroup = new Group();

  restart=createSprite(210,210,50,50);
  restart.addImage(restartimage)
  restart.scale=0.4
  restart.visible=false;

  bird1=createSprite(50,50,10,10);
  bird1.addImage(birdimage)
  bird1.scale=0.35
  bird1.visible=false;
}

function draw() {
 // background("pink"); 
  
  if(gamestate==="start"){
    drawSprites()
    bird1.visible=true;
    //Text Before Starting The Game !!
    textSize(10)
    fill(mouseX,0,mouseY);
    text("Press S to Start",150,150);
    text("Hey There , My Name Is Mojo I am Monkey and Here is my friend Jojo ",20,200)
    text("We are too hungry So I found a dozen of Banana so ",20,230) 
    text("I decide to half it 6-6 we'ill both can eat",20,260);
    text("But Instead of just cutting half He just take all the banana and ran away",20,290);   
    monkey.x=300;
  monkey.y=500;
  monkey.scale=0.2





    if(keyDown("s")){
      gamestate="play";
      monkey.x=200;
      monkey.y=200;
    }

  }



  if(gamestate==="play"){

  bird1.visible=false;
  monkey.velocityY=5;
  monkey.scale=0.12;
if(keyDown("left_Arrow")){
  monkey.x=monkey.x-5;
}
//Right Command
if(keyDown("right_Arrow")){
  monkey.x=monkey.x+5
}



if(keyDown("space")){
  monkey.velocityY=-2       
} 
if(bargroup.isTouching(monkey )){
  monkey.velocityY=bar.velocityY;
  } 
if(bananagroup.isTouching(monkey)){
  bananagroup.destroyEach()
  score=score+1;
}


if(monkey.y>displayHeight || monkey.x>400|| birdgroup.isTouching(monkey)){
  gamestate="end";
  bananagroup.destroyEach();
  birdgroup.destroyEach();
  bargroup.destroyEach();

}
  enemyelements();
  Banana();
  Bars();
  drawSprites();

  textSize(20);
  fill("black")
  text("Bananas :"+score ,270,30)
}

if(gamestate==="end"){
  drawSprites()
  textSize(30)
  fill("black")
  text("GAMEOVER",130,150);
  text("Banana:"+score,150,300)
  restart.visible=true;
  monkey.x=300;
  monkey.y=500;
  monkey.scale=0.2
  bird1.visible=true;
  


  if(mousePressedOver(restart)){
    gamestate="start";
    restart.visible=false;
    score=0;
  }  
}



}

function Bars (){
  if(frameCount%80===0){
    bar=createSprite(200,50,70,5)
    bar.addImage(stoneimage)
    bar.scale=0.1
    bar.velocityY=+4;
    bar.lifetime=200;
    bar.x=Math.round(random(10,300))
   // bar.width=Math.round(random(50,100))  
    bargroup.add(bar);  
    //bar.debug=true
    bar.setCollider("circle",0,0,20);
    //bar.depth=monkey.depth-2;
  }

  
}
function Banana(){
  if(frameCount%160===0){
    banana=createSprite(200,200,15,15)
    banana.addImage(bananaimage)
    banana.scale=0.09;
    banana.velocityY=4
    banana.x=Math.round(random(10,350))
    banana.lifetime=200;
    bananagroup.add(banana);
  }
}

function enemyelements(){
  if(frameCount<1000){
    if(frameCount%150===0){
     bird=createSprite(0,Math.round(random(50,500)),10,10);
     bird.addImage(birdimage1);
     bird.lifetime=200;
     bird.velocityX=4;
     bird.scale=0.25
     birdgroup.add(bird);
    }


  }
}
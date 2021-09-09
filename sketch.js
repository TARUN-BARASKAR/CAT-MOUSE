var cat,catImg;
var mouse,mouseImg1,catImg1;
var garden,gardenImg;



function preload() {
    //load the images here

catImg = loadImage("images/cat1.png");
mouseImg = loadImage("images/mouse1.png");
gardenImg = loadImage("images/garden.png");

catImg1 = loadAnimation("images/cat2.png","images/cat3.png");
mouseImg1 = loadAnimation("images/mouse2.png","images/mouse3.png");

catImg2 = loadImage("images/cat4.png");
mouseImg2 = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here


cat = createSprite(800,600,50,50);
cat.addImage("cat",catImg);
cat.scale = 0.2;
//cat.debug = true;
cat.setCollider("circle",0,0,500);


mouse = createSprite(100,600,50,50);
mouse.addImage("mouse",mouseImg);
mouse.scale = 0.2;
//mouse.debug = true;
mouse.setCollider("circle",0,0,500);

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<mouse.width/2-cat.width/2){

      cat.velocityX  = 0;
      cat.addAnimation("cat",catImg2);
      cat.x = 250;
      mouse.addAnimation("mouse",mouseImg2);
       
     
     }
       
       

    running();

    drawSprites();
}


function running(){

  //For moving and changing animation write code here
  if(keyDown("LEFT_ARROW")){

    cat.velocityX = -5;
    cat.addAnimation("cat",catImg1);
    mouse.addAnimation("mouse",mouseImg1);



  }


}

var dora1,backgroundimg,dora1ani,background1,mouse,mouseani,g1,g2,g3,g4,g5
var mouseGroup,gadgetGroup,score=0,sound



function preload() {
backgroundimg=loadImage("images/city.png")
dora1ani=loadAnimation("images/DORE1.png","images/DORE2.png","images/DORE3.png","images/DORE4.png","images/DORE5.png","images/DORE6.png")
 mouseani=loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png","images/mouse5.png","images/mouse6.png","images/mouse7.png") 
g1=loadImage("images/g1.png")
g2=loadImage("images/g2.png")
g3=loadImage("images/g3.png")
g4=loadImage("images/g4.png")
g5=loadImage("images/g5.png")
sound=loadSound("Sounds/sound dora.mp3")
}

function setup(){
 
  createCanvas(1300,550);
  
  background1=createSprite(650,275)
  background1.addImage(backgroundimg)
  background1.scale=1.4
  dora1=createSprite(100,470)
  dora1.addAnimation("doraami",dora1ani)
  dora1.scale=2

  mouseGroup= new Group();
  gadgetGroup=new Group();


  sound.loop();
}

function draw(){
 // background(backgroundimg);
 background1.velocityX=-(4+score/100);
 if(background1.x<0){
   background1.x=650
 }
  spawnMouse();
  
  if(keyDown("space")){
    spawnGadgets();
  }

  for(var i=0;i<gadgetGroup.length;i++){
    for(var j=0;j<mouseGroup.length;j++){
      if(gadgetGroup[i]!=undefined && mouseGroup[j]!=undefined){
        if(gadgetGroup[i].isTouching(mouseGroup[j])){
          mouseGroup[j].destroy();
          score=score+10
          gadgetGroup[i].destroy();
        }

      }
  
    }
  }

  
   
    drawSprites();
    fill("red")
    textSize(30)
  text("Score :" +score,100,50)
  
}


function spawnMouse() {
  if(frameCount%100===0){
    mouse=createSprite(1350,485)
    mouse.addAnimation("mouse",mouseani);
    mouse.velocityX=-(4+score/100)
    
    mouse.scale=0.5
    mouseGroup.add(mouse);
    mouse.lifetime=350
  }
  
}
function spawnGadgets() {
  console.log('insideFunction')
 if(frameCount%5===0){
  console.log('insideCondition')
    var gadget=createSprite(dora1.x,dora1.y);
    gadget.velocityX=4

    var randomNum=Math.round(random(1,5))
    switch(randomNum){
      case 1:gadget.addImage(g1)
              gadget.scale=0.5   
               break;
      case 2:gadget.addImage(g2)
               break;
      case 3:gadget.addImage(g3)
               break;    
      case 4:gadget.addImage(g4)
               break;         
      case 5:gadget.addImage(g5)
               break;       

       

    }
    gadgetGroup.add(gadget);
    gadget.lifetime=350

  }
  
}





var movingRect,fixedRect;

function setup() {
  createCanvas(1200,800);
 fixedRect=createSprite(580, 400, 50, 120);
 movingRect=createSprite(800,250,120,50);
 fixedRect.shapeColor="blue";
 movingRect.shapeColor="blue";

}

function draw() {
  background(255,255,255);  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 
  && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
  && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 
  && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
movingRect.shapeColor="orange";
fixedRect.shapeColor="orange";
}
else{
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";
}
  drawSprites();
}
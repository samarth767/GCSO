var car, wall;

function setup() {
  createCanvas(1600,400);
  car=createSprite(400, 60, 50, 50);
  car.shapeColor="white";
  wall=createSprite(1200,60,10,700);
  wall.shapeColor="black";
  car.velocityX=55; 

}

function draw() {
  background("green");

    if(wall.x-car.x === wall.width/2+car.width/2 ){
      car.shpaeColor=color(0);
      car.velocityX=0;
    }
  
  drawSprites();
 
} 



var car, wall
var speed, weight 
var thickness

function setup() {
  createCanvas(2000,400);
  speed = random(223,321);
  weight = random(30,52);
  car = createSprite(50,200,50,50);
  thickness = random(22,83);
  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = "black";
  car.velocityX = speed;

}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(hasCollided(car,wall)){
    car.velocityX=0;
    var deformation = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
    if(deformation<10){
      wall.shapeColor = "green";
    }
    if(deformation>10){
      wall.shapeColor = "red";
    }


  }
}
function hasCollided(lbullet, lwall){
  if(wall.x-car.x < (car.width+wall.width)){
    return true
  }
  return false
}
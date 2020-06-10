
var car1,wall1;
var car2,wall2;
var car3,wall3;
var speed;
var weight;


function setup() {

  car1 = createSprite(360,135,20,20);
  wall1 = createSprite(40,135,20,60);

  car2 = createSprite(360,200,20,20);
  wall2 = createSprite(40,200,20,60);

  car3 = createSprite(360,265,20,20);
  wall3 = createSprite(40,265,20,60);

}

function draw() {
  
  speed = random(55,90);
  weight1 = random(400,1500);

  car1.velocityX = speed1;
  car2.velocityX = speed1;
  car3.velocityX = speed1;
  
  createCanvas(800,400);

  background(255,255,255);  

  isTouching();

  drawSprites();
}

function isTouching(){
  if(wall1.x-car1.x < (car1.width + wall1.width)/2){
    car1.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation>180){
      car1.shapecolour = (255,0,0);
    }
    if(deformation<180 && deformation>100){
      car1.shapecolour = (230,230,0);
    }
    if(deformation<100){
      car1.shapecolour = (0,255,0);
    }
  }

  if(wall1.x-car2.x < (car2.width + wall1.width)/2){
    car2.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation>180){
      car2.shapecolour = (255,0,0);
    }
    if(deformation<180 && deformation>100){
      car2.shapecolour = (230,230,0);
    }
    if(deformation<100){
      car2.shapecolour = (0,255,0);
    }
  }

  if(wall1.x-car3.x < (car3.width + wall1.width)/2){
    car3.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation>180){
      car3.shapecolour = (255,0,0);
    }
    if(deformation<180 && deformation>100){
      car3.shapecolour = (230,230,0);
    }
    if(deformation<100){
      car3.shapecolour = (0,255,0);
    }
  }
}
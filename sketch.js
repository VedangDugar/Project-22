var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)

  bullet = createSprite(50,200,40,25);
  bullet.shapeColor = color(250,250,250);
  bullet.velocityX = speed;

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background(0,0,0);  

  
  if(bullet.collide(wall)){

    var deformation = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
    bullet.velocityX = 0;

    if(deformation<10){
      bullet.shapeColor = color(0,255,0);
    }

    if(deformation>= 10){
      bullet.shapeColor = color(255,0,0);

}
  }

  drawSprites();

}

